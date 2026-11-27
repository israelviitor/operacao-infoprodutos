// Gera os PDFs das receitas: Básico (50 receitas) e Premium (50 fichas com as 3 contas).
// Uso: NODE_PATH=$(npm root -g) node gerar-receitas.js [basico|premium]
const fs = require('fs');
const path = require('path');
const { tudo, fracao, kg } = require('./contas');
const { md, esc, doc, topo, capa, brl } = require('./estilo');
const { pdf, fechar } = require('./pdf');

const FINAL = path.join(__dirname, '..', 'final');
const HTML = path.join(__dirname, 'html');
fs.mkdirSync(FINAL, { recursive: true });
fs.mkdirSync(HTML, { recursive: true });

const t = tudo();
const CATS = [
  ['ASSADOS', 'Assados', 'O prato principal da ceia: é ele que fecha o pedido.'],
  ['ACOMPANHAMENTOS', 'Acompanhamentos', 'Arroz, farofas, saladas e molhos que completam o kit.'],
  ['SOBREMESAS', 'Sobremesas', 'O doce que o cliente pede junto e que aumenta o valor do pedido.'],
];
const nomeCat = (c) => CATS.find((x) => x[0] === c)[1];
const num = (n) => String(n).padStart(2, '0');
const sing = { Assados: 'ASSADO', Acompanhamentos: 'ACOMPANHAMENTO', Sobremesas: 'SOBREMESA' };

const ingHtml = (r) => `<ul class="ing${r.ingredientes.length > 11 ? ' duas' : ''}">${r.ingredientes.map((i) => `<li>${md(esc(i))}</li>`).join('')}</ul>`;
const passosHtml = (r) => `<ol class="passos">${r.passos.map((p) => `<li>${md(esc(p)).replace(/\n/g, '<br>')}</li>`).join('')}</ol>`;
const chips = (r, extra = '') => `<div class="chips"><span class="chip"><b>Rende:</b> ${esc(r.rende)}</span><span class="chip"><b>Tempo:</b> ${esc(r.tempo)}</span>${extra}</div>`;

function antesDeComecar(plano) {
  return `<section class="pag">${topo('CEIA QUE VENDE', plano)}
  <h1>Antes de começar</h1>
  <p class="sub">Leia 1 vez. Vale para todas as receitas e protege você e o seu cliente.</p>
  <ul class="check" style="margin-top:5mm">${t.regrasGerais.map((l) => `<li>${md(esc(l))}</li>`).join('')}</ul>
  <div class="box verde"><b>Medidas usadas:</b> ${esc(t.medidas.replace(/^Medidas: /, ''))}</div>
  <div class="box"><b>Venda de comida e a sua prefeitura.</b> As regras para vender alimento feito em casa mudam de cidade para cidade. Antes de abrir as encomendas, pergunte à vigilância sanitária do seu município o que vale para você.</div>
  </section>`;
}

function indice(plano) {
  let h = `<section class="pag">${topo('CEIA QUE VENDE', plano)}<h1>As 50 receitas</h1><p class="sub">Toque no nome para ir direto à receita.</p>`;
  for (const [c, nome] of CATS) {
    h += `<h3>${nome}</h3><div class="indice duas">${t.receitas.filter((r) => r.cat === c).map((r) => `<a class="linha" href="#r${r.n}"><span class="n">${num(r.n)}</span><span>${esc(r.nome)}</span></a>`).join('')}</div>`;
  }
  return h + '</section>';
}

const abertura = ([c, nome, frase]) => `<section class="abre"><div class="bonus-tag" style="align-self:flex-start">${t.receitas.filter((r) => r.cat === c).length} RECEITAS</div><h1>${nome}</h1><p class="sub">${frase}</p>
  <div class="lista-cat">${t.receitas.filter((r) => r.cat === c).map((r) => `<div><b>${num(r.n)}</b> ${esc(r.nome)}</div>`).join('')}</div></section>`;

// ---------- Básico
function paginaBasico(r) {
  return `<section class="pag" id="r${r.n}">${topo('CEIA QUE VENDE', `RECEITA ${num(r.n)} · ${sing[nomeCat(r.cat)]}`)}
  <h1>${esc(r.nome)}</h1>${chips(r)}
  <h2>Ingredientes</h2>${ingHtml(r)}
  <h2>Modo de preparo</h2>${passosHtml(r)}</section>`;
}

function basico() {
  let h = capa({ sub: '50 receitas de Natal para vender por encomenda.', tag: 'BÁSICO' });
  h += `<section class="pag">${topo('CEIA QUE VENDE', 'BÁSICO')}<h1>Bem-vinda à sua ceia que vende</h1>
  <p class="sub">Aqui estão as 50 receitas de Natal que mais saem por encomenda: assados, acompanhamentos e sobremesas.</p>
  <div class="etapas" style="margin-top:6mm">
  <div class="etapa"><div class="num">1</div><div><h3>Escolha o seu cardápio</h3><p>Pegue 1 assado, 2 ou 3 acompanhamentos e 1 sobremesa. É o que o cliente espera de uma ceia.</p></div></div>
  <div class="etapa"><div class="num">2</div><div><h3>Teste antes de vender</h3><p>Faça em casa o prato que você menos domina. Cliente de Natal não perdoa assado cru nem pudim que não desenforma.</p></div></div>
  <div class="etapa"><div class="num">3</div><div><h3>Divulgue e anote cada pedido</h3><p>Mande o cardápio no WhatsApp, combine data e horário de entrega e anote tudo num só lugar.</p></div></div>
  </div>
  <div class="box"><b>Como usar no celular:</b> abra o índice e toque no nome da receita. Para imprimir, cada receita começa numa página nova.</div></section>`;
  h += antesDeComecar('BÁSICO') + indice('BÁSICO');
  for (const cat of CATS) {
    h += abertura(cat);
    for (const r of t.receitas.filter((x) => x.cat === cat[0])) h += paginaBasico(r);
  }
  return doc('Ceia que Vende · Básico', h);
}

// ---------- Premium
function contaQuantidade(r) {
  const d = r.dados;
  const vasNome = d.principal ? d.vasP : d.vas[0];
  const cabec = d.principal
    ? `<tr><th>Pessoas</th><th class="num">${esc(d.principal[0])}</th><th>Tempero e demais ingredientes</th><th>${vasNome === 'assadeira' ? 'Assadeiras' : 'Panelas'}</th></tr>`
    : `<tr><th>Pessoas</th><th>Quanto fazer</th><th class="num">Rende até</th><th>Vasilhas</th></tr>`;
  const linhas = r.contas.map((c) => `<tr class="${c.pessoas === 10 ? 'dest' : ''}"><td>${c.pessoas}</td>${d.principal
    ? `<td class="num">${kg(c.principalKg)}</td><td>${fracao(c.mult)}</td><td>${c.vasilhas}</td>`
    : `<td>${fracao(c.mult)}</td><td class="num">${Math.floor(c.mult * d.base)} pessoas</td><td>${c.vasilhas} × ${esc(vasNome)}</td>`}</tr>`).join('');
  const nota = d.principal
    ? `A carne vai na medida exata por pessoa (${kg(d.principal[1])} por pessoa)${d.principal[4] ? `, mas não se acha ${esc(d.principal[0].toLowerCase())} com menos de ${kg(d.principal[4])}: para poucas pessoas, a sobra vira sanduíche ou vai no kit` : ''}. O tempero e os demais ingredientes seguem a receita-base abaixo (${esc(r.rende)}).`
    : `"1 receita" é a receita-base abaixo (${esc(r.rende)}). Arredondamos para cima: é melhor sobrar um pouco do que faltar na mesa do cliente.`;
  return `<h2>1. A Conta da Quantidade</h2><table>${cabec}${linhas}</table><p class="nota">${nota}</p>`;
}

function contaPreco(r) {
  const linhas = r.contas.map((c) => `<tr class="${c.pessoas === 10 ? 'dest' : ''}"><td>${c.pessoas}</td><td class="num">${brl(c.custo)}</td><td class="num">${brl(c.minimo)}</td><td class="num"><b>${brl(c.preco)}</b></td><td class="num lucro">${brl(c.lucro)}</td></tr>`).join('');
  const d = r.dados;
  const base = d.principal ? `${esc(d.principal[0].toLowerCase())} a ${brl(require('./contas').P[d.principal[2]])}/kg` : 'mercado';
  return `<h2>2. A Conta do Preço</h2><table><tr><th>Pessoas</th><th class="num">Custo</th><th class="num">Preço mínimo</th><th class="num">Preço sugerido</th><th class="num">Seu lucro</th></tr>${linhas}</table>
  <p class="nota">Custo com preços de referência de dez/2025 (${base}). Preço mínimo = custo × 2,5. Preço sugerido = custo × 2,7, arredondado. Lucro antes de gás, embalagem e entrega.</p>
  <div class="box verde mantem"><b>Faça com o preço da sua cidade:</b> some o que você pagou no mercado para ${r.dados.principal ? '10' : 'a receita-base de'} ${r.dados.principal ? 'pessoas' : esc(r.rende.split(' ·')[0])}.<br>
  Seu custo: R$ <span class="campo"></span> × 2,5 = preço mínimo R$ <span class="campo"></span> · × 2,7 = preço sugerido R$ <span class="campo"></span></div>`;
}

function fichaPremium(r) {
  return `<section class="pag" id="r${r.n}">${topo('CEIA QUE VENDE · PREMIUM', `FICHA ${num(r.n)} · ${sing[nomeCat(r.cat)]}`)}
  <h1>${esc(r.nome)}</h1>${chips(r)}
  ${contaQuantidade(r)}${contaPreco(r)}
  <div class="box vinho mantem"><b>3. A Conta do Limite:</b> ${esc(r.dados.limite)}</div>
  <section class="pag"><h2 style="margin-top:0">Ingredientes · receita-base (${esc(r.rende.split(' ·')[0])})</h2>${ingHtml(r)}
  <h2>Modo de preparo</h2>${passosHtml(r)}</section></section>`;
}

function comeceAqui() {
  const p = t.receitas[6]; const c10 = p.contas.find((c) => c.pessoas === 10);
  return `<section class="pag">${topo('CEIA QUE VENDE · PREMIUM', 'COMECE AQUI')}
  <h1>As 3 contas em 5 minutos</h1>
  <p class="sub">Cada ficha tem as 3 contas que separam quem lucra com a ceia de quem trabalha de graça. Veja como ler, com o pernil para 10 pessoas.</p>
  <div class="etapas" style="margin-top:6mm">
  <div class="etapa"><div class="num">1</div><div><h3>A Conta da Quantidade</h3><p>Quanto comprar e quanto fazer para 4, 6, 10 ou 20 pessoas. No pernil para 10: <b>${kg(c10.principalKg)} de pernil com osso</b> e ${fracao(c10.mult)} do tempero.</p></div></div>
  <div class="etapa"><div class="num">2</div><div><h3>A Conta do Preço</h3><p>Quanto custa, o mínimo que você pode cobrar e quanto sobra. No pernil para 10: custo <b>${brl(c10.custo)}</b>, preço mínimo <b>${brl(c10.minimo)}</b>, preço sugerido <b>${brl(c10.preco)}</b>, lucro <b>${brl(c10.lucro)}</b>.</p></div></div>
  <div class="etapa"><div class="num">3</div><div><h3>A Conta do Limite</h3><p>Quantos pedidos cabem no seu forno, no seu fogão e na sua geladeira. ${esc(p.dados.limite)}</p></div></div>
  </div>
  <div class="box"><b>Os preços são de referência (dez/2025).</b> Mercado muda de cidade para cidade. Em cada ficha tem um espaço para você fazer a conta com o seu custo: o que você pagou × 2,5 é o mínimo que você pode cobrar.</div>
  <div class="box verde"><b>Seus bônus</b> estão na área de membros, cada um no seu arquivo: Como Precificar · Almoço do Dia 25 · Calendário Anti-Sufoco · Kits Prontos de 4 a 20 Pessoas · Planilha de Pedidos e Sinal · Checklist da Ceia Segura.</div>
  </section>`;
}

function premium() {
  let h = capa({ sub: '50 receitas de Natal para vender por encomenda, com as 3 contas prontas: quanto fazer, quanto cobrar e quantos pedidos aceitar.', tag: 'PREMIUM' });
  h += comeceAqui() + antesDeComecar('PREMIUM') + indice('PREMIUM');
  for (const cat of CATS) {
    h += abertura(cat);
    for (const r of t.receitas.filter((x) => x.cat === cat[0])) h += fichaPremium(r);
  }
  return doc('Ceia que Vende · Premium', h);
}

(async () => {
  const quais = process.argv[2] ? [process.argv[2]] : ['basico', 'premium'];
  if (quais.includes('basico')) console.log('basico', await pdf(basico(), path.join(FINAL, 'ceia-que-vende-basico.pdf'), path.join(HTML, 'basico.html')), 'KB');
  if (quais.includes('premium')) console.log('premium', await pdf(premium(), path.join(FINAL, 'ceia-que-vende-premium.pdf'), path.join(HTML, 'premium.html')), 'KB');
  await fechar();
})();
