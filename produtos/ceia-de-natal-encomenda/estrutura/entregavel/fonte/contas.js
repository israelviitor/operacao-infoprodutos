// Lê as 50 receitas (receitas-50.md) e calcula as 3 contas de cada uma para 4, 6, 10 e 20 pessoas.
const fs = require('fs');
const path = require('path');
const { P, R } = require('./dados-custos');

const TAMANHOS = [4, 6, 10, 20];
const MARKUP = 2.7; // preço = custo × 2,7 (faixa de mercado 2,5 a 3)
const MINIMO = 2.5; // preço mínimo = custo × 2,5

// ---------- leitura do texto das receitas
function lerReceitas() {
  const md = fs.readFileSync(path.join(__dirname, '..', 'receitas-50.md'), 'utf8');
  const antes = md.split('## Antes de começar')[1].split('\n---')[0];
  const regrasGerais = antes.split('\n').filter((l) => l.startsWith('- ')).map((l) => l.slice(2));
  const medidas = (md.match(/^> (Medidas:.*)$/m) || [])[1];
  const receitas = [];
  let cat = null;
  for (const bloco of md.split(/\n(?=## |### )/)) {
    if (bloco.startsWith('## ') && !bloco.startsWith('## Antes')) cat = bloco.slice(3).split('\n')[0].trim();
    if (!bloco.startsWith('### ')) continue;
    const [, num, nome] = bloco.match(/^### (\d+) · (.+)$/m);
    const [, rende, tempo] = bloco.match(/\*\*Rende:\*\* (.+?) · \*\*Tempo:\*\* (.+)$/m);
    const ing = bloco.split('**Ingredientes**')[1].split('**Modo de preparo**')[0];
    const prep = bloco.split('**Modo de preparo**')[1];
    const ingredientes = ing.split('\n').filter((l) => l.startsWith('- ')).map((l) => l.slice(2).trim());
    // passos: "1. ..." ; linhas recuadas continuam o passo anterior
    const passos = [];
    for (const l of prep.split('\n')) {
      if (/^\d+\. /.test(l)) passos.push(l.replace(/^\d+\. /, '').trim());
      else if (/^\s{2,}\S/.test(l) && passos.length) passos[passos.length - 1] += '\n' + l.trim();
    }
    receitas.push({ n: +num, nome: nome.trim(), cat, rende, tempo: tempo.trim(), ingredientes, passos });
  }
  return { receitas, regrasGerais, medidas };
}

// ---------- números
const r2 = (v) => Math.round(v * 100) / 100;
const multiplo = (n, base) => Math.max(0.5, Math.ceil((n / base) * 4 - 1e-9) / 4); // em quartos, arredondado para cima, mínimo ½
function precoDe(custo) {
  // custo × 2,7 arredondado: até R$ 500, para múltiplo de 5; acima, para múltiplo de 10.
  const bruto = custo * MARKUP;
  const passo = bruto >= 500 ? 10 : 5;
  let p = Math.round(bruto / passo) * passo;
  if (p / custo < MINIMO) p += passo;
  if (p / custo > 3) p -= passo;
  return p;
}
const custoItens = (itens) => r2(itens.reduce((s, it) => s + (it.length === 3 ? it[1] * P[it[2]] : it[1]), 0));
const fracao = (m) => {
  const int = Math.floor(m), q = Math.round((m - int) * 4);
  const f = ['', '¼', '½', '¾'][q];
  if (!int) return f + ' receita';
  return (f ? `${int} e ${f}` : `${int}`) + (int === 1 && !f ? ' receita' : ' receitas');
};
const kg = (v) => (v < 1 ? `${Math.round(v * 1000)} g` : `${v.toFixed(v % 1 ? (v * 10 % 1 ? 2 : 1) : 0).replace('.', ',')} kg`);

function contasDe(n) {
  const d = R[n];
  if (!d) throw new Error('sem dados de custo para a receita ' + n);
  const resto = custoItens(d.itens);
  return TAMANHOS.map((pessoas) => {
    // assados: a carne é exata por pessoa e o tempero segue a proporção (em quartos); demais pratos: receitas arredondadas para cima
    let mult = multiplo(pessoas, d.base);
    let custo, principalKg = null, vasilhas, pecas = null;
    if (d.principal) {
      const [, kgPorPessoa, chave, kgPorVas, minKg = 0] = d.principal;
      const precisa = kgPorPessoa * pessoas;
      if (minKg) {
        // ave inteira: compra-se a peça inteira (de minKg a kgPorVas cada), 1 por assadeira
        pecas = Math.ceil(precisa / kgPorVas - 1e-9);
        principalKg = r2(Math.max(precisa, pecas * minKg));
      } else principalKg = r2(precisa);
      // o tempero segue o peso da carne (receita-base = kgPorPessoa × base), em quartos
      mult = Math.max(0.25, Math.round((principalKg / (kgPorPessoa * d.base)) * 4) / 4);
      custo = principalKg * P[chave] + resto * mult;
      vasilhas = pecas || Math.ceil(principalKg / kgPorVas - 1e-9);
    } else {
      custo = resto * mult;
      vasilhas = Math.ceil(mult / d.vas[1] - 1e-9);
    }
    custo = Math.ceil(custo); // arredonda o custo para cima, em reais
    const preco = precoDe(custo);
    return { pessoas, mult, principalKg, pecas, vasilhas, custo, preco, lucro: preco - custo, minimo: Math.ceil(custo * MINIMO) };
  });
}

// ---------- kits (soma das fichas, no tamanho indicado)
const KITS = [
  { nome: 'Kit 4 pessoas', pessoas: '4', itens: [[7, 4], [15, 4], [21, 4], [39, 4]] },
  { nome: 'Kit 6 a 8 pessoas', pessoas: '6 a 8', destaque: true, precoFixo: 299, itens: [[7, 6], [15, 6], [21, 6], [37, 6]] },
  { nome: 'Kit 10 pessoas', pessoas: '10', itens: [[7, 10], [15, 10], [21, 10], [18, 10], [37, 10]] },
  { nome: 'Kit 20 pessoas', pessoas: '20', itens: [[7, 20], [15, 20], [21, 20], [18, 20], [17, 20], [37, 20], [39, 20]] },
];
function kits(receitas) {
  const porN = Object.fromEntries(receitas.map((r) => [r.n, r]));
  return KITS.map((k) => {
    const linhas = k.itens.map(([n, t]) => {
      const c = contasDe(n).find((x) => x.pessoas === t);
      return { n, nome: porN[n].nome, tamanho: t, custo: c.custo, mult: c.mult, principalKg: c.principalKg, principal: R[n].principal };
    });
    const custo = linhas.reduce((s, l) => s + l.custo, 0);
    const preco = k.precoFixo || precoDe(custo);
    return { ...k, linhas, custo, preco, lucro: preco - custo, sinal: preco / 2 };
  });
}

function tudo() {
  const base = lerReceitas();
  const receitas = base.receitas.map((r) => ({ ...r, dados: R[r.n], contas: contasDe(r.n), custoResto: custoItens(R[r.n].itens) }));
  return { ...base, receitas, kits: kits(receitas) };
}

module.exports = { tudo, TAMANHOS, MARKUP, MINIMO, precoDe, fracao, kg, P, R, custoItens };
