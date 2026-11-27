// Gera PDF A4 a partir de um HTML (string), com o Chromium do Playwright.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

let browser;
async function pdf(html, saida, htmlSalvo) {
  if (htmlSalvo) fs.writeFileSync(htmlSalvo, html);
  browser = browser || (await chromium.launch());
  const p = await browser.newPage();
  await p.setContent(html, { waitUntil: 'load' });
  await p.evaluate(() => document.fonts.ready);
  await p.pdf({ path: saida, format: 'A4', printBackground: true, preferCSSPageSize: true });
  await p.close();
  return Math.round(fs.statSync(saida).size / 1024);
}
const fechar = async () => browser && browser.close();
module.exports = { pdf, fechar };
