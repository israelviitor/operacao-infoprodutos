// Audita uma landing page como um visitante de celular.
// Uso: node auditar-pagina.js <url> [pasta_saida]
// Gera: primeira-dobra.png, pagina-inteira.png e auditoria.json (tempo, peso, títulos, botões, preços, links externos, vídeos, texto).
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('playwright');

const { CHROME } = require('./chrome');

(async () => {
  // Aceita URL ou caminho de arquivo local (página ainda não publicada).
  const arg = process.argv[2];
  const url = /^https?:|^file:/.test(arg) ? arg : pathToFileURL(path.resolve(arg)).href;
  const saida = process.argv[3] || 'auditoria-pagina';
  fs.mkdirSync(saida, { recursive: true });

  const browser = await chromium.launch({ executablePath: CHROME, args: ['--headless=new'] });
  const ctx = await browser.newContext({
    locale: 'pt-BR',
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  });
  const p = await ctx.newPage();

  let bytes = 0;
  const pesados = [];
  p.on('response', async (r) => {
    const len = Number(r.headers()['content-length'] || 0);
    bytes += len;
    if (len > 300000) pesados.push({ url: r.url().slice(0, 150), kb: Math.round(len / 1024) });
  });

  const t0 = Date.now();
  await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  const domPronto = Date.now() - t0;
  await p.waitForLoadState('load', { timeout: 60000 }).catch(() => {});
  const carregada = Date.now() - t0;
  await p.waitForTimeout(2500);
  await p.screenshot({ path: path.join(saida, 'primeira-dobra.png') });

  // Rola até o fim para carregar imagens preguiçosas.
  for (let i = 0; i < 40; i++) {
    const fim = await p.evaluate(() => { window.scrollBy(0, 800); return window.innerHeight + window.scrollY >= document.body.scrollHeight - 5; });
    await p.waitForTimeout(250);
    if (fim) break;
  }
  await p.evaluate(() => window.scrollTo(0, 0));
  await p.waitForTimeout(800);
  await p.screenshot({ path: path.join(saida, 'pagina-inteira.png'), fullPage: true });

  const dados = await p.evaluate(() => {
    const vis = (e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
    const txt = (e) => (e.innerText || '').trim().replace(/\s+/g, ' ');
    const host = location.hostname;
    const botoes = [...document.querySelectorAll('a, button')].filter(vis)
      .map((e) => ({ texto: txt(e).slice(0, 80), href: e.href || '', topo_px: Math.round(e.getBoundingClientRect().top + window.scrollY) }))
      .filter((b) => b.texto);
    return {
      titulo: document.title,
      altura_px: document.body.scrollHeight,
      titulos: [...document.querySelectorAll('h1, h2, h3')].filter(vis).map((e) => `${e.tagName}: ${txt(e).slice(0, 140)}`),
      botoes: botoes.slice(0, 60),
      links_externos: [...new Set(botoes.map((b) => b.href).filter((h) => h && !h.includes(host) && !h.startsWith('javascript')))].slice(0, 30),
      videos: [...document.querySelectorAll('video, iframe')].map((e) => e.src || e.querySelector?.('source')?.src || '').filter(Boolean),
      imagens: document.images.length,
      texto: document.body.innerText.slice(0, 20000),
    };
  });

  const precos = [...new Set((dados.texto.match(/R\$\s?\d{1,4}(?:[.,]\d{2})?/g) || []).map((x) => x.replace(/\s/g, '')))];
  const resultado = {
    url,
    url_final: p.url(),
    tempo_dom_ms: domPronto,
    tempo_carregada_ms: carregada,
    peso_aprox_mb: +(bytes / 1048576).toFixed(2),
    arquivos_pesados: pesados.sort((a, b) => b.kb - a.kb).slice(0, 10),
    precos,
    ...dados,
  };
  fs.writeFileSync(path.join(saida, 'auditoria.json'), JSON.stringify(resultado, null, 1));
  console.log(JSON.stringify({ ...resultado, texto: `${resultado.texto.length} caracteres (ver auditoria.json)`, botoes: `${resultado.botoes.length} botões` }, null, 1));
  await browser.close();
})();
