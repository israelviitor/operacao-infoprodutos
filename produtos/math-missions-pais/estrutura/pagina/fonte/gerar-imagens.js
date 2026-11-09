// Gera as imagens do protótipo da página a partir das amostras reais (missões, Guia e Cartão).
// Uso: node gerar-imagens.js   (rode antes `node ../../entregavel/fonte/gerar-amostras.js` e `gerar-guia.js`)
// Saída: ../img/*.jpg
const path = require('path');
const fs = require('fs');
const { execFileSync } = require('child_process');
const { chromium } = require('playwright');
const { barra } = require('../../entregavel/fonte/barras');
const missoes = require('../../entregavel/fonte/missoes-amostra');

const RAIZ = path.join(__dirname, '..');
const IMG = path.join(RAIZ, 'img');
const HTML = path.join(RAIZ, '..', 'entregavel', 'fonte', 'html');
const AMOSTRAS = path.join(RAIZ, '..', 'entregavel', 'amostras');
const TMP = path.join(RAIZ, 'fonte', '.tmp');
fs.mkdirSync(IMG, { recursive: true });
fs.mkdirSync(TMP, { recursive: true });

const tesouro = missoes.find((m) => m.id === 'pais-9-10-tesouro');
const eArmazem = tesouro.etapas.find((e) => e.desenho);
// "caneta" da criança: o desenho preenchido em azul
const desenhoFeito = barra(eArmazem.desenho.modelo, { largura: 560 }).replace(/stroke="#000"/g, 'stroke="#1f3f8f"').replace(/<text /g, '<text fill="#1f3f8f" ');

async function main() {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 820, height: 1200 }, deviceScaleFactor: 1.5 });
  const shot = async (sel, nome, idx = 0) => {
    const el = (await p.$$(sel))[idx];
    await el.screenshot({ path: path.join(TMP, nome + '.png') });
  };
  const abrir = async (f) => { await p.goto('file://' + path.join(HTML, f)); await p.emulateMedia({ media: 'print' }); };

  // 1. Página do problema (missão, 1ª página da criança)
  await abrir('pais-9-10-tesouro.html');
  await p.addStyleTag({ content: 'section.pagina { height: auto !important; padding: 24px; background: #fff; } .rodape{display:none}' });
  await shot('section.missao', 'c1-problema', 0);
  // 2. Etapa "desenhe o problema" em branco
  await shot('.etapa:has(.desenho)', 'c2-desenhe');
  // 3. A mesma etapa resolvida: desenho, conta e resposta (caneta azul)
  await p.evaluate(({ svg }) => {
    const et = document.querySelector('.etapa:has(.desenho)');
    et.querySelector('.desenho svg').outerHTML = svg;
    const esp = et.querySelector('.espaco');
    esp.insertAdjacentHTML('beforeend', '<div style="position:absolute;left:24px;top:22px;font:600 22px Inter;color:#1f3f8f">60 − 35 − 17 = 8</div>');
    et.querySelector('.resp i').outerHTML = '<i style="font-style:normal;color:#1f3f8f;font-size:20px;border-bottom:1.5px solid #111;display:inline-block;width:55mm;padding-left:8px">8 moedas</i>';
  }, { svg: desenhoFeito });
  await shot('.etapa:has(.desenho)', 'c3-resolvida');
  // 4. Palavra-código
  await p.evaluate(() => {
    const pg = document.querySelectorAll('section.missao')[1];
    const h2 = [...pg.querySelectorAll('h2')].pop();
    const w = document.createElement('div'); w.id = 'codigo'; w.style.cssText = 'padding:12px;background:#fff';
    h2.before(w);
    [h2, pg.querySelector('table.cod'), pg.querySelector('.fim')].forEach((n) => w.appendChild(n));
    const letras = ['L', 'A', 'G', 'O'];
    w.querySelectorAll('.caixas div').forEach((d, i) => d.insertAdjacentHTML('beforeend', `<b style="display:block;text-align:center;font:800 26px Inter;color:#1f3f8f;margin-top:-4px">${letras[i]}</b>`));
  });
  await shot('#codigo', 'c4-codigo');
  // 7. Gabarito e página do adulto
  await shot('section.gab', 'c7-gabarito');
  await shot('section.adulto', 'roteiro-adulto');
  await b.close();

  // 5 e 6. Guia (capa e página das barras) e Cartão, a partir dos PDFs
  const pdf = (arq, pg, nome, r = 110) => execFileSync('pdftoppm', ['-png', '-r', String(r), '-f', String(pg), '-l', String(pg), '-singlefile', path.join(AMOSTRAS, arq), path.join(TMP, nome)], { stdio: 'ignore' });
  pdf('guia-metodo-singapura.pdf', 1, 'guia-capa');
  pdf('guia-metodo-singapura.pdf', 3, 'c5-guia-barras');
  pdf('cartao-bar-model.pdf', 1, 'cartao-folha');
  pdf('pais-9-10-tesouro.pdf', 2, 'missao-folha');

  // Composição e compressão (Python/PIL)
  execFileSync('python3', [path.join(__dirname, 'compor.py'), TMP, IMG], { stdio: 'inherit' });
}
main().catch((e) => { console.error(e); process.exit(1); });
