// Gera os bônus em PT (P&B, para imprimir): 30 Desafios Relâmpago, Kit de Missão e Mapa de Domínio.
// Uso: node gerar-bonus.js -> ./html/{desafios-relampago,kit-missao,mapa-dominio}.html (PDF com ferramentas/gerar-pdf.js)
const fs = require('fs');
const path = require('path');
const { barra } = require('./barras');
const desafios = require('./desafios');

// ---- conferência das contas dos desafios ----
const erros = desafios.map((d, i) => (d.calc() === d.r ? null : `Desafio ${i + 1}: resposta "${d.r}" ≠ cálculo "${d.calc()}"`)).filter(Boolean);
if (desafios.length !== 30) erros.push(`São ${desafios.length} desafios, e não 30`);
if (erros.length) { console.error(erros.join('\n')); process.exit(1); }

// ---- missões do índice (para o Mapa de Domínio) ----
const indice = fs.readFileSync(path.join(__dirname, '..', 'INDICE.md'), 'utf8');
const missoes = [...indice.matchAll(/^\| ([123])-(\d\d) \| ([^|]+?) \|/gm)].map((m) => ({
  nivel: +m[1], n: m[2], nome: m[3].replace(/\*\*/g, '').replace(/✅ amostra/, '').replace(/^Fechamento \d:\s*/, '').trim(), fechamento: m[2] === '10',
}));
if (missoes.length !== 30) { console.error(`O índice tem ${missoes.length} missões, e não 30`); process.exit(1); }

const BASE = `
* { box-sizing: border-box; }
body { font-family: Inter, 'DejaVu Sans', sans-serif; color: #111; margin: 0; }
.pagina { page-break-after: always; position: relative; overflow: hidden; }
.pagina:last-child { page-break-after: auto; }
.topo { display: flex; align-items: center; gap: 10px; border-bottom: 2px solid #111; padding-bottom: 4px; margin-bottom: 10px; font-size: 9pt; font-weight: 800; letter-spacing: .05em; }
.topo .tag { background: #111; color: #fff; border-radius: 6px; padding: 3px 10px; font-size: 10pt; letter-spacing: 0; }
.topo .dir { margin-left: auto; }
h1 { font-size: 24pt; margin: 6px 0 8px; line-height: 1.1; }
h2 { font-size: 15pt; margin: 12px 0 6px; }
.box { border: 1.5px solid #111; border-radius: 10px; padding: 8px 14px; margin: 8px 0; }
.small { font-size: 9.5pt; color: #333; }
.rodape { position: absolute; bottom: 0; left: 0; right: 0; font-size: 8pt; color: #555; border-top: 1px solid #aaa; padding-top: 3px; }
.linha { display: inline-block; border-bottom: 1.4px solid #111; height: 1.1em; vertical-align: bottom; }
`;
const topo = (tag, dir, marca = 'MATH&nbsp;MISSIONS') => `<div class="topo"><span>${marca}</span><span class="tag">${tag}</span><span class="dir">${dir}</span></div>`;
const raio = '<svg viewBox="0 0 24 24" width="18" height="18" style="vertical-align:-3px"><path d="M13 2 4 14h7l-1 8 9-12h-7z" fill="#111"/></svg>';
const nivelDe = (i) => (i < 10 ? 1 : i < 20 ? 2 : 3);

// =============== 1. DESAFIOS RELÂMPAGO ===============
function desafiosHTML() {
  const css = BASE + `
@page { size: A4; margin: 12mm; }
.pagina { height: 272mm; }
body { font-size: 11.5pt; line-height: 1.42; }
.card { border: 2px solid #111; border-radius: 12px; padding: 9px 12px; height: 80mm; margin-bottom: 6mm; display: flex; flex-direction: column; gap: 5px; page-break-inside: avoid; }
.card .cab { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 11pt; }
.card .cab .n { background: #111; color: #fff; border-radius: 7px; padding: 2px 9px; }
.card .cab .min { margin-left: auto; font-size: 9pt; font-weight: 700; border: 1px solid #111; border-radius: 10px; padding: 1px 8px; }
.card p { margin: 0; font-size: 12.5pt; }
.card .area { flex: 1; border: 1px solid #999; border-radius: 6px; position: relative; background-image: linear-gradient(#e2e2e2 1px, transparent 1px), linear-gradient(90deg, #e2e2e2 1px, transparent 1px); background-size: 5mm 5mm; }
.card .area span { position: absolute; left: 6px; top: 3px; font-size: 8.5pt; font-weight: 700; background: #fff; padding: 0 3px; }
.card .fim { display: flex; gap: 14px; align-items: center; font-weight: 700; font-size: 11pt; }
.card .fim .linha { width: 52mm; }
.card .fim .ok { margin-left: auto; font-size: 9pt; font-weight: 600; display: flex; align-items: center; gap: 5px; }
.card .fim .ok i { width: 12px; height: 12px; border: 1.5px solid #111; border-radius: 50%; display: inline-block; }
.passos { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin: 8px 0; }
.passos div { border: 1.5px solid #111; border-radius: 8px; padding: 6px 8px; font-weight: 800; }
.passos small { display: block; font-weight: 400; font-size: 9pt; }
.gab { font-size: 10pt; line-height: 1.3; }
.gab .it { display: grid; grid-template-columns: 22mm 1fr 62mm; gap: 8px; align-items: center; border-bottom: 1px solid #bbb; padding: 4px 0; page-break-inside: avoid; }
.gab .it b.r { font-size: 12pt; }
.gab svg { width: 62mm; height: auto; }
.gab .tipo { font-size: 8.5pt; color: #333; }
`;
  const capa = `<section class="pagina">${topo('Bônus', '30 Desafios Relâmpago')}
  <h1>${raio} 30 Desafios Relâmpago</h1>
  <p style="font-size:13pt;margin:0 0 8px">Um mini-problema por dia, em 5 minutos, para treinar o <b>desenhe antes de calcular</b> nos dias sem missão.</p>
  <div class="box"><b>Como usar (para o adulto)</b>
  <ul style="margin:6px 0 0;padding-left:20px">
    <li>Imprima as folhas e recorte, se quiser, um desafio por dia. Cabe antes do jantar, no carro ou na sala de espera.</li>
    <li>Siga a ordem do nível do seu filho: <b>desafios 1 a 10 · Nível 1</b>, <b>11 a 20 · Nível 2</b>, <b>21 a 30 · Nível 3</b>. Comece pelo desafio 1, mesmo que seu filho esteja no Nível 2 ou 3: os primeiros levam 1 minuto e firmam o desenho. Se ficar fácil, pule para o primeiro desafio do nível dele.</li>
    <li>A regra é uma só: <b>primeiro o desenho, depois a conta</b>. Se ele travar, pergunte “O que a pergunta quer saber?” e “Me mostra isso numa barra”.</li>
    <li>O gabarito, com o desenho esperado de cada desafio, está nas últimas páginas. Vale qualquer desenho com as mesmas partes.</li>
    <li>Desafio feito? Ele pinta o círculo do dia no Mapa de Domínio.</li>
  </ul></div>
  <div class="passos"><div>1 LEIA<small>Conte a história com suas palavras.</small></div><div>2 DESENHE<small>Faça a barra e ponha ? no que quer descobrir.</small></div><div>3 CALCULE<small>Faça a conta que o desenho mostra.</small></div><div>4 CONFIRA<small>A resposta cabe no desenho?</small></div></div>
  <div class="rodape">Math Missions · 30 Desafios Relâmpago · bônus</div></section>`;
  let paginas = '';
  for (let p = 0; p < 10; p++) {
    const tres = desafios.slice(p * 3, p * 3 + 3).map((d, k) => {
      const i = p * 3 + k;
      return `<div class="card"><div class="cab"><span class="n">${i + 1}</span><span>Desafio ${i + 1}</span><span class="min">${raio} 5 min · Nível ${nivelDe(i)}</span></div>
      <p>${d.texto}</p>
      <div class="area"><span>1º DESENHE</span></div>
      <div class="fim"><span>2º CALCULE · Resposta: <span class="linha"></span></span><span class="ok"><i></i> pintei no Mapa</span></div></div>`;
    }).join('');
    paginas += `<section class="pagina">${topo('Nível ' + nivelDe(p * 3) + (nivelDe(p * 3) !== nivelDe(p * 3 + 2) ? '–' + nivelDe(p * 3 + 2) : ''), `Desafios ${p * 3 + 1} a ${p * 3 + 3}`)}${tres}<div class="rodape">Math Missions · 30 Desafios Relâmpago</div></section>`;
  }
  let gab = '';
  for (let p = 0; p < 3; p++) {
    const itens = desafios.slice(p * 10, p * 10 + 10).map((d, k) => {
      const i = p * 10 + k;
      return `<div class="it"><div><b>Desafio ${i + 1}</b><br><b class="r">${d.r}</b></div><div>${d.conta}<div class="tipo">Desenho: ${d.desenho}</div></div><div>${barra(d.modelo, { largura: 360, alturaBarra: 22, fonte: 11, totalJunto: d.junto })}</div></div>`;
    }).join('');
    gab += `<section class="pagina gab">${topo('Gabarito · Nível ' + (p + 1), 'Para o adulto')}<h2 style="margin-top:0">Gabarito dos desafios ${p * 10 + 1} a ${p * 10 + 10}</h2>${itens}<div class="rodape">Math Missions · 30 Desafios Relâmpago · gabarito</div></section>`;
  }
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>30 Desafios Relâmpago</title><style>${css}</style></head><body>${capa}${paginas}${gab}</body></html>`;
}

// =============== 2. KIT DE MISSÃO ===============
function kitHTML() {
  const css = BASE + `
@page { size: A4; margin: 12mm; }
.pagina { height: 272mm; }
body { font-size: 11.5pt; line-height: 1.4; }
.dica { font-size: 10pt; margin: 0 0 8px; }
.crachas { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px dashed #777; border-left: 1px dashed #777; }
.cracha { border-right: 1px dashed #777; border-bottom: 1px dashed #777; height: 108mm; padding: 6mm 6mm 5mm; display: flex; flex-direction: column; position: relative; }
.cracha .furo { position: absolute; top: 3mm; left: 50%; margin-left: -7mm; width: 14mm; height: 3.5mm; border: 1px solid #111; border-radius: 2mm; }
.cracha .tit { text-align: center; font-weight: 900; letter-spacing: .28em; font-size: 15pt; margin-top: 4mm; }
.cracha .sub { text-align: center; font-size: 8.5pt; letter-spacing: .14em; margin-bottom: 4mm; }
.cracha .foto { height: 34mm; width: 30mm; margin: 0 auto 4mm; border: 1.8px solid #111; border-radius: 3mm; display: flex; align-items: flex-end; justify-content: center; font-size: 7.5pt; padding-bottom: 1.5mm; }
.cracha .campo { font-size: 9pt; font-weight: 700; margin-top: 3mm; }
.cracha .campo span { display: block; border-bottom: 1px solid #111; height: 6mm; }
.cracha .niveis { display: flex; gap: 6px; justify-content: center; margin-top: auto; font-size: 8.5pt; font-weight: 700; }
.cracha .niveis i { display: inline-block; width: 11px; height: 11px; border: 1.5px solid #111; border-radius: 50%; vertical-align: -1px; margin-right: 3px; }
.ficha { border: 2px solid #111; border-radius: 10px; padding: 8px 12px; height: 128mm; margin-bottom: 6mm; display: flex; flex-direction: column; gap: 6px; }
.ficha .cab { display: flex; justify-content: space-between; font-weight: 800; }
table { width: 100%; border-collapse: collapse; }
th, td { border: 1px solid #111; padding: 3px 6px; font-size: 10pt; text-align: left; }
td { height: 9mm; }
.caixas { display: flex; gap: 6px; }
.caixas div { width: 12mm; height: 12mm; border: 2px solid #111; border-radius: 6px; }
.tipos { display: flex; gap: 14px; font-size: 10pt; }
.tipos span::before { content: ''; display: inline-block; width: 11px; height: 11px; border: 1.5px solid #111; border-radius: 3px; margin-right: 5px; vertical-align: -1px; }
.cert { height: 128mm; border: 4px double #111; border-radius: 6mm; padding: 8mm 12mm; text-align: center; display: flex; flex-direction: column; justify-content: space-between; margin-bottom: 6mm; }
.cert .selo { font-weight: 900; letter-spacing: .35em; font-size: 10pt; }
.cert h2 { font-size: 23pt; margin: 2mm 0; letter-spacing: .03em; }
.cert p { margin: 0; font-size: 12.5pt; }
.cert .nome { border-bottom: 1.5px solid #111; height: 11mm; margin: 2mm 16mm; }
.cert .niveis { display: flex; justify-content: center; gap: 22px; font-weight: 800; }
.cert .niveis span::before { content: ''; display: inline-block; width: 14px; height: 14px; border: 2px solid #111; border-radius: 50%; margin-right: 6px; vertical-align: -2px; }
.cert .assin { display: flex; justify-content: space-around; font-size: 9pt; }
.cert .assin div { border-top: 1px solid #111; width: 60mm; padding-top: 2px; }
`;
  const cracha = `<div class="cracha"><div class="furo"></div><div class="tit">AGENTE</div><div class="sub">MATH MISSIONS · DESENHE ANTES DE CALCULAR</div>
    <div class="foto">desenhe seu rosto</div>
    <div class="campo">Nome de agente<span></span></div><div class="campo">Código secreto<span></span></div>
    <div class="niveis"><span><i></i>Nível 1</span><span><i></i>Nível 2</span><span><i></i>Nível 3</span></div></div>`;
  const ficha = `<div class="ficha"><div class="cab"><span>FICHA DE PISTAS</span><span>Missão nº <span class="linha" style="width:22mm"></span></span></div>
    <div><b>Nome da missão:</b> <span class="linha" style="width:120mm"></span></div>
    <div><b>Agente(s):</b> <span class="linha" style="width:132mm"></span></div>
    <table><tr><th style="width:18mm">Etapa</th><th>Minha resposta</th><th style="width:22mm">Letra</th></tr>
    <tr><td>1</td><td></td><td></td></tr><tr><td>2</td><td></td><td></td></tr><tr><td>3</td><td></td><td></td></tr><tr><td>4</td><td></td><td></td></tr></table>
    <div style="display:flex;align-items:center;gap:12px"><b>Palavra-código:</b><div class="caixas"><div></div><div></div><div></div><div></div></div></div>
    <div><b>O desenho que eu usei na etapa “desenhe o problema”:</b><div class="tipos" style="margin-top:4px"><span>parte e todo</span><span>comparação</span><span>pedaços iguais</span><span>outro</span></div></div>
    <div><b>O que aconteceu?</b> <span class="linha" style="width:140mm"></span><br><span class="linha" style="width:100%;margin-top:6px"></span></div></div>`;
  const cert = `<div class="cert"><div class="selo">MATH MISSIONS</div><div><h2>Certificado de Missão Cumprida</h2><p>Certificamos que o agente</p></div><div class="nome"></div>
    <p>fechou o caso e concluiu o</p><div class="niveis"><span>Nível 1</span><span>Nível 2</span><span>Nível 3</span></div>
    <p>desenhando o problema antes de calcular.</p>
    <div class="assin"><div>Chefe da Missão</div><div>Data</div></div></div>`;
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Kit de Missão</title><style>${css}</style></head><body>
  <section class="pagina">${topo('Bônus · Kit de Missão', 'Crachás de agente')}<h1>Crachás de agente</h1>
  <p class="dica">Entregue antes da primeira missão. Imprima, recorte na linha tracejada e passe um barbante no furo. A criança desenha o próprio rosto e inventa um código secreto. Quando fechar um nível, ela pinta o círculo. São 4 crachás por folha: um para cada irmão (e um para o adulto, se quiser jogar junto).</p>
  <div class="crachas">${cracha.repeat(4)}</div><div class="rodape">Math Missions · Kit de Missão</div></section>
  <section class="pagina">${topo('Bônus · Kit de Missão', 'Ficha de pistas')}<p class="dica">Uma ficha por missão. A criança anota cada resposta e a letra da tabela de código. No fim, monta a palavra-código e marca o desenho que usou. Imprima quantas precisar.</p>
  ${ficha}${ficha}<div class="rodape">Math Missions · Kit de Missão</div></section>
  <section class="pagina">${topo('Bônus · Kit de Missão', 'Certificado')}<p class="dica">Entregue quando a criança fechar um nível (a Missão de Fechamento com a palavra-código certa e pelo menos 3 dos 4 desenhos explicados). Marque o nível concluído. São 2 por folha.</p>
  ${cert}${cert}<div class="rodape">Math Missions · Kit de Missão</div></section>
  </body></html>`;
}

// =============== 3. MAPA DE DOMÍNIO ===============
function mapaHTML() {
  const css = BASE + `
@page { size: A4 landscape; margin: 10mm; }
.pagina { height: 189mm; }
body { font-size: 10pt; }
h1 { font-size: 22pt; margin: 2px 0 2px; }
.sub { margin: 0 0 6px; font-size: 10.5pt; }
.nivel { display: grid; grid-template-columns: 30mm repeat(10, 1fr); gap: 2.2mm; margin-bottom: 3.2mm; align-items: stretch; }
.nivel .rot { border: 2px solid #111; border-radius: 8px; padding: 4px 6px; display: flex; flex-direction: column; justify-content: center; }
.nivel .rot b { font-size: 13pt; }
.nivel .rot small { font-size: 8pt; line-height: 1.2; }
.casa { border: 1.6px solid #111; border-radius: 8px; height: 31mm; padding: 4px 5px; display: flex; flex-direction: column; position: relative; }
.casa .num { font-weight: 900; font-size: 11pt; }
.casa .nome { font-size: 7.6pt; line-height: 1.18; margin-top: 2px; }
.casa .check { margin-top: auto; display: flex; gap: 4px; font-size: 6.6pt; line-height: 1.15; align-items: flex-end; }
.casa .check i { flex: none; width: 10px; height: 10px; border: 1.3px solid #111; border-radius: 2px; }
.casa.fecha { border-width: 3px; background: repeating-linear-gradient(45deg, #fff, #fff 6px, #eee 6px, #eee 8px); }
.casa.fecha .num::after { content: ' ★'; }
.seta { text-align: center; font-size: 8.5pt; font-weight: 700; margin: -1.5mm 0 1.4mm; letter-spacing: .03em; }
.desafios { border: 1.6px solid #111; border-radius: 8px; padding: 4px 8px; display: flex; align-items: center; gap: 8px; }
.desafios b { white-space: nowrap; font-size: 9.5pt; }
.desafios .bolas { display: flex; flex-wrap: nowrap; gap: 1.5mm; }
.desafios .bolas span { width: 5.6mm; height: 5.6mm; border: 1.3px solid #111; border-radius: 50%; font-size: 6.5pt; display: flex; align-items: center; justify-content: center; }
.leg { display: flex; gap: 16px; font-size: 8.8pt; margin-top: 3mm; }
`;
  const linhas = [1, 2, 3].map((nv) => {
    const sub = { 1: 'O primeiro desenho', 2: 'Dois passos', 3: 'Vários passos' }[nv];
    const casas = missoes.filter((m) => m.nivel === nv).map((m) => `<div class="casa${m.fechamento ? ' fecha' : ''}"><span class="num">${nv}-${m.n}</span><span class="nome">${m.fechamento ? '<b>Fechamento</b><br>' : ''}${m.nome}</span><span class="check"><i></i>${m.fechamento ? 'portão do nível' : 'expliquei o desenho'}</span></div>`).join('');
    return `<div class="nivel"><div class="rot"><b>Nível ${nv}</b><small>${sub}</small></div>${casas}</div>`;
  }).join('');
  const bolas = Array.from({ length: 30 }, (_, i) => `<span>${i + 1}</span>`).join('');
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Mapa de Domínio</title><style>${css}</style></head><body>
  <section class="pagina">${topo('Bônus', 'Para pendurar na geladeira')}
  <h1>Mapa de Domínio</h1>
  <p class="sub">Agente: <span class="linha" style="width:70mm"></span> &nbsp; Pinte a casa da missão quando a <b>palavra-código fechar</b> e você <b>explicar o seu desenho</b>. A casa ★ é o Fechamento: o portão para o próximo nível. No ★, explique pelo menos 3 dos 4 desenhos.</p>
  ${linhas}
  <div class="desafios"><b>⚡ Desafios Relâmpago</b><div class="bolas">${bolas}</div></div>
  <div class="leg"><span>■ Missão vencida: pinte a casa</span><span>★ Fechamento: libera o próximo nível</span><span>● Desafio do dia: pinte o círculo</span></div>
  <div class="rodape">Math Missions · Mapa de Domínio</div></section></body></html>`;
}

const OUT = path.join(__dirname, 'html');
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'desafios-relampago.html'), desafiosHTML());
fs.writeFileSync(path.join(OUT, 'kit-missao.html'), kitHTML());
fs.writeFileSync(path.join(OUT, 'mapa-dominio.html'), mapaHTML());
console.log('ok  30 desafios conferidos · kit · mapa com ' + missoes.length + ' missões do índice');
