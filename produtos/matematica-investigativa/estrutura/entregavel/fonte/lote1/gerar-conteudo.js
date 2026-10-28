// Confere e publica o conteúdo do lote 1 (30 missões).
// Uso: node gerar-conteudo.js  -> confere tudo; gera ../../conteudo/LOTE1-CONTEUDO.md e .html
// Conferência: resposta = cálculo; erro = cálculo do erro; erro ≠ resposta;
// na tabela de código de cada nível, nenhum número se repete (senão a palavra-código fica ambígua).
const fs = require('fs');
const path = require('path');
const SERIES = [['3º ano', require('./3ano')], ['4º ano', require('./4ano')], ['5º ano', require('./5ano')]];
const NIV = ['Nível 1 ★', 'Nível 2 ★★', 'Nível 3 ★★★'];
const ALFA = 'ABCDEFGHIJLMNOPRSTUVXZ';

function letrasErradas(palavra, k) { // letras para as respostas erradas: fora da palavra, ordem fixa
  const fora = [...ALFA].filter((c) => !palavra.includes(c));
  return fora.slice((k * 3) % fora.length).concat(fora).slice(0, 4);
}

const erros = [];
for (const [serie, missoes] of SERIES) {
  if (missoes.length !== 10) erros.push(`${serie}: ${missoes.length} missões (esperado 10)`);
  for (const m of missoes) {
    const tag = `${serie} M${String(m.n).padStart(2, '0')}`;
    if (m.palavra.length !== 4) erros.push(`${tag}: palavra-código precisa de 4 letras`);
    if (m.etapas.length !== 4) erros.push(`${tag}: precisa de 4 etapas`);
    m.tabelas = [0, 1, 2].map((iv) => {
      const tab = [];
      const errL = letrasErradas(m.palavra, m.n + iv);
      m.etapas.forEach((e, ie) => {
        const p = e.niveis[iv];
        if (!p || p.length !== 7) { erros.push(`${tag} E${ie + 1} N${iv + 1}: formato`); return; }
        const [en, r, calc, conta, ev, ecalc, etxt] = p;
        const c = String(calc());
        if (c !== r) erros.push(`${tag} E${ie + 1} N${iv + 1}: resposta "${r}" ≠ cálculo "${c}" — ${en.slice(0, 60)}`);
        const ce = String(ecalc());
        if (ce !== ev) erros.push(`${tag} E${ie + 1} N${iv + 1}: erro "${ev}" ≠ cálculo do erro "${ce}"`);
        if (ev === r) erros.push(`${tag} E${ie + 1} N${iv + 1}: erro igual à resposta`);
        tab.push([r, m.palavra[ie], true], [ev, errL[ie], false]);
      });
      const vals = tab.map((t) => t[0]);
      const rep = vals.filter((v, i) => vals.indexOf(v) !== i);
      // repetição só é problema se levar a letras diferentes
      rep.forEach((v) => { const ls = new Set(tab.filter((t) => t[0] === v).map((t) => t[1])); if (ls.size > 1) erros.push(`${tag} N${iv + 1}: o valor "${v}" aparece na tabela com letras diferentes`); });
      const uniq = []; tab.forEach((t) => { if (!uniq.some((u) => u[0] === t[0])) uniq.push(t); });
      return uniq.sort((a, b) => a[0].localeCompare(b[0], 'pt-BR', { numeric: true }));
    });
  }
}
if (erros.length) { console.error(erros.join('\n')); console.error(`\n${erros.length} problema(s).`); process.exit(1); }

// ---------- Markdown ----------
let md = '# Matemática em Missão — conteúdo do lote 1 (30 missões)\n\n';
md += '> Gerado por `fonte/lote1/gerar-conteudo.js`. Todas as respostas e todos os erros comuns foram conferidos por cálculo.\n';
md += '> Formato de cada missão: abertura do caso → 4 etapas (cada uma em 3 níveis) → palavra-código (as 4 respostas certas formam a palavra; as erradas dão letras que não formam nada) → solução.\n\n';
for (const [serie, missoes] of SERIES) {
  md += `\n---\n\n# ${serie}\n`;
  for (const m of missoes) {
    md += `\n## Missão ${String(m.n).padStart(2, '0')} — ${m.titulo}${m.mockup ? ' *(texto do mockup)*' : ''}\n\n`;
    md += `**Abertura:** ${m.abertura}\n\n`;
    if (m.figura) md += `**Figura:** ${m.figura}\n\n`;
    m.etapas.forEach((e, ie) => {
      md += `### Etapa ${ie + 1} — ${e.titulo} · ${e.bncc}${e.saeb ? ' · Saeb ' + e.saeb : ''}\n`;
      if (e.figura) md += `*Figura:* ${e.figura}\n\n`;
      e.niveis.forEach((p, iv) => { md += `- **${NIV[iv]}:** ${p[0]}  \n  → **${p[1]}** (${p[3]}). Erro comum: **${p[4]}** — ${p[6]}\n`; });
      md += '\n';
    });
    md += `**Palavra-código:** ${m.palavra}\n\n`;
    m.tabelas.forEach((t, iv) => { md += `- Tabela do ${NIV[iv]}: ${t.map(([v, l]) => `${v} → ${l}`).join(' · ')}\n`; });
    md += `\n**Solução do caso:** ${m.solucao}\n`;
  }
}
const OUT = path.resolve(__dirname, '../../conteudo');
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'LOTE1-CONTEUDO.md'), md);

// ---------- HTML para leitura/PDF ----------
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
let html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Lote 1 — conteúdo</title><style>
@page{size:A4;margin:14mm} body{font-family:Inter,'DejaVu Sans',sans-serif;font-size:10.5pt;line-height:1.4;color:#111}
h1{font-size:20pt;color:#1f2a5a} h2{font-size:15pt;color:#1f2a5a;border-bottom:2px solid #1f2a5a;margin-top:18px;page-break-before:always} h3{font-size:11.5pt;margin:10px 0 4px}
.serie{page-break-before:always;font-size:26pt;color:#1f2a5a;text-align:center;margin-top:120px}
.ab{background:#fbf6ea;border-left:4px solid #f5c431;padding:6px 10px} .fig{font-style:italic;color:#444}
table{border-collapse:collapse;width:100%;margin:2px 0 6px} td{border:1px solid #ccc;padding:3px 6px;vertical-align:top} td.n{width:70px;white-space:nowrap;font-weight:700}
.r{font-weight:800} .er{color:#555;font-size:9.5pt} .cod{background:#eef1f8;padding:6px 10px;border-radius:6px} .sol{border:1.5px solid #1f2a5a;padding:6px 10px;border-radius:6px;margin-top:6px}
</style></head><body><h1>Matemática em Missão — conteúdo do lote 1</h1><p>30 missões · 10 por série · 4 etapas · 3 níveis · palavra-código · gabarito com erro comum. Todas as respostas foram conferidas por cálculo.</p>`;
for (const [serie, missoes] of SERIES) {
  html += `<div class="serie">${serie}</div>`;
  for (const m of missoes) {
    html += `<h2>Missão ${String(m.n).padStart(2, '0')} — ${esc(m.titulo)}</h2><p class="ab"><b>Abertura:</b> ${esc(m.abertura)}</p>`;
    if (m.figura) html += `<p class="fig">Figura: ${esc(m.figura)}</p>`;
    m.etapas.forEach((e, ie) => {
      html += `<h3>Etapa ${ie + 1} — ${esc(e.titulo)} <small>· ${e.bncc}${e.saeb ? ' · Saeb ' + e.saeb : ''}</small></h3>`;
      if (e.figura) html += `<p class="fig">Figura: ${esc(e.figura)}</p>`;
      html += '<table>' + e.niveis.map((p, iv) => `<tr><td class="n">${NIV[iv]}</td><td>${esc(p[0])}<br><span class="r">Resposta: ${esc(p[1])}</span> (${esc(p[3])})<br><span class="er">Erro comum: ${esc(p[4])} — ${esc(p[6])}</span></td></tr>`).join('') + '</table>';
    });
    html += `<div class="cod"><b>Palavra-código: ${m.palavra}</b><br>` + m.tabelas.map((t, iv) => `${NIV[iv]}: ${t.map(([v, l]) => `${esc(v)} → ${l}`).join(' · ')}`).join('<br>') + '</div>';
    html += `<div class="sol"><b>Solução:</b> ${esc(m.solucao)}</div>`;
  }
}
fs.writeFileSync(path.join(OUT, 'LOTE1-CONTEUDO.html'), html + '</body></html>');
console.log('ok: 30 missões conferidas (360 problemas + 360 erros comuns).');
