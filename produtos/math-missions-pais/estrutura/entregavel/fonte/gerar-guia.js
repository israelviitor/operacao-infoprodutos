// Gera o rascunho do Guia do Método de Singapura para Pais e o cartão de bar model (PT).
// Uso: node gerar-guia.js -> ./html/guia-metodo-singapura.html e ./html/cartao-bar-model.html
const fs = require('fs');
const path = require('path');
const { barra, iguais } = require('./barras');

const CSS_BASE = `
* { box-sizing: border-box; }
body { font-family: Inter, 'DejaVu Sans', sans-serif; color: #111; margin: 0; }
h1, h2, h3 { line-height: 1.15; }
.box { border: 1.5px solid #111; border-radius: 10px; padding: 8px 14px; margin: 8px 0; }
.small { font-size: 9.5pt; color: #333; }
`;

// ---------- GUIA ----------
const EX = {
  parteTodo: barra([{ total: '24 adesivos', partes: [{ u: 15, t: '15 deu' }, { u: 9, t: '?' }] }], { largura: 420, alturaBarra: 30, fonte: 13 }),
  comparacao: barra([
    { nome: 'Léo', partes: [{ u: 15, t: '15' }] },
    { nome: 'Bia', partes: [{ u: 9, t: '9' }, { u: 6, t: '?', tracejada: true }] },
  ], { largura: 420, alturaBarra: 30, fonte: 13 }),
  unidades: barra([{ total: '?', partes: iguais(4, '6 lápis') }], { largura: 420, alturaBarra: 30, fonte: 13 }),
  fracao: barra([{ total: '80 pontos', partes: [...iguais(3, ' ').map((p) => ({ ...p, cinza: true })), { u: 1, t: ' ' }] }], { largura: 420, alturaBarra: 30, fonte: 13 }),
};

const guia = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Guia do Método de Singapura para Pais</title><style>${CSS_BASE}
@page { size: A4; margin: 16mm 16mm 14mm; }
body { font-size: 11.5pt; line-height: 1.45; }
.capa { page-break-after: always; text-align: left; padding-top: 30mm; }
.capa .marca { font-weight: 800; letter-spacing: .08em; font-size: 10pt; }
.capa h1 { font-size: 34pt; margin: 10px 0 12px; }
.capa .sub { font-size: 15pt; max-width: 150mm; }
.capa .tag { display: inline-block; background: #111; color: #fff; border-radius: 6px; padding: 3px 10px; font-weight: 700; margin-top: 18mm; }
.capa .indice { margin-top: 20mm; border-top: 2px solid #111; padding-top: 8px; }
.capa .indice li { margin: 4px 0; }
h2 { font-size: 18pt; border-bottom: 2px solid #111; padding-bottom: 4px; margin: 0 0 10px; page-break-after: avoid; }
h3 { font-size: 13pt; margin: 14px 0 4px; page-break-after: avoid; }
section { margin-top: 16px; }
section.cont { page-break-before: auto; margin-top: 16px; }
.passo { display: grid; grid-template-columns: 30mm 1fr; gap: 10px; border: 1.5px solid #111; border-radius: 10px; padding: 10px 12px; margin: 8px 0; page-break-inside: avoid; }
.passo .n { font-size: 26pt; font-weight: 800; line-height: 1; }
.passo .n small { display: block; font-size: 12pt; margin-top: 4px; }
.modelo { border: 1.5px solid #111; border-radius: 10px; padding: 8px 12px; margin: 8px 0; page-break-inside: avoid; }
.modelo .q { font-style: italic; }
table.trava { width: 100%; border-collapse: collapse; font-size: 10.5pt; }
table.trava th, table.trava td { border: 1.2px solid #111; padding: 6px 8px; vertical-align: top; text-align: left; }
table.trava th { background: #111; color: #fff; }
table.trava td:first-child { font-weight: 700; width: 27%; }
table.trava td:last-child { width: 25%; color: #333; }
table.trava tr { page-break-inside: avoid; }
ol.roteiro li { margin-bottom: 6px; }
.rascunho { border: 2px dashed #111; padding: 6px 10px; border-radius: 8px; font-size: 9.5pt; margin-bottom: 10px; }
</style></head><body>

<div class="capa">
  <div class="marca">MATH MISSIONS · GUIA PARA PAIS</div>
  <h1>Guia do Método de Singapura para Pais</h1>
  <div class="sub">Como ajudar seu filho a resolver problemas de matemática <b>desenhando antes de calcular</b>, mesmo que você não seja professor e não goste de matemática.</div>
  <div class="tag">Leitura: 15 minutos · use junto com as missões</div>
  <ol class="indice">
    <li>Por que Singapura</li>
    <li>Os 3 passos: Concreto → Desenho → Conta (o passo “abstrato”)</li>
    <li>A barra (o “bar model”): 3 desenhos que resolvem quase tudo</li>
    <li>O roteiro de 5 perguntas para qualquer problema</li>
    <li>O que dizer quando a criança travar</li>
    <li>Domínio antes de avançar</li>
    <li>A rotina em casa (1 criança ou irmãos)</li>
  </ol>
  <p class="small" style="margin-top:14mm">Este guia ensina, para uso em casa, a abordagem usada nas escolas de Singapura. O Math Missions não é afiliado a nenhuma editora, escola ou marca de material didático.</p>
</div>

<section>
  <div class="rascunho"><b>RASCUNHO PARA APROVAÇÃO.</b> Os dados de ranking abaixo serão conferidos pela Copy com link oficial antes da versão final.</div>
  <h2>1. Por que Singapura</h2>
  <p>Singapura é o país que fica em 1º lugar em matemática em duas das principais avaliações internacionais: o <b>TIMSS 2023</b> (alunos do 4º e do 8º ano) e o <b>PISA 2022</b> (alunos de 15 anos). <span class="small">[Fontes: IEA, TIMSS 2023 International Results; OCDE, PISA 2022 Results, Volume I.]</span></p>
  <p>O que chama a atenção não é a quantidade de conta. É <b>como</b> as crianças de lá aprendem a resolver problemas escritos: antes de calcular, elas <b>desenham o problema</b> numa barra. O desenho mostra qual conta fazer.</p>
  <h3>O problema que este método resolve</h3>
  <p>Muita criança sabe fazer a conta, mas trava quando a conta vem dentro de uma história. Ela olha para os números e chuta: “é de mais?”, “é de vezes?”. O problema não é falta de tabuada. É que ninguém ensinou a <b>enxergar</b> o que a história pede.</p>
  <p>A barra resolve isso. Quando a criança desenha o que está acontecendo, a conta aparece sozinha: se falta um pedaço, é de menos; se são pedaços iguais, é de vezes ou de dividir.</p>
  <div class="box"><b>Você não precisa saber ensinar matemática.</b> Seu papel é fazer as perguntas certas (estão prontas neste guia) e pedir o desenho. Cada missão traz o gabarito com o desenho esperado e a explicação de cada etapa.</div>

  <section class="cont">
  <h2>2. Os 3 passos: Concreto → Desenho → Conta (o passo “abstrato”)</h2>
  <p>O método de Singapura apresenta cada assunto novo em 3 passos, nesta ordem. Nas missões, a etapa marcada <b>“desenhe o problema”</b> é onde a criança faz os três.</p>
  <div class="passo"><div class="n">1<small>Concreto</small></div><div><b>Com as mãos.</b> A criança resolve com objetos: feijões, tampinhas, tiras de papel. Se a história tem 24 adesivos, ela separa 24 feijões e tira os que foram dados.<br><b>Você faz:</b> separa os objetos e deixa a criança mexer. <br><b>Pode pular quando:</b> ela já resolve sem precisar tocar nos objetos.</div></div>
  <div class="passo"><div class="n">2<small>Desenho</small></div><div><b>Com uma barra.</b> Em vez dos feijões, ela desenha um retângulo que representa a quantidade e divide em partes. Põe um <b>?</b> no pedaço que quer descobrir.<br><b>Você faz:</b> pede “me mostra isso numa barra” e espera.<br><b>Pode avançar quando:</b> ela explica o desenho com as próprias palavras.</div></div>
  <div class="passo"><div class="n">3<small>Conta</small></div><div><b>Com números.</b> Olhando o desenho, ela escreve a conta e resolve. Depois volta ao desenho para conferir se a resposta faz sentido.<br><b>Você faz:</b> pergunta “que conta o desenho está pedindo?”.<br><b>Sinal de domínio:</b> ela faz o desenho rápido, sozinha, e acerta a conta.</div></div>
  </section>
</section>

<section>
  <h2>3. A barra (o “bar model”): 3 desenhos que resolvem quase tudo</h2>
  <p>Quase todo problema das missões, do Nível 1 ao Nível 3, cabe em um destes 3 desenhos. A barra não precisa ser bonita nem medida com régua: basta que a parte maior pareça maior.</p>
  <div class="modelo"><h3 style="margin-top:0">A. Parte e todo (juntar e tirar)</h3>
    <p class="q">“Ana tinha 24 adesivos e deu 15 para a irmã. Com quantos ficou?”</p>${EX.parteTodo}
    <p>A barra inteira é o todo (24). Um pedaço é o que ela deu (15). O outro é o <b>?</b>. Conhecendo o todo e uma parte, a conta é de menos: 24 − 15 = 9. Se o <b>?</b> estiver em cima (no todo), a conta é de mais.</p></div>
  <div class="modelo"><h3 style="margin-top:0">B. Comparação (quanto a mais, quanto a menos)</h3>
    <p class="q">“Léo tem 15 figurinhas. Bia tem 9. Quantas Léo tem a mais?”</p>${EX.comparacao}
    <p>Uma barra para cada pessoa, alinhadas à esquerda. O pedaço tracejado é a diferença: o que falta na barra menor para ficar igual à maior. 15 − 9 = 6.</p></div>
  <div class="modelo"><h3 style="margin-top:0">C. Pedaços iguais (vezes, dividir e frações)</h3>
    <p class="q">“São 4 caixas com 6 lápis cada. Quantos lápis ao todo?”</p>${EX.unidades}
    <p>Pedaços do mesmo tamanho. Se o <b>?</b> está no total, é de vezes (4 × 6 = 24). Se o total é conhecido e o <b>?</b> está num pedaço, é de dividir.</p>
    <p class="q">Frações: “O celular do jogo tem 80 pontos de bateria e está com 3/4 da carga. Quantos pontos tem?”</p>${EX.fracao}
    <p>Divida a barra em 4 pedaços iguais (o “de baixo” da fração) e pinte 3 (o “de cima”). O <b>?</b> é o valor dos 3 pedaços pintados juntos. Cada pedaço vale 80 ÷ 4 = 20; os 3 pintados valem 60.</p></div>
</section>

<section>
  <h2>4. O roteiro de 5 perguntas</h2>
  <p>Use estas perguntas em qualquer problema, nesta ordem. Elas ajudam sem entregar a resposta.</p>
  <ol class="roteiro">
    <li><b>“Me conta essa história com as suas palavras.”</b> Se a criança não consegue contar, ela ainda não entendeu; peça para ler de novo em voz alta.</li>
    <li><b>“O que a pergunta quer saber?”</b> É aqui que vai o <b>?</b>.</li>
    <li><b>“Me mostra isso numa barra.”</b> O que é o todo? Quais são as partes? Os pedaços são iguais?</li>
    <li><b>“Que conta o desenho está pedindo?”</b> Só agora ela calcula.</li>
    <li><b>“A resposta faz sentido olhando o desenho?”</b> Um pedaço não pode ser maior que a barra inteira.</li>
  </ol>
  <p>O Cartão do Desenho resume este roteiro em 4 palavras: <b>Leia, Desenhe, Calcule, Confira.</b></p>

  <section class="cont">
  <h2>5. O que dizer quando a criança travar</h2>
  <table class="trava">
    <tr><th>Se a criança…</th><th>Diga</th><th>Evite</th></tr>
    <tr><td>não sabe por onde começar</td><td>“Lê de novo em voz alta e me conta o que aconteceu na história.”</td><td>Ler por ela e já explicar.</td></tr>
    <tr><td>pergunta “é de mais ou de menos?”</td><td>“Desenha primeiro. O desenho vai te contar.”</td><td>Dizer a operação.</td></tr>
    <tr><td>desenhou, mas não sabe onde pôr o ?</td><td>“O que a pergunta quer saber? Qual pedaço é esse?”</td><td>Apontar o pedaço.</td></tr>
    <tr><td>quer pular o desenho</td><td>“Se é fácil, o desenho leva 10 segundos. Me mostra rapidinho.”</td><td>Aceitar o chute.</td></tr>
    <tr><td>errou a conta</td><td>“Confere no desenho: esse pedaço pode ser maior que a barra inteira?”</td><td>“Tá errado.”</td></tr>
    <tr><td>a palavra-código não fechou</td><td>“Uma das respostas está escondendo a letra certa. Vamos refazer o desenho de cada uma?”</td><td>Mostrar qual etapa errou.</td></tr>
    <tr><td>diz “sou burro” ou “não sou bom em matemática”</td><td>“Você ainda não aprendeu esse tipo de problema. É para isso que a gente treina.”</td><td>“Eu também era ruim em matemática.”</td></tr>
    <tr><td>fica frustrada ou chora</td><td>“Vamos parar aqui. Amanhã a gente continua de onde parou.”</td><td>Insistir até acabar.</td></tr>
    <tr><td>acertou</td><td>“Me explica como você descobriu.”</td><td>Só “muito bem, você é inteligente”: elogie o caminho, não o talento.</td></tr>
    <tr><td>e você não sabe a resposta</td><td>Abra o gabarito: cada etapa traz a conta, o desenho e o porquê.</td><td>Fingir que sabe e chutar.</td></tr>
  </table>
  </section>
</section>

<section>
  <h2>6. Domínio antes de avançar</h2>
  <p>O método de Singapura trabalha com domínio: só se avança quando o passo atual está firme. Em casa, use esta regra simples:</p>
  <div class="box"><b>Avance para a próxima missão quando a criança explicar sozinha o desenho da etapa “desenhe o problema”.</b> Se ainda não, refaça só essa etapa outro dia, com os números trocados (cada missão traz uma sugestão na página do adulto). Repetir com números novos não é atraso: é o que faz o método funcionar.</div>
  <p>Acertar a conta sem conseguir explicar o desenho ainda não é domínio. Explicar o desenho e errar a conta por distração já é: peça só para conferir.</p>

  <section class="cont">
  <h2>7. A rotina em casa</h2>
  <ul>
    <li><b>Frequência:</b> 2 ou 3 missões por semana, de 20 a 35 minutos. Melhor curto e frequente do que uma maratona no fim de semana.</li>
    <li><b>Antes:</b> leia a página do adulto da missão (2 minutos) e separe os objetos do passo Concreto.</li>
    <li><b>Durante:</b> leia a abertura com clima de mistério, deixe a criança decidir as contas e peça o desenho na etapa marcada.</li>
    <li><b>Depois:</b> confira a palavra-código e peça: “Me explica o seu desenho.”</li>
    <li><b>Irmãos:</b> imprima a missão uma vez e trocam de papel a cada etapa: leitor, desenhista e calculista. Se estiverem em níveis diferentes, cada um faz a missão do seu nível e os dois comparam as palavras-código no fim.</li>
    <li><b>Cartão do Desenho:</b> imprima e deixe na mesa durante as missões. Ele lembra os passos e os 3 desenhos.</li>
  </ul>
  </section>
</section>
</body></html>`;

// ---------- CARTÃO ----------
const mini = { largura: 250, alturaBarra: 30, fonte: 13 };
const cartao = () => `<div class="cartao">
  <div class="topo"><b>MATH MISSIONS</b><span>CARTÃO DO DESENHO</span></div>
  <h1>Desenhe antes de calcular</h1>
  <div class="passos">
    <div><b>1</b>LEIA<small>Conte a história com suas palavras.</small></div>
    <div><b>2</b>DESENHE<small>Faça a barra. Ponha <i class="q">?</i> no que quer descobrir.</small></div>
    <div><b>3</b>CALCULE<small>Faça a conta que o desenho mostra.</small></div>
    <div><b>4</b>CONFIRA<small>A resposta cabe no desenho?</small></div>
  </div>
  <div class="mods">
    <div><b>Parte e todo</b><span>juntar · tirar</span>${barra([{ total: 'todo', partes: [{ u: 3, t: 'parte' }, { u: 2, t: '?' }] }], mini)}<small>? no todo → <b>mais</b> · ? numa parte → <b>menos</b></small></div>
    <div><b>Comparação</b><span>a mais · a menos</span>${barra([{ partes: [{ u: 5, t: 'maior' }] }, { partes: [{ u: 3, t: 'menor' }, { u: 2, t: '?', tracejada: true }] }], mini)}<small>a diferença é o pedaço tracejado → <b>menos</b></small></div>
    <div><b>Pedaços iguais</b><span>vezes · dividir · frações</span>${barra([{ total: 'total', partes: iguais(4, '') .map(() => ({ u: 1, t: ' ' })) }], mini)}<small>? no total → <b>vezes</b> · ? num pedaço → <b>dividir</b></small></div>
  </div>
  <div class="trava"><b>Travou?</b> Pergunte-se: “O que a pergunta quer saber?” e “Qual pedaço é esse?”</div>
</div>`;

const cartaoHTML = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Cartão do Desenho</title><style>${CSS_BASE}
@page { size: A4; margin: 10mm; }
.cartao { height: 133mm; border: 2.5px solid #111; border-radius: 14px; padding: 8mm 9mm; position: relative; }
.corte { height: 9mm; display: flex; align-items: center; gap: 8px; font-size: 8pt; color: #555; }
.corte::before, .corte::after { content: ''; flex: 1; border-top: 1.5px dashed #555; }
.topo { display: flex; justify-content: space-between; font-size: 9pt; letter-spacing: .08em; border-bottom: 2px solid #111; padding-bottom: 3px; }
h1 { font-size: 27pt; margin: 8px 0 12px; }
.q { font-style: normal; font-weight: 800; }
.passos { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; }
.passos div { border: 1.8px solid #111; border-radius: 10px; padding: 8px 10px; font-weight: 800; font-size: 13pt; }
.passos div b { display: inline-flex; width: 26px; height: 26px; background: #111; color: #fff; border-radius: 6px; align-items: center; justify-content: center; margin-right: 6px; }
.passos small { display: block; font-weight: 400; font-size: 10.5pt; margin-top: 3px; line-height: 1.3; }
.mods { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 12px; }
.mods > div { border: 1.5px solid #111; border-radius: 10px; padding: 8px 10px; font-size: 12.5pt; }
.mods span { display: block; font-size: 10pt; color: #444; margin-bottom: 2px; }
.mods svg { width: 100%; height: auto; }
.mods small { font-size: 10pt; display: block; line-height: 1.3; }
.trava { margin-top: 12px; font-size: 12.5pt; border: 2px dashed #111; border-radius: 10px; padding: 6px 10px; }
</style></head><body>${cartao()}<div class="corte">recorte aqui · 1 cartão por criança</div>${cartao()}</body></html>`;

const OUT = path.join(__dirname, 'html');
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'guia-metodo-singapura.html'), guia);
fs.writeFileSync(path.join(OUT, 'cartao-bar-model.html'), cartaoHTML);
console.log('ok  guia + cartão');
