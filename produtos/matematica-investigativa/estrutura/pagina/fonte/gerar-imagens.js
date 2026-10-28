// Gera as imagens da página (IMAGEM 1 a 5 de copy/pagina-vendas.md) a partir das páginas REAIS dos PDFs das amostras.
// Uso: node gerar-imagens.js   -> ../img/*.webp
// Precisa: pdftoppm (poppler) e python3 com Pillow (conversão para WebP).
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { pathToFileURL } = require('url');
const { chromium } = require('playwright');
const { CHROME } = require('../../../../../ferramentas/chrome');

const AMOSTRAS = path.resolve(__dirname, '../../entregavel/amostras');
const TMP = path.join(__dirname, '.tmp');
const SAIDA = path.resolve(__dirname, '../img');
fs.mkdirSync(TMP, { recursive: true });

// [pdf, página] -> png
function pagina(pdf, n) {
  const base = path.join(TMP, `${pdf}-${n}`);
  if (!fs.existsSync(base + '.png')) execFileSync('pdftoppm', ['-q', '-png', '-r', '130', '-f', n, '-l', n, '-singlefile', path.join(AMOSTRAS, pdf + '.pdf'), base]);
  return pathToFileURL(base + '.png').href;
}

const CSS = `
* { box-sizing: border-box; margin: 0; }
body { width: 900px; font-family: Inter, sans-serif; }
.cena { position: relative; overflow: hidden; background: #f4efe4; padding: 40px; }
.folha { position: absolute; background: #fff; box-shadow: 0 10px 28px rgba(40,30,10,.28), 0 1px 3px rgba(0,0,0,.2); border-radius: 3px; }
.folha img { width: 100%; display: block; border-radius: 3px; }
.etq { position: absolute; background: #1f2a5a; color: #fff; font-weight: 800; border-radius: 999px; padding: 8px 18px; font-size: 24px; box-shadow: 0 4px 12px rgba(0,0,0,.2); }
.pilula { display: inline-block; margin-bottom: 10px; background: #1f2a5a; color: #fff; border-radius: 999px; padding: 6px 16px; font-size: 24px; font-weight: 800; }
.tira { height: 330px; overflow: hidden; background: #fff; border-radius: 3px; box-shadow: 0 8px 20px rgba(40,30,10,.25); }
.tira img { width: 100%; display: block; margin-top: -38px; }
.zoom { overflow: hidden; background: #fff; border-radius: 6px; box-shadow: 0 8px 22px rgba(40,30,10,.22); }
.zoom img { width: 112%; margin-left: -6%; display: block; }
.corte-meio { text-align: center; color: #8a7f68; font-size: 20px; margin: 10px 0; letter-spacing: .05em; }
.nota { position: absolute; width: 54px; height: 54px; border-radius: 50%; background: #f5c431; color: #1f2a5a; font-size: 30px; font-weight: 900; display: flex; align-items: center; justify-content: center; box-shadow: 0 3px 8px rgba(0,0,0,.25); border: 3px solid #1f2a5a; }
.legendas { margin-top: 18px; display: grid; gap: 8px; }
.legendas div { background: #1f2a5a; color: #fff; border-radius: 10px; padding: 10px 14px; font-size: 25px; font-weight: 700; }
.legendas b { display: inline-flex; width: 34px; height: 34px; border-radius: 50%; background: #f5c431; color: #1f2a5a; align-items: center; justify-content: center; margin-right: 8px; }
.lado { display: flex; gap: 22px; align-items: flex-start; }
.lado .col { flex: 1; text-align: center; }
.lado .col .corte { height: 560px; overflow: hidden; box-shadow: 0 8px 20px rgba(40,30,10,.25); border-radius: 3px; background: #fff; }
.lado .col img { width: 100%; box-shadow: 0 8px 20px rgba(40,30,10,.25); border-radius: 3px; background: #fff; }
.lado .col b { display: inline-block; margin-bottom: 12px; background: #1f2a5a; color: #fff; border-radius: 999px; padding: 6px 16px; font-size: 22px; }
`;

const IMAGENS = {
  // Páginas de cada missão: 1 professora · 2-3 gabarito · 4 abertura · 5-8 nível 1 · 9-12 nível 2 · 13-16 nível 3 · 17 ficha final
  // IMAGEM 1: o kit — as 3 aberturas em leque, com a série de cada uma
  'kit': `<div class="cena" style="height:700px">
    <div class="folha" style="width:380px;left:40px;top:90px;transform:rotate(-7deg)"><img src="${pagina('3ano-horta', 4)}"></div>
    <div class="folha" style="width:380px;left:480px;top:90px;transform:rotate(7deg)"><img src="${pagina('5ano-capsula', 4)}"></div>
    <div class="folha" style="width:400px;left:250px;top:50px;transform:rotate(0deg)"><img src="${pagina('4ano-feira', 4)}"></div>
    <div class="etq" style="left:60px;top:40px">3º ano</div><div class="etq" style="left:390px;top:610px">4º ano</div><div class="etq" style="right:60px;top:40px">5º ano</div>
  </div>`,
  // IMAGEM 2: etapa 1 do 4º ano, nível 1 (a folha não diz qual é a conta)
  'etapa': `<div class="cena" style="height:1180px;padding:30px 70px"><div class="folha" style="position:relative;width:760px"><img src="${pagina('4ano-feira', 5)}"></div></div>`,
  // IMAGEM 3: a mesma etapa nos 3 níveis
  'niveis': `<div class="cena" style="padding:24px 30px">${[[5, 'Nível 1 ★'], [9, 'Nível 2 ★★'], [13, 'Nível 3 ★★★']].map(([n, t]) =>
    `<div style="margin:10px 0 22px"><b class="pilula">${t}</b><div class="tira"><img src="${pagina('4ano-feira', n)}"></div></div>`).join('')}</div>`,
  // IMAGEM 4: roteiro de 2 minutos + gabarito comentado
  'professora': `<div class="cena" style="height:760px">
    <div class="folha" style="width:440px;left:30px;top:50px;transform:rotate(-3deg)"><img src="${pagina('4ano-feira', 1)}"></div>
    <div class="folha" style="width:440px;left:430px;top:80px;transform:rotate(3deg)"><img src="${pagina('4ano-feira', 2)}"></div>
    <div class="etq" style="left:60px;top:680px">Roteiro de 2 minutos</div><div class="etq" style="right:50px;top:680px">Gabarito comentado</div>
  </div>`,
  // IMAGEM 5: bônus Kit de Ambientação
  'bonus': `<div class="cena" style="height:700px">
    <div class="folha" style="width:360px;left:30px;top:70px;transform:rotate(-6deg)"><img src="${pagina('kit-ambientacao', 1)}"></div>
    <div class="folha" style="width:360px;left:510px;top:70px;transform:rotate(6deg)"><img src="${pagina('kit-ambientacao', 3)}"></div>
    <div class="folha" style="width:380px;left:260px;top:40px"><img src="${pagina('kit-ambientacao', 2)}"></div>
    <div class="etq" style="left:40px;top:610px">Crachás</div><div class="etq" style="left:330px;top:610px">Ficha do grupo</div><div class="etq" style="right:40px;top:610px">Certificado</div>
  </div>`,
  // Redesign (briefing da Análise 2026-10-28): etapa ampliada e legível, com anotações numeradas
  'etapa-zoom': `<div class="cena" style="padding:28px 24px;background:#fbf6ea">
    <div class="zoom" style="height:314px"><img src="${pagina('4ano-feira', 5)}" style="margin-top:-30px"></div>
    <div class="corte-meio">✂ ··· espaço da equipe para a conta ··· ✂</div>
    <div class="zoom" style="height:215px"><img src="${pagina('4ano-feira', 5)}" style="margin-top:-1062px"></div>
    <div class="nota" style="top:222px;right:34px">1</div><div class="nota" style="top:410px;right:34px">2</div><div class="nota" style="top:478px;right:34px">3</div>
    <div class="legendas"><div><b>1</b> Ninguém diz qual é a conta: a turma decide.</div><div><b>2</b> As respostas erradas são os erros mais comuns.</div><div><b>3</b> Só a resposta certa traz a pista verdadeira.</div></div>
  </div>`,
  'bonus-destaque': `<div class="cena" style="height:640px;background:#1f2a5a">
    <div class="folha" style="width:430px;left:30px;top:70px;transform:rotate(-4deg)"><div style="height:500px;overflow:hidden"><img src="${pagina('kit-ambientacao', 1)}" style="width:100%"></div></div>
    <div class="folha" style="width:430px;left:440px;top:90px;transform:rotate(4deg)"><div style="height:480px;overflow:hidden"><img src="${pagina('kit-ambientacao', 3)}" style="width:100%"></div></div>
    <div class="etq" style="left:50px;top:24px;background:#f5c431;color:#1f2a5a">Crachás de agente</div><div class="etq" style="right:50px;top:24px;background:#f5c431;color:#1f2a5a">Certificado</div>
    <div class="etq" style="left:330px;top:580px;background:#fff;color:#1f2a5a">+ ficha do grupo · para imprimir</div>
  </div>`,
};

(async () => {
  fs.mkdirSync(SAIDA, { recursive: true });
  const browser = await chromium.launch({ executablePath: CHROME, args: ['--headless=new', '--allow-file-access-from-files'] });
  const p = await browser.newPage({ viewport: { width: 900, height: 800 }, deviceScaleFactor: 1 });
  for (const [nome, html] of Object.entries(IMAGENS)) {
    const arq = path.join(TMP, nome + '.html');
    fs.writeFileSync(arq, `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body>${html}</body></html>`);
    await p.goto(pathToFileURL(arq).href, { waitUntil: 'load' });
    const png = path.join(TMP, nome + '.png');
    await (await p.$('.cena')).screenshot({ path: png });
    const webp = path.join(SAIDA, nome + '.webp');
    execFileSync('python3', ['-c', `from PIL import Image; im=Image.open(${JSON.stringify(png)}).convert('RGB'); im.thumbnail((900,1400)); im.save(${JSON.stringify(webp)}, 'WEBP', quality=72, method=6)`]);
    console.log(`${nome}.webp  ${Math.round(fs.statSync(webp).size / 1024)} KB`);
  }
  await browser.close();
  fs.rmSync(TMP, { recursive: true, force: true });
})();
