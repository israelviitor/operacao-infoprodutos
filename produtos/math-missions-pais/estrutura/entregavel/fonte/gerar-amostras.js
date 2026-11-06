// Gera o HTML das missões-amostra para pais e confere as contas.
// Uso: node gerar-amostras.js  -> ./html/<id>.html  (o PDF sai com ferramentas/gerar-pdf.js)
const fs = require('fs');
const path = require('path');
const missoes = require('./missoes-amostra');

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
  m.tabela.sort((a, b) => a[0].localeCompare(b[0], 'pt-BR', { numeric: true }));
}
if (erros.length) { console.error(erros.join('\n')); process.exit(1); }

const ICONES = {
  biscoito: '<svg viewBox="0 0 120 120" width="120"><circle cx="60" cy="60" r="44" fill="none" stroke="#000" stroke-width="3"/><circle cx="45" cy="45" r="5"/><circle cx="72" cy="50" r="5"/><circle cx="55" cy="72" r="5"/><circle cx="78" cy="76" r="4"/><circle cx="38" cy="68" r="4"/><path d="M96 34 q10 -8 14 4" fill="none" stroke="#000" stroke-width="3"/></svg>',
  mapa: '<svg viewBox="0 0 140 110" width="140"><path d="M10 15 L50 5 L90 15 L130 5 L130 95 L90 105 L50 95 L10 105 Z" fill="none" stroke="#000" stroke-width="3"/><path d="M50 5 V95 M90 15 V105" stroke="#000" stroke-width="1.5" stroke-dasharray="4 4"/><path d="M22 85 Q45 60 65 70 T110 35" fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="6 5"/><path d="M104 28 l12 12 M116 28 l-12 12" stroke="#000" stroke-width="4"/></svg>',
  robo: '<svg viewBox="0 0 120 120" width="120"><ellipse cx="60" cy="74" rx="46" ry="30" fill="none" stroke="#000" stroke-width="3"/><circle cx="44" cy="68" r="7" fill="none" stroke="#000" stroke-width="3"/><circle cx="76" cy="68" r="7" fill="none" stroke="#000" stroke-width="3"/><path d="M48 86 q12 8 24 0" fill="none" stroke="#000" stroke-width="3"/><path d="M60 44 V24" stroke="#000" stroke-width="3"/><circle cx="60" cy="20" r="5" fill="none" stroke="#000" stroke-width="3"/><path d="M14 40 l8 6 M106 40 l-8 6 M20 30 l6 8 M100 30 l-6 8" stroke="#000" stroke-width="2.5"/></svg>',
};

const CSS = `
@page { size: A4; margin: 14mm; }
* { box-sizing: border-box; }
body { font-family: Inter, 'DejaVu Sans', sans-serif; color: #111; font-size: 12.5pt; line-height: 1.45; margin: 0; }
.pagina { page-break-after: always; position: relative; height: 266mm; overflow: hidden; }
.pagina:last-child { page-break-after: auto; }
.topo { display: flex; align-items: center; gap: 10px; border-bottom: 2px solid #111; padding-bottom: 5px; margin-bottom: 12px; font-size: 9.5pt; font-weight: 800; letter-spacing: .05em; }
.idade { background: #111; color: #fff; border-radius: 6px; padding: 3px 10px; font-size: 11pt; }
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
.caixas div { width: 18mm; height: 18mm; border: 2px solid #111; border-radius: 8px; }
.linha { border-bottom: 1.5px solid #111; height: 8mm; margin: 4px 0; }
.adulto li, .gab li { margin-bottom: 6px; }
.box { border: 1.5px solid #111; border-radius: 10px; padding: 8px 14px; margin: 8px 0; }
.gab .item { border-bottom: 1px solid #999; padding: 8px 0; page-break-inside: avoid; }
.gab .r { font-weight: 800; font-size: 13.5pt; }
.small { font-size: 10.5pt; color: #333; }
.rodape { position: absolute; bottom: 0; left: 0; right: 0; font-size: 8.5pt; color: #555; border-top: 1px solid #aaa; padding-top: 3px; }
`;

const topo = (m, dir) => `<div class="topo"><span>MATH&nbsp;MISSIONS</span><span class="idade">${m.idade}</span><span class="dir">${dir}</span></div>`;

function paginaAdulto(m) {
  return `<section class="pagina adulto">${topo(m, 'Para o adulto · leia antes (2 minutos)')}
  <h1>${m.titulo}</h1>
  <div class="box"><b>Tempo:</b> ${m.tempo} · <b>Pratica:</b> ${m.praticas} · <b>Material:</b> lápis, borracha e esta folha impressa (opcional: relógio de ponteiros, feijões ou tampinhas).</div>
  <h2>Como conduzir</h2>
  <ol>
    <li><b>Leia a abertura em voz alta, com clima de mistério.</b> A 1ª etapa é curtinha, de propósito: é para a criança entrar no jogo rápido.</li>
    <li><b>Não diga qual conta fazer.</b> O enunciado não diz se é de mais, de menos ou de vezes. Descobrir isso é o exercício. Pergunte: “O que o problema está pedindo?”</li>
    <li><b>Se a criança travar, use a pergunta de apoio</b> do gabarito (última página). Ela ajuda sem entregar a resposta.</li>
    <li><b>Cada resposta vira uma letra.</b> No fim, a criança procura as respostas na tabela de código. Se a palavra não fizer sentido, alguma conta está errada: volte e procure juntos. A própria folha corrige.</li>
    <li><b>Feche perguntando:</b> “Como você descobriu qual conta fazer na etapa ${m.etapas.length - 1}?” Explicar o raciocínio fixa mais do que acertar.</li>
  </ol>
  <h2>Com irmãos</h2>
  <div class="box">Imprima as páginas da missão uma vez e resolvam juntos, trocando de papel a cada etapa: <b>leitor</b> (lê em voz alta), <b>calculista</b> (faz a conta) e <b>conferente</b> (refaz de outro jeito e diz se faz sentido). Com 2 crianças, o conferente também lê. Se a diferença de idade for grande, cada um faz a missão da sua idade e os dois comparam as palavras-código no fim.</div>
  <h2>O que não fazer</h2>
  <ul><li>Não corrija na hora: deixe a palavra-código mostrar o erro.</li><li>Não transforme em prova: é um jogo. Se cansou, pare e continue outro dia.</li></ul>
  <div class="rodape">Math Missions · ${m.titulo} · missão de amostra</div></section>`;
}

function etapaHTML(e, i) {
  return `<div class="etapa"><span class="num">${i + 1}</span><span class="tit">${e.titulo}</span>${e.curta ? '<span class="tag">rapidinha</span>' : ''}
  <p>${e.enunciado}</p>
  <div class="espaco${e.curta ? ' curto' : ''}"><span>Espaço para pensar e fazer a conta</span></div>
  <div class="resp">Minha resposta: <i></i></div></div>`;
}

function paginasMissao(m) {
  const [a, b, c, d] = m.etapas;
  return `<section class="pagina missao">${topo(m, 'Missão')}
  <div class="cab"><div>${ICONES[m.icone]}</div><div><h1>${m.titulo}</h1></div></div>
  <div class="abertura">${m.abertura}</div>
  ${etapaHTML(a, 0)}${etapaHTML(b, 1)}
  <div class="dica"><b>DICA:</b> nenhuma pista diz qual conta fazer. Leia com calma, descubra o que está sendo pedido e escolha a conta.</div>
  <div class="rodape">Math Missions · ${m.titulo}</div></section>
  <section class="pagina missao">${topo(m, 'Missão (continuação)')}
  ${etapaHTML(c, 2)}${etapaHTML(d, 3)}
  <h2>Abra o código</h2>
  <p>Procure cada resposta na tabela e escreva a letra na caixa da etapa.</p>
  <table class="cod"><tr>${m.tabela.map((t) => `<td>${t[0]}</td>`).join('')}</tr><tr>${m.tabela.map((t) => `<td class="l">${t[1]}</td>`).join('')}</tr></table>
  <div class="caixas">${m.etapas.map(() => '<div></div>').join('')}</div>
  <p><b>O que aconteceu?</b></p><div class="linha"></div><div class="linha"></div>
  <div class="rodape">Math Missions · ${m.titulo}</div></section>`;
}

function paginaGabarito(m) {
  const itens = m.etapas.map((e, i) => `<div class="item"><b>Etapa ${i + 1} — ${e.titulo}</b> · <span class="r">${e.r}</span> (letra ${m.palavra[i]})
  <div><b>Como pensar:</b> ${e.pensar} <span class="small">Conta: ${e.conta}.</span></div>
  <div><b>Se travar, pergunte:</b> ${e.apoio}</div>
  <div class="small"><b>Erro mais comum:</b> responder ${e.ev}, quando a criança ${e.erro} Essa resposta leva a outra letra, e a palavra não fecha.</div></div>`).join('');
  return `<section class="pagina gab">${topo(m, 'Gabarito explicado · para o adulto')}
  <h1>Gabarito: ${m.titulo}</h1>
  ${itens}
  <div class="box"><b>Palavra-código: ${m.palavra}.</b> ${m.solucao}</div>
  <div class="rodape">Math Missions · gabarito</div></section>`;
}

const OUT = path.join(__dirname, 'html');
fs.mkdirSync(OUT, { recursive: true });
for (const m of missoes) {
  const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>${m.titulo}</title><style>${CSS}</style></head><body>${paginaAdulto(m)}${paginasMissao(m)}${paginaGabarito(m)}</body></html>`;
  fs.writeFileSync(path.join(OUT, m.id + '.html'), html);
  console.log(`ok  ${m.id}: contas conferidas`);
}
