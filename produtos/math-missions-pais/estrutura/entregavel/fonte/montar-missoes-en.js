// Monta as 30 missões en-US (27 novas + 3 amostras) a partir de traducao/en-US/missoes-final.md
// e gera os 3 PDFs por nível em ../final/en-US/missions/.
// Uso: node montar-missoes-en.js
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const RAIZ = path.join(__dirname, '..', '..', '..');
const FINAL = path.join(RAIZ, 'traducao', 'en-US', 'missoes-final.md');
const en = new Map();
for (const l of fs.readFileSync(FINAL, 'utf8').split('\n')) { const r = /^\[([^\]]+)\] (.*)$/.exec(l); if (r) en.set(r[1], r[2].trim()); }
const faltam = [];
const pega = (k) => { if (!en.has(k)) faltam.push(k); return en.get(k); };

// textos fixos novos (Fechamento)
const fixEN = require('./textos-fixos.en.js');
const { pt: fixPT } = require('./textos-fixos');
for (const k of Object.keys(fixPT)) if (!(k in fixEN)) {
  const v = fixPT[k];
  fixEN[k] = Array.isArray(v) ? v.map((_, i) => pega(`F.${k}.${i}`)) : pega(`F.${k}`);
}
fs.writeFileSync(path.join(__dirname, 'textos-fixos.en.js'), '// Gerado por montar-en.js / montar-missoes-en.js. Não editar à mão.\nmodule.exports = ' + JSON.stringify(fixEN, null, 2) + ';\n');

const PULA = new Set(['id', 'icone', 'nivel', 'tempo']);
const SO_SIMBOLO = /^[\s?\d]*$/;
const traduz = (o, p, top) => {
  if (typeof o === 'function') return undefined;
  if (Array.isArray(o)) return o.map((x, i) => traduz(x, `${p}.${i}`));
  if (o && typeof o === 'object') {
    const r = {};
    for (const [k, v] of Object.entries(o)) {
      if ((top && PULA.has(k)) || (k === 'nivel' && p.endsWith('desenho'))) { r[k] = v; continue; }
      const t = traduz(v, `${p}.${k}`);
      if (t !== undefined) r[k] = t;
    }
    return r;
  }
  if (typeof o === 'string' && o.trim() && !SO_SIMBOLO.test(o)) return pega(p);
  return o;
};
const TEMPO = { '20 a 25 minutos': '20 to 25 minutes', '25 a 30 minutos': '25 to 30 minutes', '25 a 35 minutos': '25 to 35 minutes' };
const novas = [...require('./missoes/nivel1'), ...require('./missoes/nivel2'), ...require('./missoes/nivel3')].map((m) => {
  const o = traduz(m, m.id, true);
  o.nivel = m.nivel.replace('Nível', 'Level').replace('Missão', 'Mission');
  o.tempo = TEMPO[m.tempo] || (faltam.push('tempo ' + m.tempo), m.tempo);
  return o;
});
if (faltam.length) { console.error('Faltam na tradução final:', faltam.join(', ')); process.exit(1); }
for (const m of novas) {
  if (!/^[A-Z]{4}$/.test(m.palavra)) { console.error(`${m.id}: palavra-código "${m.palavra}" não tem 4 letras A–Z`); process.exit(1); }
  if (!m.solucao.includes(m.palavra)) { console.error(`${m.id}: a solução não cita ${m.palavra}`); process.exit(1); }
}
const am = require('./missoes-amostra.en.js');
const amostra = (id) => am.find((m) => m.id === id);
const encaixa = (lista, a, pos) => [...lista.slice(0, pos), a, ...lista.slice(pos)];
const por = (nv) => novas.filter((m) => m.id.startsWith(`n${nv}-`));
const todas = [...encaixa(por(1), amostra('n1-06-cookies'), 5), ...encaixa(por(2), amostra('n2-05-treasure'), 4), ...encaixa(por(3), amostra('n3-03-robot'), 2)];
fs.writeFileSync(path.join(__dirname, 'missoes', 'todas.en.js'),
  '// Gerado por montar-missoes-en.js a partir de traducao/en-US/missoes-final.md. Não editar à mão.\n' +
  '// As contas foram conferidas em PT; em inglês só muda a escrita (ponto decimal, vírgula no milhar, p.m.).\n' +
  'const m = ' + JSON.stringify(todas, null, 1) + ';\n' +
  'for (const x of m) for (const e of x.etapas) { e.calc = () => e.r; e.ecalc = () => e.ev; }\nmodule.exports = m;\n');
for (const k of Object.keys(require.cache)) if (k.includes('textos-fixos')) delete require.cache[k];
execFileSync('node', [path.join(__dirname, 'gerar-amostras.js'), 'todas'], { stdio: 'inherit', env: { ...process.env, LANG_MM: 'en' } });
const SAIDA = path.join(__dirname, '..', 'final', 'en-US', 'missions');
fs.mkdirSync(SAIDA, { recursive: true });
const GERAR_PDF = path.join(RAIZ, '..', '..', 'ferramentas', 'gerar-pdf.js');
for (const nv of [1, 2, 3]) {
  execFileSync('node', [GERAR_PDF, path.join(__dirname, 'html', 'missoes-en', `nivel-${nv}.html`), path.join(SAIDA, `math-missions-level-${nv}.pdf`)], { stdio: 'inherit' });
}
