// Missão-amostra do 5º ano — O Mistério da Cápsula do Tempo
// Sem anos fixos no texto ("há 25 anos"), para o material não envelhecer.
const VOTOS = [['Mangueira', 7], ['Quadra', 9], ['Portão', 4], ['Horta', 8]]; // 28 votos = 28 alunos (igual à etapa 4)
const voto = (nome) => VOTOS.find(([n]) => n === nome)[1];

function grafico() {
  const W = 470, H = 250, x0 = 50, y0 = 215, esc = 18, larg = 60, passo = 100, MAX = 10;
  let s = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="Inter, DejaVu Sans, sans-serif" font-size="13">`;
  s += `<text x="${x0}" y="16" font-weight="700" font-size="13.5">Votação para o sorteio: onde enterrar a cápsula?</text>`;
  for (let v = 0; v <= MAX; v++) {
    const y = y0 - v * esc;
    s += `<line x1="${x0}" y1="${y}" x2="${x0 + 4 * passo}" y2="${y}" stroke="${v === 0 ? '#000' : '#555'}" stroke-width="${v === 0 ? 1.5 : 0.8}"/>`;
    s += `<text x="${x0 - 8}" y="${y + 4}" text-anchor="end">${v}</text>`;
  }
  s += `<line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y0 - MAX * esc}" stroke="#000" stroke-width="1.5"/>`;
  s += `<text x="12" y="${y0 - 90}" transform="rotate(-90 12 ${y0 - 90})" text-anchor="middle">votos</text>`;
  VOTOS.forEach(([nome, v], i) => {
    const x = x0 + 20 + i * passo;
    s += `<rect x="${x}" y="${y0 - v * esc}" width="${larg}" height="${v * esc}" fill="#fff" stroke="#000" stroke-width="2.2"/>`;
    s += `<text x="${x + larg / 2}" y="${y0 + 18}" text-anchor="middle">${nome}</text>`;
  });
  return s + '</svg>';
}

function reta(total, partes, rotulos) {
  const W = 540, x0 = 55, x1 = 485, y = 40, larg = (x1 - x0) / partes;
  let s = `<svg width="${W}" height="84" viewBox="0 0 ${W} 84" font-family="Inter, DejaVu Sans, sans-serif" font-size="13">`;
  s += `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="#000" stroke-width="2"/>`;
  for (let i = 0; i <= partes; i++) {
    const x = x0 + i * larg, ponta = i === 0 || i === partes;
    s += `<line x1="${x}" y1="${y - (ponta ? 12 : 8)}" x2="${x}" y2="${y + (ponta ? 12 : 8)}" stroke="#000" stroke-width="${ponta ? 2 : 1.5}"/>`;
    if (rotulos && !ponta) s += `<text x="${x}" y="${y - 16}" text-anchor="middle">${i}/${partes}</text>`;
  }
  s += `<text x="${x0}" y="${y + 30}" text-anchor="middle" font-weight="700">0</text><text x="${x0}" y="${y + 46}" text-anchor="middle" font-size="11">porta da sala</text>`;
  s += `<text x="${x1}" y="${y + 30}" text-anchor="middle" font-weight="700">${total}</text><text x="${x1}" y="${y + 46}" text-anchor="middle" font-size="11">muro do fundo</text>`;
  return s + '</svg>';
}

const ITENS = [['Pote de plástico com tampa', 1250], ['Fita adesiva larga', 375], ['Pá de jardim', 890], ['Saquinhos plásticos', 235]];
// centavos -> "R$ 12,50"
const brl = (c) => 'R$ ' + Math.floor(c / 100) + ',' + String(c % 100).padStart(2, '0');
function recibo() {
  const linhas = ITENS.map(([a, c]) => `<tr><td style="padding:1px 8px">${a}</td><td style="padding:1px 8px;text-align:right;font-weight:700">${brl(c)}</td></tr>`).join('');
  return `<div style="display:inline-block;border:1.5px dashed #000;padding:6px 10px;font-size:12pt"><div style="text-align:center;font-weight:800;letter-spacing:.1em">LOJA DO BAIRRO</div><div style="text-align:center;font-size:9.5pt">recibo</div><table style="width:auto;margin-top:4px">${linhas}</table></div>`;
}

module.exports = {
  id: '5ano-capsula',
  serie: '5º ano',
  titulo: 'O Mistério da Cápsula do Tempo',
  resumo: 'Há 25 anos, uma turma do 5º ano enterrou uma cápsula do tempo na escola. Ninguém lembra onde. Com o diário daquela turma, a equipe descobre o lugar e abre a cápsula.',
  tempo: '45 a 50 minutos',
  alvosTitulo: 'Os 4 lugares possíveis',
  alvosPlural: '4 lugares possíveis',
  alvosRiscar: 'o lugar',
  missaoCurta: 'descobrir onde está a cápsula e abri-la.',
  abertura: [
    'Há <b>25 anos</b>, a turma do 5º ano enterrou uma <b>cápsula do tempo</b> na escola, com cartas e fotos, para ser aberta 25 anos depois. A hora chegou!',
    'O problema: ninguém lembra onde ela está. A Marina, que era aluna daquela turma, mandou para a escola o <b>diário da turma</b>. Ele tem pistas, mas cada página só se abre com a conta certa.',
    'A diretora separou os 4 lugares onde a cápsula pode estar.',
  ],
  alvos: [
    { nome: 'MANGUEIRA', desc: 'A árvore grande ao lado da cantina. Tem um banco em volta.' },
    { nome: 'QUADRA', desc: 'A quadra de esportes, nos fundos da escola.' },
    { nome: 'PORTÃO', desc: 'O canteiro de flores perto do portão de entrada.' },
    { nome: 'HORTA', desc: 'A horta da escola, no caminho até o muro do fundo.' },
  ],
  missao: 'descobrir <b>onde está a cápsula</b> e achar a <b>senha do cadeado</b> dela.',
  riscarTitulo: 'Risquem os lugares que não combinam com as pistas',
  final: ['Onde estava a cápsula do tempo?', 'Por que ela não podia estar nos outros lugares? (uma razão para cada um)', 'Escrevam um recado curto para a turma que vai abrir a próxima cápsula, daqui a 25 anos.'],
  conferencia: 'sobrou só um lugar? A última pista combina com ele? Se sobrou mais de um, se nenhum sobrou, ou se a última pista manda procurar num lugar que vocês riscaram, uma conta está errada. Voltem às etapas e procurem!',
  solucao: 'A cápsula está embaixo da <b>MANGUEIRA</b>. Pistas: os 3 mais votados foram para o sorteio e o Portão, menos votado, ficou de fora (sai o Portão) → na horta a pá não entrou, o chão era só pedra (sai a Horta) → a turma só tinha pá de jardim e a quadra já era de cimento (sai a Quadra) → o pote certo diz que a cápsula foi enterrada embaixo da mangueira.',
  etapas: [
    {
      titulo: 'A votação da turma',
      conteudo: 'Leitura de gráfico de colunas',
      bncc: 'EF05MA24', saeb: 'D28',
      cena: 'Na primeira página do diário há um gráfico. Cada aluno da turma votou uma vez. Depois, alguns lugares foram para um sorteio. A Marina escreveu: “Para abrir a página 2, use a resposta da pergunta.”',
      pistaCerta: 'Diário, página 2: “Os três lugares mais votados foram para o sorteio.”',
      pistasErradas: [
        'Diário, página 2: “Os três lugares menos votados foram para o sorteio.”',
        'Diário, página 2: “Os dois lugares mais votados foram para o sorteio.”',
        'Diário, página 2: “Só a mangueira e o portão ficaram fora do sorteio.”',
      ],
      niveis: [
        {
          enunciado: '<p class="pergunta">Quantos alunos votaram ao todo?</p>',
          figura: grafico(),
          calc: () => VOTOS.reduce((s, [, v]) => s + v, 0), resposta: 28, conta: '7 + 9 + 4 + 8 = 28',
          opcoes: [
            { v: 4, erro: 'contou as colunas, não os votos.', calc: () => VOTOS.length },
            { v: 9, erro: 'leu só a coluna mais alta.', calc: () => voto('Quadra') },
            { v: 20, erro: 'esqueceu de somar a coluna da Horta (7 + 9 + 4).', calc: () => 7 + 9 + 4 },
            { v: 28 },
          ],
        },
        {
          enunciado: '<p class="pergunta">Quantos votos o lugar mais votado teve a mais que o lugar menos votado?</p>',
          figura: grafico(),
          calc: () => voto('Quadra') - voto('Portão'), resposta: 5, conta: 'mais votado: Quadra (9) · menos votado: Portão (4) · 9 − 4 = 5',
          opcoes: [
            { v: 1, erro: 'comparou com o segundo mais votado (9 − 8).', calc: () => 9 - 8 },
            { v: 3, erro: 'comparou Mangueira e Portão (7 − 4).', calc: () => 7 - 4 },
            { v: 5 },
            { v: 13, erro: 'somou 9 + 4 em vez de comparar.', calc: () => 9 + 4 },
          ],
        },
        {
          enunciado: '<p class="pergunta">Juntando os votos dos 3 lugares mais votados, quantos votos eles têm a mais que o lugar menos votado?</p>',
          figura: grafico(),
          calc: () => (9 + 8 + 7) - 4, resposta: 20, conta: '9 + 8 + 7 = 24 · 24 − 4 = 20',
          opcoes: [
            { v: 13, erro: 'juntou só os 2 mais votados (9 + 8 − 4).', calc: () => 9 + 8 - 4 },
            { v: 20 },
            { v: 24, erro: 'juntou os 3 lugares, mas esqueceu de comparar com o Portão.', calc: () => 9 + 8 + 7 },
            { v: 28, erro: 'somou todas as colunas.', calc: () => 9 + 8 + 7 + 4 },
          ],
        },
      ],
    },
    {
      titulo: 'Os passos no pátio',
      conteudo: 'Frações na reta numérica (parte de um todo)',
      bncc: 'EF05MA03', saeb: 'D24',
      cena: 'Na página 2, um mapa: “Da porta da sala até o muro do fundo, contamos os passos. Marcamos no caminho o lugar onde tentamos cavar e desistimos.” Achem o passo da marca.',
      pistaCerta: 'Diário: “No passo {r} fica a horta. Ali a pá não entrou: o chão era só pedra.”',
      pistasErradas: [
        'Diário: “No passo {r} fica a mangueira. Ali a pá não entrou: raízes grossas demais.”',
        'Diário: “No passo {r} fica a quadra. Ali a pá não entrou: o chão era de cimento.”',
        'Diário: “No passo {r} fica o portão. Ali a pá não entrou: o chão era só pedra.”',
      ],
      niveis: [
        {
          enunciado: '<p>O caminho tem <b>40 passos</b> e está dividido em 4 partes iguais. O diário diz: “A marca fica em <b>2/4</b> do caminho, contando da porta da sala.”</p><p class="pergunta">Em que passo fica a marca?</p>',
          figura: reta('40 passos', 4, true),
          calc: () => 40 / 4 * 2, resposta: 20, conta: '40 ÷ 4 = 10 passos em cada parte · 2 partes = 20 passos (2/4 = metade)',
          opcoes: [
            { v: 2, erro: 'usou só o número de cima da fração.', calc: () => 2 },
            { v: 10, erro: 'achou uma parte só (1/4).', calc: () => 40 / 4 },
            { v: 20 },
            { v: 38, erro: 'tirou 2 de 40.', calc: () => 40 - 2 },
          ],
        },
        {
          enunciado: '<p>O caminho tem <b>40 passos</b> e está dividido em 4 partes iguais. O diário diz: “A marca fica em <b>3/4</b> do caminho, contando da porta da sala.”</p><p class="pergunta">Em que passo fica a marca?</p>',
          figura: reta('40 passos', 4, false),
          calc: () => 40 / 4 * 3, resposta: 30, conta: '40 ÷ 4 = 10 passos em cada parte · 3 partes = 30 passos',
          opcoes: [
            { v: 10, erro: 'achou uma parte só (1/4).', calc: () => 40 / 4 },
            { v: 30 },
            { v: 37, erro: 'tirou 3 de 40.', calc: () => 40 - 3 },
            { v: 120, erro: 'multiplicou 3 × 40 e não dividiu por 4.', calc: () => 3 * 40 },
          ],
        },
        {
          enunciado: '<p>O caminho tem <b>56 passos</b> e está dividido em 8 partes iguais. O diário diz: “A marca fica em <b>3/8</b> do caminho, contando da porta da sala.”</p><p class="pergunta">Em que passo fica a marca?</p>',
          figura: reta('56 passos', 8, false),
          calc: () => 56 / 8 * 3, resposta: 21, conta: '56 ÷ 8 = 7 passos em cada parte · 3 partes = 21 passos',
          opcoes: [
            { v: 7, erro: 'achou uma parte só (1/8).', calc: () => 56 / 8 },
            { v: 21 },
            { v: 35, erro: 'contou a partir do muro, não da porta (5/8 = 35).', calc: () => 56 / 8 * 5 },
            { v: 53, erro: 'tirou 3 de 56.', calc: () => 56 - 3 },
          ],
        },
      ],
    },
    {
      titulo: 'O recibo da loja',
      conteudo: 'Adição e subtração com números decimais (dinheiro)',
      bncc: 'EF05MA07', saeb: 'D25',
      cena: 'Dentro do diário, a equipe acha o recibo das compras da turma. A Marina escreveu: “A próxima página abre com o valor certo.”',
      pistaCerta: 'Diário: “Só tínhamos pá de jardim. A quadra já era de cimento: ali não deu.”',
      pistasErradas: [
        'Diário: “Só tínhamos pá de jardim. Na mangueira, cheia de raízes, não deu.”',
        'Diário: “Só tínhamos pá de jardim. No portão, cheio de pedras, não deu.”',
        'Diário: “Pegamos a picareta do zelador e cavamos fundo na quadra.”',
      ],
      niveis: [
        {
          enunciado: '<p class="pergunta">Quanto a turma gastou com o pote e a fita, juntos?</p>',
          figura: recibo(),
          calc: () => brl(1250 + 375), resposta: 'R$ 16,25', conta: 'R$ 12,50 + R$ 3,75 = R$ 16,25 (50 + 75 = 125 centavos = 1 real e 25 centavos)',
          opcoes: [
            { v: 'R$ 8,75', erro: 'subtraiu em vez de somar (12,50 − 3,75).', calc: () => brl(1250 - 375) },
            { v: 'R$ 15,25', erro: 'esqueceu o “vai um” dos centavos para os reais (125 centavos = 1 real e 25 centavos).', calc: () => brl(1500 + 25) },
            { v: 'R$ 16,25' },
            { v: 'R$ 162,50', erro: 'colocou a vírgula no lugar errado.', calc: () => brl((1250 + 375) * 10) },
          ],
        },
        {
          enunciado: '<p class="pergunta">Quanto a turma gastou ao todo?</p>',
          figura: recibo(),
          calc: () => brl(ITENS.reduce((s, [, c]) => s + c, 0)), resposta: 'R$ 27,50', conta: '12,50 + 3,75 + 8,90 + 2,35 = R$ 27,50',
          opcoes: [
            { v: 'R$ 15,00', erro: 'esqueceu de somar o pote (3,75 + 8,90 + 2,35).', calc: () => brl(375 + 890 + 235) },
            { v: 'R$ 25,15', erro: 'esqueceu de somar os saquinhos (12,50 + 3,75 + 8,90).', calc: () => brl(1250 + 375 + 890) },
            { v: 'R$ 25,50', erro: 'somou os centavos (250 = 2 reais e 50 centavos), mas esqueceu de juntar os 2 reais.', calc: () => brl(2500 + 50) },
            { v: 'R$ 27,50' },
          ],
        },
        {
          enunciado: '<p>A turma pagou tudo com <b>uma nota de R$ 50,00</b>.</p><p class="pergunta">Quanto a turma recebeu de troco?</p>',
          figura: recibo(),
          calc: () => brl(5000 - ITENS.reduce((s, [, c]) => s + c, 0)), resposta: 'R$ 22,50', conta: 'total = R$ 27,50 · 50,00 − 27,50 = R$ 22,50',
          opcoes: [
            { v: 'R$ 22,50' },
            { v: 'R$ 23,50', erro: 'desagrupou 1 real para os centavos, mas não tirou esse 1 real dos reais.', calc: () => brl(5000 - 2750 + 100) },
            { v: 'R$ 27,50', erro: 'calculou o total da compra e esqueceu o troco.', calc: () => brl(2750) },
            { v: 'R$ 77,50', erro: 'somou 50,00 + 27,50.', calc: () => brl(5000 + 2750) },
          ],
        },
      ],
    },
    {
      titulo: 'Os potes do buraco',
      conteudo: 'Multiplicação e divisão com números naturais',
      bncc: 'EF05MA08', saeb: 'D20',
      cena: 'A equipe vai até o lugar que sobrou na lista de vocês e cava. No buraco há 4 potes iguais, cada um com um cadeado diferente: a turma deixou potes-pegadinha! Na última página do diário: “A senha certa conta o que guardamos.”',
      pistaCerta: 'Esse pote abre. Dentro, um bilhete: “Esta é a cápsula. Ela fica embaixo da mangueira.”',
      pistasErradas: [
        'Esse pote abre. Dentro, um bilhete: “Pegadinha! A cápsula fica embaixo da quadra.”',
        'Esse pote abre. Dentro, um bilhete: “Pegadinha! A cápsula fica no canteiro do portão.”',
        'Esse pote abre. Dentro, um bilhete: “Pegadinha! A cápsula fica no meio da horta.”',
      ],
      niveis: [
        {
          enunciado: '<p>A senha é o número de objetos da cápsula. Cada um dos <b>28 alunos</b> colocou <b>3 objetos</b>.</p><p class="pergunta">Qual é a senha?</p>',
          calc: () => 28 * 3, resposta: 84, conta: '28 × 3 = 84',
          opcoes: [
            { v: 25, erro: 'tirou 3 de 28.', calc: () => 28 - 3 },
            { v: 31, erro: 'somou 28 + 3.', calc: () => 28 + 3 },
            { v: 64, erro: 'esqueceu o “vai dois” (3 × 8 = 24: fica 4 e vão 2 para as dezenas).', calc: () => 2 * 3 * 10 + (24 % 10) },
            { v: 84 },
          ],
        },
        {
          enunciado: '<p>A senha é o número de objetos da cápsula. Cada um dos <b>28 alunos</b> colocou <b>4 objetos</b>, e a professora colocou mais <b>6</b>.</p><p class="pergunta">Qual é a senha?</p>',
          calc: () => 28 * 4 + 6, resposta: 118, conta: '28 × 4 = 112 · 112 + 6 = 118',
          opcoes: [
            { v: 38, erro: 'somou tudo (28 + 4 + 6).', calc: () => 28 + 4 + 6 },
            { v: 88, erro: 'esqueceu o “vai três” em 28 × 4 (fez 82) e somou 6.', calc: () => 2 * 4 * 10 + (32 % 10) + 6 },
            { v: 112, erro: 'esqueceu os 6 objetos da professora.', calc: () => 28 * 4 },
            { v: 118 },
          ],
        },
        {
          enunciado: '<p>Cada um dos <b>28 alunos</b> colocou <b>4 objetos</b>, e a professora colocou mais <b>8</b>. Tudo foi dividido igualmente em <b>6 saquinhos</b>. A senha é o número de objetos <b>em cada saquinho</b>.</p><p class="pergunta">Qual é a senha?</p>',
          calc: () => (28 * 4 + 8) / 6, resposta: 20, conta: '28 × 4 = 112 · 112 + 8 = 120 · 120 ÷ 6 = 20',
          opcoes: [
            { v: 18, erro: 'esqueceu os 8 da professora e dividiu 112 por 6, deixando o resto de lado.', calc: () => Math.floor(112 / 6) },
            { v: 20 },
            { v: 120, erro: 'achou o total e esqueceu de dividir pelos saquinhos.', calc: () => 28 * 4 + 8 },
            { v: 168, erro: 'multiplicou alunos por saquinhos (28 × 6).', calc: () => 28 * 6 },
          ],
        },
      ],
    },
  ],
};
