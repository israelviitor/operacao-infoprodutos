// Extrai os textos das 27 missões novas (missoes/nivel1-3.js) + textos fixos novos para a Tradução.
// Saída: traducao/en-US/fontes/missoes-pt.md — uma linha por texto: [CHAVE] texto.
// Chave = id da missão + caminho do campo (ex.: n1-01-lancheira.etapas.2.desenho.modelo.0.partes.1.t).
// Ficam de fora (o montador preenche): id, icone, nivel, tempo, booleanos, números e desenho.nivel.
const fs = require('fs');
const path = require('path');
const { pt } = require('./textos-fixos');
const en = require('./textos-fixos.en.js');
const missoes = [...require('./missoes/nivel1'), ...require('./missoes/nivel2'), ...require('./missoes/nivel3')];
const PULA = new Set(['id', 'icone', 'nivel', 'tempo']);
const SO_SIMBOLO = /^[\s?\d]*$/;
const L = [];
const add = (k, v) => L.push(`[${k}] ${String(v).replace(/\n/g, ' ')}`);
L.push('## Parte F — textos fixos novos das páginas de missão (Missão de Fechamento)');
for (const k of Object.keys(pt)) if (!(k in en)) { const v = pt[k]; Array.isArray(v) ? v.forEach((x, i) => add(`F.${k}.${i}`, x)) : add(`F.${k}`, v); }
const walk = (o, p, top) => {
  if (typeof o === 'function' || typeof o === 'boolean' || typeof o === 'number') return;
  if (Array.isArray(o)) return o.forEach((x, i) => walk(x, `${p}.${i}`));
  if (o && typeof o === 'object') return Object.entries(o).forEach(([k, v]) => { if (top && PULA.has(k)) return; if (k === 'nivel' && p.endsWith('desenho')) return; walk(v, `${p}.${k}`); });
  if (typeof o === 'string' && o.trim() && !SO_SIMBOLO.test(o)) add(p, o);
};
for (const m of missoes) {
  L.push(`\n## ${m.nivel} — ${m.titulo} · palavra-código PT: ${m.palavra}`);
  walk(m, m.id, true);
}
const dest = path.join(__dirname, '..', '..', '..', 'traducao', 'en-US', 'fontes', 'missoes-pt.md');
const cab = `# Textos das 27 missões novas · PT (fonte para a tradução en-US)\n\n> Gerado por \`estrutura/entregavel/fonte/extrair-missoes.js\` em ${new Date().toISOString().slice(0, 10)}. Uma linha por texto: \`[CHAVE] texto\`. Devolver com as mesmas chaves e a ordem, mantendo as tags HTML (\`<b>\`, \`<i>\`, \`<br>\`) e \`{nd}\`.\n> As 3 amostras (1-06, 2-05, 3-03) já estão traduzidas (\`imagens-criativos-final.md\`).\n> \`.palavra\`: a palavra-código em inglês, com **4 letras**, maiúsculas, sem acento, ligada à história e citada em \`.solucao\`.\n\n`;
fs.writeFileSync(dest, cab + L.join('\n') + '\n');
console.log('ok', L.filter((x) => x.startsWith('[')).length, 'textos →', dest);
