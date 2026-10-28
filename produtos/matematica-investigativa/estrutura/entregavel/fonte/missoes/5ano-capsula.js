// Missão-amostra do 5º ano — O Mistério da Cápsula do Tempo
const VOTOS = [['Mangueira', 14], ['Quadra', 9], ['Portão', 6], ['Horta', 11]];

function grafico() {
  const W = 460, H = 230, x0 = 50, y0 = 195, esc = 10, larg = 60, passo = 100;
  let s = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="Inter, DejaVu Sans, sans-serif" font-size="12">`;
  s += `<text x="${x0}" y="14" font-weight="700" font-size="13">Votação de 2001: onde enterrar a cápsula?</text>`;
  for (let v = 0; v <= 16; v += 2) {
    const y = y0 - v * esc;
    s += `<line x1="${x0}" y1="${y}" x2="${x0 + 4 * passo}" y2="${y}" stroke="${v === 0 ? '#000' : '#aaa'}" stroke-width="${v === 0 ? 1.5 : 0.6}" ${v ? 'stroke-dasharray="3 3"' : ''}/>`;
    s += `<text x="${x0 - 8}" y="${y + 4}" text-anchor="end">${v}</text>`;
  }
  s += `<line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y0 - 16 * esc - 4}" stroke="#000" stroke-width="1.5"/>`;
  s += `<text x="12" y="${y0 - 80}" transform="rotate(-90 12 ${y0 - 80})" text-anchor="middle">votos</text>`;
  VOTOS.forEach(([nome, v], i) => {
    const x = x0 + 20 + i * passo;
    s += `<rect x="${x}" y="${y0 - v * esc}" width="${larg}" height="${v * esc}" fill="none" stroke="#000" stroke-width="2"/>`;
    s += `<text x="${x + larg / 2}" y="${y0 + 16}" text-anchor="middle">${nome}</text>`;
  });
  return s + '</svg>';
}

function reta(total, partes, rotulos) {
  const W = 520, x0 = 30, x1 = 490, y = 40, larg = (x1 - x0) / partes;
  let s = `<svg width="${W}" height="80" viewBox="0 0 ${W} 80" font-family="Inter, DejaVu Sans, sans-serif" font-size="13">`;
  s += `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="#000" stroke-width="2"/>`;
  for (let i = 0; i <= partes; i++) {
    const x = x0 + i * larg, ponta = i === 0 || i === partes;
    s += `<line x1="${x}" y1="${y - (ponta ? 12 : 8)}" x2="${x}" y2="${y + (ponta ? 12 : 8)}" stroke="#000" stroke-width="${ponta ? 2 : 1.5}"/>`;
    if (rotulos && !ponta) s += `<text x="${x}" y="${y - 16}" text-anchor="middle">${i}/${partes}</text>`;
  }
  s += `<text x="${x0}" y="${y + 30}" text-anchor="middle" font-weight="700">0</text><text x="${x0}" y="${y + 45}" text-anchor="middle" font-size="10">porta da sala</text>`;
  s += `<text x="${x1}" y="${y + 30}" text-anchor="middle" font-weight="700">${total} passos</text><text x="${x1}" y="${y + 45}" text-anchor="middle" font-size="10">muro do fundo</text>`;
  return s + '</svg>';
}

function recibo(itens) {
  const linhas = itens.map(([a, b]) => `<tr><td style="padding:1px 8px">${a}</td><td style="padding:1px 8px;text-align:right;font-weight:700">${b}</td></tr>`).join('');
  return `<div style="display:inline-block;border:1.5px dashed #000;padding:6px 10px;font-size:12pt"><div style="text-align:center;font-weight:800;letter-spacing:.1em">LOJA DO BAIRRO</div><div style="text-align:center;font-size:9.5pt">recibo · 14/11/2001</div><table style="width:auto;margin-top:4px">${linhas}</table></div>`;
}

const ITENS = [['Pote de plástico com tampa', 'R$ 12,50'], ['Fita adesiva larga', 'R$ 3,75'], ['Pá de jardim', 'R$ 8,90'], ['Saquinhos plásticos', 'R$ 2,35']];
// centavos -> "R$ 12,50"
const brl = (c) => 'R$ ' + Math.floor(c / 100) + ',' + String(c % 100).padStart(2, '0');

module.exports = {
  id: '5ano-capsula',
  serie: '5º ano',
  titulo: 'O Mistério da Cápsula do Tempo',
  resumo: 'Em 2001, uma turma do 5º ano enterrou uma cápsula do tempo na escola. 25 anos depois, ninguém lembra onde. Com o diário daquela turma, a equipe descobre o lugar e abre a cápsula.',
  tempo: '45 a 50 minutos',
  alvosTitulo: 'Os 4 lugares possíveis',
  alvosPlural: '4 lugares possíveis',
  missaoCurta: 'descobrir onde está a cápsula e abrir o cadeado dela.',
  abertura: [
    'Em <b>2001</b>, a turma do 5º ano enterrou uma <b>cápsula do tempo</b> na escola, com cartas e objetos, para ser aberta 25 anos depois. A hora chegou: <b>2026</b>!',
    'O problema: ninguém lembra onde ela está. A Marina, que era aluna daquela turma, mandou para a escola o <b>diário da turma de 2001</b>. Ele tem pistas, mas só se abre com as contas certas.',
    'A diretora separou os 4 lugares onde a cápsula pode estar.',
  ],
  alvos: [
    { nome: 'MANGUEIRA', desc: 'A árvore grande ao lado da cantina. Tem um banco em volta.' },
    { nome: 'QUADRA', desc: 'A quadra de esportes, nos fundos da escola.' },
    { nome: 'PORTÃO', desc: 'O canteiro de flores perto do portão de entrada.' },
    { nome: 'HORTA', desc: 'A horta da escola, perto do muro do fundo.' },
  ],
  missao: 'descobrir <b>onde está a cápsula</b> e achar a <b>senha do cadeado</b> dela.',
  riscarTitulo: 'Risquem os lugares que as pistas tiraram da busca',
  final: ['Onde estava a cápsula do tempo?', 'Por que ela não podia estar nos outros lugares? (uma razão para cada um)', 'Escrevam um recado curto para a turma que vai abrir a próxima cápsula, em 2051.'],
  conferencia: 'sobrou só um lugar? A última pista combina com ele? Se sobrou mais de um, ou se a última pista manda procurar num lugar que vocês riscaram, uma conta está errada. Voltem às etapas e procurem!',
  solucao: 'A cápsula está embaixo da <b>MANGUEIRA</b>. Ordem das pistas: o Portão foi o lugar menos votado (sai o Portão) → em 2001 a horta era estacionamento de cimento (sai a Horta) → a quadra já era cimentada e a turma só comprou pá de jardim (sai a Quadra) → a senha abre a cápsula embaixo da mangueira.',
  etapas: [
    {
      titulo: 'A votação de 2001',
      conteudo: 'Leitura de gráfico de colunas',
      bncc: 'EF05MA24', saeb: 'D28',
      cena: 'Na primeira página do diário há um gráfico com a votação da turma de 2001 para escolher o lugar da cápsula. Embaixo, a Marina escreveu: “Para abrir a próxima página, use a resposta da pergunta.”',
      pistaCerta: 'Diário, página 2: “O <b>PORTÃO</b> teve poucos votos e ficou de fora.” <b>Risquem o PORTÃO.</b>',
      pistasErradas: [
        'Diário, página 2: “A mangueira ficou de fora.” <b>Risquem a MANGUEIRA.</b>',
        'Diário, página 2: “A horta ficou de fora.” <b>Risquem a HORTA e o PORTÃO.</b>',
        'Diário, página 2: “A quadra ficou de fora.” <b>Risquem a MANGUEIRA.</b>',
      ],
      niveis: [
        {
          enunciado: '<p>Cada aluno da turma de 2001 votou uma vez.</p><p class="pergunta">Quantos alunos votaram ao todo?</p>',
          figura: grafico(),
          calc: () => VOTOS.reduce((s, [, v]) => s + v, 0), resposta: 40, conta: '14 + 9 + 6 + 11 = 40',
          opcoes: [{ v: 4, erro: 'contou as colunas, não os votos.' }, { v: 14, erro: 'leu só a coluna mais alta.' }, { v: 29, erro: 'esqueceu de somar a coluna da Horta (14 + 9 + 6).' }, { v: 40 }],
        },
        {
          enunciado: '<p class="pergunta">Quantos votos o lugar mais votado teve a mais que o lugar menos votado?</p>',
          figura: grafico(),
          calc: () => 14 - 6, resposta: 8, conta: 'mais votado: Mangueira (14) · menos votado: Portão (6) · 14 − 6 = 8',
          opcoes: [{ v: 3, erro: 'comparou com o segundo mais votado (14 − 11).' }, { v: 5, erro: 'comparou Horta e Portão (11 − 6).' }, { v: 8 }, { v: 20, erro: 'somou 14 + 6 em vez de comparar.' }],
        },
        {
          enunciado: '<p class="pergunta">Juntando os votos dos 3 lugares menos votados, quantos votos eles têm a mais que o lugar mais votado?</p>',
          figura: grafico(),
          calc: () => (9 + 6 + 11) - 14, resposta: 12, conta: '9 + 6 + 11 = 26 · 26 − 14 = 12',
          opcoes: [{ v: 6, erro: 'juntou só 2 lugares (9 + 11 − 14).' }, { v: 12 }, { v: 26, erro: 'juntou os 3 lugares, mas esqueceu de comparar com a Mangueira.' }, { v: 40, erro: 'somou todas as colunas.' }],
        },
      ],
    },
    {
      titulo: 'Os passos no pátio',
      conteudo: 'Frações na reta numérica (parte de um todo)',
      bncc: 'EF05MA03', saeb: 'D24',
      cena: 'Na página 2, um mapa: “Da porta da sala até o muro do fundo, contamos os passos. Em 2001, a cápsula ficou numa marca desse caminho.” A equipe precisa achar o passo certo.',
      pistaCerta: 'No passo {r}, vocês estão na frente da horta. O diário diz: “Em 2001, aqui era o <b>estacionamento, todo de cimento</b>. A horta só foi feita depois.” <b>Risquem a HORTA.</b>',
      pistasErradas: [
        'No passo {r}, vocês estão na frente da mangueira. O diário diz: “Aqui não cavamos.” <b>Risquem a MANGUEIRA.</b>',
        'No passo {r}, vocês estão na frente da quadra. O diário diz: “É aqui!” <b>Risquem todos os outros lugares.</b>',
        'No passo {r}, vocês estão no portão. O diário diz: “Aqui não cavamos.” <b>Risquem o PORTÃO e a MANGUEIRA.</b>',
      ],
      niveis: [
        {
          enunciado: '<p>O caminho tem <b>40 passos</b> e está dividido em 4 partes iguais. O diário diz: “A marca fica em <b>2/4</b> do caminho, contando da porta da sala.”</p><p class="pergunta">Em que passo fica a marca?</p>',
          figura: reta(40, 4, true),
          calc: () => 40 / 4 * 2, resposta: 20, conta: '40 ÷ 4 = 10 passos em cada parte · 2 partes = 20 passos (2/4 = metade)',
          opcoes: [{ v: 2, erro: 'usou só o número de cima da fração.' }, { v: 10, erro: 'achou uma parte só (1/4).' }, { v: 20 }, { v: 38, erro: 'tirou 2 de 40.' }],
        },
        {
          enunciado: '<p>O caminho tem <b>40 passos</b>. O diário diz: “A marca fica em <b>3/4</b> do caminho, contando da porta da sala.”</p><p class="pergunta">Em que passo fica a marca?</p>',
          figura: reta(40, 4, false),
          calc: () => 40 / 4 * 3, resposta: 30, conta: '40 ÷ 4 = 10 passos em cada parte · 3 partes = 30 passos',
          opcoes: [{ v: 10, erro: 'achou uma parte só (1/4).' }, { v: 30 }, { v: 37, erro: 'tirou 3 de 40.' }, { v: 120, erro: 'multiplicou 3 × 40 e não dividiu por 4.' }],
        },
        {
          enunciado: '<p>O caminho tem <b>56 passos</b>, dividido em 8 partes iguais. O diário diz: “A marca fica em <b>3/8</b> do caminho, contando da porta da sala.”</p><p class="pergunta">Em que passo fica a marca?</p>',
          figura: reta(56, 8, false),
          calc: () => 56 / 8 * 3, resposta: 21, conta: '56 ÷ 8 = 7 passos em cada parte · 3 partes = 21 passos',
          opcoes: [{ v: 7, erro: 'achou uma parte só (1/8).' }, { v: 21 }, { v: 35, erro: 'contou a partir do muro, não da porta (5/8 = 35).' }, { v: 53, erro: 'tirou 3 de 56.' }],
        },
      ],
    },
    {
      titulo: 'O recibo da loja',
      conteudo: 'Adição e subtração com números decimais (dinheiro)',
      bncc: 'EF05MA07', saeb: 'D25',
      cena: 'Dentro do diário, a equipe acha o recibo das compras de 2001. A Marina escreveu: “A próxima pista está no valor certo.”',
      pistaCerta: 'Valor certo! O recibo mostra que a turma só comprou uma <b>pá de jardim</b>, que não quebra cimento. E a <b>QUADRA já tinha piso de cimento em 2001</b>. <b>Risquem a QUADRA.</b>',
      pistasErradas: [
        'Com esse valor, a turma teria comprado uma picareta, que quebra cimento. <b>Risquem a MANGUEIRA.</b>',
        'Com esse valor, sobrou dinheiro para um cadeado novo. <b>Risquem a MANGUEIRA e a QUADRA.</b>',
        'Com esse valor, a turma teria comprado uma picareta, que quebra cimento. <b>Risquem o PORTÃO.</b>',
      ],
      niveis: [
        {
          enunciado: '<p class="pergunta">Quanto a turma gastou com o pote e a fita, juntos?</p>',
          figura: recibo(ITENS.slice(0, 2)),
          calc: () => brl(1250 + 375), resposta: 'R$ 16,25', conta: 'R$ 12,50 + R$ 3,75 = R$ 16,25 (50 + 75 = 125 centavos = 1 real e 25 centavos)',
          opcoes: [{ v: 'R$ 8,75', erro: 'subtraiu em vez de somar (12,50 − 3,75).' }, { v: 'R$ 15,25', erro: 'somou os centavos (125) mas não trocou 100 centavos por 1 real.' }, { v: 'R$ 16,25' }, { v: 'R$ 162,50', erro: 'colocou a vírgula no lugar errado.' }],
        },
        {
          enunciado: '<p class="pergunta">Quanto a turma gastou ao todo?</p>',
          figura: recibo(ITENS),
          calc: () => brl(1250 + 375 + 890 + 235), resposta: 'R$ 27,50', conta: '12,50 + 3,75 + 8,90 + 2,35 = R$ 27,50',
          opcoes: [{ v: 'R$ 25,15', erro: 'esqueceu de somar os saquinhos.' }, { v: 'R$ 25,50', erro: 'somou os centavos (250 = 2 reais e 50 centavos), mas esqueceu de juntar os 2 reais.' }, { v: 'R$ 27,50' }, { v: 'R$ 37,50', erro: 'errou o “vai um” das dezenas.' }],
        },
        {
          enunciado: '<p>A turma pagou tudo com <b>uma nota de R$ 50,00</b>.</p><p class="pergunta">Quanto a turma recebeu de troco?</p>',
          figura: recibo(ITENS),
          calc: () => brl(5000 - (1250 + 375 + 890 + 235)), resposta: 'R$ 22,50', conta: 'total = R$ 27,50 · 50,00 − 27,50 = R$ 22,50',
          opcoes: [{ v: 'R$ 22,50' }, { v: 'R$ 23,50', erro: 'esqueceu de tirar 1 real ao trocar para os centavos (desagrupamento).' }, { v: 'R$ 27,50', erro: 'calculou o total da compra e esqueceu o troco.' }, { v: 'R$ 77,50', erro: 'somou 50,00 + 27,50.' }],
        },
      ],
    },
    {
      titulo: 'O cadeado da cápsula',
      conteudo: 'Multiplicação e divisão com números naturais',
      bncc: 'EF05MA08', saeb: 'D20',
      cena: 'A equipe vai até o único lugar que sobrou, cava e... acha um pote! Mas ele tem um cadeado de números. Na última página do diário: “A senha conta o que guardamos.”',
      pistaCerta: 'CLIQUE! A cápsula abriu. Dentro há cartas, fotos e um bilhete: “Parabéns, turma de 2026! Vocês acharam a gente embaixo da MANGUEIRA.”',
      pistasErradas: [
        'CLIQUE! O pote abriu, mas dentro só há ferramentas velhas e um bilhete: “A cápsula de verdade está na quadra.”',
        'CLIQUE! O pote abriu, mas dentro só há um bilhete: “Vocês estão perto. Procurem na horta.”',
        'CLIQUE! O pote abriu, mas dentro só há tampinhas e um bilhete: “A cápsula de verdade está no portão.”',
      ],
      niveis: [
        {
          enunciado: '<p>A senha é o número de objetos da cápsula. Em 2001, cada um dos <b>24 alunos</b> colocou <b>3 objetos</b>.</p><p class="pergunta">Qual é a senha?</p>',
          calc: () => 24 * 3, resposta: 72, conta: '24 × 3 = 72',
          opcoes: [{ v: 21, erro: 'tirou 3 de 24.' }, { v: 27, erro: 'somou 24 + 3.' }, { v: 62, erro: 'esqueceu o “vai um” (3 × 4 = 12: fica 2 e vai 1).' }, { v: 72 }],
        },
        {
          enunciado: '<p>A senha é o número de objetos da cápsula. Cada um dos <b>28 alunos</b> colocou <b>4 objetos</b>, e a professora colocou mais <b>6</b>.</p><p class="pergunta">Qual é a senha?</p>',
          calc: () => 28 * 4 + 6, resposta: 118, conta: '28 × 4 = 112 · 112 + 6 = 118',
          opcoes: [{ v: 38, erro: 'somou tudo (28 + 4 + 6).' }, { v: 88, erro: 'esqueceu o “vai um” em 28 × 4 (fez 82) e somou 6.' }, { v: 112, erro: 'esqueceu os 6 objetos da professora.' }, { v: 118 }],
        },
        {
          enunciado: '<p>Cada um dos <b>28 alunos</b> colocou <b>4 objetos</b>, e a professora colocou mais <b>8</b>. Tudo foi dividido igualmente em <b>6 saquinhos</b>. A senha é o número de objetos <b>em cada saquinho</b>.</p><p class="pergunta">Qual é a senha?</p>',
          calc: () => (28 * 4 + 8) / 6, resposta: 20, conta: '28 × 4 = 112 · 112 + 8 = 120 · 120 ÷ 6 = 20',
          opcoes: [{ v: 18, erro: 'esqueceu os 8 da professora e dividiu 112 por 6, deixando o resto de lado.' }, { v: 20 }, { v: 120, erro: 'achou o total e esqueceu de dividir pelos saquinhos.' }, { v: 168, erro: 'multiplicou alunos por saquinhos (28 × 6).' }],
        },
      ],
    },
  ],
};
