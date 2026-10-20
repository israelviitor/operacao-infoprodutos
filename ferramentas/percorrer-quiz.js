// Percorre um funil de quiz (ou página com oferta atrasada) até aparecer preço e tenta chegar ao checkout.
// Uso: node percorrer-quiz.js <url> [pasta_prints]
// Saída: JSON com url final da oferta, preços, trecho do texto da oferta e URL do checkout.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const CHROME = process.env.CHROME_PATH || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const AVANCAR = /^(avançar|continuar|próximo|proximo|continue|seguir|entendi|ok|vamos lá|começar|iniciar.*|obter.*|ver.*|quero.*|receber.*|acessar.*|obtenha.*|garantir.*|comprar.*|descobrir.*|fazer.*teste.*)$/i;
const COMPRA = /(quero|obter|garantir|comprar|acessar|adquirir).*/i;
const precos = (t) => [...new Set((t.match(/R\$\s?\d{1,4}(?:[.,]\d{2})?/g) || []).map((x) => x.replace(/\s/g, '')))].slice(0, 15);

(async () => {
  const url = process.argv[2];
  const pasta = process.argv[3];
  if (pasta) fs.mkdirSync(pasta, { recursive: true });
  const browser = await chromium.launch({ executablePath: CHROME, args: ['--headless=new'] });
  const ctx = await browser.newContext({ locale: 'pt-BR', viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const p = await ctx.newPage();
  const navs = [];
  p.on('framenavigated', (f) => { if (f === p.mainFrame()) navs.push(f.url()); });
  await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await p.waitForTimeout(4000);

  let anterior = '';
  let repet = 0;
  let achou = false;
  for (let i = 0; i < 150; i++) {
    const t = await p.innerText('body').catch(() => '');
    if (/R\$\s?\d/.test(t)) { achou = true; break; }
    repet = t === anterior ? repet + 1 : 0;
    anterior = t;
    if (repet > 8) break;
    // Página parada sem botões (ex.: vídeo com oferta atrasada): rola e espera.
    await p.mouse.wheel(0, 600).catch(() => {});
    const low = t.toLowerCase();
    const val = /altura/.test(low) ? '160' : /meta|desejado|alvo/.test(low) ? '60' : /peso/.test(low) ? '72' : /idade/.test(low) ? '35' : 'Maria';
    for (const inp of await p.$$('input[type=text],input[type=number],input[type=email],input[type=tel],input:not([type])')) {
      try {
        if (!(await inp.isVisible()) || (await inp.inputValue())) continue;
        const ty = (await inp.getAttribute('type')) || '';
        const nm = ((await inp.getAttribute('name')) || '') + ((await inp.getAttribute('placeholder')) || '');
        await inp.fill(ty === 'email' || /mail/i.test(nm) ? 'teste@exemplo.com' : ty === 'tel' || /whats|tel|cel/i.test(nm) ? '11999999999' : val);
      } catch (e) {}
    }
    for (const cb of await p.$$('input[type=checkbox]')) { try { if (!(await cb.isChecked())) await cb.check({ force: true }); } catch (e) {} }
    const vis = [];
    for (const el of await p.$$('button, [role=button], [role=radio], [role=checkbox], label, li, a')) {
      try {
        if (!(await el.isVisible())) continue;
        const tx = (await el.innerText()).trim();
        if (tx && tx.length < 80 && !/^PT$|MEU PERFIL|voltar|^cm$|^kg$|^ft$|^lb/i.test(tx)) vis.push([el, tx]);
      } catch (e) {}
    }
    const opcoes = vis.filter(([, tx]) => !AVANCAR.test(tx) && !/aceito|política|termos/i.test(tx));
    const av = vis.filter(([, tx]) => AVANCAR.test(tx));
    if (repet === 0 && opcoes.length) { try { await opcoes[0][0].click({ timeout: 2000 }); } catch (e) {} await p.waitForTimeout(700); }
    if (av.length) { try { await av[av.length - 1][0].click({ timeout: 2000 }); } catch (e) {} }
    // Opções feitas de <div> sem papel de botão: clica pelo texto da primeira linha curta depois da pergunta.
    if (repet > 0) {
      const linhas = t.split('\n').map((l) => l.trim()).filter(Boolean);
      const q = linhas.findIndex((l) => l.endsWith('?'));
      const candidatas = linhas.slice(q + 1).filter((l) => l.length < 50 && !/©|criado via|central de anúncios|política|termos/i.test(l));
      const alvo = candidatas[(repet - 1) % Math.max(candidatas.length, 1)];
      if (alvo) { try { await p.getByText(alvo, { exact: true }).first().click({ timeout: 2000 }); } catch (e) {} }
    }
    await p.waitForTimeout(repet > 2 ? 6000 : 2200);
  }

  const texto = await p.innerText('body').catch(() => '');
  const out = { url, oferta_url: p.url(), chegou_na_oferta: achou, precos: precos(texto), oferta_texto: texto.replace(/\n+/g, ' | ').slice(0, 1500) };
  if (pasta) await p.screenshot({ path: path.join(pasta, 'oferta.png'), fullPage: true }).catch(() => {});

  // Checkout: link direto na página ou clique no botão de compra.
  const links = await p.$$eval('a[href]', (as) => as.map((a) => a.href)).catch(() => []);
  out.checkout = links.find((l) => /cakto|kiwify|hotmart|lastlink|wiapy|ticto|greenn|braip|kirvano|perfectpay|eduzz|monetizze|hubla|pay\.|checkout/i.test(l)) || null;
  if (achou && !out.checkout) {
    const botao = p.getByText(COMPRA).last();
    await botao.click({ timeout: 5000 }).catch(() => {});
    await p.waitForTimeout(7000);
    const frames = p.frames().map((f) => f.url()).filter((u) => /cakto|kiwify|hotmart|lastlink|wiapy|ticto|greenn|braip|kirvano|perfectpay|eduzz|monetizze|hubla|pay\.|checkout/i.test(u));
    out.checkout = frames[0] || (p.url() !== out.oferta_url ? p.url() : null);
    if (out.checkout) {
      out.checkout_texto = (await p.innerText('body').catch(() => '')).replace(/\n+/g, ' | ').slice(0, 1200);
      if (pasta) await p.screenshot({ path: path.join(pasta, 'checkout.png'), fullPage: true }).catch(() => {});
    }
  }
  out.navegacao = [...new Set(navs)].slice(-6);
  console.log(JSON.stringify(out, null, 1));
  await browser.close();
})();
