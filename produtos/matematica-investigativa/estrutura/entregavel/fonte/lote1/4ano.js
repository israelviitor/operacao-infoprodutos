// Lote 1 — 4º ano (10 missões). Formato de cada problema: ver 3ano.js.
// A missão 02 (R$ 50) segue o mockup do dono, palavra por palavra no N2 das etapas 1 e 2.
const { RS, min, hm, h, fmtNum } = require('./util');
const N = (n) => fmtNum(n);

module.exports = [
  {
    n: 1, titulo: 'O Mistério do Placar Apagado', palavra: 'TRES',
    figura: 'Tabela do campeonato: Leões — 5 vitórias, 2 empates · Águias — 4 vitórias, 4 empates · Tubarões — 6 vitórias, 0 empate. Vitória vale 3 pontos; empate, 1 ponto.',
    abertura: 'A chuva apagou parte do placar do campeonato de futebol da escola. Só sobraram algumas anotações e a tabela de vitórias. Vamos reconstruir o placar e descobrir o campeão!',
    solucao: 'Os Tubarões foram campeões: cada vitória vale TRÊS pontos, e eles venceram mais jogos, mesmo sem nenhum empate.',
    etapas: [
      { titulo: 'O público', bncc: 'EF04MA03', niveis: [
        ['O time da sala fez 12 gols no 1º turno e 9 no 2º. Quantos gols ao todo?', '21', () => String(12 + 9), '12 + 9 = 21', '3', () => String(12 - 9), 'tirou em vez de juntar.'],
        ['O público foi de 1 245 pessoas no sábado e 1 380 no domingo. Quantas pessoas ao todo?', N(2625), () => N(1245 + 1380), '1 245 + 1 380 = 2 625', N(2525), () => N(1245 + 1380 - 100), 'esqueceu o “vai um” das dezenas (4 + 8 = 12).'],
        ['O público foi de 1 245 pessoas no sábado, 1 380 no domingo e 2 095 na final. Quantas pessoas ao todo?', N(4720), () => N(1245 + 1380 + 2095), '2 625 + 2 095 = 4 720', N(2625), () => N(1245 + 1380), 'esqueceu o público da final.'],
      ] },
      { titulo: 'A diferença', bncc: 'EF04MA03', niveis: [
        ['O time A fez 21 gols e o time B, 17. Quantos gols o A fez a mais?', '4', () => String(21 - 17), '21 − 17 = 4', '38', () => String(21 + 17), 'somou em vez de comparar.'],
        ['A final teve 2 095 pessoas e o sábado, 1 245. Quantas pessoas a mais foram à final?', '850', () => String(2095 - 1245), '2 095 − 1 245 = 850', N(1250), () => N(1000 * (2 - 1) + 100 * (2 - 0) + 10 * (9 - 4) + (5 - 5)), 'tirou o menor algarismo do maior em cada coluna, sem desagrupar.'],
        ['O ginásio cabe 5 000 pessoas. Na final, 2 095 entraram pelo portão A e 1 380 pelo B. Quantos lugares ficaram vazios?', N(1525), () => N(5000 - 2095 - 1380), '2 095 + 1 380 = 3 475 · 5 000 − 3 475 = 1 525', N(2905), () => N(5000 - 2095), 'esqueceu o portão B.'],
      ] },
      { titulo: 'A tabela de pontos', bncc: 'EF04MA27', niveis: [
        ['Quantos pontos os Leões fizeram só com as vitórias?', '15', () => String(5 * 3), '5 vitórias × 3 = 15', '8', () => String(5 + 3), 'somou 5 + 3.'],
        ['Quantos pontos as Águias fizeram ao todo (vitórias e empates)?', '16', () => String(4 * 3 + 4 * 1), '4 × 3 = 12 · 12 + 4 = 16', '8', () => String(4 + 4), 'somou vitórias e empates sem dar os pontos.'],
        ['Quantos pontos fez o time campeão?', '18', () => String(Math.max(5 * 3 + 2, 4 * 3 + 4, 6 * 3)), 'Leões 17 · Águias 16 · Tubarões 18', '17', () => String(5 * 3 + 2), 'achou que os Leões venceram.'],
      ] },
      { titulo: 'Os atletas', bncc: 'EF04MA06', niveis: [
        ['Cada gol valeu 2 figurinhas de prêmio. O time A fez 21 gols. Quantas figurinhas ganhou?', '42', () => String(21 * 2), '21 × 2 = 42', '23', () => String(21 + 2), 'somou 21 + 2.'],
        ['Cada time tem 11 jogadores e 4 reservas. Quantos atletas há em 8 times?', '120', () => String(8 * (11 + 4)), '11 + 4 = 15 · 8 × 15 = 120', '92', () => String(8 * 11 + 4), 'contou os reservas de um time só.'],
        ['Cada time tem 11 jogadores e 4 reservas. O campeonato teve 12 times. Quantos atletas?', '180', () => String(12 * (11 + 4)), '12 × 15 = 180', '136', () => String(12 * 11 + 4), 'contou os reservas de um time só.'],
      ] },
    ],
  },
  {
    n: 2, titulo: 'O Caso dos R$ 50', palavra: 'MAIS', mockup: true,
    abertura: 'Na feira da escola, a turma organizou uma barraca de vendas. Eles começaram o dia com R$ 50,00 para comprar os ingredientes. Mas, depois de algumas compras, ficou a dúvida sobre quanto ainda restou. Vamos investigar?',
    dica: 'DICA: Você precisa descobrir qual operação usar. Faça suas anotações aqui:',
    solucao: 'A turma não perdeu dinheiro: com as vendas da salada de frutas, terminou o dia com MAIS do que os R$ 50,00 do começo.',
    etapas: [
      { titulo: 'As compras', bncc: 'EF04MA25', niveis: [
        ['Veja as compras que foram feitas: 1 kg de bananas por R$ 4,00 e 1 kg de maçãs por R$ 5,00. Quanto a turma gastou ao todo nessas compras?', 'R$ 9,00', () => RS(400 + 500), '4,00 + 5,00 = 9,00', 'R$ 1,00', () => RS(500 - 400), 'tirou em vez de juntar.'],
        ['Veja as compras que foram feitas: 3 kg de bananas por R$ 6,00 · 2 kg de maçãs por R$ 8,00 · 1 kg de laranjas por R$ 5,00. Quanto a turma gastou ao todo nessas compras?', 'R$ 19,00', () => RS(600 + 800 + 500), '6,00 + 8,00 + 5,00 = 19,00', 'R$ 14,00', () => RS(600 + 800), 'esqueceu as laranjas.'],
        ['Veja as compras: 3 kg de bananas a R$ 2,50 o quilo, 2 kg de maçãs a R$ 4,00 o quilo e 1 kg de laranjas a R$ 5,00. Quanto a turma gastou ao todo?', 'R$ 20,50', () => RS(3 * 250 + 2 * 400 + 500), '7,50 + 8,00 + 5,00 = 20,50', 'R$ 11,50', () => RS(250 + 400 + 500), 'somou o preço de 1 quilo de cada fruta, sem multiplicar pelos quilos.'],
      ] },
      { titulo: 'O que restou', bncc: 'EF04MA25', niveis: [
        ['A turma começou o dia com R$ 20,00. Depois dessas compras, quanto ainda restou?', 'R$ 11,00', () => RS(2000 - 900), '20,00 − 9,00 = 11,00', 'R$ 29,00', () => RS(2000 + 900), 'somou em vez de tirar.'],
        ['A turma começou o dia com R$ 50,00. Depois dessas compras, quanto ainda restou?', 'R$ 31,00', () => RS(5000 - 1900), '50,00 − 19,00 = 31,00', 'R$ 41,00', () => RS(4100), 'desagrupou a dezena, mas não tirou 1 dela (fez 5 − 1 = 4).'],
        ['A turma começou com R$ 50,00, fez essas compras e ainda pagou R$ 3,50 de sacolas. Quanto restou?', 'R$ 26,00', () => RS(5000 - 2050 - 350), '20,50 + 3,50 = 24,00 · 50,00 − 24,00 = 26,00', 'R$ 29,50', () => RS(5000 - 2050), 'esqueceu as sacolas.'],
      ] },
      { titulo: 'As vendas', bncc: 'EF04MA06', niveis: [
        ['A turma vendeu 8 copos de salada de frutas a R$ 3,00 cada. Quanto arrecadou?', 'R$ 24,00', () => RS(8 * 300), '8 × 3,00 = 24,00', 'R$ 5,00', () => RS(800 - 300), 'tirou 3 de 8.'],
        ['A turma vendeu 23 copos de salada de frutas a R$ 3,00 cada. Quanto arrecadou?', 'R$ 69,00', () => RS(23 * 300), '23 × 3,00 = 69,00', 'R$ 26,00', () => RS(2300 + 300), 'somou 23 + 3.'],
        ['A turma vendeu 23 copos de salada de frutas a R$ 3,00 e 12 sucos a R$ 2,50. Quanto arrecadou?', 'R$ 99,00', () => RS(23 * 300 + 12 * 250), '69,00 + 30,00 = 99,00', 'R$ 69,00', () => RS(23 * 300), 'esqueceu os sucos.'],
      ] },
      { titulo: 'O fim do dia', bncc: 'EF04MA25', niveis: [
        ['Somando o que restou (R$ 11,00) com o que a turma arrecadou (R$ 24,00), quanto ela tem no fim do dia?', 'R$ 35,00', () => RS(1100 + 2400), '11,00 + 24,00 = 35,00', 'R$ 13,00', () => RS(2400 - 1100), 'tirou em vez de juntar.'],
        ['No fim do dia, a turma tem o que restou mais o que arrecadou. Quanto ela tem?', 'R$ 100,00', () => RS(3100 + 6900), '31,00 + 69,00 = 100,00', 'R$ 90,00', () => RS(9000), 'esqueceu o “vai um” das unidades (1 + 9 = 10).'],
        ['A turma tem o que restou mais o que arrecadou. Quanto ela tem a mais do que os R$ 50,00 do começo?', 'R$ 75,00', () => RS(2600 + 9900 - 5000), '26,00 + 99,00 = 125,00 · 125,00 − 50,00 = 75,00', 'R$ 125,00', () => RS(2600 + 9900), 'calculou o total e esqueceu de comparar com os R$ 50,00.'],
      ] },
    ],
  },
  {
    n: 3, titulo: 'O Mistério do Pomar', palavra: 'MICO',
    abertura: 'No pomar do sítio que a escola visitou, as árvores estavam carregadas. Mas o número de frutas colhidas não bate com o que chegou à cozinha. Vamos contar direito!',
    solucao: 'As frutas que faltavam foram comidas pelos MICOs do sítio: a câmera do caseiro mostrou tudo!',
    etapas: [
      { titulo: 'As árvores', bncc: 'EF04MA06', niveis: [
        ['O pomar tem 4 fileiras com 7 laranjeiras em cada. Quantas laranjeiras há?', '28', () => String(4 * 7), '4 × 7 = 28', '11', () => String(4 + 7), 'somou 4 + 7.'],
        ['O pomar tem 12 fileiras com 15 árvores em cada. Quantas árvores há?', '180', () => String(12 * 15), '12 × 15 = 180', '27', () => String(12 + 15), 'somou 12 + 15.'],
        ['O pomar tem 12 fileiras com 15 árvores, mas 8 árvores foram cortadas. Quantas árvores restam?', '172', () => String(12 * 15 - 8), '180 − 8 = 172', '180', () => String(12 * 15), 'esqueceu as árvores cortadas.'],
      ] },
      { titulo: 'Os cestos', bncc: 'EF04MA06', niveis: [
        ['Cada árvore deu 8 cajus. Quantos cajus em 5 árvores?', '40', () => String(5 * 8), '5 × 8 = 40', '13', () => String(5 + 8), 'somou 5 + 8.'],
        ['Cada cesto leva 24 frutas. Quantas frutas há em 13 cestos?', '312', () => String(13 * 24), '24 × 10 = 240 · 24 × 3 = 72 · 240 + 72 = 312', '96', () => String(24 * 1 + 24 * 3), 'multiplicou 24 por 1 e por 3, esquecendo que o 1 vale 10.'],
        ['Cada cesto leva 24 frutas. Foram 13 cestos de manhã e 9 à tarde. Quantas frutas ao todo?', '528', () => String((13 + 9) * 24), '13 + 9 = 22 cestos · 22 × 24 = 528', '312', () => String(13 * 24), 'contou só os cestos da manhã.'],
      ] },
      { titulo: 'O que chegou à cozinha', bncc: 'EF04MA03', niveis: [
        ['Foram colhidos 40 cajus e chegaram 36 à cozinha. Quantos sumiram?', '4', () => String(40 - 36), '40 − 36 = 4', '76', () => String(40 + 36), 'somou em vez de tirar.'],
        ['Foram colhidas 312 frutas e chegaram 287 à cozinha. Quantas sumiram?', '25', () => String(312 - 287), '312 − 287 = 25', '175', () => String(100 * (3 - 2) + 10 * (8 - 1) + (7 - 2)), 'tirou o menor algarismo do maior em cada coluna, sem desagrupar.'],
        ['Foram colhidas 528 frutas, chegaram 487 à cozinha e 26 ficaram para a merenda do sítio. Quantas sumiram?', '15', () => String(528 - 487 - 26), '487 + 26 = 513 · 528 − 513 = 15', '41', () => String(528 - 487), 'esqueceu as frutas da merenda.'],
      ] },
      { titulo: 'As caixas', bncc: 'EF04MA07', niveis: [
        ['As 28 laranjas foram divididas igualmente em 4 caixas. Quantas em cada caixa?', '7', () => String(28 / 4), '28 ÷ 4 = 7', '24', () => String(28 - 4), 'tirou 4 em vez de repartir.'],
        ['As 287 frutas foram divididas igualmente em 7 caixas. Quantas frutas em cada caixa?', '41', () => String(287 / 7), '287 ÷ 7 = 41', '280', () => String(287 - 7), 'tirou 7 em vez de repartir.'],
        ['As 487 frutas foram divididas igualmente em 12 caixas. Quantas frutas sobram fora das caixas?', '7', () => String(487 % 12), '487 ÷ 12 = 40 e sobram 7', '40', () => String(Math.floor(487 / 12)), 'respondeu quantas frutas vão em cada caixa, e não quantas sobram.'],
      ] },
    ],
  },
  {
    n: 4, titulo: 'O Enigma da Pizza Dividida', palavra: 'DONA',
    abertura: 'Na festa da turma, as pizzas foram cortadas em partes iguais. No fim, sobrou uma fatia misteriosa, e ninguém sabe de quem é. Vamos usar frações para descobrir!',
    solucao: 'A fatia misteriosa era da DONA Lúcia, a merendeira: ela tinha separado a parte dela antes da festa começar.',
    etapas: [
      { titulo: 'Os pedaços', bncc: 'EF04MA09', niveis: [
        ['Uma pizza foi cortada em 4 partes iguais. Que fração da pizza é cada parte?', '1/4', () => `1/${4}`, 'a pizza inteira tem 4 partes; cada uma é 1/4', '4/1', () => '4/1', 'inverteu a fração.'],
        ['Uma pizza foi cortada em 8 partes iguais, e Ana comeu 1 parte. Que fração da pizza ela comeu?', '1/8', () => `1/${8}`, '1 parte de 8 = 1/8', '1/7', () => `1/${8 - 1}`, 'contou só as partes que sobraram.'],
        ['Uma pizza foi cortada em 10 partes iguais. Ana comeu 1 parte e Leo, 2. Que fração da pizza os dois comeram juntos?', '3/10', () => `${1 + 2}/10`, '1/10 + 2/10 = 3/10', '3/20', () => `${1 + 2}/${10 + 10}`, 'somou também os números de baixo.'],
      ] },
      { titulo: 'Os sabores', bncc: 'EF04MA09', niveis: [
        ['Metade dos 12 alunos queria pizza de queijo. Quantos alunos?', '6', () => String(12 / 2), 'metade de 12 = 6', '24', () => String(12 * 2), 'dobrou em vez de dividir.'],
        ['Um terço dos 24 alunos queria pizza de calabresa. Quantos alunos?', '8', () => String(24 / 3), '24 ÷ 3 = 8', '21', () => String(24 - 3), 'tirou 3 em vez de dividir.'],
        ['Dos 30 alunos, 1/5 queria calabresa e 1/3 queria queijo. Quantos alunos queriam outros sabores?', '14', () => String(30 - 30 / 5 - 30 / 3), '30 ÷ 5 = 6 · 30 ÷ 3 = 10 · 30 − 6 − 10 = 14', '24', () => String(30 - 30 / 5), 'tirou só quem queria calabresa.'],
      ] },
      { titulo: 'Quem comeu mais', bncc: 'EF04MA09', niveis: [
        ['Quem comeu mais pizza: quem pegou 1/2 ou quem pegou 1/3? (responda a fração)', '1/2', () => '1/2', 'pizza em 2 partes tem pedaços maiores que em 3', '1/3', () => '1/3', 'achou que número maior embaixo é pedaço maior.'],
        ['Qual pedaço é maior: 1/3, 1/5 ou 1/10 de uma pizza? (responda a fração)', '1/3', () => '1/3', 'quanto menos partes, maior cada pedaço', '1/10', () => '1/10', 'achou que número maior embaixo é pedaço maior.'],
        ['Bia comeu 1/4 de uma pizza, Caio comeu 1/3 de outra igual e Dani, 1/5 de outra. Quem comeu menos? (responda a fração)', '1/5', () => '1/5', 'quanto mais partes, menor cada pedaço: 1/5 é o menor', '1/3', () => '1/3', 'achou que número menor embaixo é pedaço menor.'],
      ] },
      { titulo: 'A conta da pizza', bncc: 'EF04MA07', niveis: [
        ['Uma pizza de R$ 20,00 foi dividida igualmente entre 4 alunos. Quanto cada um pagou?', 'R$ 5,00', () => RS(2000 / 4), '20,00 ÷ 4 = 5,00', 'R$ 16,00', () => RS(2000 - 400), 'tirou 4 em vez de dividir.'],
        ['Uma pizza de R$ 40,00 foi dividida igualmente entre 10 alunos. Quanto cada um pagou?', 'R$ 4,00', () => RS(4000 / 10), '40,00 ÷ 10 = 4,00', 'R$ 30,00', () => RS(4000 - 1000), 'tirou 10 em vez de dividir.'],
        ['Duas pizzas de R$ 36,00 foram divididas igualmente entre 8 alunos. Quanto cada um pagou?', 'R$ 9,00', () => RS((2 * 3600) / 8), '2 × 36,00 = 72,00 · 72,00 ÷ 8 = 9,00', 'R$ 4,50', () => RS(3600 / 8), 'contou só uma pizza.'],
      ] },
    ],
  },
  {
    n: 5, titulo: 'O Caso do Ônibus Atrasado', palavra: 'PNEU',
    abertura: 'No dia do passeio, o ônibus chegou atrasado, e a turma quase perdeu a sessão do planetário. O motorista diz que saiu na hora certa. O que aconteceu no caminho?',
    solucao: 'O motorista saiu na hora, mas o PNEU furou no caminho, e a troca levou 20 minutos.',
    etapas: [
      { titulo: 'O atraso', bncc: 'EF04MA22', niveis: [
        ['O ônibus deveria chegar às 8h00 e chegou às 8h25. Quantos minutos de atraso?', '25 min', () => min(h(8, 25) - h(8)), 'de 8h00 a 8h25 = 25 min', '75 min', () => min(100 - 25), 'contou quanto faltava para 9h00 como se a hora tivesse 100 minutos.'],
        ['O ônibus saiu da garagem às 6h50 e chegou à escola às 7h35. Quanto tempo durou a viagem?', '45 min', () => min(h(7, 35) - h(6, 50)), 'de 6h50 a 7h00 = 10 min · de 7h00 a 7h35 = 35 min · 45 min', '85 min', () => min(735 - 650), 'fez 735 − 650, como se a hora tivesse 100 minutos.'],
        ['O ônibus saiu da garagem às 6h50, parou 18 minutos no posto e chegou à escola às 8h05. Quanto tempo esteve andando?', '57 min', () => min(h(8, 5) - h(6, 50) - 18), 'de 6h50 a 8h05 = 75 min · 75 − 18 = 57 min', '75 min', () => min(h(8, 5) - h(6, 50)), 'esqueceu a parada no posto.'],
      ] },
      { titulo: 'A viagem', bncc: 'EF04MA22', niveis: [
        ['A viagem até o planetário leva 40 minutos. Saindo às 8h25, a que horas chega?', '9h05', () => hm(h(8, 25) + 40), '8h25 + 35 min = 9h00 · + 5 min = 9h05', '8h65', () => `8h${25 + 40}`, 'somou 25 + 40 = 65 minutos e não trocou 60 minutos por 1 hora.'],
        ['A viagem leva 1 hora e 20 minutos. Saindo às 7h55, a que horas chega?', '9h15', () => hm(h(7, 55) + 80), '7h55 + 1 h = 8h55 · + 20 min = 9h15', '8h75', () => `8h${55 + 20}`, 'somou 55 + 20 = 75 minutos e não trocou 60 minutos por 1 hora.'],
        ['A viagem leva 1 hora e 20 minutos, com uma parada de 15 minutos. Saindo às 7h55, a que horas chega?', '9h30', () => hm(h(7, 55) + 80 + 15), '7h55 + 1h20 = 9h15 · + 15 min = 9h30', '9h15', () => hm(h(7, 55) + 80), 'esqueceu a parada.'],
      ] },
      { titulo: 'A troca do pneu', bncc: 'EF04MA22', niveis: [
        ['A sessão do planetário dura 1 hora. Quantos minutos são?', '60 min', () => min(60), '1 h = 60 min', '100 min', () => min(100), 'achou que 1 hora tem 100 minutos.'],
        ['O motorista trocou o pneu em 1 200 segundos. Quantos minutos são?', '20 min', () => min(1200 / 60), '1 200 ÷ 60 = 20 min', '12 min', () => min(1200 / 100), 'dividiu por 100, como se 1 minuto tivesse 100 segundos.'],
        ['Trocar o pneu levou 1 500 segundos, e calibrar os outros, 180 segundos. Quantos minutos ao todo?', '28 min', () => min((1500 + 180) / 60), '1 500 + 180 = 1 680 s · 1 680 ÷ 60 = 28 min', '25 min', () => min(1500 / 60), 'esqueceu a calibragem.'],
      ] },
      { titulo: 'A sessão', bncc: 'EF04MA22', niveis: [
        ['A sessão começa às 9h00. A turma chegou às 9h05. Quantos minutos de atraso?', '5 min', () => min(5), 'de 9h00 a 9h05 = 5 min', '55 min', () => min(60 - 5), 'contou de 9h05 até 10h00.'],
        ['A sessão começou às 9h00 e dura 50 minutos. A turma chegou às 9h15. Quantos minutos ela assistiu?', '35 min', () => min(50 - 15), 'a sessão acaba às 9h50 · de 9h15 a 9h50 = 35 min', '65 min', () => min(50 + 15), 'somou o atraso em vez de tirar.'],
        ['A sessão começou às 9h00 e dura 1 hora e 10 minutos. A turma chegou às 9h30. Quantos minutos ela assistiu?', '40 min', () => min(70 - 30), 'acaba às 10h10 · de 9h30 a 10h10 = 40 min', '100 min', () => min(70 + 30), 'somou o atraso em vez de tirar.'],
      ] },
    ],
  },
  {
    n: 6, titulo: 'O Mistério da Caixa de Doações', palavra: 'SACO',
    abertura: 'A escola fez uma campanha de doações para três instituições. Mas uma das caixas chegou com menos itens do que as outras. Vamos refazer a divisão!',
    solucao: 'Os itens que faltavam ficaram num SACO esquecido no porta-malas do carro da diretora.',
    etapas: [
      { titulo: 'A divisão', bncc: 'EF04MA07', niveis: [
        ['36 brinquedos foram divididos igualmente em 3 caixas. Quantos brinquedos em cada caixa?', '12', () => String(36 / 3), '36 ÷ 3 = 12', '33', () => String(36 - 3), 'tirou 3 em vez de repartir.'],
        ['252 livros foram divididos igualmente entre 3 instituições. Quantos livros cada uma recebeu?', '84', () => String(252 / 3), '252 ÷ 3 = 84', '249', () => String(252 - 3), 'tirou 3 em vez de repartir.'],
        ['252 livros e 48 gibis foram divididos igualmente entre 4 instituições. Quantos itens cada uma recebeu?', '75', () => String((252 + 48) / 4), '252 + 48 = 300 · 300 ÷ 4 = 75', '63', () => String(252 / 4), 'esqueceu os gibis.'],
      ] },
      { titulo: 'As caixas', bncc: 'EF04MA07', niveis: [
        ['Cada caixa leva 8 latas. Quantas caixas para 56 latas?', '7', () => String(56 / 8), '56 ÷ 8 = 7', '48', () => String(56 - 8), 'tirou 8 em vez de dividir.'],
        ['Cada caixa leva 15 cobertores. Quantas caixas para 135 cobertores?', '9', () => String(135 / 15), '135 ÷ 15 = 9', '120', () => String(135 - 15), 'tirou 15 em vez de dividir.'],
        ['Cada caixa leva 15 cobertores. Quantas caixas são necessárias, no mínimo, para 140 cobertores?', '10', () => String(Math.ceil(140 / 15)), '140 ÷ 15 = 9 e sobram 5 · mais 1 caixa = 10', '9', () => String(Math.floor(140 / 15)), 'esqueceu os 5 cobertores que sobram.'],
      ] },
      { titulo: 'A arrecadação', bncc: 'EF04MA06', niveis: [
        ['Cada aluno trouxe 3 pacotes de arroz. Foram 25 alunos. Quantos pacotes?', '75', () => String(25 * 3), '25 × 3 = 75', '28', () => String(25 + 3), 'somou 25 + 3.'],
        ['Cada uma das 6 turmas arrecadou 47 quilos de alimento. Quantos quilos ao todo?', '282', () => String(6 * 47), '6 × 47 = 282', '242', () => String(6 * 40 + (6 * 7) % 10), 'esqueceu o “vai quatro” (6 × 7 = 42).'],
        ['Cada uma das 6 turmas arrecadou 47 quilos, e a diretoria doou mais 35 quilos. Quantos quilos ao todo?', '317', () => String(6 * 47 + 35), '282 + 35 = 317', '282', () => String(6 * 47), 'esqueceu a doação da diretoria.'],
      ] },
      { titulo: 'O que faltou', bncc: 'EF04MA03', niveis: [
        ['Uma caixa devia ter 12 brinquedos e chegou com 9. Quantos faltaram?', '3', () => String(12 - 9), '12 − 9 = 3', '21', () => String(12 + 9), 'somou em vez de tirar.'],
        ['Cada instituição devia receber 84 livros. Uma delas recebeu 77. Quantos faltaram?', '7', () => String(84 - 77), '84 − 77 = 7', '13', () => String(10 * (8 - 7) + (7 - 4)), 'tirou o menor algarismo do maior em cada coluna, sem desagrupar.'],
        ['Uma instituição devia receber 75 itens. Chegaram 3 pacotes com 20 itens cada. Quantos itens faltaram?', '15', () => String(75 - 3 * 20), '3 × 20 = 60 · 75 − 60 = 15', '52', () => String(75 - (3 + 20)), 'somou 3 + 20 em vez de multiplicar.'],
      ] },
    ],
  },
  {
    n: 7, titulo: 'O Segredo do Mapa da Escola', palavra: 'JOGO',
    figura: 'Mapa da escola em malha quadriculada: colunas A a F (da esquerda para a direita) e linhas 1 a 6 (de baixo para cima). Entrada em A1 · Quadra em F2 · Biblioteca em C4 · Horta em E6. Cada quadradinho vale 5 metros.',
    abertura: 'Um mapa antigo da escola foi achado no fundo de um armário, com um X misterioso. Para chegar até ele, é preciso seguir as casas da malha. Vamos decifrar o mapa!',
    solucao: 'No X do mapa estava a caixa de JOGOs que a turma do ano passado escondeu de presente para vocês.',
    etapas: [
      { titulo: 'As casas do mapa', bncc: 'EF04MA16', niveis: [
        ['Saindo da Entrada (A1), ande 2 quadradinhos para a direita. Em que casa você está?', 'C1', () => 'ABCDEF'[0 + 2] + '1', 'A → B → C: casa C1', 'B1', () => 'B1', 'contou a casa de saída como um passo.'],
        ['Saindo da Entrada (A1), ande 2 quadradinhos para a direita e 3 para cima. Em que casa você está?', 'C4', () => 'ABCDEF'[2] + (1 + 3), 'A → C (2 para a direita) · 1 → 4 (3 para cima): C4, a Biblioteca', 'D3', () => 'ABCDEF'[3] + (1 + 2), 'trocou as direções (3 para a direita e 2 para cima).'],
        ['Saindo da Quadra (F2), ande 3 para a esquerda, 4 para cima e 1 para a direita. Em que casa você está?', 'D6', () => 'ABCDEF'[5 - 3 + 1] + (2 + 4), 'F → C · 2 → 6 · C → D: D6', 'C6', () => 'ABCDEF'[5 - 3] + (2 + 4), 'esqueceu o último passo para a direita.'],
      ] },
      { titulo: 'Quantos quadradinhos', bncc: 'EF04MA16', niveis: [
        ['Da Entrada (A1) até a casa A5, andando para cima, quantos quadradinhos você anda?', '4', () => String(5 - 1), 'de 1 até 5 = 4 quadradinhos', '5', () => '5', 'contou a casa de saída.'],
        ['Da Entrada (A1) até a Quadra (F2), andando pelas linhas da malha, quantos quadradinhos no menor caminho?', '6', () => String(5 + 1), '5 para a direita + 1 para cima = 6', '5', () => '5', 'contou só os quadradinhos para a direita.'],
        ['Da Biblioteca (C4) até a Horta (E6), andando pelas linhas da malha, quantos quadradinhos no menor caminho?', '4', () => String(2 + 2), '2 para a direita + 2 para cima = 4', '2', () => '2', 'andou na diagonal, o que a malha não permite.'],
      ] },
      { titulo: 'Os metros', bncc: 'EF04MA20', niveis: [
        ['Cada quadradinho vale 5 metros. Quantos metros são 4 quadradinhos?', '20 m', () => 4 * 5 + ' m', '4 × 5 = 20 m', '9 m', () => (4 + 5) + ' m', 'somou 4 + 5.'],
        ['Cada quadradinho vale 5 metros. Quantos metros da Entrada até a Quadra (6 quadradinhos)?', '30 m', () => 6 * 5 + ' m', '6 × 5 = 30 m', '11 m', () => (6 + 5) + ' m', 'somou 6 + 5.'],
        ['Cada quadradinho vale 5 metros. Quantos metros, ida e volta, da Biblioteca até a Horta (4 quadradinhos)?', '40 m', () => 2 * 4 * 5 + ' m', '4 × 5 = 20 m · ida e volta: 40 m', '20 m', () => 4 * 5 + ' m', 'contou só a ida.'],
      ] },
      { titulo: 'O caminho até o X', bncc: 'EF04MA20', niveis: [
        ['Ana andou 20 metros e depois mais 15 metros. Quantos metros andou?', '35 m', () => (20 + 15) + ' m', '20 + 15 = 35 m', '5 m', () => (20 - 15) + ' m', 'tirou em vez de juntar.'],
        ['O caminho até o X tem 30 metros. A turma já andou 18 metros. Quantos metros faltam?', '12 m', () => (30 - 18) + ' m', '30 − 18 = 12 m', '48 m', () => (30 + 18) + ' m', 'somou em vez de tirar.'],
        ['A turma andou 40 metros de manhã e 35 metros à tarde. Quantos metros faltam para completar 100 metros?', '25 m', () => (100 - 40 - 35) + ' m', '40 + 35 = 75 · 100 − 75 = 25 m', '75 m', () => (40 + 35) + ' m', 'respondeu quanto andou, e não quanto falta.'],
      ] },
    ],
  },
  {
    n: 8, titulo: 'O Caso do Termômetro Maluco', palavra: 'LONA',
    figura: 'Gráfico de colunas “Temperatura na estufa ao meio-dia (°C)”: segunda 24 · terça 27 · quarta 31 · quinta 35 · sexta 29.',
    abertura: 'A estufa de mudas da escola esquentou demais, e algumas plantas murcharam. O termômetro marcou temperaturas estranhas a semana toda. Vamos analisar os registros!',
    solucao: 'Alguém cobriu a estufa com uma LONA preta, que esquentou tudo. Sem a lona, a temperatura voltou ao normal.',
    etapas: [
      { titulo: 'A leitura do gráfico', bncc: 'EF04MA27', niveis: [
        ['Qual foi a temperatura na quarta-feira?', '31 °C', () => '31 °C', 'leitura da coluna de quarta: 31', '27 °C', () => '27 °C', 'leu a coluna de terça.'],
        ['Qual foi a maior temperatura da semana?', '35 °C', () => Math.max(24, 27, 31, 35, 29) + ' °C', 'a coluna mais alta é a de quinta: 35', '31 °C', () => '31 °C', 'leu a coluna de quarta.'],
        ['Qual foi a diferença entre a maior e a menor temperatura da semana?', '11 °C', () => (35 - 24) + ' °C', '35 − 24 = 11', '59 °C', () => (35 + 24) + ' °C', 'somou em vez de comparar.'],
      ] },
      { titulo: 'O calor aumentando', bncc: 'EF04MA23', niveis: [
        ['Quantos graus a quinta foi mais quente que a segunda?', '11 °C', () => (35 - 24) + ' °C', '35 − 24 = 11', '59 °C', () => (35 + 24) + ' °C', 'somou em vez de comparar.'],
        ['De quarta para quinta, quantos graus a temperatura subiu?', '4 °C', () => (35 - 31) + ' °C', '35 − 31 = 4', '66 °C', () => (35 + 31) + ' °C', 'somou em vez de comparar.'],
        ['Em quantos dias a temperatura passou de 28 °C?', '3 dias', () => [24, 27, 31, 35, 29].filter((t) => t > 28).length + ' dias', 'quarta (31), quinta (35) e sexta (29)', '2 dias', () => '2 dias', 'esqueceu a sexta-feira (29 °C).'],
      ] },
      { titulo: 'O limite das mudas', bncc: 'EF04MA23', niveis: [
        ['As mudas aguentam até 30 °C. Em quantos dias a temperatura passou disso?', '2 dias', () => [24, 27, 31, 35, 29].filter((t) => t > 30).length + ' dias', 'quarta (31) e quinta (35)', '1 dia', () => '1 dia', 'contou só a quinta-feira.'],
        ['As mudas aguentam até 30 °C. Na quinta, quantos graus a temperatura passou do limite?', '5 °C', () => (35 - 30) + ' °C', '35 − 30 = 5', '65 °C', () => (35 + 30) + ' °C', 'somou em vez de comparar.'],
        ['As mudas aguentam até 30 °C. Somando quanto passou do limite em cada dia quente, quantos graus são ao todo?', '6 °C', () => (31 - 30 + 35 - 30) + ' °C', 'quarta: 1 · quinta: 5 · 1 + 5 = 6', '5 °C', () => (35 - 30) + ' °C', 'contou só a quinta-feira.'],
      ] },
      { titulo: 'A solução', bncc: 'EF04MA03', niveis: [
        ['Abriram a janela, e a temperatura caiu de 35 °C para 28 °C. Quantos graus caiu?', '7 °C', () => (35 - 28) + ' °C', '35 − 28 = 7', '63 °C', () => (35 + 28) + ' °C', 'somou em vez de tirar.'],
        ['Depois que tiraram a lona, a temperatura caiu 9 graus a partir de 35 °C. Ficou em quanto?', '26 °C', () => (35 - 9) + ' °C', '35 − 9 = 26', '44 °C', () => (35 + 9) + ' °C', 'somou em vez de tirar.'],
        ['A partir de 35 °C, tiraram a lona (caiu 9 graus) e abriram a janela (caiu mais 4 graus). Que temperatura ficou?', '22 °C', () => (35 - 9 - 4) + ' °C', '35 − 9 = 26 · 26 − 4 = 22', '26 °C', () => (35 - 9) + ' °C', 'esqueceu a janela.'],
      ] },
    ],
  },
  {
    n: 9, titulo: 'O Mistério do Uniforme Combinado', palavra: 'BONE',
    abertura: 'A turma vai criar o uniforme da gincana. Mas a lista de combinações ficou incompleta, e dois alunos apareceram iguais! Vamos contar todas as combinações.',
    solucao: 'Os dois alunos “iguais” estavam com o mesmo BONÉ e a mesma combinação: faltou contar os bonés nas combinações.',
    etapas: [
      { titulo: 'Camisetas e bermudas', bncc: 'EF04MA08', niveis: [
        ['Há 2 camisetas (azul e verde) e 2 bermudas (preta e cinza). Quantos uniformes diferentes dá para montar?', '4', () => String(2 * 2), 'azul-preta, azul-cinza, verde-preta, verde-cinza: 2 × 2 = 4', '3', () => '3', 'esqueceu uma combinação.'],
        ['Há 3 camisetas e 4 bermudas. Quantos uniformes diferentes dá para montar?', '12', () => String(3 * 4), 'cada camiseta com cada bermuda: 3 × 4 = 12', '7', () => String(3 + 4), 'somou em vez de combinar.'],
        ['Há 3 camisetas, 4 bermudas e 2 bonés. Quantos uniformes completos diferentes dá para montar?', '24', () => String(3 * 4 * 2), '3 × 4 = 12 · 12 × 2 = 24', '9', () => String(3 + 4 + 2), 'somou em vez de combinar.'],
      ] },
      { titulo: 'Os alunos', bncc: 'EF04MA07', niveis: [
        ['Há 4 uniformes possíveis e 8 alunos. Se cada uniforme for usado pelo mesmo número de alunos, quantos alunos usam cada um?', '2', () => String(8 / 4), '8 ÷ 4 = 2', '12', () => String(8 + 4), 'somou 8 + 4.'],
        ['Há 12 uniformes possíveis e 36 alunos. Se cada uniforme for usado pelo mesmo número de alunos, quantos alunos usam cada um?', '3', () => String(36 / 12), '36 ÷ 12 = 3', '24', () => String(36 - 12), 'tirou 12 em vez de dividir.'],
        ['Há 24 uniformes possíveis, e a turma tem 30 alunos. Quantos alunos terão de repetir um uniforme já usado?', '6', () => String(30 - 24), '30 − 24 = 6', '54', () => String(30 + 24), 'somou em vez de tirar.'],
      ] },
      { titulo: 'O preço', bncc: 'EF04MA06', niveis: [
        ['Cada camiseta custa R$ 12,00. Quanto custam 3 camisetas?', 'R$ 36,00', () => RS(3 * 1200), '3 × 12,00 = 36,00', 'R$ 15,00', () => RS(1200 + 300), 'somou 12 + 3.'],
        ['A camiseta custa R$ 12,00 e a bermuda, R$ 15,00. Quanto custam os uniformes de 4 alunos?', 'R$ 108,00', () => RS(4 * (1200 + 1500)), '12,00 + 15,00 = 27,00 · 4 × 27,00 = 108,00', 'R$ 27,00', () => RS(1200 + 1500), 'calculou o uniforme de 1 aluno só.'],
        ['A camiseta custa R$ 12,00, a bermuda R$ 15,00 e o boné R$ 8,00. Quanto custam os uniformes de 6 alunos?', 'R$ 210,00', () => RS(6 * (1200 + 1500 + 800)), '12 + 15 + 8 = 35,00 · 6 × 35,00 = 210,00', 'R$ 35,00', () => RS(1200 + 1500 + 800), 'calculou o uniforme de 1 aluno só.'],
      ] },
      { titulo: 'Os bonés', bncc: 'EF04MA07', niveis: [
        ['A turma tem R$ 36,00, e cada boné custa R$ 6,00. Quantos bonés dá para comprar?', '6', () => String(3600 / 600), '36 ÷ 6 = 6', '30', () => String(36 - 6), 'tirou 6 em vez de dividir.'],
        ['A turma tem R$ 120,00, e cada boné custa R$ 8,00. Quantos bonés dá para comprar?', '15', () => String(12000 / 800), '120 ÷ 8 = 15', '112', () => String(120 - 8), 'tirou 8 em vez de dividir.'],
        ['A turma tinha R$ 210,00 e já gastou R$ 98,00. Cada boné custa R$ 8,00. Quantos bonés ainda dá para comprar?', '14', () => String((210 - 98) / 8), '210 − 98 = 112 · 112 ÷ 8 = 14', '26', () => String(Math.floor(210 / 8)), 'dividiu os R$ 210,00 sem tirar o que já foi gasto.'],
      ] },
    ],
  },
  {
    n: 10, titulo: 'O Mistério da Moeda Rara', palavra: 'OURO',
    abertura: 'Ao abrir o cofrinho da turma, apareceu uma moeda antiga e diferente. Para descobrir se ela é rara, vamos conferir todo o dinheiro do cofrinho.',
    solucao: 'A moeda não é de OURO: é uma moeda comemorativa de R$ 1,00. É rara, mas vale R$ 1,00!',
    etapas: [
      { titulo: 'O cofrinho', bncc: 'EF04MA10', niveis: [
        ['No cofrinho há 3 moedas de R$ 1,00 e 4 moedas de R$ 0,25. Quanto dinheiro há?', 'R$ 4,00', () => RS(3 * 100 + 4 * 25), '3,00 + 1,00 = 4,00', 'R$ 7,00', () => RS((3 + 4) * 100), 'contou todas as moedas como R$ 1,00.'],
        ['No cofrinho há 5 moedas de R$ 0,50, 6 de R$ 0,25 e 8 de R$ 0,10. Quanto dinheiro há?', 'R$ 4,80', () => RS(5 * 50 + 6 * 25 + 8 * 10), '2,50 + 1,50 + 0,80 = 4,80', 'R$ 0,85', () => RS(50 + 25 + 10), 'somou uma moeda de cada tipo.'],
        ['No cofrinho há 7 moedas de R$ 0,50, 9 de R$ 0,25, 12 de R$ 0,10 e 15 de R$ 0,05. Quanto dinheiro há?', 'R$ 7,70', () => RS(7 * 50 + 9 * 25 + 12 * 10 + 15 * 5), '3,50 + 2,25 + 1,20 + 0,75 = 7,70', 'R$ 0,90', () => RS(50 + 25 + 10 + 5), 'somou uma moeda de cada tipo.'],
      ] },
      { titulo: 'Centavos', bncc: 'EF04MA10', niveis: [
        ['Quantos centavos há em R$ 1,00?', '100', () => String(100), 'R$ 1,00 = 100 centavos', '10', () => '10', 'achou que 1 real tem 10 centavos.'],
        ['Quantas moedas de R$ 0,10 formam R$ 4,80?', '48', () => String(480 / 10), '4,80 = 480 centavos · 480 ÷ 10 = 48', '480', () => '480', 'respondeu os centavos, e não as moedas.'],
        ['R$ 7,70 corresponde a quantos centavos?', '770', () => String(7 * 100 + 70), '7 × 100 + 70 = 770', '77', () => '77', 'tirou o zero do 70.'],
      ] },
      { titulo: 'Qual vale mais', bncc: 'EF04MA10', niveis: [
        ['O que vale mais: 3 moedas de R$ 0,25 ou 1 moeda de R$ 0,50? (responda o maior valor)', 'R$ 0,75', () => RS(Math.max(3 * 25, 50)), '3 × 0,25 = 0,75 > 0,50', 'R$ 0,50', () => RS(50), 'achou que a moeda maior vale mais.'],
        ['Qual valor é maior: R$ 5,90 ou R$ 5,09?', 'R$ 5,90', () => RS(Math.max(590, 509)), '90 centavos > 9 centavos', 'R$ 5,09', () => RS(509), 'achou que 09 é maior que 90.'],
        ['Em ordem do menor para o maior: R$ 6,06; R$ 6,60; R$ 6,16. Qual valor fica no meio?', 'R$ 6,16', () => RS([606, 660, 616].sort((a, b) => a - b)[1]), 'ordem: 6,06 · 6,16 · 6,60', 'R$ 6,60', () => RS(660), 'achou que 6,06 é maior que 6,60.'],
      ] },
      { titulo: 'As compras', bncc: 'EF04MA25', niveis: [
        ['A turma vai comprar um álbum de R$ 2,80 com R$ 4,00. Quanto sobra?', 'R$ 1,20', () => RS(400 - 280), '4,00 − 2,80 = 1,20', 'R$ 6,80', () => RS(400 + 280), 'somou em vez de tirar.'],
        ['Com os R$ 4,80, a turma comprou uma lupa de R$ 3,75 para examinar a moeda. Quanto sobrou?', 'R$ 1,05', () => RS(480 - 375), '4,80 − 3,75 = 1,05', 'R$ 1,15', () => RS(100 + 10 * (8 - 7) + (5 - 0)), 'tirou o menor algarismo do maior em cada coluna, sem desagrupar.'],
        ['Com os R$ 7,70, a turma comprou uma lupa de R$ 3,75 e um saquinho de R$ 1,99. Quanto sobrou?', 'R$ 1,96', () => RS(770 - 375 - 199), '3,75 + 1,99 = 5,74 · 7,70 − 5,74 = 1,96', 'R$ 3,95', () => RS(770 - 375), 'esqueceu o saquinho.'],
      ] },
    ],
  },
];
