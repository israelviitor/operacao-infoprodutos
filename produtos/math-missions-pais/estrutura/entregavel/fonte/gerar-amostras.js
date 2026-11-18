// Gera o HTML das missões-amostra para pais e confere as contas.
// Uso: node gerar-amostras.js  -> ./html/<id>.html  (o PDF sai com ferramentas/gerar-pdf.js)
const fs = require('fs');
const path = require('path');
// Idioma: `node gerar-amostras.js en` gera a versão en-US em html/en/ (dados em missoes-amostra.en.js).
// Lote completo: `node gerar-amostras.js todas` gera as 30 missões (missoes/todas.js) em html/missoes/,
// um HTML por missão e um por nível (nivel-1.html, nivel-2.html, nivel-3.html).
const ARG = process.argv[2];
const LANG = process.env.LANG_MM || (ARG === 'en' ? 'en' : 'pt');
const TODAS = ARG === 'todas';
const missoes = TODAS ? require('./missoes/todas') : require(LANG === 'pt' ? './missoes-amostra' : './missoes-amostra.' + LANG);
const T = require('./textos-fixos')[LANG];
if (!T) { console.error('Faltam os textos fixos em ' + LANG); process.exit(1); }
const { barra } = require('./barras');

const ALFA = 'ABCDEFGHIJLMNPRSTUXZ';
const erros = [];
for (const m of missoes) {
  if (m.palavra.length !== m.etapas.length) erros.push(`${m.id}: palavra-código precisa ter ${m.etapas.length} letras`);
  const fora = [...ALFA].filter((c) => !m.palavra.includes(c));
  m.tabela = [];
  m.etapas.forEach((e, i) => {
    const c = String(e.calc());
    if (c !== e.r) erros.push(`${m.id} E${i + 1}: resposta "${e.r}" ≠ cálculo "${c}"`);
    const ce = String(e.ecalc());
    if (ce !== e.ev) erros.push(`${m.id} E${i + 1}: erro "${e.ev}" ≠ cálculo do erro "${ce}"`);
    if (e.ev === e.r) erros.push(`${m.id} E${i + 1}: erro igual à resposta`);
    m.tabela.push([e.r, m.palavra[i]], [e.ev, fora[(i * 3 + m.id.length) % fora.length]]);
  });
  const vals = m.tabela.map((t) => t[0]);
  vals.forEach((v, i) => { if (vals.indexOf(v) !== i) erros.push(`${m.id}: o valor "${v}" aparece duas vezes na tabela de código`); });
  m.tabela.sort((a, b) => a[0].localeCompare(b[0], T.lang, { numeric: true }));
}
if (erros.length) { console.error(erros.join('\n')); process.exit(1); }

const ICONES = {
  biscoito: '<svg viewBox="0 0 120 120" width="120"><circle cx="60" cy="60" r="44" fill="none" stroke="#000" stroke-width="3"/><circle cx="45" cy="45" r="5"/><circle cx="72" cy="50" r="5"/><circle cx="55" cy="72" r="5"/><circle cx="78" cy="76" r="4"/><circle cx="38" cy="68" r="4"/><path d="M96 34 q10 -8 14 4" fill="none" stroke="#000" stroke-width="3"/></svg>',
  mapa: '<svg viewBox="0 0 140 110" width="140"><path d="M10 15 L50 5 L90 15 L130 5 L130 95 L90 105 L50 95 L10 105 Z" fill="none" stroke="#000" stroke-width="3"/><path d="M50 5 V95 M90 15 V105" stroke="#000" stroke-width="1.5" stroke-dasharray="4 4"/><path d="M22 85 Q45 60 65 70 T110 35" fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="6 5"/><path d="M104 28 l12 12 M116 28 l-12 12" stroke="#000" stroke-width="4"/></svg>',
  robo: '<svg viewBox="0 0 120 120" width="120"><ellipse cx="60" cy="74" rx="46" ry="30" fill="none" stroke="#000" stroke-width="3"/><circle cx="44" cy="68" r="7" fill="none" stroke="#000" stroke-width="3"/><circle cx="76" cy="68" r="7" fill="none" stroke="#000" stroke-width="3"/><path d="M48 86 q12 8 24 0" fill="none" stroke="#000" stroke-width="3"/><path d="M60 44 V24" stroke="#000" stroke-width="3"/><circle cx="60" cy="20" r="5" fill="none" stroke="#000" stroke-width="3"/><path d="M14 40 l8 6 M106 40 l-8 6 M20 30 l6 8 M100 30 l-6 8" stroke="#000" stroke-width="2.5"/></svg>',

  lupa: '<svg viewBox="0 0 120 120" width="110"><circle cx="50" cy="50" r="30" fill="none" stroke="#000" stroke-width="4"/><path d="M72 72 L104 104" stroke="#000" stroke-width="8" stroke-linecap="round"/><text x="50" y="62" text-anchor="middle" font-size="34" font-weight="800" font-family="sans-serif">?</text></svg>',
  lancheira: '<svg viewBox="0 0 120 110" width="115"><rect x="12" y="38" width="96" height="62" rx="10" fill="none" stroke="#000" stroke-width="3"/><path d="M42 38 V24 H78 V38" fill="none" stroke="#000" stroke-width="3"/><path d="M12 60 H108" stroke="#000" stroke-width="2"/><circle cx="60" cy="60" r="5"/></svg>',
  album: '<svg viewBox="0 0 120 110" width="115"><rect x="14" y="14" width="92" height="84" rx="6" fill="none" stroke="#000" stroke-width="3"/><path d="M60 14 V98" stroke="#000" stroke-width="2"/><rect x="24" y="26" width="26" height="30" fill="none" stroke="#000" stroke-width="2"/><rect x="70" y="26" width="26" height="30" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="4 3"/><rect x="24" y="62" width="26" height="28" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="4 3"/><rect x="70" y="62" width="26" height="28" fill="none" stroke="#000" stroke-width="2"/></svg>',
  bola: '<svg viewBox="0 0 120 120" width="110"><circle cx="60" cy="60" r="42" fill="none" stroke="#000" stroke-width="3"/><path d="M60 38 L80 52 L72 76 H48 L40 52 Z" fill="#000"/><path d="M60 38 V18 M80 52 L100 44 M72 76 L84 96 M48 76 L36 96 M40 52 L20 44" stroke="#000" stroke-width="2.5"/></svg>',
  arvore: '<svg viewBox="0 0 120 120" width="110"><circle cx="60" cy="48" r="34" fill="none" stroke="#000" stroke-width="3"/><path d="M60 82 V112 M46 112 H74" stroke="#000" stroke-width="4"/><circle cx="48" cy="40" r="6"/><circle cx="70" cy="52" r="6"/><circle cx="58" cy="62" r="6"/></svg>',
  relogio: '<svg viewBox="0 0 120 120" width="110"><circle cx="60" cy="60" r="44" fill="none" stroke="#000" stroke-width="4"/><path d="M60 60 V30 M60 60 L80 72" stroke="#000" stroke-width="5" stroke-linecap="round"/><path d="M60 20 V26 M60 94 V100 M20 60 H26 M94 60 H100" stroke="#000" stroke-width="3"/></svg>',
  giz: '<svg viewBox="0 0 130 110" width="120"><g fill="none" stroke="#000" stroke-width="3"><rect x="14" y="40" width="70" height="16" rx="4" transform="rotate(-20 49 48)"/><rect x="30" y="62" width="70" height="16" rx="4" transform="rotate(-8 65 70)"/><rect x="44" y="84" width="70" height="16" rx="4"/></g></svg>',
  patinete: '<svg viewBox="0 0 130 110" width="120"><circle cx="26" cy="90" r="12" fill="none" stroke="#000" stroke-width="3"/><circle cx="104" cy="90" r="12" fill="none" stroke="#000" stroke-width="3"/><path d="M26 90 H96 L104 90 M96 90 L86 18 M74 18 H98" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round"/></svg>',
  pizza: '<svg viewBox="0 0 120 120" width="110"><circle cx="60" cy="60" r="44" fill="none" stroke="#000" stroke-width="3"/><path d="M60 16 V104 M16 60 H104 M29 29 L91 91 M91 29 L29 91" stroke="#000" stroke-width="2"/><path d="M60 60 L91 29 A44 44 0 0 1 104 60 Z" fill="#fff" stroke="#000" stroke-width="2" stroke-dasharray="4 3"/></svg>',
  barraca: '<svg viewBox="0 0 130 110" width="120"><path d="M14 40 L30 14 H100 L116 40 Z" fill="none" stroke="#000" stroke-width="3"/><path d="M14 40 q12 12 25 0 q13 12 26 0 q13 12 26 0 q13 12 25 0" fill="none" stroke="#000" stroke-width="3"/><path d="M24 46 V100 M106 46 V100 M14 100 H116" stroke="#000" stroke-width="3"/><circle cx="64" cy="78" r="9" fill="none" stroke="#000" stroke-width="3"/></svg>',
  mochila: '<svg viewBox="0 0 120 120" width="105"><rect x="24" y="28" width="72" height="80" rx="18" fill="none" stroke="#000" stroke-width="3"/><path d="M44 28 V18 H76 V28" fill="none" stroke="#000" stroke-width="3"/><rect x="38" y="62" width="44" height="30" rx="6" fill="none" stroke="#000" stroke-width="3"/></svg>',
  pipa: '<svg viewBox="0 0 120 130" width="105"><path d="M60 8 L94 48 L60 96 L26 48 Z" fill="none" stroke="#000" stroke-width="3"/><path d="M60 8 V96 M26 48 H94" stroke="#000" stroke-width="2"/><path d="M60 96 q-12 8 0 16 q12 8 0 16" fill="none" stroke="#000" stroke-width="2"/></svg>',
  blocos: '<svg viewBox="0 0 120 120" width="105"><g fill="none" stroke="#000" stroke-width="3"><rect x="40" y="10" width="40" height="24"/><rect x="40" y="34" width="40" height="24"/><rect x="40" y="58" width="40" height="24"/><rect x="40" y="82" width="40" height="24"/></g><path d="M14 106 H106" stroke="#000" stroke-width="3"/></svg>',
  planta: '<svg viewBox="0 0 120 120" width="105"><path d="M60 104 V50" stroke="#000" stroke-width="4"/><path d="M60 64 q-30 -4 -34 -30 q28 2 34 30 M60 56 q26 -6 32 -30 q-28 0 -32 30" fill="none" stroke="#000" stroke-width="3"/><path d="M30 104 H90 L84 116 H36 Z" fill="none" stroke="#000" stroke-width="3"/></svg>',
  onibus: '<svg viewBox="0 0 130 110" width="120"><rect x="12" y="20" width="106" height="64" rx="10" fill="none" stroke="#000" stroke-width="3"/><path d="M12 50 H118" stroke="#000" stroke-width="2"/><g fill="none" stroke="#000" stroke-width="2"><rect x="22" y="28" width="18" height="16"/><rect x="46" y="28" width="18" height="16"/><rect x="70" y="28" width="18" height="16"/><rect x="94" y="28" width="16" height="16"/></g><circle cx="36" cy="88" r="10" fill="#fff" stroke="#000" stroke-width="3"/><circle cx="96" cy="88" r="10" fill="#fff" stroke="#000" stroke-width="3"/></svg>',
  peixe: '<svg viewBox="0 0 130 110" width="120"><rect x="10" y="12" width="110" height="88" rx="6" fill="none" stroke="#000" stroke-width="3"/><path d="M34 56 q22 -22 48 0 q-26 22 -48 0 Z M82 56 l14 -12 v24 Z" fill="none" stroke="#000" stroke-width="3"/><circle cx="46" cy="52" r="3"/><circle cx="100" cy="30" r="4" fill="none" stroke="#000" stroke-width="2"/><circle cx="92" cy="22" r="3" fill="none" stroke="#000" stroke-width="2"/></svg>',
  cronometro: '<svg viewBox="0 0 120 120" width="105"><circle cx="60" cy="66" r="42" fill="none" stroke="#000" stroke-width="4"/><path d="M50 14 H70 M60 14 V24 M60 66 L78 44" stroke="#000" stroke-width="5" stroke-linecap="round"/></svg>',
  grafico: '<svg viewBox="0 0 130 110" width="120"><path d="M14 12 V98 H120" fill="none" stroke="#000" stroke-width="3"/><rect x="26" y="40" width="20" height="58" fill="none" stroke="#000" stroke-width="3"/><rect x="56" y="54" width="20" height="44" fill="none" stroke="#000" stroke-width="3"/><path d="M86 98 V30 H106 V60 l-6 6 6 6 -6 6 6 6 V98" fill="none" stroke="#000" stroke-width="3" stroke-dasharray="5 3"/></svg>',
  museu: '<svg viewBox="0 0 130 110" width="120"><path d="M10 36 L65 10 L120 36 Z M14 100 H116 M18 92 H112" fill="none" stroke="#000" stroke-width="3"/><path d="M28 40 V90 M50 40 V90 M80 40 V90 M102 40 V90" stroke="#000" stroke-width="5"/><path d="M58 60 q7 -10 14 0 q2 14 -7 22 q-9 -8 -7 -22" fill="none" stroke="#000" stroke-width="2"/></svg>',
  salto: '<svg viewBox="0 0 130 110" width="120"><path d="M10 90 H120" stroke="#000" stroke-width="3"/><path d="M20 86 q40 -80 90 0" fill="none" stroke="#000" stroke-width="3" stroke-dasharray="6 4"/><g stroke="#000" stroke-width="2"><path d="M20 98 V104 M40 98 V104 M60 98 V104 M80 98 V104 M100 98 V104"/></g><circle cx="110" cy="80" r="6"/></svg>',
  garrafa: '<svg viewBox="0 0 120 130" width="100"><path d="M50 8 H70 V30 q18 10 18 30 V118 H32 V60 q0 -20 18 -30 Z" fill="none" stroke="#000" stroke-width="3"/><path d="M32 74 H88" stroke="#000" stroke-width="2"/><path d="M44 96 q16 -14 32 0" fill="none" stroke="#000" stroke-width="2"/></svg>',
  abobora: '<svg viewBox="0 0 130 110" width="120"><ellipse cx="65" cy="64" rx="48" ry="36" fill="none" stroke="#000" stroke-width="3"/><path d="M65 28 q-20 36 0 72 M65 28 q20 36 0 72" fill="none" stroke="#000" stroke-width="2"/><path d="M65 28 q2 -14 12 -18" fill="none" stroke="#000" stroke-width="4"/></svg>',
  cofre: '<svg viewBox="0 0 120 120" width="105"><rect x="14" y="20" width="92" height="84" rx="8" fill="none" stroke="#000" stroke-width="3"/><circle cx="60" cy="62" r="20" fill="none" stroke="#000" stroke-width="3"/><path d="M60 42 V50 M60 74 V82 M40 62 H48 M72 62 H80" stroke="#000" stroke-width="3"/><circle cx="60" cy="62" r="4"/></svg>',
  pote: '<svg viewBox="0 0 120 120" width="105"><path d="M30 24 H90 V36 q14 10 14 30 V108 H16 V66 q0 -20 14 -30 Z" fill="none" stroke="#000" stroke-width="3"/><circle cx="44" cy="80" r="8" fill="none" stroke="#000" stroke-width="2"/><circle cx="64" cy="90" r="8" fill="none" stroke="#000" stroke-width="2"/><circle cx="78" cy="72" r="8" fill="none" stroke="#000" stroke-width="2"/><circle cx="56" cy="64" r="8" fill="none" stroke="#000" stroke-width="2"/></svg>',
  bolo: '<svg viewBox="0 0 130 110" width="120"><path d="M18 56 H112 V98 H18 Z M18 72 q12 10 23 0 q12 10 24 0 q12 10 24 0 q12 10 23 0" fill="none" stroke="#000" stroke-width="3"/><path d="M50 56 V36 M65 56 V30 M80 56 V36" stroke="#000" stroke-width="3"/><path d="M50 30 v-4 M65 24 v-4 M80 30 v-4" stroke="#000" stroke-width="4" stroke-linecap="round"/></svg>',
  escudo: '<svg viewBox="0 0 120 120" width="100"><path d="M60 10 L100 24 V56 q0 34 -40 54 q-40 -20 -40 -54 V24 Z" fill="none" stroke="#000" stroke-width="3"/><path d="M60 36 L66 50 H80 L68 59 L73 74 L60 65 L47 74 L52 59 L40 50 H54 Z" fill="none" stroke="#000" stroke-width="2.5"/></svg>',
  cerca: '<svg viewBox="0 0 130 110" width="120"><g fill="none" stroke="#000" stroke-width="3"><path d="M16 96 V34 l8 -12 8 12 V96 M48 96 V34 l8 -12 8 12 V96 M80 96 V34 l8 -12 8 12 V96"/><path d="M10 50 H120 M10 78 H120" stroke-dasharray="0"/></g><path d="M104 96 V40" stroke="#000" stroke-width="3" stroke-dasharray="6 4"/></svg>',
  foguete: '<svg viewBox="0 0 120 130" width="100"><path d="M60 8 q26 24 22 72 H38 q-4 -48 22 -72 Z" fill="none" stroke="#000" stroke-width="3"/><circle cx="60" cy="48" r="10" fill="none" stroke="#000" stroke-width="3"/><path d="M38 66 L22 92 L40 86 M82 66 L98 92 L80 86 M48 80 q12 34 24 0" fill="none" stroke="#000" stroke-width="3"/></svg>',
};

const CSS = `
@page { size: A4; margin: 14mm; }
* { box-sizing: border-box; }
body { font-family: Inter, 'DejaVu Sans', sans-serif; color: #111; font-size: 12.5pt; line-height: 1.45; margin: 0; }
.pagina { page-break-after: always; position: relative; height: 266mm; overflow: hidden; }
.pagina:last-child { page-break-after: auto; }
.topo { display: flex; align-items: center; gap: 10px; border-bottom: 2px solid #111; padding-bottom: 5px; margin-bottom: 12px; font-size: 9.5pt; font-weight: 800; letter-spacing: .05em; }
.nivel { background: #111; color: #fff; border-radius: 6px; padding: 3px 10px; font-size: 11pt; }
.topo .dir { margin-left: auto; }
h1 { font-size: 24pt; margin: 4px 0 8px; line-height: 1.1; }
h2 { font-size: 15pt; margin: 14px 0 6px; }
.cab { display: flex; gap: 16px; align-items: center; }
.abertura { border: 2px solid #111; border-radius: 10px; padding: 10px 14px; font-size: 13.5pt; margin: 8px 0 14px; }
.etapa { border: 1.5px solid #111; border-radius: 10px; padding: 10px 14px; margin-bottom: 12px; page-break-inside: avoid; }
.etapa .num { display: inline-flex; width: 30px; height: 30px; border-radius: 8px; background: #111; color: #fff; align-items: center; justify-content: center; font-weight: 800; margin-right: 8px; }
.etapa .tit { font-weight: 800; font-size: 13.5pt; }
.etapa .tag { font-size: 9.5pt; border: 1px solid #111; border-radius: 10px; padding: 0 8px; margin-left: 6px; }
.etapa p { margin: 6px 0; font-size: 13.5pt; }
.espaco { border: 1.5px dashed #777; border-radius: 8px; height: 30mm; margin-top: 6px; position: relative; }
.espaco.curto { height: 16mm; }
.espaco span { position: absolute; left: 10px; top: 4px; font-size: 9pt; color: #555; }
.resp { margin-top: 6px; font-weight: 800; }
.resp i { display: inline-block; border-bottom: 1.5px solid #111; width: 55mm; }
.dica { border: 2px dashed #111; border-radius: 10px; padding: 8px 12px; font-size: 11pt; margin: 10px 0; }
table.cod { border-collapse: collapse; margin: 6px 0 10px; }
table.cod td { border: 1.5px solid #111; padding: 6px 12px; text-align: center; font-size: 12.5pt; }
table.cod td.l { font-weight: 800; font-size: 15pt; }
.caixas { display: flex; gap: 10px; margin: 8px 0; }
.fim { display: flex; gap: 14px; align-items: flex-start; }
.oque { flex: 1; }
.caixas div span { font-size: 8pt; margin: 2px 4px; display: block; }
.caixas div { width: 15mm; height: 15mm; border: 2px solid #111; border-radius: 8px; }
.linha { border-bottom: 1.5px solid #111; height: 8mm; margin: 4px 0; }
.adulto li, .gab li { margin-bottom: 6px; }
.box { border: 1.5px solid #111; border-radius: 10px; padding: 8px 14px; margin: 8px 0; }
.gab .item { border-bottom: 1px solid #999; padding: 8px 0; page-break-inside: avoid; }
.gab .r { font-weight: 800; font-size: 13.5pt; }
.small { font-size: 10.5pt; color: #333; }
.desenho { border: 2px solid #111; border-radius: 8px; padding: 6px 10px; margin: 6px 0; }
.desenho .ins { font-size: 11.5pt; margin-bottom: 6px; }
.desenho .ins b.lbl { background: #111; color: #fff; border-radius: 4px; padding: 0 6px; margin-right: 4px; }
.livre { height: 34mm; border: 1px solid #999; border-radius: 6px; background-image: linear-gradient(#ddd 1px, transparent 1px), linear-gradient(90deg, #ddd 1px, transparent 1px); background-size: 5mm 5mm; }
.tag.d { background: #111; color: #fff; }
.gab { height: auto !important; overflow: visible !important; }
.gab .rodape { position: static; margin-top: 10px; }
.gab .modelo { margin: 4px 0 2px; }
.passos { display: flex; gap: 8px; margin: 6px 0; }
.passos div { flex: 1; border: 1.5px solid #111; border-radius: 8px; padding: 6px 8px; font-size: 11pt; }
.adulto { font-size: 11.3pt; line-height: 1.38; }
.adulto h1 { font-size: 21pt; }
.adulto h2 { font-size: 13.5pt; margin: 9px 0 4px; }
.adulto ol { margin: 4px 0; padding-left: 22px; }
.adulto li { margin-bottom: 3px !important; }
.gab { font-size: 11pt; line-height: 1.33; }
.gab h1 { font-size: 20pt; }
.gab .item { padding: 5px 0 !important; }
.rodape { position: absolute; bottom: 0; left: 0; right: 0; font-size: 8.5pt; color: #555; border-top: 1px solid #aaa; padding-top: 3px; }
`;

const topo = (m, dir) => `<div class="topo"><span>MATH&nbsp;MISSIONS</span><span class="nivel">${m.nivel}</span><span class="dir">${dir}</span></div>`;

function paginaAdulto(m) {
  const nd = m.etapas.findIndex((e) => e.desenho) + 1;
  const f = (t) => t.replace(/\{nd\}/g, nd);
  return `<section class="pagina adulto">${topo(m, T.adultoTopo)}
  <h1>${m.titulo}</h1>
  <div class="box"><b>${T.tempo}</b> ${m.tempo} · <b>${T.pratica}</b> ${m.praticas} · <b>${T.material}</b> ${T.materialTxt}</div>
  <h2>${T.metodoTit}</h2>
  <p>${f(m.fechamento ? T.metodoTxtFech : T.metodoTxt)}</p>
  <div class="passos"><div><b>${T.passo1}</b><br>${m.concreto}</div><div><b>${T.passo2}</b><br>${T.passo2Txt}</div><div><b>${T.passo3}</b><br>${T.passo3Txt}</div></div>
  <h2>${T.conduzirTit}</h2>
  <ol>${T.conduzir.map((li, i) => `<li>${f(m.fechamento && i === T.conduzir.length - 1 ? T.conduzirFech : li)}</li>`).join('')}</ol>
  <div class="box"><b>${T.antesAvancar}</b> ${m.dominio}</div>
  <h2>${T.irmaosTit}</h2>
  <div class="box">${T.irmaosTxt}</div>
  <div class="rodape">Math Missions · ${m.titulo} · ${T.rodapeAmostra}</div></section>`;
}

function etapaHTML(e, i) {
  const d = e.desenho;
  const tag = e.curta ? `<span class="tag">${T.tagCurta}</span>` : d ? `<span class="tag d">${T.tagDesenho}</span>` : '';
  const desenho = d ? `<div class="desenho"><div class="ins"><b class="lbl">${T.desenheLbl}</b>${d.instrucao}</div>${d.molde ? barra(d.molde, { largura: 560 }) : '<div class="livre"></div>'}</div>` : '';
  return `<div class="etapa"><span class="num">${i + 1}</span><span class="tit">${e.titulo}</span>${tag}
  <p>${e.enunciado}</p>${desenho}
  <div class="espaco${e.curta || d ? ' curto' : ''}"><span>${d ? T.calculeLbl : T.espacoLbl}</span></div>
  <div class="resp">${T.minhaResposta} <i></i></div></div>`;
}

function paginasMissao(m) {
  // Páginas da criança: padrão = etapas 1–2 | 3–4 + código. Fechamento (4 desenhos) = 1 | 2–3 | 4 + código.
  const layout = m.fechamento ? [[0], [1, 2], [3]] : [[0, 1], [2, 3]];
  const DICA = `<div class="dica">${T.dica}</div>`;
  const comDesenho = (pg) => pg.some((i) => m.etapas[i].desenho);
  const dicaEm = m.fechamento ? -1 : layout.findIndex((pg) => !comDesenho(pg));
  return layout.map((pg, p) => {
    const ultima = p === layout.length - 1;
    return `<section class="pagina missao">${topo(m, p === 0 ? T.missaoTopo : T.missaoCont)}
  ${p === 0 ? `<div class="cab"><div>${ICONES[m.icone] || ICONES.lupa}</div><div><h1>${m.titulo}</h1></div></div>
  <div class="abertura">${m.abertura}</div>` : ''}
  ${pg.map((i) => etapaHTML(m.etapas[i], i)).join('')}
  ${p === dicaEm ? DICA : ''}
  ${ultima ? `<h2>${T.codigoTit} <span class="small" style="font-weight:400">${T.codigoTxt}</span></h2>
  <table class="cod"><tr>${m.tabela.map((t) => `<td>${t[0]}</td>`).join('')}</tr><tr>${m.tabela.map((t) => `<td class="l">${t[1]}</td>`).join('')}</tr></table>
  <div class="fim"><div class="caixas">${m.etapas.map((e, i) => `<div><span>${i + 1}</span></div>`).join('')}</div><div class="oque"><b>${T.oQueAconteceu}</b><div class="linha"></div><div class="linha"></div></div></div>` : ''}
  <div class="rodape">Math Missions · ${m.titulo}</div></section>`;
  }).join('\n');
}

function paginaGabarito(m) {
  const itens = m.etapas.map((e, i) => `<div class="item"><b>${T.etapa} ${i + 1} — ${e.titulo}</b> · <span class="r">${e.r}</span> (${T.letra} ${m.palavra[i]})
  <div><b>${T.comoPensar}</b> ${e.pensar} <span class="small">${T.conta} ${e.conta}.</span></div>
  ${e.desenho ? `<div>${T.desenhoEsperado}</div><div class="modelo">${barra(e.desenho.modelo, { largura: 420, alturaBarra: 24, fonte: 12, totalJunto: e.desenho.junto })}</div><div>${e.desenho.explica}</div>` : ''}
  <div><b>${T.seTravar}</b> ${e.apoio}</div>
  <div class="small"><b>${T.erroComum}</b> ${T.erroResponder} ${e.ev}, ${T.erroQuando} ${e.erro} ${T.erroFim}</div></div>`).join('');
  return `<section class="pagina gab">${topo(m, T.gabTopo)}
  <h1>${T.gabTit} ${m.titulo}</h1>
  ${itens}
  <div class="box"><b>${T.palavraCodigo} ${m.palavra}.</b> ${m.solucao}</div>
  <div class="rodape">Math Missions · ${T.gabRodape}</div></section>`;
}

const OUT = path.join(__dirname, 'html', TODAS ? 'missoes' : LANG === 'pt' ? '' : LANG);
fs.mkdirSync(OUT, { recursive: true });
const doc = (titulo, corpo) => `<!doctype html><html lang="${T.lang}"><head><meta charset="utf-8"><title>${titulo}</title><style>${CSS}</style></head><body>${corpo}</body></html>`;
const corpoDe = (m) => `${paginaAdulto(m)}${paginasMissao(m)}${paginaGabarito(m)}`;
for (const m of missoes) {
  fs.writeFileSync(path.join(OUT, m.id + '.html'), doc(m.titulo, corpoDe(m)));
  console.log(`ok  ${m.id}: contas conferidas`);
}
if (TODAS) for (const nv of [1, 2, 3]) {
  const doNivel = missoes.filter((m) => m.id.startsWith(`n${nv}-`));
  fs.writeFileSync(path.join(OUT, `nivel-${nv}.html`), doc(`Math Missions · Nível ${nv}`, doNivel.map(corpoDe).join('')));
  console.log(`ok  nível ${nv}: ${doNivel.length} missões`);
}
