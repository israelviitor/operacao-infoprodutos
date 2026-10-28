// Missão-amostra do 4º ano — O Caso dos R$ 50
const R = (n) => 'R$ ' + n;
const hora = (min) => `${Math.floor(min / 60)}h${String(min % 60).padStart(2, '0')}`;

function tabelaPrecos(linhas) {
  return `<table style="width:auto;border-collapse:collapse;font-size:12.5pt">${linhas.map(([a, b]) => `<tr><td style="border:1px solid #000;padding:2px 10px">${a}</td><td style="border:1px solid #000;padding:2px 10px;font-weight:700">${b}</td></tr>`).join('')}</table>`;
}

module.exports = {
  id: '4ano-feira',
  serie: '4º ano',
  titulo: 'O Caso dos R$ 50',
  resumo: 'No fim da Feira do Livro, o caixa tem R$ 50 a menos do que o caderno de vendas mostra. A turma testa 4 explicações até achar a verdadeira, sem acusar ninguém.',
  tempo: '45 a 50 minutos',
  alvosTitulo: 'As 4 explicações possíveis',
  alvosPlural: '4 explicações possíveis',
  alvosRiscar: 'a explicação',
  missaoCurta: 'descobrir por que o caixa tem R$ 50 a menos.',
  abertura: [
    'Sexta-feira foi dia de <b>Feira do Livro</b> na quadra da escola. No fim da tarde, a Dona Cida, que cuidou da banca, contou o dinheiro e levou um susto: <b>o caixa tinha R$ 50 a menos do que o caderno de vendas mostrava!</b>',
    'Depois da feira, o zelador, Seu Paulo, varreu a quadra. A diretora avisou: — Aqui ninguém acusa ninguém sem prova. Quero uma equipe de investigação para testar cada explicação com as contas certas.',
    'A Dona Cida pensou em 4 explicações. Só uma é verdadeira.',
  ],
  alvos: [
    { nome: 'A — O CADERNO ERROU', desc: 'Anotaram no caderno de vendas mais livros do que foram vendidos.' },
    { nome: 'B — O TROCO SAIU ERRADO', desc: 'Numa compra paga com nota de R$ 50, alguém recebeu troco a mais.' },
    { nome: 'C — O DINHEIRO CAIU', desc: 'Uma nota caiu no chão da quadra e foi varrida junto com o lixo.' },
    { nome: 'D — O DINHEIRO FOI GUARDADO', desc: 'Alguém guardou dinheiro em outro lugar e esqueceu.' },
  ],
  missao: 'testar as 4 explicações e descobrir <b>o que aconteceu com os R$ 50</b>.',
  riscarTitulo: 'Risquem as explicações que as pistas derrubaram',
  final: ['O que aconteceu com os R$ 50?', 'Onde o dinheiro estava?', 'Que dica vocês dão para a próxima Feira do Livro não ter esse problema?'],
  conferencia: 'sobrou só uma explicação? A última pista combina com ela? Se sobrou mais de uma, se nenhuma sobrou, ou se a última pista fala de uma explicação que vocês riscaram, uma conta está errada. Voltem às etapas e procurem!',
  solucao: '<b>D — o dinheiro foi guardado.</b> No intervalo, a Dona Cida leu o livro de receitas da banca e usou uma nota de R$ 50 como marcador de página. Pistas: o caderno confere com os livros vendidos (sai A) → o troco anotado está certo (sai B) → a quadra foi varrida e não havia dinheiro (sai C) → a nota estava no livro de receitas (confirma D).',
  etapas: [
    {
      titulo: 'O caderno de vendas',
      conteudo: 'Adição e subtração com números naturais',
      bncc: 'EF04MA03',
      cena: 'A equipe começa pelo caderno de vendas. Para saber se ele está certo, vocês vão descobrir quantos livros foram vendidos de verdade.',
      pistaCerta: 'O caderno de vendas marca esse mesmo número de livros vendidos.',
      pistasErradas: [
        'O caderno de vendas marca 10 livros a mais do que esse número.',
        'O caderno de vendas marca 5 livros a mais do que esse número.',
        'O caderno de vendas marca o dobro desse número de livros.',
      ],
      niveis: [
        {
          enunciado: '<p>A banca começou o dia com <b>58 livros</b>. No fim do dia, sobraram <b>35 livros</b>.</p><p class="pergunta">Quantos livros foram vendidos?</p>',
          calc: () => 58 - 35, resposta: 23, conta: '58 − 35 = 23',
          opcoes: [
            { v: 13, erro: 'errou a subtração das dezenas (fez 5 − 3 = 1).', calc: () => 1 * 10 + (8 - 5) },
            { v: 23 },
            { v: 35, erro: 'copiou o número de livros que sobraram.', calc: () => 35 },
            { v: 93, erro: 'somou 58 + 35.', calc: () => 58 + 35 },
          ],
        },
        {
          enunciado: '<p>A banca começou o dia com <b>120 livros</b>. No fim do dia, sobraram <b>97 livros</b>.</p><p class="pergunta">Quantos livros foram vendidos?</p>',
          calc: () => 120 - 97, resposta: 23, conta: '120 − 97 = 23 (ou: de 97 até 100 faltam 3; de 100 até 120, mais 20)',
          opcoes: [
            { v: 23 },
            { v: 33, erro: 'desagrupou a dezena para as unidades, mas não tirou 1 das dezenas (fez 12 − 9 = 3).', calc: () => (12 - 9) * 10 + (10 - 7) },
            { v: 177, erro: 'tirou o menor algarismo do maior em cada coluna (7 − 0 e 9 − 2), sem desagrupar.', calc: () => 100 + (9 - 2) * 10 + (7 - 0) },
            { v: 217, erro: 'somou 120 + 97.', calc: () => 120 + 97 },
          ],
        },
        {
          enunciado: '<p>A banca recebeu <b>3 caixas</b> com <b>40 livros</b> em cada uma. No fim do dia, sobraram <b>97 livros</b>.</p><p class="pergunta">Quantos livros foram vendidos?</p>',
          calc: () => 3 * 40 - 97, resposta: 23, conta: '3 × 40 = 120 · 120 − 97 = 23',
          opcoes: [
            { v: 23 },
            { v: 54, erro: 'somou as caixas com os livros (3 + 40 = 43) e tirou de 97.', calc: () => 97 - (3 + 40) },
            { v: 57, erro: 'tirou 40 (uma caixa) dos 97 que sobraram, invertendo a conta.', calc: () => 97 - 40 },
            { v: 217, erro: 'calculou 120 livros, mas somou 97 em vez de tirar.', calc: () => 120 + 97 },
          ],
        },
      ],
    },
    {
      titulo: 'O troco da nota de R$ 50',
      conteudo: 'Compra, pagamento, troco e desconto',
      bncc: 'EF04MA25',
      cena: 'No caderno há uma compra paga com nota de R$ 50. Será que o troco saiu errado? Calculem o troco certo e comparem com o que a Dona Cida anotou.',
      pistaCerta: 'A Dona Cida anotou um troco igual a esse valor.',
      pistasErradas: [
        'A Dona Cida anotou um troco de R$ 20 a mais que esse.',
        'A Dona Cida anotou um troco de R$ 10 a mais que esse.',
        'A Dona Cida não anotou o troco dessa compra.',
      ],
      niveis: [
        {
          enunciado: '<p>Uma mãe comprou <b>2 livros</b> de <b>R$ 9</b> cada um e pagou com <b>uma nota de R$ 50</b>.</p><p class="pergunta">Qual era o troco certo?</p>',
          calc: () => R(50 - 2 * 9), resposta: 'R$ 32', conta: '2 × 9 = 18 reais · 50 − 18 = 32 reais',
          opcoes: [
            { v: 'R$ 18', erro: 'calculou só o valor da compra e esqueceu o troco.', calc: () => R(2 * 9) },
            { v: 'R$ 32' },
            { v: 'R$ 41', erro: 'contou só 1 livro (50 − 9).', calc: () => R(50 - 9) },
            { v: 'R$ 68', erro: 'somou 50 + 18.', calc: () => R(50 + 18) },
          ],
        },
        {
          enunciado: '<p>Uma mãe comprou <b>3 livros</b> e <b>1 marcador</b>. Ela pagou com <b>uma nota de R$ 50</b>.</p>' + tabelaPrecos([['Livro', 'R$ 12'], ['Marcador de página', 'R$ 4']]) + '<p class="pergunta" style="margin-top:6px">Qual era o troco certo?</p>',
          calc: () => R(50 - (3 * 12 + 4)), resposta: 'R$ 10', conta: '3 × 12 = 36 · 36 + 4 = 40 reais · 50 − 40 = 10 reais',
          opcoes: [
            { v: 'R$ 10' },
            { v: 'R$ 14', erro: 'esqueceu o marcador (50 − 36).', calc: () => R(50 - 36) },
            { v: 'R$ 34', erro: 'contou só 1 livro (50 − 12 − 4).', calc: () => R(50 - 12 - 4) },
            { v: 'R$ 40', erro: 'calculou o valor da compra e esqueceu o troco.', calc: () => R(3 * 12 + 4) },
          ],
        },
        {
          enunciado: '<p>Um avô comprou <b>4 livros</b> de <b>R$ 11</b> cada um. Na feira, quem compra 4 livros ganha <b>R$ 5 de desconto</b> no total. Ele pagou com <b>uma nota de R$ 50</b>.</p><p class="pergunta">Qual era o troco certo?</p>',
          calc: () => R(50 - (4 * 11 - 5)), resposta: 'R$ 11', conta: '4 × 11 = 44 · 44 − 5 = 39 reais · 50 − 39 = 11 reais',
          opcoes: [
            { v: 'R$ 1', erro: 'somou o desconto em vez de tirar (44 + 5 = 49).', calc: () => R(50 - (44 + 5)) },
            { v: 'R$ 6', erro: 'esqueceu o desconto (50 − 44).', calc: () => R(50 - 44) },
            { v: 'R$ 11' },
            { v: 'R$ 39', erro: 'calculou o valor da compra e esqueceu o troco.', calc: () => R(44 - 5) },
          ],
        },
      ],
    },
    {
      titulo: 'A quadra varrida',
      conteudo: 'Medidas de tempo: início, fim e duração',
      bncc: 'EF04MA22',
      cena: 'Será que uma nota caiu no chão? O Seu Paulo anotou os horários em que varreu a quadra. A diretora vai procurar esse trecho no vídeo da câmera.',
      pistaCerta: 'Enquanto ele varria, o vídeo mostra a quadra toda limpa: só papel de bala.',
      pistasErradas: [
        'Enquanto ele varria, o vídeo mostra o canto da banca sem varrer.',
        'Enquanto ele varria, o vídeo mostra uma nota voando para a arquibancada.',
        'Enquanto ele varria, o vídeo mostra um papel parecido com uma nota no lixo.',
      ],
      niveis: [
        {
          enunciado: '<p>O Seu Paulo começou a varrer às <b>16h00</b> e terminou às <b>16h45</b>.</p><p class="pergunta">Quantos minutos ele levou para varrer a quadra?</p>',
          calc: () => 45 + ' min', resposta: '45 min', conta: 'de 16h00 até 16h45 → 45 minutos',
          opcoes: [
            { v: '15 min', erro: 'calculou quanto falta para 17h00 (60 − 45).', calc: () => (60 - 45) + ' min' },
            { v: '30 min', erro: 'contou só até 16h30.', calc: () => 30 + ' min' },
            { v: '45 min' },
            { v: '60 min', erro: 'achou que ele levou uma hora inteira.', calc: () => 60 + ' min' },
          ],
        },
        {
          enunciado: '<p>O Seu Paulo começou a varrer às <b>16h25</b> e terminou às <b>17h05</b>.</p><p class="pergunta">Quantos minutos ele levou para varrer a quadra?</p>',
          calc: () => (17 * 60 + 5) - (16 * 60 + 25) + ' min', resposta: '40 min', conta: 'de 16h25 até 17h00 = 35 min · de 17h00 até 17h05 = 5 min · 35 + 5 = 40 min',
          opcoes: [
            { v: '20 min', erro: 'contou só de 16h25 até 16h45.', calc: () => (45 - 25) + ' min' },
            { v: '40 min' },
            { v: '60 min', erro: 'achou que ele levou uma hora inteira.', calc: () => 60 + ' min' },
            { v: '80 min', erro: 'fez 1705 − 1625, como se a hora tivesse 100 minutos.', calc: () => (1705 - 1625) + ' min' },
          ],
        },
        {
          enunciado: '<p>O Seu Paulo começou a varrer às <b>15h50</b>. Varreu por <b>35 minutos</b>, parou <b>10 minutos</b> para beber água e varreu mais <b>25 minutos</b>.</p><p class="pergunta">A que horas ele terminou?</p>',
          calc: () => hora(15 * 60 + 50 + 35 + 10 + 25), resposta: '17h00', conta: '35 + 10 + 25 = 70 min = 1 h 10 min · 15h50 + 1 h 10 min = 17h00',
          opcoes: [
            { v: '15h120', erro: 'somou 50 + 70 = 120 minutos e não trocou 60 minutos por 1 hora.', calc: () => `15h${50 + 70}` },
            { v: '16h25', erro: 'contou só a primeira parte (15h50 + 35 min).', calc: () => hora(15 * 60 + 50 + 35) },
            { v: '16h50', erro: 'esqueceu a pausa de 10 minutos.', calc: () => hora(15 * 60 + 50 + 35 + 25) },
            { v: '17h00' },
          ],
        },
      ],
    },
    {
      titulo: 'O livro de receitas',
      conteudo: 'Divisão: repartir em partes iguais',
      bncc: 'EF04MA07',
      cena: 'Na banca ficou o livro de receitas da Dona Cida, com uma página marcada. Ela não lembra o número da página, só em que parte do livro estava. Achem a página!',
      pistaCerta: 'Na página {r} há uma nota de R$ 50 dobrada, usada como marcador.',
      pistasErradas: [
        'Na página {r} há um bilhete: “Conferir o troco da compra das 15h.”',
        'Na página {r} há um bilhete: “Varrer o canto da banca amanhã cedo.”',
        'Na página {r} há só a receita de bolo de fubá, sem marcador.',
      ],
      niveis: [
        {
          enunciado: '<p>O livro de receitas tem <b>40 páginas</b>, divididas igualmente em <b>4 capítulos</b>. A Dona Cida parou na <b>última página do 1º capítulo</b>.</p><p class="pergunta">Em que página ela parou?</p>',
          calc: () => 40 / 4, resposta: 10, conta: '40 ÷ 4 = 10 páginas por capítulo · o 1º capítulo termina na página 10',
          opcoes: [
            { v: 10 },
            { v: 36, erro: 'tirou 4 de 40 em vez de dividir.', calc: () => 40 - 4 },
            { v: 44, erro: 'somou 40 + 4.', calc: () => 40 + 4 },
            { v: 160, erro: 'multiplicou 40 × 4.', calc: () => 40 * 4 },
          ],
        },
        {
          enunciado: '<p>O livro de receitas tem <b>96 páginas</b>, divididas igualmente em <b>4 capítulos</b>: Salgados, Doces, Sucos e Sopas. A Dona Cida parou na <b>primeira página do capítulo Doces</b>.</p><p class="pergunta">Em que página ela parou?</p>',
          calc: () => 96 / 4 + 1, resposta: 25, conta: '96 ÷ 4 = 24 · Salgados vai até a página 24 · Doces começa na página 25',
          opcoes: [
            { v: 24, erro: 'achou o fim do capítulo Salgados, não o começo de Doces.', calc: () => 96 / 4 },
            { v: 25 },
            { v: 49, erro: 'achou o começo do 3º capítulo (Sucos).', calc: () => 2 * (96 / 4) + 1 },
            { v: 92, erro: 'tirou 4 de 96 em vez de dividir.', calc: () => 96 - 4 },
          ],
        },
        {
          enunciado: '<p>O livro de receitas tem <b>144 páginas</b>, divididas igualmente em <b>6 capítulos</b>. A Dona Cida parou na <b>primeira página do 3º capítulo</b>.</p><p class="pergunta">Em que página ela parou?</p>',
          calc: () => (144 / 6) * 2 + 1, resposta: 49, conta: '144 ÷ 6 = 24 páginas por capítulo · os 2 primeiros vão até a página 48 · o 3º começa na 49',
          opcoes: [
            { v: 24, erro: 'só dividiu: achou quantas páginas tem cada capítulo.', calc: () => 144 / 6 },
            { v: 48, erro: 'achou o fim do 2º capítulo, não o começo do 3º.', calc: () => 2 * (144 / 6) },
            { v: 49 },
            { v: 72, erro: 'achou o fim do 3º capítulo (3 × 24).', calc: () => 3 * (144 / 6) },
          ],
        },
      ],
    },
  ],
};
