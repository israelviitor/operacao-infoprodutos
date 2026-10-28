// Descobre o Chromium instalado no ambiente (o caminho muda entre ambientes da nuvem).
// Ordem: variável CHROME_PATH → /opt/pw-browsers/chromium-<versão>/chrome-linux/chrome (versão mais alta) → padrão do Playwright.
const fs = require('fs');
const path = require('path');

function acharChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  try {
    const versoes = fs.readdirSync(base)
      .filter((d) => /^chromium-\d+$/.test(d))
      .sort((a, b) => Number(b.split('-')[1]) - Number(a.split('-')[1]));
    for (const v of versoes) {
      for (const sub of ['chrome-linux/chrome', 'chrome-linux64/chrome']) {
        const p = path.join(base, v, sub);
        if (fs.existsSync(p)) return p;
      }
    }
  } catch (e) {}
  return undefined; // Playwright usa o próprio caminho padrão
}

module.exports = { CHROME: acharChrome() };
