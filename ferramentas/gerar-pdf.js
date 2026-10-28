// Converte um HTML (entregável diagramado) em PDF A4 — ou em PNGs por página com --png (mockups).
// Uso: node gerar-pdf.js <arquivo.html> <saida.pdf>
//      node gerar-pdf.js <arquivo.html> <pasta_saida> --png   -> entregavel.pdf + pagina-1.png, pagina-2.png...
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { execFileSync } = require('child_process');
const { chromium } = require('playwright');

const { CHROME } = require('./chrome');

(async () => {
  const [entrada, saida, flag] = process.argv.slice(2);
  if (!entrada || !saida) { console.error('uso: node gerar-pdf.js <arquivo.html> <saida.pdf | pasta> [--png]'); process.exit(1); }
  const browser = await chromium.launch({ executablePath: CHROME, args: ['--headless=new'] });
  const p = await browser.newPage();
  await p.goto(pathToFileURL(path.resolve(entrada)).href, { waitUntil: 'load' });
  await p.waitForTimeout(500);
  const pdf = flag === '--png' ? path.join(saida, 'entregavel.pdf') : saida;
  if (flag === '--png') fs.mkdirSync(saida, { recursive: true });
  await p.pdf({ path: pdf, format: 'A4', printBackground: true, preferCSSPageSize: true });
  if (flag === '--png') {
    // Mockups: cada página do PDF vira PNG (precisa do pdftoppm, do pacote poppler-utils).
    execFileSync('pdftoppm', ['-png', '-r', '110', pdf, path.join(saida, 'pagina')]);
    console.log(JSON.stringify({ pasta: saida, pngs: fs.readdirSync(saida).filter((a) => a.endsWith('.png')) }));
  } else {
    console.log(JSON.stringify({ pdf, kb: Math.round(fs.statSync(pdf).size / 1024) }));
  }
  await browser.close();
})();
