// Missão-amostra do 3º ano — O Mistério da Horta
// Cada nível tem: enunciado (HTML), calc() que refaz a conta, resposta, conta (para o gabarito)
// e 4 opções do cadeado: a certa + 3 erros comuns, cada um com a explicação e o calc() do erro.
// As pistas trazem só um fato; quem decide quem sai do caso é o grupo, comparando com os suspeitos.

function potes(fileiras, colunas) {
  const r = 14, g = 40, w = colunas * g + 10, h = fileiras * g + 10;
  let c = '';
  for (let i = 0; i < fileiras; i++) for (let j = 0; j < colunas; j++) c += `<circle cx="${j * g + 24}" cy="${i * g + 24}" r="${r}" fill="none" stroke="#000" stroke-width="1.5"/><rect x="${j * g + 16}" y="${i * g + 6}" width="16" height="5" fill="none" stroke="#000"/>`;
  return `<svg width="${w + 10}" height="${h + 10}" viewBox="0 0 ${w + 10} ${h + 10}"><rect x="2" y="2" width="${w + 6}" height="${h + 6}" fill="none" stroke="#000" stroke-dasharray="4 3"/>${c}</svg>`;
}
const R = (n) => 'R$ ' + n;

module.exports = {
  id: '3ano-horta',
  serie: '3º ano',
  titulo: 'O Mistério da Horta',
  resumo: 'As cenouras da horta amanheceram mordidas. Com 4 pistas, a turma descobre quem foi e como saiu.',
  tempo: '40 a 50 minutos',
  alvosTitulo: 'Os suspeitos',
  alvosPlural: 'suspeitos',
  alvosRiscar: 'o suspeito',
  missaoCurta: 'descobrir quem mordeu as cenouras e como saiu.',
  abertura: [
    'Segunda-feira de manhã, a turma chegou à escola e levou um susto: <b>as cenouras da horta amanheceram mordidas!</b>',
    'A diretora chamou vocês: — Preciso de uma equipe de investigação. Quem fez isso? E como entrou na horta, se o portão ficou fechado o fim de semana todo?',
    'O Seu Zé, jardineiro, fez uma lista de quem esteve perto da horta.',
  ],
  alvos: [
    { nome: 'SEU ZÉ', desc: 'Jardineiro da escola. Cabelo grisalho, botas grandes. Tem a chave do portão da horta.' },
    { nome: 'PIPOCA', desc: 'Cachorra da vizinha. Pelo caramelo, focinho comprido. Vive cavando buracos.' },
    { nome: 'MINGAU', desc: 'Gato da cantina. Pelo branco, orelhas pequenas e rabo comprido. Pula muros altos.' },
    { nome: 'TICO', desc: 'Coelho da sala do 1º ano. Pelo branco e orelhas compridas. Pula cercas baixas.' },
  ],
  missao: 'descobrir <b>quem</b> mordeu as cenouras e <b>como</b> saiu de onde estava.',
  riscarTitulo: 'Risquem os suspeitos que não combinam com as pistas',
  final: ['Quem mordeu as cenouras?', 'Como ele saiu de onde estava?', 'O que a turma sugere para proteger a horta?'],
  conferencia: 'sobrou só um suspeito? A última pista combina com ele? Se sobrou mais de um, se ninguém sobrou, ou se a última pista fala de alguém que vocês riscaram, uma conta está errada. Voltem às etapas e procurem!',
  solucao: 'Foi o <b>TICO</b>, o coelho do 1º ano. A trava da gaiola estava frouxa, ele saiu na sexta à noite, pulou a cerca baixinha da horta e passou o fim de semana comendo cenoura. Pistas: pelo curto de animal (sai o Seu Zé) → pelo branco (sai a Pipoca) → orelhas compridas (sai o Mingau) → trava da gaiola frouxa (confirma o Tico e explica como ele saiu).',
  etapas: [
    {
      titulo: 'O estrago na horta',
      conteudo: 'Subtração: retirar',
      bncc: 'EF03MA06',
      cena: 'Na horta, a equipe encontrou fios presos na cerca. Antes de examinar os fios, a diretora quer saber o tamanho do estrago.',
      pistaCerta: 'Os fios presos na cerca são pelos curtos de animal.',
      pistasErradas: [
        'Os fios presos na cerca são cabelos grisalhos de gente.',
        'Os fios presos na cerca são fios grossos de barbante de jardim.',
        'Os fios presos na cerca são cabelos compridos e grisalhos.',
      ],
      niveis: [
        {
          enunciado: '<p>Na sexta-feira, a horta tinha <b>19 cenouras</b>. Hoje, só <b>12 cenouras</b> estão inteiras. As outras foram mordidas.</p><p class="pergunta">Quantas cenouras foram mordidas?</p>',
          calc: () => 19 - 12, resposta: 7, conta: '19 − 12 = 7',
          opcoes: [
            { v: 7 },
            { v: 12, erro: 'copiou o número de cenouras inteiras, sem fazer conta.', calc: () => 12 },
            { v: 19, erro: 'copiou o total de sexta-feira, sem fazer conta.', calc: () => 19 },
            { v: 31, erro: 'juntou (19 + 12) em vez de tirar.', calc: () => 19 + 12 },
          ],
        },
        {
          enunciado: '<p>Na sexta-feira, a horta tinha <b>52 cenouras</b>. Hoje, só <b>37</b> estão inteiras. As outras foram mordidas.</p><p class="pergunta">Quantas cenouras foram mordidas?</p>',
          calc: () => 52 - 37, resposta: 15, conta: '52 − 37 = 15',
          opcoes: [
            { v: 15 },
            { v: 25, erro: 'tirou o menor algarismo do maior em cada coluna (7 − 2 = 5 e 5 − 3 = 2), sem desagrupar a dezena.', calc: () => (5 - 3) * 10 + (7 - 2) },
            { v: 37, erro: 'copiou o número de cenouras inteiras.', calc: () => 37 },
            { v: 89, erro: 'juntou (52 + 37) em vez de tirar.', calc: () => 52 + 37 },
          ],
        },
        {
          enunciado: '<p>A horta tem <b>4 canteiros</b>. Na sexta de manhã, havia <b>86 cenouras</b>. Na sexta à tarde, antes de fechar o portão, a turma da tarde colheu <b>20 cenouras</b> para a sopa. Hoje, <b>49</b> estão inteiras.</p><p class="pergunta">Quantas cenouras foram mordidas?</p>',
          calc: () => 86 - 20 - 49, resposta: 17, conta: '86 − 20 = 66 · 66 − 49 = 17 (os 4 canteiros não entram na conta)',
          opcoes: [
            { v: 13, erro: 'tirou também os 4 canteiros, que não fazem parte da conta (17 − 4).', calc: () => 86 - 20 - 49 - 4 },
            { v: 17 },
            { v: 37, erro: 'esqueceu as 20 cenouras colhidas para a sopa (86 − 49).', calc: () => 86 - 49 },
            { v: 155, erro: 'somou todos os números de cenouras (86 + 20 + 49).', calc: () => 86 + 20 + 49 },
          ],
        },
      ],
    },
    {
      titulo: 'O armário da lupa',
      conteudo: 'Multiplicação: disposição retangular e parcelas iguais',
      bncc: 'EF03MA07',
      cena: 'Para examinar os fios, a equipe precisa da lupa, que fica trancada no armário de ciências. O segredo do cadeado é o número de potes da prateleira de cima.',
      pistaCerta: 'O cadeado abriu. Na lupa, dá para ver: os pelos são brancos.',
      pistasErradas: [
        'O cadeado abriu. Na lupa, dá para ver: os pelos são caramelo.',
        'O cadeado abriu. Na lupa, dá para ver: os fios são grisalhos.',
        'O cadeado abriu. Na lupa, dá para ver: os pelos são cinzentos.',
      ],
      niveis: [
        {
          enunciado: '<p>Os potes da prateleira de cima estão arrumados assim:</p><p class="pergunta">Quantos potes há na prateleira?</p>',
          figura: potes(3, 5),
          calc: () => 3 * 5, resposta: 15, conta: '3 fileiras de 5 → 5 + 5 + 5 = 15 ou 3 × 5 = 15',
          opcoes: [
            { v: 8, erro: 'somou o número de fileiras com o de potes em cada fileira (3 + 5).', calc: () => 3 + 5 },
            { v: 10, erro: 'contou só 2 fileiras.', calc: () => 2 * 5 },
            { v: 15 },
            { v: 20, erro: 'contou uma fileira a mais.', calc: () => 4 * 5 },
          ],
        },
        {
          enunciado: '<p>Na prateleira de cima há <b>4 fileiras</b> de potes. Cada fileira tem <b>10 potes</b>.</p><p class="pergunta">Quantos potes há na prateleira?</p>',
          calc: () => 4 * 10, resposta: 40, conta: '4 × 10 = 40',
          opcoes: [
            { v: 14, erro: 'somou 4 + 10 em vez de juntar 4 fileiras de 10.', calc: () => 4 + 10 },
            { v: 30, erro: 'contou só 3 fileiras.', calc: () => 3 * 10 },
            { v: 40 },
            { v: 50, erro: 'contou uma fileira a mais.', calc: () => 5 * 10 },
          ],
        },
        {
          enunciado: '<p>Na prateleira de cima há <b>5 fileiras</b> com <b>4 potes</b> em cada uma. Num canto da mesma prateleira, há mais <b>3 potes</b> soltos.</p><p class="pergunta">Quantos potes há na prateleira de cima?</p>',
          calc: () => 5 * 4 + 3, resposta: 23, conta: '5 × 4 = 20 · 20 + 3 = 23',
          opcoes: [
            { v: 12, erro: 'somou todos os números (5 + 4 + 3).', calc: () => 5 + 4 + 3 },
            { v: 20, erro: 'esqueceu os 3 potes soltos.', calc: () => 5 * 4 },
            { v: 23 },
            { v: 35, erro: 'somou os 3 potes a cada fileira (5 × 7).', calc: () => 5 * (4 + 3) },
          ],
        },
      ],
    },
    {
      titulo: 'As pilhas da câmera',
      conteudo: 'Sistema monetário: compra, pagamento e troco',
      bncc: 'EF03MA24',
      cena: 'A câmera do pátio filmou a horta no fim de semana, mas a tela para ver o vídeo está sem pilha. A diretora vai com a equipe até a papelaria da esquina.',
      pistaCerta: 'Pilhas compradas. No vídeo, uma sombra de orelhas compridas pula a cerca.',
      pistasErradas: [
        'Pilhas compradas. No vídeo, uma sombra de rabo comprido pula a cerca.',
        'Pilhas compradas. No vídeo, uma sombra de focinho comprido cava a cerca.',
        'Pilhas compradas. No vídeo, uma sombra de botas grandes pula a cerca.',
      ],
      niveis: [
        {
          enunciado: '<p>O pacote de pilhas custa <b>R$ 7</b>. A turma juntou <b>1 nota de R$ 5</b> e <b>4 moedas de R$ 1</b>.</p><p class="pergunta">Depois de pagar as pilhas, quanto dinheiro sobra?</p>',
          calc: () => R(5 + 4 - 7), resposta: 'R$ 2', conta: '5 + 4 = 9 reais · 9 − 7 = 2 reais',
          opcoes: [
            { v: 'R$ 2' },
            { v: 'R$ 3', erro: 'fez 7 − 4: tirou as moedas do preço e esqueceu a nota de R$ 5.', calc: () => R(7 - 4) },
            { v: 'R$ 9', erro: 'só juntou o dinheiro e esqueceu de pagar as pilhas.', calc: () => R(5 + 4) },
            { v: 'R$ 16', erro: 'somou tudo, inclusive o preço das pilhas (5 + 4 + 7).', calc: () => R(5 + 4 + 7) },
          ],
        },
        {
          enunciado: '<p>O pacote de pilhas custa <b>R$ 13</b>. A turma tem <b>1 nota de R$ 10</b>, <b>1 nota de R$ 5</b> e <b>2 notas de R$ 2</b>.</p><p class="pergunta">Depois de pagar as pilhas, quanto dinheiro sobra?</p>',
          calc: () => R(10 + 5 + 2 * 2 - 13), resposta: 'R$ 6', conta: '10 + 5 + 2 + 2 = 19 reais · 19 − 13 = 6 reais',
          opcoes: [
            { v: 'R$ 2', erro: 'esqueceu as duas notas de R$ 2 (15 − 13).', calc: () => R(10 + 5 - 13) },
            { v: 'R$ 4', erro: 'contou só uma nota de R$ 2 (17 − 13).', calc: () => R(10 + 5 + 2 - 13) },
            { v: 'R$ 6' },
            { v: 'R$ 19', erro: 'só juntou o dinheiro e esqueceu de pagar.', calc: () => R(10 + 5 + 2 + 2) },
          ],
        },
        {
          enunciado: '<p>Na papelaria, as pilhas custam <b>R$ 13</b> e um rolo de fita custa <b>R$ 5</b>. A turma precisa das duas coisas e tem <b>2 notas de R$ 10</b> e <b>3 moedas de R$ 1</b>.</p><p class="pergunta">Depois de comprar as pilhas e a fita, quanto dinheiro sobra?</p>',
          calc: () => R(2 * 10 + 3 - 13 - 5), resposta: 'R$ 5', conta: '20 + 3 = 23 reais · 13 + 5 = 18 reais · 23 − 18 = 5 reais',
          opcoes: [
            { v: 'R$ 2', erro: 'esqueceu as 3 moedas (20 − 18).', calc: () => R(20 - 18) },
            { v: 'R$ 5' },
            { v: 'R$ 10', erro: 'esqueceu a fita (23 − 13).', calc: () => R(23 - 13) },
            { v: 'R$ 41', erro: 'somou todos os valores (23 + 13 + 5).', calc: () => R(23 + 13 + 5) },
          ],
        },
      ],
    },
    {
      titulo: 'A caixa do 1º ano',
      conteudo: 'Divisão: repartir igualmente',
      bncc: 'EF03MA08',
      cena: 'A equipe vai à sala do 1º ano, onde mora o Tico. A professora Ana mostra a caixa com o caderno de cuidados da sala. A caixa tem um cadeado de números: o segredo é quantas rodelas de cenoura o Tico come por dia.',
      pistaCerta: 'No caderno: “Sexta, 17h: a trava da gaiola do Tico está frouxa.”',
      pistasErradas: [
        'No caderno: “Sexta, 17h: o Tico vai passar o fim de semana na casa da Bia.”',
        'No caderno: “Sexta, 17h: a vizinha avisou que a Pipoca fugiu de novo.”',
        'No caderno: “Sexta, 17h: a janela da cantina ficou aberta para ventilar.”',
      ],
      niveis: [
        {
          enunciado: '<p>A professora Ana separou <b>12 rodelas</b> de cenoura para <b>3 dias</b>. O Tico come a mesma quantidade todo dia.</p><p class="pergunta">Quantas rodelas o Tico come por dia?</p>',
          calc: () => 12 / 3, resposta: 4, conta: '12 ÷ 3 = 4 (4 + 4 + 4 = 12)',
          opcoes: [
            { v: 4 },
            { v: 9, erro: 'tirou 3 de 12 em vez de repartir.', calc: () => 12 - 3 },
            { v: 15, erro: 'somou 12 + 3.', calc: () => 12 + 3 },
            { v: 36, erro: 'multiplicou 12 × 3.', calc: () => 12 * 3 },
          ],
        },
        {
          enunciado: '<p>A professora Ana separou <b>28 rodelas</b> de cenoura para <b>4 dias</b>. O Tico come a mesma quantidade todo dia.</p><p class="pergunta">Quantas rodelas o Tico come por dia?</p>',
          calc: () => 28 / 4, resposta: 7, conta: '28 ÷ 4 = 7 (7 + 7 + 7 + 7 = 28)',
          opcoes: [
            { v: 7 },
            { v: 8, erro: 'errou a tabuada do 4 (4 × 8 = 32, não 28).', calc: () => 32 / 4 },
            { v: 24, erro: 'tirou 4 de 28 em vez de repartir.', calc: () => 28 - 4 },
            { v: 32, erro: 'somou 28 + 4.', calc: () => 28 + 4 },
          ],
        },
        {
          enunciado: '<p>A professora Ana tinha <b>35 rodelas</b> de cenoura. O Tico já comeu <b>5</b>. O resto vai ser dividido igualmente em <b>6 dias</b>.</p><p class="pergunta">Quantas rodelas o Tico vai comer por dia?</p>',
          calc: () => (35 - 5) / 6, resposta: 5, conta: '35 − 5 = 30 · 30 ÷ 6 = 5',
          opcoes: [
            { v: 5 },
            { v: 6, erro: 'dividiu 30 por 5 (trocou o número de dias pelo que ele já comeu).', calc: () => 30 / 5 },
            { v: 7, erro: 'dividiu 35 por 5 e esqueceu de tirar o que ele já comeu.', calc: () => 35 / 5 },
            { v: 24, erro: 'só tirou: 35 − 5 − 6.', calc: () => 35 - 5 - 6 },
          ],
        },
      ],
    },
  ],
};
