// Abre a página de venda, procura preços (R$) e links de checkout; se achar checkout, abre e lê o preço lá também.
// Uso: node checar-preco.js <url> [<url> ...]   -> JSON por linha: {url, final, precos_pagina, checkout, precos_checkout, titulo}
const { chromium } = require('playwright');

const { CHROME } = require('./chrome');
const CHECKOUT = /(cakto|kiwify|hotmart|eduzz|monetizze|perfectpay|lastlink|ticto|greenn|braip|kirvano|pepper|yampi|pay\.|checkout|lowify|ggcheckout)/i;

function precos(texto) {
  const achados = texto.match(/R\$\s?\d{1,4}(?:[.,]\d{2})?/g) || [];
  return [...new Set(achados.map((p) => p.replace(/\s/g, '')))].slice(0, 12);
}

async function abrir(ctx, url) {
  const p = await ctx.newPage();
  try {
    await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await p.waitForTimeout(4000);
    await p.mouse.wheel(0, 20000);
    await p.waitForTimeout(1500);
    const texto = await p.innerText('body').catch(() => '');
    const links = await p.$$eval('a[href]', (as) => as.map((a) => a.href)).catch(() => []);
    return { final: p.url(), titulo: await p.title(), texto, links };
  } catch (e) {
    return { erro: e.message.split('\n')[0] };
  } finally {
    await p.close();
  }
}

(async () => {
  const browser = await chromium.launch({ executablePath: CHROME, args: ['--headless=new'] });
  const ctx = await browser.newContext({
    locale: 'pt-BR',
    viewport: { width: 390, height: 844 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  });
  for (const url of process.argv.slice(2)) {
    const r = await abrir(ctx, url);
    const out = { url, final: r.final, titulo: r.titulo, erro: r.erro, precos_pagina: precos(r.texto || '') };
    const checkout = (r.links || []).find((l) => CHECKOUT.test(new URL(l).hostname + new URL(l).pathname) && !l.startsWith(r.final));
    if (checkout) {
      out.checkout = checkout;
      const c = await abrir(ctx, checkout);
      out.precos_checkout = precos(c.texto || '');
    }
    console.log(JSON.stringify(out));
  }
  await browser.close();
})();
