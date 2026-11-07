// Desenho de bar model (método de Singapura) em SVG preto e branco.
// linhas: [{ nome?, total?, partes: [{ u, t }] }]
//   u = tamanho relativo da parte; t = texto dentro da parte ('' = lacuna para a criança preencher).
//   cinza = parte pintada; tracejada = parte que não existe de verdade (diferença numa comparação).
//   total = rótulo da chave em cima da linha ('' = lacuna; undefined = sem chave).
function barra(linhas, { largura = 460, alturaBarra = 36, fonte = 15 } = {}) {
  const temNome = linhas.some((l) => l.nome);
  const nomeW = temNome ? 78 : 0;
  const barW = largura - nomeW - 8;
  const maxU = Math.max(...linhas.map((l) => l.partes.reduce((s, p) => s + p.u, 0)));
  const k = barW / maxU;
  const lacuna = '_______';
  let y = 4;
  let out = '';
  for (const l of linhas) {
    const w = l.partes.reduce((s, p) => s + p.u, 0) * k;
    const x0 = nomeW;
    if (l.total !== undefined) {
      const ty = y + 18;
      out += `<path d="M${x0 + 1} ${ty + 8} V${ty} H${x0 + w - 1} V${ty + 8}" fill="none" stroke="#000" stroke-width="1.6"/>`;
      const rot = l.total === '' ? lacuna : l.total; const rw = rot.length * fonte * 0.62 + 12;
      out += `<rect x="${x0 + w / 2 - rw / 2}" y="${ty - 17}" width="${rw}" height="20" fill="#fff"/>`;
      out += `<text x="${x0 + w / 2}" y="${ty - 3}" text-anchor="middle" font-size="${fonte}" font-weight="700">${l.total === '' ? lacuna : l.total}</text>`;
      y += 30;
    }
    if (l.nome) out += `<text x="0" y="${y + alturaBarra / 2 + 5}" font-size="${fonte - 1}" font-weight="700">${l.nome}</text>`;
    let x = x0;
    for (const p of l.partes) {
      const pw = p.u * k;
      out += `<rect x="${x}" y="${y}" width="${pw}" height="${alturaBarra}" fill="${p.cinza ? '#d9d9d9' : '#fff'}" stroke="#000" stroke-width="2"${p.tracejada ? ' stroke-dasharray="6 4' + '"' : ''}/>`;
      const txt = p.t === '' ? (pw > 70 ? lacuna : '___') : p.t;
      if (txt) out += `<text x="${x + pw / 2}" y="${y + alturaBarra / 2 + 5}" text-anchor="middle" font-size="${fonte}" font-weight="${p.t === '?' ? 800 : 500}">${txt}</text>`;
      x += pw;
    }
    y += alturaBarra + 14;
  }
  return `<svg class="barra" viewBox="0 0 ${largura} ${y}" width="${largura}" height="${y}" font-family="Inter, DejaVu Sans, sans-serif">${out}</svg>`;
}

// n partes iguais com o mesmo texto
const iguais = (n, t, u = 1) => Array.from({ length: n }, () => ({ u, t }));

module.exports = { barra, iguais };
