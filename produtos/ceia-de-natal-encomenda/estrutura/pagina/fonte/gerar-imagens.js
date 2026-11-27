// Gera capas, bônus e planilha para a LP. Ficha, kits e calendário vêm do produto real: rode depois imagens-do-produto.js.
// Estas páginas são o PADRÃO que o entregável vai seguir: os números aqui precisam ser os mesmos do produto.
// Uso: node gerar-imagens.js  -> .tmp/*.png  (depois: python3 compor.py .tmp ../img)
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const TMP = path.join(__dirname, '.tmp');
fs.mkdirSync(TMP, { recursive: true });

const CSS = `
* { box-sizing: border-box; margin: 0; }
body { font-family: Inter, 'DejaVu Sans', sans-serif; color: #2a1f1a; background: #fff; }
.folha { width: 800px; padding: 44px 48px; background: #fffdf8; position: relative; }
.topo { display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #0f3d2e; padding-bottom: 10px; margin-bottom: 22px; font-size: 14px; font-weight: 800; letter-spacing: .08em; color: #0f3d2e; }
.topo .selo { background: #8c1c24; color: #fff; padding: 5px 12px; border-radius: 6px; letter-spacing: .06em; }
h1 { font-family: Caladea, 'DejaVu Serif', serif; font-size: 46px; color: #0f3d2e; line-height: 1.05; }
h2 { font-family: Caladea, 'DejaVu Serif', serif; font-size: 26px; color: #8c1c24; margin: 22px 0 10px; }
.sub { font-size: 18px; color: #6b5a4e; margin-top: 6px; }
table { width: 100%; border-collapse: collapse; font-size: 19px; }
th { background: #0f3d2e; color: #fff; text-align: left; padding: 11px 12px; font-size: 16px; letter-spacing: .03em; }
td { padding: 11px 12px; border-bottom: 1px solid #e6dcc8; }
tr.dest td { background: #fbf1d9; font-weight: 800; }
td.num { text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap; }
.lucro { color: #1e6b3f; font-weight: 800; }
.nota { font-size: 14px; color: #7d6b5e; margin-top: 14px; }
.ing { columns: 2; font-size: 17px; line-height: 1.7; padding-left: 20px; }
.box { border: 2px solid #c9a24a; border-radius: 12px; padding: 14px 18px; background: #fff8e8; font-size: 17px; margin-top: 16px; }
.kits { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.kit { border: 2px solid #0f3d2e; border-radius: 14px; padding: 16px 18px; background: #fff; }
.kit.dest { border-color: #c9a24a; box-shadow: 0 0 0 4px #f3e3b5; }
.kit h3 { font-family: Caladea, serif; font-size: 25px; color: #0f3d2e; }
.kit ul { font-size: 15px; padding-left: 18px; margin: 8px 0 10px; line-height: 1.5; }
.kit .p { display: flex; justify-content: space-between; font-size: 15px; border-top: 1px dashed #c9b89a; padding-top: 8px; }
.kit .preco { font-size: 30px; font-weight: 900; color: #8c1c24; }
.cal { display: grid; gap: 10px; }
.dia { display: grid; grid-template-columns: 150px 1fr; gap: 14px; align-items: center; border-left: 6px solid #0f3d2e; background: #fff; padding: 11px 14px; border-radius: 8px; font-size: 17px; }
.dia b.d { font-size: 18px; color: #0f3d2e; }
.dia.alerta { border-left-color: #8c1c24; background: #fbeaea; }
.dia.ouro { border-left-color: #c9a24a; background: #fff8e8; }
.limite { display: flex; gap: 12px; align-items: center; font-size: 18px; font-weight: 700; }
.limite span { display: inline-block; width: 90px; height: 44px; border: 2px dashed #8c1c24; border-radius: 8px; }
/* planilha */
.sheet { width: 1000px; background: #fff; font-family: Arial, 'Liberation Sans', sans-serif; border: 1px solid #c8c8c8; }
.sheet .barra { background: #f1f3f4; padding: 10px 14px; font-size: 15px; color: #333; border-bottom: 1px solid #ddd; display: flex; gap: 18px; }
.sheet .barra b { color: #188038; }
.sheet table { font-size: 15px; }
.sheet th { background: #0f3d2e; font-size: 14px; padding: 8px 10px; }
.sheet td { border: 1px solid #e0e0e0; padding: 8px 10px; }
.sheet .ok { color: #188038; font-weight: 700; }
.sheet .pend { color: #b3261e; font-weight: 700; }
.sheet .tot td { background: #fff4d6; font-weight: 800; }
.sheet .abas { display: flex; gap: 2px; background: #f1f3f4; padding: 6px 10px 0; font-size: 13px; }
.sheet .abas span { padding: 7px 14px; background: #e3e3e3; border-radius: 6px 6px 0 0; }
.sheet .abas span.at { background: #fff; color: #188038; font-weight: 700; }
/* capas */
.capa { width: 620px; height: 860px; background: radial-gradient(circle at 70% 15%, #1d5c44 0, #0f3d2e 55%, #0a2b20 100%); color: #fff; padding: 56px 48px; position: relative; overflow: hidden; border: 10px solid #c9a24a; }
.capa .marca { font-size: 15px; letter-spacing: .3em; color: #e9cf8a; font-weight: 700; }
.capa h1 { color: #fff; font-size: 80px; margin-top: 70px; }
.capa h1 em { color: #e9cf8a; font-style: normal; }
.capa .s { font-size: 24px; color: #f3ead7; margin-top: 22px; line-height: 1.35; }
.capa .tag { position: absolute; left: 48px; bottom: 56px; background: #8c1c24; padding: 10px 20px; border-radius: 8px; font-size: 22px; font-weight: 800; letter-spacing: .12em; }
.capa .estrela { position: absolute; right: 40px; top: 40px; font-size: 64px; color: #e9cf8a; }
.capa .fitas { position: absolute; right: -90px; bottom: -110px; width: 300px; height: 300px; border-radius: 50%; border: 18px solid #8c1c24; opacity: .55; }
.bonus { width: 420px; height: 560px; background: #fbf6ec; border: 6px solid #0f3d2e; padding: 34px 30px; position: relative; overflow: hidden; }
.bonus .n { font-size: 14px; letter-spacing: .24em; font-weight: 800; color: #8c1c24; }
.bonus h1 { font-size: 44px; margin-top: 30px; }
.bonus p { font-size: 18px; color: #5b4a3e; margin-top: 16px; line-height: 1.4; }
.bonus .rod { position: absolute; left: 30px; bottom: 28px; font-size: 14px; letter-spacing: .2em; color: #0f3d2e; font-weight: 800; }
.bonus .faixa { position: absolute; right: -40px; top: 26px; transform: rotate(35deg); background: #c9a24a; color: #2a1f1a; font-weight: 900; font-size: 13px; padding: 6px 50px; letter-spacing: .1em; }
`;

const TOPO = (dir) => `<div class="topo"><span>CEIA QUE VENDE</span><span class="selo">${dir}</span></div>`;

// ---- Ficha do pernil (números de referência: pernil ~R$ 25/kg, markup ~2,7)
const ficha = `<div class="folha" id="ficha">${TOPO('FICHA 07 · ASSADOS')}
  <h1>Pernil assado de Natal</h1><p class="sub">Rende fatias bonitas, aguenta o transporte e cabe na margem do kit.</p>
  <h2>A Conta da Quantidade</h2>
  <table><tr><th>Pessoas</th><th>Pernil com osso</th><th>Tempero</th><th>Forno</th></tr>
  <tr><td>4</td><td class="num">1,6 kg</td><td>meia receita</td><td>2 h</td></tr>
  <tr><td>6</td><td class="num">2,4 kg</td><td>1 receita</td><td>2 h 30</td></tr>
  <tr class="dest"><td>10</td><td class="num">4 kg</td><td>1 e meia</td><td>3 h 30</td></tr>
  <tr><td>20</td><td class="num">8 kg (2 peças)</td><td>3 receitas</td><td>3 h 30 (2 assadeiras)</td></tr></table>
  <h2>A Conta do Preço</h2>
  <table><tr><th>Pessoas</th><th>Custo</th><th>Preço de venda</th><th>Seu lucro</th></tr>
  <tr><td>4</td><td class="num">R$ 46</td><td class="num">R$ 125</td><td class="num lucro">R$ 79</td></tr>
  <tr><td>6</td><td class="num">R$ 68</td><td class="num">R$ 185</td><td class="num lucro">R$ 117</td></tr>
  <tr class="dest"><td>10</td><td class="num">R$ 115</td><td class="num">R$ 310</td><td class="num lucro">R$ 195</td></tr>
  <tr><td>20</td><td class="num">R$ 225</td><td class="num">R$ 600</td><td class="num lucro">R$ 375</td></tr></table>
  <p class="nota">Preço = custo × 2,7 (faixa de mercado: 2,5 a 3). Custo com pernil a ~R$ 25/kg e tempero. Ajuste para os preços da sua cidade.</p>
  <h2>Ingredientes (10 pessoas)</h2>
  <ul class="ing"><li>4 kg de pernil suíno com osso</li><li>1 cabeça de alho</li><li>2 cebolas</li><li>Suco de 3 laranjas</li><li>2 limões</li><li>Louro, alecrim e páprica</li><li>Sal e pimenta</li><li>Azeite</li></ul>
  <div class="box"><b>A Conta do Limite:</b> 1 forno doméstico assa até 2 pernis de 4 kg por fornada. Marque no Calendário Anti-Sufoco quantos pedidos cabem em cada dia de entrega.</div>
</div>`;

// ---- Kits prontos
const kit = (nome, itens, custo, preco, lucro, dest) => `<div class="kit${dest ? ' dest' : ''}"><h3>${nome}</h3><ul>${itens.map((i) => `<li>${i}</li>`).join('')}</ul>
  <div class="preco">R$ ${preco}</div><div class="p"><span>Custo R$ ${custo}</span><span class="lucro">Lucro R$ ${lucro}</span></div></div>`;
const kits = `<div class="folha" id="kits">${TOPO('BÔNUS · KITS PRONTOS')}
  <h1>Kits Prontos de 4 a 20 Pessoas</h1><p class="sub">Combos fechados. É só mandar no WhatsApp e o cliente escolhe em 10 segundos.</p>
  <div class="kits" style="margin-top:22px">
  ${kit('Kit 4 pessoas', ['Pernil 1,6 kg', 'Arroz à grega', 'Farofa da casa', 'Pavê (1 travessa)'], 70, 189, 119)}
  ${kit('Kit 6 a 8 pessoas', ['Pernil 2,4 kg', 'Arroz à grega', 'Farofa e salpicão', 'Pavê ou rabanada'], 110, 299, 189, true)}
  ${kit('Kit 10 pessoas', ['Pernil 4 kg', 'Arroz à grega e farofa', 'Salpicão e maionese', 'Pavê e rabanada'], 160, 429, 269)}
  ${kit('Kit 20 pessoas', ['Pernil 8 kg (2 peças)', 'Arroz, farofa, salpicão', 'Maionese de batata', '2 sobremesas'], 300, 799, 499)}
  </div>
  <p class="nota">Preço do combo ≈ custo × 2,7. Antes de gás, embalagem e entrega. O sinal de 50% no Pix paga as compras do kit.</p>
</div>`;

// ---- Calendário Anti-Sufoco
const dia = (d, t, cls = '') => `<div class="dia ${cls}"><b class="d">${d}</b><span>${t}</span></div>`;
const cal = `<div class="folha" id="calendario">${TOPO('BÔNUS · CALENDÁRIO')}
  <h1>Calendário Anti-Sufoco</h1><p class="sub">Do dia 26/11 ao dia 25/12: o que fazer em cada fase para o dia 24 chegar sob controle.</p>
  <div class="cal" style="margin-top:22px">
  ${dia('26/11 a 30/11', 'Escolha os pratos e os kits, confira os preços na sua cidade e monte o cardápio.')}
  ${dia('1º/12', '<b>Abra as encomendas</b> no WhatsApp com o cardápio e o preço de cada kit.', 'ouro')}
  ${dia('1º a 15/12', 'Cada pedido só entra com <b>50% de sinal no Pix</b>. Anote na Planilha de Pedidos.')}
  ${dia('15/12', '<b>Feche as encomendas.</b> Pedido depois disso só se couber no seu limite.', 'alerta')}
  ${dia('16 a 20/12', 'Confirme cada pedido, o horário de entrega e o saldo a receber.')}
  ${dia('21/12', 'Faça as compras com a lista que a planilha soma.')}
  ${dia('22 e 23/12', 'Temperos, pré-preparo e sobremesas. Primeiras entregas no dia 23.')}
  ${dia('24/12', 'Assados e entregas no horário marcado. Receba o saldo na entrega.', 'ouro')}
  ${dia('25/12', 'Almoço do Dia 25 (bônus): cardápio e limite separados da ceia.')}
  </div>
  <div class="box limite" style="margin-top:20px">Meu limite de pedidos por dia de entrega: <span></span> pedidos</div>
</div>`;

// ---- Planilha de Pedidos e Sinal
const linhas = [
  ['Ana P.', 'Kit 6 a 8', 299, 'Pago', '24/12 · 18h'], ['Cláudia R.', 'Kit 10', 590, 'Pago', '24/12 · 17h'],
  ['Márcia S.', 'Kit 4', 230, 'Pago', '23/12 · 19h'], ['Juliana T.', 'Kit 6 a 8', 299, 'Pendente', '24/12 · 19h'],
  ['Rosana L.', 'Kit 20', 1570, 'Pago', '24/12 · 16h'], ['Patrícia M.', 'Kit 6 a 8', 299, 'Pago', '24/12 · 20h'],
];
const brl = (v) => 'R$ ' + v.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const tot = linhas.reduce((s, l) => s + l[2], 0);
const sinais = linhas.filter((l) => l[3] === 'Pago').reduce((s, l) => s + l[2] / 2, 0);
const planilha = `<div class="sheet" id="planilha"><div class="barra"><span>📄 <b>Ceia que Vende · Planilha de Pedidos e Sinal</b></span><span>Arquivo · Editar · Ver</span></div>
  <table><tr><th>Cliente</th><th>Kit</th><th>Valor</th><th>Sinal 50%</th><th>Sinal</th><th>Saldo a receber</th><th>Entrega</th></tr>
  ${linhas.map((l) => `<tr><td>${l[0]}</td><td>${l[1]}</td><td class="num">${brl(l[2])}</td><td class="num">${brl(l[2] / 2)}</td><td class="${l[3] === 'Pago' ? 'ok' : 'pend'}">${l[3] === 'Pago' ? '✔ Pago' : '✖ Pendente'}</td><td class="num">${brl(l[3] === 'Pago' ? l[2] / 2 : l[2])}</td><td>${l[4]}</td></tr>`).join('')}
  <tr class="tot"><td colspan="2">TOTAL</td><td class="num">${brl(tot)}</td><td class="num">${brl(tot / 2)}</td><td>${brl(sinais)} recebido</td><td class="num">${brl(tot - sinais)}</td><td>6 pedidos</td></tr></table>
  <div class="abas"><span class="at">Pedidos</span><span>Lista de compras</span><span>Resumo</span></div></div>`;

// ---- Capa e capas dos bônus
const capa = `<div class="capa" id="capa"><div class="estrela">★</div><div class="fitas"></div><div class="marca">CEIA QUE VENDE</div>
  <h1>Ceia<br>que <em>Vende</em></h1><p class="s">50 receitas de Natal para vender por encomenda, com as 3 contas prontas: quanto fazer, quanto cobrar e quantos pedidos aceitar.</p>
  <div class="tag">PREMIUM</div></div>`;
const capaBasico = `<div class="capa" id="capa-basico"><div class="estrela">★</div><div class="fitas"></div><div class="marca">CEIA QUE VENDE</div>
  <h1>Ceia<br>que <em>Vende</em></h1><p class="s">50 receitas de Natal para vender por encomenda.</p>
  <div class="tag">BÁSICO</div></div>`;
const BONUS = [
  ['Como Precificar', 'A conta do preço passo a passo, com gás, embalagem e a sua hora.'],
  ['Almoço do Dia 25', 'Um cardápio próprio para vender de novo no dia 25.'],
  ['Calendário Anti-Sufoco', 'Abrir, fechar, comprar, produzir e entregar, com limite por dia.'],
  ['Kits Prontos', 'Combos de 4 a 20 pessoas com o preço fechado.'],
  ['Planilha de Pedidos e Sinal', 'Quem pediu, quem pagou o sinal e quanto falta receber.'],
  ['Checklist da Ceia Segura', 'Guardar, transportar e entregar sem risco.'],
];
const bonus = BONUS.map((b, i) => `<div class="bonus" id="bonus${i + 1}"><div class="faixa">BÔNUS</div><div class="n">BÔNUS ${i + 1} · PREMIUM</div><h1>${b[0]}</h1><p>${b[1]}</p><div class="rod">CEIA QUE VENDE</div></div>`).join('');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body style="padding:20px;display:grid;gap:40px">${ficha}${kits}${cal}${planilha}${capa}${capaBasico}${bonus}</body></html>`;

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1100, height: 1200 }, deviceScaleFactor: 1.5 });
  await p.setContent(html, { waitUntil: 'load' });
  for (const id of ['ficha', 'kits', 'calendario', 'planilha', 'capa', 'capa-basico', ...BONUS.map((_, i) => 'bonus' + (i + 1))]) {
    await (await p.$('#' + id)).screenshot({ path: path.join(TMP, id + '.png') });
  }
  // recortes da ficha: quantidades e custo × preço × lucro
  // coordenadas da página inteira (fullPage), medidas no mesmo instante
  const m = await p.$eval('#ficha', (f) => {
    const y = window.scrollY, r = f.getBoundingClientRect();
    return { x: r.left + window.scrollX, top: r.top + y, w: r.width, h2: [...f.querySelectorAll('h2')].map((h) => h.getBoundingClientRect().top + y) };
  });
  await p.screenshot({ fullPage: true, path: path.join(TMP, 'ficha-quantidade.png'), clip: { x: m.x, y: m.top, width: m.w, height: m.h2[1] - m.top - 10 } });
  await p.screenshot({ fullPage: true, path: path.join(TMP, 'ficha-preco.png'), clip: { x: m.x, y: m.h2[1] - 20, width: m.w, height: m.h2[2] - m.h2[1] } });
  await b.close();
  console.log('ok  imagens em', TMP);
})();
