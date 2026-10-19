// Minerador da Biblioteca de Anúncios do Meta (Brasil, anúncios ativos).
// Uso:
//   node biblioteca-anuncios.js busca "<termo>" [--exata] [--impressoes]   -> JSON com os anúncios da 1ª página
//   node biblioteca-anuncios.js pagina <page_id>                           -> JSON com total de anúncios ativos da página + anúncios
// Limitação: sem login, o Meta limita a paginação; cada consulta traz ~30 anúncios.
const { chromium } = require('playwright');

const CHROME = process.env.CHROME_PATH || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const BASE = 'https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=BR&media_type=all';

function urlBusca(termo, exata, impressoes) {
  const q = encodeURIComponent(exata ? `"${termo}"` : termo);
  let u = `${BASE}&q=${q}&search_type=${exata ? 'keyword_exact_phrase' : 'keyword_unordered'}`;
  if (impressoes) u += '&sort_data[direction]=desc&sort_data[mode]=total_impressions';
  return u;
}

function urlPagina(pageId) {
  return `${BASE}&search_type=page&view_all_page_id=${pageId}`;
}

// Percorre o JSON embutido na página e coleta anúncios + total de resultados.
function extrair(jsons) {
  const anuncios = new Map();
  let total = null;
  const visita = (o) => {
    if (!o || typeof o !== 'object') return;
    if (Array.isArray(o)) return o.forEach(visita);
    if (o.search_results_connection && typeof o.search_results_connection.count === 'number' && total === null) {
      total = o.search_results_connection.count;
    }
    if (o.ad_archive_id && o.snapshot) {
      const s = o.snapshot;
      const card = (s.cards && s.cards[0]) || {};
      anuncios.set(o.ad_archive_id, {
        id: o.ad_archive_id,
        page_id: o.page_id || s.page_id,
        anunciante: s.page_name,
        perfil: s.page_profile_uri,
        inicio: o.start_date ? new Date(o.start_date * 1000).toISOString().slice(0, 10) : null,
        dias_ativo: o.start_date ? Math.floor((Date.now() / 1000 - o.start_date) / 86400) : null,
        criativos_iguais: o.collation_count || 1,
        formato: s.display_format,
        texto: ((s.body && s.body.text) || card.body || '').slice(0, 600),
        titulo: s.title || card.title || '',
        link: s.link_url || card.link_url || '',
        dominio: s.caption || card.caption || '',
        cta: s.cta_text || card.cta_text || '',
      });
    }
    for (const k in o) visita(o[k]);
  };
  jsons.forEach(visita);
  return { total, anuncios: [...anuncios.values()] };
}

async function carregar(url) {
  const browser = await chromium.launch({ executablePath: CHROME, args: ['--headless=new'] });
  try {
    const ctx = await browser.newContext({
      locale: 'pt-BR',
      viewport: { width: 1366, height: 900 },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
    });
    const p = await ctx.newPage();
    await p.goto(url, { waitUntil: 'networkidle', timeout: 90000 }).catch(() => {});
    await p.waitForTimeout(2000);
    const scripts = await p.$$eval('script[type="application/json"]', (els) =>
      els.map((e) => e.textContent).filter((t) => t.includes('ad_archive_id') || t.includes('search_results_connection')));
    const jsons = scripts.map((t) => { try { return JSON.parse(t); } catch { return null; } }).filter(Boolean);
    return extrair(jsons);
  } finally {
    await browser.close();
  }
}

(async () => {
  const [cmd, arg, ...flags] = process.argv.slice(2);
  let res;
  if (cmd === 'busca') res = await carregar(urlBusca(arg, flags.includes('--exata'), flags.includes('--impressoes')));
  else if (cmd === 'pagina') res = await carregar(urlPagina(arg));
  else { console.error('uso: busca "<termo>" [--exata] [--impressoes] | pagina <page_id>'); process.exit(1); }
  process.stdout.write(JSON.stringify(res));
})();
