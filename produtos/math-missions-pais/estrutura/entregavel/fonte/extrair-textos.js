// Extrai todos os textos das imagens dos criativos (3 missões, Guia, Cartão) para a Tradução.
// Saída: traducao/en-US/fontes/imagens-criativos-pt.md — uma linha por texto: [CHAVE] texto
const fs = require('fs');
const path = require('path');
const { pt } = require('./textos-fixos');
const missoes = require('./missoes-amostra');
const L = [];
const add = (k, v) => { if (typeof v === 'string' && v.trim()) L.push(`[${k}] ${v.replace(/\n/g, ' ')}`); };
L.push('## Parte A — textos fixos das páginas de missão (F.*)');
for (const [k, v] of Object.entries(pt)) { if (k === 'lang') continue; Array.isArray(v) ? v.forEach((x, i) => add(`F.${k}.${i}`, x)) : add(`F.${k}`, v); }
const CAMPOS_M = ['titulo', 'nivel', 'tempo', 'praticas', 'abertura', 'concreto', 'dominio', 'solucao'];
const CAMPOS_E = ['titulo', 'enunciado', 'r', 'conta', 'ev', 'erro', 'pensar', 'apoio'];
missoes.forEach((m, mi) => {
  L.push(`\n## Parte B${mi + 1} — missão ${m.nivel} (M${mi + 1}.*) · palavra-código PT: ${m.palavra}`);
  CAMPOS_M.forEach((c) => add(`M${mi + 1}.${c}`, m[c]));
  m.etapas.forEach((e, ei) => {
    CAMPOS_E.forEach((c) => add(`M${mi + 1}.E${ei + 1}.${c}`, e[c]));
    if (e.desenho) {
      add(`M${mi + 1}.E${ei + 1}.desenho.instrucao`, e.desenho.instrucao);
      add(`M${mi + 1}.E${ei + 1}.desenho.explica`, e.desenho.explica);
      for (const qual of ['molde', 'modelo']) (e.desenho[qual] || []).forEach((l, li) => {
        add(`M${mi + 1}.E${ei + 1}.${qual}.${li}.nome`, l.nome); add(`M${mi + 1}.E${ei + 1}.${qual}.${li}.total`, l.total);
        l.partes.forEach((p, pi) => { if (p.t && p.t.trim() && !/^[?\d]+$/.test(p.t.trim())) add(`M${mi + 1}.E${ei + 1}.${qual}.${li}.p${pi}`, p.t); });
      });
    }
  });
});
// Guia e Cartão: cada texto único, na ordem em que aparece (inclui os rótulos das barras)
const { execFileSync } = require('child_process');
const html = path.join(__dirname, 'html');
const extrair = (f) => JSON.parse(execFileSync('python3', [path.join(__dirname, 'textos_html.py'), 'extrair', path.join(html, f)]).toString());
const guia = extrair('guia-metodo-singapura.html');
const cartao = extrair('cartao-bar-model.html').filter((t) => !guia.includes(t));
L.push('\n## Parte C — Guia do Método (G.*), na ordem da página. Cada linha é um pedaço de texto (às vezes um trecho entre negritos): traduza o pedaço para encaixar na frase.');
guia.forEach((t, i) => add(`G.${String(i + 1).padStart(3, '0')}`, t));
L.push('\n## Parte D — Cartão do Desenho (C.*): só os textos que não aparecem no Guia.');
cartao.forEach((t, i) => add(`C.${String(i + 1).padStart(3, '0')}`, t));
const dest = path.join(__dirname, '..', '..', '..', 'traducao', 'en-US', 'fontes', 'imagens-criativos-pt.md');
const cab = `# Textos das imagens dos criativos · PT (fonte para a tradução en-US)\n\n> Gerado por \`estrutura/entregavel/fonte/extrair-textos.js\` em ${new Date().toISOString().slice(0, 10)}. Uma linha por texto: \`[CHAVE] texto\`. Devolver **o mesmo arquivo** com cada texto em en-US, mantendo as chaves, a ordem e as tags HTML (\`<b>\`, \`<i>\`, \`<br>\`).\n> Regras: glossário \`traducao/en-US/GLOSSARIO.md\`; tradução fiel (\`regras/traducao.md\`); decimais com ponto (2.4); horas no formato 3:10 p.m.; sem moeda real; unidades métricas mantidas; nada de "detective" nem "Singapore Math".\n> Palavras-código em inglês (4 letras, a resposta certa de cada etapa vira uma letra): M1 VOVO → **NANA** · M2 LAGO → **LAKE** · M3 CABO → **CORD**. O texto da solução (M*.solucao) deve usar a palavra nova.\n> \`{nd}\` é um número que o gerador preenche: manter.\n\n`;
fs.writeFileSync(dest, cab + L.join('\n') + '\n');
console.log('ok', L.filter((x) => x.startsWith('[')).length, 'textos →', dest);
