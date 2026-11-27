// Recorta as imagens da LP das páginas REAIS do entregável (ficha 07, Kits Prontos, Calendário), para a página mostrar os mesmos números do produto.
// Uso: node gerar-imagens.js && node imagens-do-produto.js && python3 compor.py .tmp ../img
const path = require('path');
const { chromium } = require('playwright');
const HTML = path.join(__dirname, '..', '..', 'entregavel', 'fonte', 'html');
const TMP = path.join(__dirname, '.tmp');

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 860, height: 1200 }, deviceScaleFactor: 1.6 });
  const corte = async (arquivo, fn, saida) => {
    await p.goto('file://' + path.join(HTML, arquivo));
    await p.addStyleTag({ content: 'body{background:#fff;padding:24px 34px} .capa,.abre{display:none!important} section.pag{margin-top:120px}' });
    const r = await p.evaluate(fn);
    await p.screenshot({ path: path.join(TMP, saida), fullPage: true, clip: { x: r.x - 12, y: r.y - 12, width: r.w + 24, height: r.h + 24 } });
  };
  const caixa = (els) => { const a = els.map((e) => e.getBoundingClientRect()); const y = window.scrollY; const x0 = Math.min(...a.map((r) => r.left)), x1 = Math.max(...a.map((r) => r.right)); const y0 = Math.min(...a.map((r) => r.top)) + y, y1 = Math.max(...a.map((r) => r.bottom)) + y; return { x: x0, y: y0, w: x1 - x0, h: y1 - y0 }; };
  const fnCaixa = `(${caixa})`;
  // ficha 07: do topo ao fim da Conta do Preço (tela do celular) e os 2 recortes
  await corte('premium.html', new Function(`const f=document.getElementById('r7'); const k=[...f.children]; const i=k.findIndex(e=>e.classList.contains('box')&&e.classList.contains('verde')); return ${fnCaixa}(k.slice(0,i));`), 'ficha.png');
  await corte('premium.html', new Function(`const f=document.getElementById('r7'); const k=[...f.children]; const a=k.findIndex(e=>e.tagName==='H1'); const b=k.findIndex(e=>e.tagName==='H2'&&/Preço/.test(e.textContent)); return ${fnCaixa}(k.slice(0,b));`), 'ficha-quantidade.png');
  await corte('premium.html', new Function(`const f=document.getElementById('r7'); const k=[...f.children]; const b=k.findIndex(e=>e.tagName==='H2'&&/Preço/.test(e.textContent)); const v=k.findIndex(e=>e.classList.contains('verde')); return ${fnCaixa}(k.slice(b,v+1));`), 'ficha-preco.png');
  await corte('bonus-4-kits-prontos.html', new Function(`const s=document.querySelectorAll('section.pag')[0]; return ${fnCaixa}([...s.children].filter(e=>!e.classList.contains('nota')));`), 'kits.png');
  await corte('bonus-3-calendario-anti-sufoco.html', new Function(`const s=document.querySelectorAll('section.pag')[0]; return ${fnCaixa}([...s.children]);`), 'calendario.png');
  await b.close();
  console.log('ok');
})();
