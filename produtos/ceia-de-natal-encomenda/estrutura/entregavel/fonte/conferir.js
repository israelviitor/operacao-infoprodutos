// Confere todas as contas do entregável e grava a memória de cálculo (../contas-conferidas.md).
// Uso: node conferir.js   (sai com erro se qualquer conta falhar)
const fs = require('fs');
const path = require('path');
const { tudo, P, R, TAMANHOS } = require('./contas');

const t = tudo();
const erros = [];
const ok = (cond, msg) => { if (!cond) erros.push(msg); };

ok(t.receitas.length === 50, `esperava 50 receitas, li ${t.receitas.length}`);
t.receitas.forEach((r, i) => ok(r.n === i + 1, `numeração fora de ordem em ${r.n}`));
ok(t.receitas[6].nome === 'Pernil assado de Natal', 'a receita 07 tem de ser o pernil');
ok(!t.receitas.some((r) => /bacalhau/i.test(r.nome + r.ingredientes.join(' '))), 'bacalhau não entra');

for (const r of t.receitas) {
  const d = R[r.n];
  ok(r.ingredientes.length > 0 && r.passos.length > 0, `${r.n}: sem ingredientes ou passos`);
  // recalcula o custo por fora, item a item
  const resto = d.itens.reduce((s, it) => s + (it.length === 3 ? (ok(P[it[2]] !== undefined, `${r.n}: preço "${it[2]}" não existe`), it[1] * P[it[2]]) : it[1]), 0);
  let ant = 0;
  for (const c of r.contas) {
    const tag = `${String(r.n).padStart(2, '0')} ${r.nome} (${c.pessoas} p.)`;
    const carne = d.principal ? c.principalKg * P[d.principal[2]] : 0;
    ok(c.custo === Math.ceil(carne + resto * c.mult - 1e-9) || c.custo === Math.ceil(carne + resto * c.mult), `${tag}: custo ${c.custo} ≠ ${carne + resto * c.mult}`);
    ok(c.lucro === c.preco - c.custo, `${tag}: lucro ≠ preço − custo`);
    const k = c.preco / c.custo;
    ok(k >= 2.5 - 1e-9 && k <= 3 + 1e-9, `${tag}: preço/custo = ${k.toFixed(2)} fora de 2,5 a 3`);
    ok(c.preco % 5 === 0, `${tag}: preço ${c.preco} não é redondo`);
    ok(c.minimo === Math.ceil(c.custo * 2.5), `${tag}: preço mínimo errado`);
    ok(c.minimo <= c.preco, `${tag}: preço abaixo do mínimo`);
    ok(c.custo >= ant, `${tag}: custo menor que o do tamanho anterior`);
    if (d.principal) {
      ok(c.principalKg + 0.011 >= d.principal[1] * c.pessoas, `${tag}: carne abaixo de ${d.principal[1]} kg por pessoa`);
      if (c.pecas) { const cada = c.principalKg / c.pecas; ok(cada >= d.principal[4] - 1e-9 && cada <= d.principal[3] + 1e-9, `${tag}: ave de ${cada} kg não existe`); }
      ok(Math.abs(c.mult - Math.max(0.25, Math.round(c.principalKg / (d.principal[1] * d.base) * 4) / 4)) < 1e-9, `${tag}: tempero não segue o peso`);
    }
    else ok(c.mult * d.base >= c.pessoas, `${tag}: a receita não rende para ${c.pessoas} pessoas`);
    ant = c.custo;
  }
}

for (const k of t.kits) {
  const soma = k.linhas.reduce((s, l) => s + l.custo, 0);
  ok(soma === k.custo, `${k.nome}: custo ${k.custo} ≠ soma das fichas ${soma}`);
  for (const l of k.linhas) {
    const c = t.receitas[l.n - 1].contas.find((x) => x.pessoas === l.tamanho);
    ok(c && c.custo === l.custo, `${k.nome}: item ${l.n} não bate com a ficha`);
  }
  ok(k.lucro === k.preco - k.custo, `${k.nome}: lucro`);
  const r = k.preco / k.custo;
  ok(r >= 2.5 && r <= 3, `${k.nome}: preço/custo ${r.toFixed(2)} fora de 2,5 a 3`);
}
const k68 = t.kits.find((k) => k.pessoas === '6 a 8');
ok(k68.preco === 299, 'o kit 6 a 8 tem de custar R$ 299 (preço usado na página)');
ok(k68.custo * 10 >= 1000 && k68.custo * 10 <= 1200, `10 kits de 6 a 8 custam R$ ${k68.custo * 10}: a página diz R$ 1.000 a R$ 1.200`);
const sobra = 2990 - k68.custo * 10;
ok(sobra >= 1750 && sobra <= 2000, `10 kits deixam R$ ${sobra}: a página diz cerca de R$ 1.800 a R$ 2.000`);

// ---------- memória de cálculo
const brl = (v) => 'R$ ' + (Number.isInteger(v) ? v : v.toFixed(2).replace('.', ','));
let md = `# Memória de cálculo · Ceia que Vende\n\n> Gerada por \`fonte/conferir.js\` em ${new Date().toISOString().slice(0, 10)}. ${erros.length ? '**HÁ ERROS**' : 'Todas as contas conferidas: nenhum erro.'}\n`;
md += `> Regras: custo = carne (kg × preço) + demais ingredientes × receitas; custo arredondado para cima. Preço = custo × 2,7, arredondado (até R$ 500, múltiplo de 5; acima, de 10) e sempre entre 2,5 e 3 vezes o custo. Preço mínimo = custo × 2,5. Lucro antes de gás, embalagem e entrega.\n`;
md += `> Preços de referência (dez/2025): carnes do dossiê (chester R$ 34/kg, peru R$ 32/kg, pernil R$ 25/kg dentro de R$ 18–40, tender R$ 60/kg dentro de R$ 54–80); demais, preço médio de supermercado estimado.\n\n`;
md += `## Kits\n| Kit | Pratos (ficha · tamanho · custo) | Custo | Preço | Lucro | ×\n|---|---|---|---|---|---|\n`;
for (const k of t.kits) md += `| ${k.nome} | ${k.linhas.map((l) => `${l.n} ${l.nome} · ${l.tamanho} p. · ${brl(l.custo)}`).join('<br>')} | ${brl(k.custo)} | ${brl(k.preco)} | ${brl(k.lucro)} | ${(k.preco / k.custo).toFixed(2)} |\n`;
md += `\n## Receitas\n| Nº | Receita | Demais ingredientes (receita-base) | 4 p. custo/preço/lucro | 6 p. | 10 p. | 20 p. |\n|---|---|---|---|---|---|---|\n`;
for (const r of t.receitas) md += `| ${r.n} | ${r.nome} | ${brl(r.custoResto)}${R[r.n].principal ? ` + ${R[r.n].principal[0].toLowerCase()} ${R[r.n].principal[1]} kg/pessoa a ${brl(P[R[r.n].principal[2]])}/kg` : ''} | ${r.contas.map((c) => `${c.custo}/${c.preco}/${c.lucro}`).join(' | ')} |\n`;
fs.writeFileSync(path.join(__dirname, '..', 'contas-conferidas.md'), md);

if (erros.length) { console.error(erros.join('\n')); process.exit(1); }
console.log(`ok: 50 receitas × ${TAMANHOS.length} tamanhos e ${t.kits.length} kits conferidos`);
