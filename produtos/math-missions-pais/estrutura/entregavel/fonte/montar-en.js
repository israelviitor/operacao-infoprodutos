// Monta as versões en-US das 3 missões, do Guia e do Cartão a partir da tradução final
// (traducao/en-US/imagens-criativos-final.md, formato `[CHAVE] texto`) e exporta os PNG para vídeo.
// Uso: node montar-en.js
// Saída: textos-fixos.en.js, missoes-amostra.en.js, html/en/*.html,
//        ../../imagens-criativos/en-US/<peça>/pagina-N.png (150 dpi) + PDF de conferência.
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const RAIZ = path.join(__dirname, '..', '..', '..');
const FINAL = path.join(RAIZ, 'traducao', 'en-US', 'imagens-criativos-final.md');
const PT = path.join(RAIZ, 'traducao', 'en-US', 'fontes', 'imagens-criativos-pt.md');
const ler = (f) => {
  const m = new Map();
  for (const l of fs.readFileSync(f, 'utf8').split('\n')) { const r = /^\[([^\]]+)\] (.*)$/.exec(l); if (r) m.set(r[1], r[2].trim()); }
  return m;
};
const en = ler(FINAL), pt = ler(PT);
const faltam = [...pt.keys()].filter((k) => !en.get(k));
if (faltam.length) { console.error('Faltam na tradução final:', faltam.join(', ')); process.exit(1); }

// ---- textos fixos ----
const { pt: fixPT } = require('./textos-fixos');
const fixEN = { lang: 'en' };
for (const [k, v] of Object.entries(fixPT)) {
  if (k === 'lang') continue;
  fixEN[k] = Array.isArray(v) ? v.map((_, i) => en.get(`F.${k}.${i}`)) : en.get(`F.${k}`);
}
fs.writeFileSync(path.join(__dirname, 'textos-fixos.en.js'), '// Gerado por montar-en.js a partir de traducao/en-US/imagens-criativos-final.md. Não editar à mão.\nmodule.exports = ' + JSON.stringify(fixEN, null, 2) + ';\n');

// ---- missões ----
const missoesPT = require('./missoes-amostra');
const PALAVRAS = ['NANA', 'LAKE', 'CORD'];
const CAMPOS_M = ['titulo', 'nivel', 'tempo', 'praticas', 'abertura', 'concreto', 'dominio', 'solucao'];
const CAMPOS_E = ['titulo', 'enunciado', 'r', 'conta', 'ev', 'erro', 'pensar', 'apoio'];
const ID_EN = { 'n1-06-biscoitos': 'n1-06-cookies', 'n2-05-tesouro': 'n2-05-treasure', 'n3-03-robo': 'n3-03-robot' };
const missoesEN = missoesPT.map((m, mi) => {
  const k = (c) => `M${mi + 1}.${c}`;
  const o = { id: ID_EN[m.id], icone: m.icone, tempo: m.tempo, palavra: PALAVRAS[mi] };
  for (const c of CAMPOS_M) if (m[c]) o[c] = en.get(k(c));
  o.etapas = m.etapas.map((e, ei) => {
    const ke = (c) => k(`E${ei + 1}.${c}`);
    const x = { curta: e.curta };
    for (const c of CAMPOS_E) x[c] = en.get(ke(c));
    // As contas foram conferidas em PT; em inglês só muda a escrita (ponto decimal, p.m.).
    x.calc = () => x.r; x.ecalc = () => x.ev;
    if (e.desenho) {
      const trad = (qual) => (e.desenho[qual] || null) && e.desenho[qual].map((l, li) => ({
        ...(l.nome ? { nome: en.get(ke(`${qual}.${li}.nome`)) } : {}),
        ...(l.total !== undefined ? { total: l.total === '' ? '' : (en.get(ke(`${qual}.${li}.total`)) || l.total) } : {}),
        partes: l.partes.map((p, pi) => ({ ...p, t: (p.t && p.t.trim() && !/^[?\d]+$/.test(p.t.trim())) ? en.get(ke(`${qual}.${li}.p${pi}`)) : (/^\d+,\d+$/.test(p.t || '') ? p.t.replace(',', '.') : p.t) })),
      }));
      x.desenho = { nivel: e.desenho.nivel, instrucao: en.get(ke('desenho.instrucao')), explica: en.get(ke('desenho.explica')), molde: trad('molde'), modelo: trad('modelo') };
    }
    return x;
  });
  if (!o.solucao.includes(o.palavra)) { console.error(`M${mi + 1}: a solução em inglês não cita a palavra-código ${o.palavra}`); process.exit(1); }
  return o;
});
fs.writeFileSync(path.join(__dirname, 'missoes-amostra.en.js'),
  '// Gerado por montar-en.js a partir de traducao/en-US/imagens-criativos-final.md. Não editar à mão.\n' +
  'const m = ' + JSON.stringify(missoesEN, null, 2) + ';\n' +
  'for (const x of m) for (const e of x.etapas) { e.calc = () => e.r; e.ecalc = () => e.ev; }\nmodule.exports = m;\n');
delete require.cache[require.resolve('./textos-fixos')];
execFileSync('node', [path.join(__dirname, 'gerar-amostras.js'), 'en'], { stdio: 'inherit' });

// ---- Guia e Cartão: troca de texto por texto ----
const dic = {};
const guiaPT = JSON.parse(execFileSync('python3', [path.join(__dirname, 'textos_html.py'), 'extrair', path.join(__dirname, 'html', 'guia-metodo-singapura.html')]).toString());
const cartaoPT = JSON.parse(execFileSync('python3', [path.join(__dirname, 'textos_html.py'), 'extrair', path.join(__dirname, 'html', 'cartao-bar-model.html')]).toString()).filter((t) => !guiaPT.includes(t));
guiaPT.forEach((t, i) => { dic[t] = en.get(`G.${String(i + 1).padStart(3, '0')}`); });
cartaoPT.forEach((t, i) => { dic[t] = en.get(`C.${String(i + 1).padStart(3, '0')}`); });
const DIC = path.join(__dirname, 'html', 'en', 'dic-guia-cartao.json');
fs.writeFileSync(DIC, JSON.stringify(dic, null, 1));
for (const [de, para] of [['guia-metodo-singapura.html', 'parent-guide.html'], ['cartao-bar-model.html', 'draw-it-card.html']]) {
  execFileSync('python3', [path.join(__dirname, 'textos_html.py'), 'aplicar', DIC, path.join(__dirname, 'html', de), path.join(__dirname, 'html', 'en', para)], { stdio: 'inherit' });
}

// ---- PNG para vídeo (150 dpi) ----
const SAIDA = path.join(RAIZ, 'estrutura', 'imagens-criativos', 'en-US');
const GERAR_PDF = path.join(RAIZ, '..', '..', 'ferramentas', 'gerar-pdf.js');
const pecas = [['n1-06-cookies', 'mission-1-06-cookies'], ['n2-05-treasure', 'mission-2-05-treasure'], ['n3-03-robot', 'mission-3-03-robot'], ['parent-guide', 'parent-guide'], ['draw-it-card', 'draw-it-card']];
fs.rmSync(SAIDA, { recursive: true, force: true });
for (const [arq, nome] of pecas) {
  const dir = path.join(SAIDA, nome);
  fs.mkdirSync(dir, { recursive: true });
  const pdf = path.join(dir, nome + '.pdf');
  execFileSync('node', [GERAR_PDF, path.join(__dirname, 'html', 'en', arq + '.html'), pdf]);
  execFileSync('pdftoppm', ['-png', '-r', '150', pdf, path.join(dir, 'page')], { stdio: 'ignore' });
  console.log('ok ', nome, fs.readdirSync(dir).filter((f) => f.endsWith('.png')).length, 'PNG');
}
