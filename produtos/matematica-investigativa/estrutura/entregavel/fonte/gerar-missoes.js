// Gera o HTML diagramado de cada missão a partir dos dados em ./missoes/*.js
// e confere o gabarito por cálculo (o script para se uma resposta não bater).
// Uso: node gerar-missoes.js            -> gera ./html/<id>.html para todas as missões
//      node gerar-missoes.js 3ano-horta -> só uma missão
const fs = require('fs');
const path = require('path');

const PASTA_MISSOES = path.join(__dirname, 'missoes');
const PASTA_HTML = path.join(__dirname, 'html');
const NIVEIS = [
  { n: 1, nome: 'Nível 1', estrelas: '★', desc: 'apoio' },
  { n: 2, nome: 'Nível 2', estrelas: '★★', desc: 'esperado para a série' },
  { n: 3, nome: 'Nível 3', estrelas: '★★★', desc: 'desafio' },
];

// ---------- conferência do gabarito ----------
function conferir(m) {
  const erros = [];
  if (m.etapas.length !== 4) erros.push(`${m.id}: precisa de 4 etapas`);
  m.etapas.forEach((e, ie) => {
    if (e.pistasErradas.length !== 3) erros.push(`${m.id} E${ie + 1}: precisa de 3 pistas erradas`);
    e.niveis.forEach((nv, iv) => {
      const tag = `${m.id} E${ie + 1} N${iv + 1}`;
      const calc = String(nv.calc());
      if (calc !== String(nv.resposta)) erros.push(`${tag}: resposta "${nv.resposta}" mas o cálculo dá "${calc}"`);
      const valores = nv.opcoes.map((o) => String(o.v));
      if (valores.length !== 4) erros.push(`${tag}: precisa de 4 opções`);
      if (new Set(valores).size !== valores.length) erros.push(`${tag}: opções repetidas`);
      if (valores.filter((v) => v === String(nv.resposta)).length !== 1) erros.push(`${tag}: a resposta certa não aparece exatamente 1 vez nas opções`);
      nv.opcoes.forEach((o) => {
        if (String(o.v) === String(nv.resposta)) return;
        if (!o.erro) erros.push(`${tag}: opção ${o.v} sem explicação do erro`);
        // a conta do erro precisa dar exatamente o número da opção
        if (typeof o.calc !== 'function') erros.push(`${tag}: opção ${o.v} sem calc() do erro`);
        else if (String(o.calc()) !== String(o.v)) erros.push(`${tag}: opção ${o.v} — a conta do erro dá "${o.calc()}"`);
      });
    });
    // As 4 pistas não podem se diferenciar pela forma: sem negrito, sem palavra em CAIXA ALTA, tamanhos parecidos.
    const todas = [e.pistaCerta, ...e.pistasErradas];
    todas.forEach((t) => {
      if (/<b>/.test(t)) erros.push(`${m.id} E${ie + 1}: pista com negrito: ${t}`);
      const caps = t.replace(/R\$/g, '').match(/\b[A-ZÀ-Ú]{3,}\b/g);
      if (caps) erros.push(`${m.id} E${ie + 1}: pista com CAIXA ALTA (${caps.join(', ')}): ${t}`);
    });
    const tam = todas.map((t) => t.length), min = Math.min(...tam), max = Math.max(...tam);
    if (max > min * 1.6) erros.push(`${m.id} E${ie + 1}: pistas com tamanhos muito diferentes (${tam.join(', ')})`);
  });
  return erros;
}

// Embaralha as opções do cadeado com semente fixa (sempre a mesma ordem para a mesma missão)
// e evita que a resposta certa caia na mesma linha em duas etapas do mesmo nível.
function semente(str) { let h = 2166136261; for (const c of str) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0) % 1000) / 1000; }
// Cada grupo faz um nível só: a regra vale entre as 4 etapas do mesmo nível.
function ordenar(m) {
  [0, 1, 2].forEach((iv) => {
    const usadas = new Set();
    m.etapas.forEach((e, ie) => {
      const nv = e.niveis[iv];
      const rnd = semente(`${m.id}-${ie}-${iv}`);
      let ops;
      for (let t = 0; t < 20; t++) {
        ops = [...nv.opcoes].map((o) => [rnd(), o]).sort((x, y) => x[0] - y[0]).map((x) => x[1]);
        const pos = ops.findIndex((o) => String(o.v) === String(nv.resposta));
        if (!usadas.has(pos)) { usadas.add(pos); break; }
      }
      nv.ordem = ops;
    });
  });
}

// ---------- HTML ----------
const esc = (s) => String(s);
const sub = (t, r) => t.replace(/\{r\}/g, r);

function cabecalho(m, direita) {
  return `<div class="topo"><span class="marca">MATEMÁTICA EM MISSÃO</span><span class="serie">${m.serie}</span><span class="dir">${direita || ''}</span></div>`;
}

function paginaProfessora(m) {
  const linhas = m.etapas.map((e, i) => `<tr><td>${i + 1}</td><td>${e.titulo}</td><td>${e.conteudo}</td><td class="cod">${e.bncc}${e.saeb ? `<br><span class="saeb">Saeb ${e.saeb}</span>` : ''}</td></tr>`).join('');
  return `<section class="pagina prof">
  ${cabecalho(m, 'Página da professora')}
  <h1 class="titulo-missao">${m.titulo}</h1>
  <p class="sub">${m.resumo}</p>
  <div class="ficha-tecnica">
    <div><b>Tempo:</b> ${m.tempo}</div>
    <div><b>Grupos:</b> 3 a 5 alunos (ou individual)</div>
    <div><b>Imprimir por grupo:</b> 6 folhas em preto e branco — abertura + 4 etapas do nível do grupo + ficha final</div>
  </div>
  <h2>Roteiro de 2 minutos</h2>
  <ol class="roteiro">
    <li><b>Monte os grupos e escolha o nível de cada um.</b> O mistério é o mesmo nos 3 níveis; só mudam os números e a quantidade de passos. Nível 1 ★ = apoio · Nível 2 ★★ = esperado para a série · Nível 3 ★★★ = desafio.</li>
    <li><b>Leia a abertura em voz alta</b> (ou entregue uma por grupo). Mostre os ${m.alvosPlural} e combine a missão: ${m.missaoCurta}</li>
    <li><b>Entregue as 4 etapas grampeadas.</b> Em cada etapa, ninguém diz qual conta fazer: o grupo acha os dados, escolhe a conta, resolve e confere.</li>
    <li><b>O cadeado no pé da página corrige sozinho.</b> As respostas erradas da tabela são os erros mais comuns da série e levam a pistas falsas. Com cada pista, o grupo risca na ficha final ${m.alvosRiscar} que não combina. Com uma pista falsa, a conclusão não fecha e o grupo volta para procurar o erro.</li>
    <li><b>Feche com 5 minutos de conversa:</b> peça a cada grupo para contar <i>como decidiu qual conta fazer</i> em uma das etapas. Confira com o gabarito comentado.</li>
  </ol>
  <h2>Habilidades trabalhadas</h2>
  <table class="hab"><thead><tr><th>Etapa</th><th>Cena</th><th>Conteúdo</th><th>Código</th></tr></thead><tbody>${linhas}</tbody></table>
  <p class="nota">Os códigos são da BNCC${m.etapas.some((e) => e.saeb) ? ' e dos descritores da Matriz de Referência do Saeb (5º ano)' : ''}. Material independente, sem vínculo com o MEC ou o Inep.</p>
</section>`;
}

function paginaGabarito(m) {
  const blocos = m.etapas.map((e, ie) => {
    const linhas = e.niveis.map((nv, iv) => {
      const erradas = nv.opcoes.filter((o) => String(o.v) !== String(nv.resposta)).map((o) => `<li><b>${o.v}</b> — ${o.erro}</li>`).join('');
      return `<tr><td class="nv">${NIVEIS[iv].estrelas}</td><td class="resp">${nv.resposta}</td><td>${nv.conta}</td><td><ul>${erradas}</ul></td></tr>`;
    }).join('');
    return `<h3>Etapa ${ie + 1} — ${e.titulo} <span class="cod">${e.bncc}${e.saeb ? ' · Saeb ' + e.saeb : ''}</span></h3>
    <table class="gab"><thead><tr><th>Nível</th><th>Resposta</th><th>Conta</th><th>Se o grupo marcou outra opção</th></tr></thead><tbody>${linhas}</tbody></table>
    <p class="pista-gab"><b>Pista verdadeira:</b> ${sub(e.pistaCerta, '…')}</p>`;
  }).join('');
  return `<section class="pagina gabarito">
  ${cabecalho(m, 'Gabarito comentado — professora')}
  <h1 class="titulo-missao pequeno">${m.titulo} — gabarito</h1>
  ${blocos}
  <div class="solucao"><b>Solução do caso:</b> ${m.solucao}</div>
</section>`;
}

function paginaAbertura(m) {
  const cards = m.alvos.map((s) => `<div class="card"><div class="inicial">${s.nome[0]}</div><div><div class="nome">${s.nome}</div><div class="desc">${s.desc}</div></div></div>`).join('');
  return `<section class="pagina abertura">
  ${cabecalho(m, 'Abertura do caso')}
  <div class="selo">MISSÃO</div>
  <h1 class="titulo-missao grande">${m.titulo}</h1>
  <div class="historia">${m.abertura.map((p) => `<p>${p}</p>`).join('')}</div>
  <h2>${m.alvosTitulo}</h2>
  <div class="cards">${cards}</div>
  <div class="missao-box"><b>A missão de vocês:</b> ${m.missao}</div>
  <div class="como"><b>Como funciona:</b> são 4 etapas. Em cada uma, vocês resolvem um problema e usam a resposta para abrir o cadeado. Só a resposta certa traz a pista verdadeira. A cada pista, risquem na ficha final ${m.alvosRiscar} que não combina com ela. Nenhuma etapa diz qual conta fazer: descubram!</div>
</section>`;
}

function paginaEtapa(m, e, ie, nv, iv) {
  const nivel = NIVEIS[iv];
  const ops = nv.ordem || [...nv.opcoes];
  let k = 0;
  const linhas = ops.map((o) => {
    const certa = String(o.v) === String(nv.resposta);
    const bruto = certa ? sub(e.pistaCerta, o.v) : sub(e.pistasErradas[k++], o.v);
    const texto = bruto;
    return `<tr><td class="val">${o.v}</td><td>${texto}</td></tr>`;
  }).join('');
  return `<section class="pagina etapa">
  ${cabecalho(m, `${nivel.nome} <span class="estrelas">${nivel.estrelas}</span>`)}
  <div class="etapa-tit"><span class="num">Etapa ${ie + 1} de 4</span><h2>${e.titulo}</h2></div>
  <div class="cena">${e.cena}</div>
  <div class="problema">${nv.enunciado}${nv.figura ? `<div class="figura">${nv.figura}</div>` : ''}</div>
  <div class="espaco"><span>Espaço da equipe — mostrem como pensaram</span></div>
  <div class="passos">
    <span>☐ Achamos os dados</span><span>☐ Escolhemos a conta</span><span>☐ Resolvemos</span><span>☐ Conferimos se faz sentido</span>
  </div>
  <div class="resposta">Nossa resposta: <span class="linha"></span></div>
  <div class="cadeado">
    <div class="cad-tit">ABRAM O CADEADO — procurem a resposta de vocês na tabela e leiam a pista</div>
    <table>${linhas}</table>
  </div>
  <div class="rodape">${e.bncc}${e.saeb ? ' · Saeb ' + e.saeb : ''} · ${m.titulo}</div>
</section>`;
}

function paginaFinal(m) {
  const cards = m.alvos.map((s) => `<div class="risco"><span class="caixa"></span>${s.nome}</div>`).join('');
  const perg = m.final.map((p) => `<div class="perg"><b>${p}</b><div class="linhas"><span></span><span></span></div></div>`).join('');
  return `<section class="pagina final">
  ${cabecalho(m, 'Ficha final do grupo')}
  <h1 class="titulo-missao pequeno">${m.titulo} — ficha final</h1>
  <p>Grupo: <span class="linha curta"></span> &nbsp; Nível: ☐ ★ ☐ ★★ ☐ ★★★</p>
  <h2>Pistas que vocês encontraram</h2>
  <ol class="pistas">${m.etapas.map(() => '<li><span class="linha"></span></li>').join('')}</ol>
  <h2>${m.riscarTitulo}</h2>
  <div class="riscos">${cards}</div>
  ${perg}
  <div class="confere"><b>Conferência dos investigadores:</b> ${m.conferencia}</div>
  <div class="carimbo">MISSÃO CUMPRIDA<br><span>assinatura da equipe</span></div>
</section>`;
}

const CSS = `
@page { size: A4; margin: 13mm 15mm; }
* { box-sizing: border-box; }
body { font-family: Inter, 'DejaVu Sans', sans-serif; color: #000; font-size: 12.5pt; line-height: 1.38; margin: 0; }
.pagina { page-break-after: always; position: relative; min-height: 268mm; }
.pagina:last-child { page-break-after: auto; }
.pagina.etapa { display: flex; flex-direction: column; height: 268mm; min-height: 0; padding-bottom: 6mm; }
.pagina.etapa > * { flex: none; }
.topo { display: flex; gap: 10px; align-items: center; border-bottom: 1.5px solid #000; padding-bottom: 4px; margin-bottom: 10px; font-size: 9.5pt; letter-spacing: .04em; }
.topo .marca { font-weight: 800; }
.topo .serie { border: 1px solid #000; border-radius: 10px; padding: 0 8px; font-weight: 700; }
.topo .dir { margin-left: auto; font-weight: 700; }
.estrelas, .nv { font-family: 'DejaVu Sans', sans-serif; letter-spacing: 1px; }
h1.titulo-missao { font-size: 22pt; margin: 6px 0 4px; line-height: 1.1; }
h1.grande { font-size: 30pt; margin-top: 2px; }
h1.pequeno { font-size: 17pt; }
h2 { font-size: 14pt; margin: 14px 0 6px; }
h3 { font-size: 12pt; margin: 12px 0 4px; }
.sub { margin: 0 0 8px; font-size: 12pt; }
.ficha-tecnica { border: 1px solid #000; border-radius: 6px; padding: 6px 10px; font-size: 11pt; display: grid; gap: 2px; }
ol.roteiro li { margin-bottom: 5px; font-size: 11.5pt; }
table { border-collapse: collapse; width: 100%; }
table.hab th, table.hab td, table.gab th, table.gab td { border: 1px solid #555; padding: 4px 6px; font-size: 10pt; vertical-align: top; text-align: left; }
th { font-weight: 700; }
.cod { font-size: 9pt; font-weight: 600; white-space: nowrap; }
.saeb { font-weight: 400; }
.nota { font-size: 9pt; margin-top: 6px; }
/* gabarito */
.gabarito { font-size: 10.5pt; }
table.gab ul { margin: 0; padding-left: 14px; }
table.gab td.resp { font-weight: 800; white-space: nowrap; }
.pista-gab { font-size: 9.5pt; margin: 3px 0 0; }
.solucao { border: 1.5px solid #000; border-radius: 6px; padding: 6px 10px; margin-top: 12px; }
/* abertura */
.selo { display: inline-block; border: 2px solid #000; padding: 2px 10px; font-weight: 800; letter-spacing: .3em; margin-top: 4px; transform: rotate(-2deg); }
.historia p { font-size: 15pt; margin: 0 0 8px; }
.cards { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.card { border: 1.5px solid #000; border-radius: 8px; padding: 12px 10px; min-height: 30mm; display: flex; gap: 10px; align-items: flex-start; }
.inicial { width: 42px; height: 42px; flex: none; border: 2px solid #000; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20pt; font-weight: 800; }
.card .nome { font-weight: 800; font-size: 14.5pt; }
.card .desc { font-size: 12.5pt; }
.missao-box { border: 2px dashed #000; border-radius: 8px; padding: 12px 14px; margin-top: 18px; font-size: 15pt; }
.como { font-size: 12.5pt; margin-top: 14px; }
/* etapa */
.etapa-tit { display: flex; align-items: baseline; gap: 10px; }
.etapa-tit .num { border: 1.5px solid #000; border-radius: 4px; padding: 0 6px; font-weight: 800; font-size: 10.5pt; white-space: nowrap; }
.etapa-tit h2 { margin: 6px 0; font-size: 17pt; }
.cena { font-style: italic; border-left: 3px solid #000; padding-left: 10px; margin: 4px 0 10px; font-size: 13pt; }
.problema { font-size: 15pt; line-height: 1.45; }
.problema p { margin: 0 0 6px; }
.problema .pergunta { font-weight: 800; }
.figura { margin: 6px 0; }
.pagina.etapa > .espaco { border: 1px solid #000; border-radius: 6px; flex: 1 1 auto; min-height: 40mm; margin-top: 8px; position: relative;
  background-image: radial-gradient(#bbb 0.6px, transparent 0.7px); background-size: 5mm 5mm; }
.espaco span { position: absolute; top: -9px; left: 10px; background: #fff; padding: 0 6px; font-size: 9.5pt; font-weight: 700; }
.passos { display: flex; justify-content: space-between; font-size: 11.5pt; margin: 6px 0; }
.resposta { font-size: 13pt; font-weight: 800; margin: 4px 0 8px; display: flex; align-items: flex-end; gap: 8px; }
.linha { display: inline-block; border-bottom: 1px solid #000; flex: 1; min-width: 60mm; height: 1.1em; }
.linha.curta { min-width: 50mm; }
.cadeado { border: 2px solid #000; border-radius: 8px; padding: 6px 8px; }
.cad-tit { font-weight: 800; font-size: 10.5pt; margin-bottom: 4px; }
.cadeado td { border-top: 1px dashed #777; padding: 4px 6px; font-size: 11.5pt; vertical-align: top; }
.cadeado td.val { font-weight: 800; font-size: 12.5pt; width: 26mm; white-space: nowrap; }
.rodape { position: absolute; bottom: 0; left: 0; right: 0; font-size: 8pt; color: #333; border-top: 1px solid #999; padding-top: 2px; }
/* final */
.final p { margin: 4px 0; }
ol.pistas li { margin: 8px 0; }
ol.pistas .linha { width: 95%; }
.riscos { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
.risco { border: 1.5px solid #000; border-radius: 6px; padding: 8px; font-weight: 800; display: flex; gap: 8px; align-items: center; }
.risco .caixa { width: 16px; height: 16px; border: 1.5px solid #000; display: inline-block; }
.perg { margin-top: 10px; }
.perg .linhas span { display: block; border-bottom: 1px solid #000; height: 11mm; }
.confere { border: 1.5px dashed #000; border-radius: 6px; padding: 6px 10px; margin-top: 12px; font-size: 11pt; }
.carimbo { margin: 14px auto 0; width: 70mm; text-align: center; border: 3px double #000; border-radius: 8px; padding: 8px; font-weight: 800; letter-spacing: .12em; transform: rotate(-3deg); }
.carimbo span { display: block; margin-top: 18mm; border-top: 1px solid #000; font-size: 8.5pt; font-weight: 400; letter-spacing: 0; }
`;

function montar(m) {
  const etapas = [];
  NIVEIS.forEach((_, iv) => m.etapas.forEach((e, ie) => etapas.push(paginaEtapa(m, e, ie, e.niveis[iv], iv))));
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>${m.titulo} — ${m.serie}</title><style>${CSS}</style></head><body>
${paginaProfessora(m)}
${paginaGabarito(m)}
${paginaAbertura(m)}
${etapas.join('\n')}
${paginaFinal(m)}
</body></html>`;
}

const filtro = process.argv[2];
fs.mkdirSync(PASTA_HTML, { recursive: true });
let falhou = false;
for (const arq of fs.readdirSync(PASTA_MISSOES).filter((a) => a.endsWith('.js')).sort()) {
  const m = require(path.join(PASTA_MISSOES, arq));
  if (filtro && m.id !== filtro) continue;
  const erros = conferir(m);
  if (erros.length) { falhou = true; console.error(erros.join('\n')); continue; }
  ordenar(m);
  const saida = path.join(PASTA_HTML, `${m.id}.html`);
  fs.writeFileSync(saida, montar(m));
  console.log(`ok  ${m.id}  gabarito conferido (${m.etapas.length * 3} problemas)  -> ${path.relative(process.cwd(), saida)}`);
}
if (falhou) process.exit(1);
