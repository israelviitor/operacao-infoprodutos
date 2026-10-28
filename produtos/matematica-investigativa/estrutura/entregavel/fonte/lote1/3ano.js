// Lote 1 — 3º ano (10 missões). Cada problema: [enunciado, resposta, cálculo, conta, erro comum, cálculo do erro, explicação do erro]
// Níveis: [N1 ★ apoio, N2 ★★ esperado, N3 ★★★ desafio]. A missão 03 (Horta) segue o mockup do dono, palavra por palavra no N2.
const { R, min, hm, h, fmtNum: N } = require('./util');

module.exports = [
  {
    n: 1, titulo: 'O Sumiço das Figurinhas', palavra: 'COLA',
    abertura: 'A turma do 3º ano está completando um álbum coletivo de figurinhas. Na segunda-feira, a contagem não bateu com o caderno de controle. Será que alguma figurinha sumiu? Vamos investigar!',
    solucao: 'Nenhuma figurinha sumiu: as repetidas foram separadas para a troca com outras turmas, e as novas ainda estavam soltas, esperando a COLA.',
    etapas: [
      { titulo: 'A contagem do álbum', bncc: 'EF03MA06', niveis: [
        ['Na semana passada, a turma colou 23 figurinhas. Nesta semana, colou mais 14. Quantas figurinhas foram coladas nas duas semanas?', '37', () => String(23 + 14), '23 + 14 = 37', '9', () => String(23 - 14), 'tirou em vez de juntar (23 − 14).'],
        ['O álbum tinha 148 figurinhas coladas. Nesta semana, a turma colou mais 36. Quantas figurinhas o álbum tem agora?', '184', () => String(148 + 36), '148 + 36 = 184', '174', () => String(148 + 36 - 10), 'esqueceu o “vai um” das unidades (8 + 6 = 14).'],
        ['O álbum tinha 148 figurinhas. Na segunda, a turma colou 36 e, na terça, mais 27. Quantas figurinhas o álbum tem agora?', '211', () => String(148 + 36 + 27), '148 + 36 = 184 · 184 + 27 = 211', '201', () => String(148 + 36 + 27 - 10), 'esqueceu o “vai um” na segunda soma (4 + 7 = 11).'],
      ] },
      { titulo: 'Quantas faltam?', bncc: 'EF03MA06', niveis: [
        ['O álbum completo tem 50 figurinhas. A turma já tem 37. Quantas faltam para completar?', '13', () => String(50 - 37), '50 − 37 = 13', '87', () => String(50 + 37), 'somou em vez de completar.'],
        ['O álbum completo tem 250 figurinhas. Com 184 coladas, quantas faltam para completar?', '66', () => String(250 - 184), '250 − 184 = 66', '134', () => String(100 * (2 - 1) + 10 * (8 - 5) + (4 - 0)), 'tirou o menor algarismo do maior em cada coluna, sem desagrupar.'],
        ['O álbum completo tem 300 figurinhas. Já há 211 coladas e 15 estão no envelope, esperando para colar. Quantas figurinhas ainda faltam conseguir?', '74', () => String(300 - 211 - 15), '211 + 15 = 226 · 300 − 226 = 74', '89', () => String(300 - 211), 'esqueceu as 15 do envelope.'],
      ] },
      { titulo: 'Os pacotinhos', bncc: 'EF03MA07', niveis: [
        ['5 alunos trouxeram 2 pacotinhos cada um. Quantos pacotinhos foram trazidos?', '10', () => String(5 * 2), '5 × 2 = 10, ou 2 + 2 + 2 + 2 + 2 = 10', '7', () => String(5 + 2), 'somou 5 + 2 em vez de juntar 5 vezes o 2.'],
        ['Cada pacotinho tem 5 figurinhas. A turma abriu 8 pacotinhos. Quantas figurinhas saíram?', '40', () => String(8 * 5), '8 × 5 = 40', '13', () => String(8 + 5), 'somou 8 + 5.'],
        ['Cada pacotinho tem 5 figurinhas. 6 alunos trouxeram 3 pacotinhos cada um. Quantas figurinhas saíram?', '90', () => String(6 * 3 * 5), '6 × 3 = 18 pacotinhos · 18 × 5 = 90', '30', () => String(6 * 5), 'esqueceu que cada aluno trouxe 3 pacotinhos (6 × 5).'],
      ] },
      { titulo: 'As repetidas', bncc: 'EF03MA08', niveis: [
        ['As 15 figurinhas repetidas serão divididas igualmente entre 3 grupos. Quantas cada grupo recebe?', '5', () => String(15 / 3), '15 ÷ 3 = 5', '12', () => String(15 - 3), 'tirou 3 em vez de repartir.'],
        ['As 40 figurinhas repetidas serão divididas igualmente entre 5 grupos. Quantas cada grupo recebe?', '8', () => String(40 / 5), '40 ÷ 5 = 8', '35', () => String(40 - 5), 'tirou 5 em vez de repartir.'],
        ['Das 90 figurinhas, 18 eram repetidas. As repetidas foram divididas igualmente entre 6 grupos para trocar com outras turmas. Quantas cada grupo recebeu?', '3', () => String(18 / 6), '18 ÷ 6 = 3', '15', () => String(90 / 6), 'dividiu todas as 90 figurinhas, e não só as repetidas.'],
      ] },
    ],
  },
  {
    n: 2, titulo: 'O Mistério do Lanche Trocado', palavra: 'SUCO',
    abertura: 'Na hora do recreio, algumas lancheiras sumiram da cantina! A merendeira anotou tudo, mas as contas ficaram misturadas. Ajude a descobrir onde elas foram parar!',
    solucao: 'As lancheiras “sumidas” estavam na geladeira da cantina, junto com as caixas de SUCO: a merendeira guardou para o lanche não estragar.',
    etapas: [
      { titulo: 'A cantina', bncc: 'EF03MA07', niveis: [
        ['Na prateleira, há 3 fileiras com 4 lancheiras em cada uma. Quantas lancheiras há?', '12', () => String(3 * 4), '3 × 4 = 12', '7', () => String(3 + 4), 'somou 3 + 4.'],
        ['A cantina preparou 6 bandejas com 5 sanduíches em cada uma. Quantos sanduíches?', '30', () => String(6 * 5), '6 × 5 = 30', '11', () => String(6 + 5), 'somou 6 + 5.'],
        ['A cantina preparou 7 bandejas com 5 sanduíches e mais 4 sanduíches avulsos. Quantos sanduíches ao todo?', '39', () => String(7 * 5 + 4), '7 × 5 = 35 · 35 + 4 = 39', '35', () => String(7 * 5), 'esqueceu os 4 sanduíches avulsos.'],
      ] },
      { titulo: 'As caixas de suco', bncc: 'EF03MA07', niveis: [
        ['Cada caixa tem 10 sucos. Chegaram 4 caixas. Quantos sucos chegaram?', '40', () => String(4 * 10), '4 × 10 = 40', '14', () => String(4 + 10), 'somou 4 + 10.'],
        ['Chegaram 7 caixas com 10 sucos cada uma. 25 sucos já foram entregues. Quantos sobraram?', '45', () => String(7 * 10 - 25), '7 × 10 = 70 · 70 − 25 = 45', '95', () => String(7 * 10 + 25), 'somou os entregues em vez de tirar.'],
        ['Chegaram 9 caixas com 10 sucos e 2 caixas com 5 sucos. 38 sucos já foram entregues. Quantos sobraram?', '62', () => String(9 * 10 + 2 * 5 - 38), '90 + 10 = 100 · 100 − 38 = 62', '52', () => String(9 * 10 - 38), 'esqueceu as 2 caixas de 5 sucos.'],
      ] },
      { titulo: 'As lancheiras devolvidas', bncc: 'EF03MA06', niveis: [
        ['A turma tem 28 alunos. 19 já pegaram a lancheira. Quantos ainda faltam pegar?', '9', () => String(28 - 19), '28 − 19 = 9', '47', () => String(28 + 19), 'somou em vez de tirar.'],
        ['Havia 132 lancheiras na cantina. 117 foram devolvidas. Quantas faltam devolver?', '15', () => String(132 - 117), '132 − 117 = 15', '25', () => String(10 * (3 - 1) + (7 - 2)), 'tirou o menor algarismo do maior em cada coluna, sem desagrupar.'],
        ['Havia 132 lancheiras. 117 foram devolvidas no recreio e 9 depois da aula. Quantas ainda faltam?', '6', () => String(132 - 117 - 9), '117 + 9 = 126 · 132 − 126 = 6', '15', () => String(132 - 117), 'esqueceu as 9 devolvidas depois da aula.'],
      ] },
      { titulo: 'A merenda', bncc: 'EF03MA08', niveis: [
        ['15 biscoitos serão divididos igualmente em 5 lancheiras. Quantos biscoitos em cada?', '3', () => String(15 / 5), '15 ÷ 5 = 3', '10', () => String(15 - 5), 'tirou 5 em vez de repartir.'],
        ['Sobraram 24 biscoitos, divididos igualmente entre 4 mesas. Quantos para cada mesa?', '6', () => String(24 / 4), '24 ÷ 4 = 6', '20', () => String(24 - 4), 'tirou 4 em vez de repartir.'],
        ['Sobraram 50 biscoitos. 8 foram para a professora e o resto foi dividido igualmente entre 6 mesas. Quantos para cada mesa?', '7', () => String((50 - 8) / 6), '50 − 8 = 42 · 42 ÷ 6 = 7', '8', () => String(Math.floor(50 / 6)), 'dividiu os 50 sem tirar os 8 da professora.'],
      ] },
    ],
  },
  {
    n: 3, titulo: 'O Mistério da Horta', palavra: 'REGA', mockup: true,
    abertura: 'A turma da escola está cuidando da horta. Para organizar o plantio, eles precisaram distribuir as mudas em canteiros. Mas algo não está batendo nas anotações... Ajude a turma a descobrir o que aconteceu!',
    solucao: 'O que não batia era a REGA: a anotação de água era para um canteiro só, e as mudas dos outros canteiros murcharam. A turma corrigiu a escala de rega.',
    etapas: [
      { titulo: 'O plantio', bncc: 'EF03MA07', niveis: [
        ['Na horta, foram plantadas 3 fileiras com 5 mudas em cada uma. Quantas mudas foram plantadas ao todo?', '15', () => String(3 * 5), '3 × 5 = 15', '8', () => String(3 + 5), 'somou 3 + 5.'],
        ['Na horta, foram plantadas 4 fileiras com 6 mudas em cada uma. Quantas mudas foram plantadas ao todo?', '24', () => String(4 * 6), '4 × 6 = 24 (6 + 6 + 6 + 6)', '10', () => String(4 + 6), 'somou 4 + 6.'],
        ['Na horta, foram plantadas 4 fileiras com 6 mudas em cada uma e mais 2 fileiras com 5 mudas. Quantas mudas foram plantadas ao todo?', '34', () => String(4 * 6 + 2 * 5), '24 + 10 = 34', '24', () => String(4 * 6), 'esqueceu as 2 fileiras de 5 mudas.'],
      ] },
      { titulo: 'A doação', bncc: 'EF03MA06', niveis: [
        ['Se 6 dessas mudas foram doadas para outra turma, quantas mudas vão ficar na horta?', '9', () => String(15 - 6), '15 − 6 = 9', '21', () => String(15 + 6), 'somou as mudas doadas.'],
        ['Se 12 dessas mudas foram doadas para outra turma, quantas mudas vão ficar na horta?', '12', () => String(24 - 12), '24 − 12 = 12', '36', () => String(24 + 12), 'somou as mudas doadas.'],
        ['Se 12 dessas mudas foram doadas e 5 não brotaram, quantas mudas vão ficar na horta?', '17', () => String(34 - 12 - 5), '34 − 12 = 22 · 22 − 5 = 17', '22', () => String(34 - 12), 'esqueceu as 5 que não brotaram.'],
      ] },
      { titulo: 'Os canteiros', bncc: 'EF03MA08', niveis: [
        ['As 9 mudas que ficaram vão ser divididas igualmente em 3 canteiros. Quantas mudas em cada canteiro?', '3', () => String(9 / 3), '9 ÷ 3 = 3', '6', () => String(9 - 3), 'tirou 3 em vez de repartir.'],
        ['As 12 mudas que ficaram vão ser divididas igualmente em 4 canteiros. Quantas mudas em cada canteiro?', '3', () => String(12 / 4), '12 ÷ 4 = 3', '8', () => String(12 - 4), 'tirou 4 em vez de repartir.'],
        ['A turma comprou mais 3 mudas e juntou com as 17 que ficaram. Depois, dividiu tudo igualmente em 5 canteiros. Quantas mudas em cada canteiro?', '4', () => String((17 + 3) / 5), '17 + 3 = 20 · 20 ÷ 5 = 4', '3', () => String(Math.floor(17 / 5)), 'esqueceu as 3 mudas compradas.'],
      ] },
      { titulo: 'A rega', bncc: 'EF03MA20', niveis: [
        ['Cada canteiro precisa de 4 regadores de água por dia. Quantos regadores para os 3 canteiros?', '12', () => String(3 * 4), '3 × 4 = 12', '7', () => String(3 + 4), 'somou 3 + 4.'],
        ['Cada canteiro precisa de 5 litros de água por dia. Quantos litros para os 4 canteiros?', '20', () => String(4 * 5), '4 × 5 = 20', '9', () => String(4 + 5), 'somou 4 + 5.'],
        ['Cada canteiro precisa de 5 litros de água por dia. Quantos litros para os 5 canteiros durante 2 dias?', '50', () => String(5 * 5 * 2), '5 × 5 = 25 · 25 × 2 = 50', '25', () => String(5 * 5), 'esqueceu os 2 dias.'],
      ] },
    ],
  },
  {
    n: 4, titulo: 'O Segredo da Biblioteca', palavra: 'CAPA',
    abertura: 'Os livros da biblioteca foram guardados fora de ordem, e a bibliotecária não acha o livro do mês. Cada livro tem um número na lombada. Vamos colocar tudo em ordem!',
    solucao: 'O livro do mês estava com a CAPA trocada e foi guardado com o número errado na estante.',
    etapas: [
      { titulo: 'O número da lombada', bncc: 'EF03MA01', niveis: [
        ['O livro tem o número “trezentos e vinte e cinco”. Escreva esse número com algarismos.', '325', () => String(300 + 20 + 5), '300 + 20 + 5 = 325', '30025', () => '300' + '25', 'escreveu “300” e “25” lado a lado.'],
        ['Na lombada está escrito: 1 milhar, 4 centenas, 0 dezenas e 7 unidades. Que número é?', '1407', () => String(1000 + 400 + 0 + 7), '1.000 + 400 + 7 = 1407', '147', () => '1' + '4' + '7', 'esqueceu o zero das dezenas.'],
        ['Na lombada está escrito: 2 milhares, 3 centenas, 15 dezenas e 4 unidades. Que número é?', '2454', () => String(2000 + 300 + 150 + 4), '2.000 + 300 + 150 + 4 = 2454', '23154', () => '2' + '3' + '15' + '4', 'escreveu os números lado a lado, sem trocar 15 dezenas por 1 centena e 5 dezenas.'],
      ] },
      { titulo: 'A ordem na estante', bncc: 'EF03MA01', niveis: [
        ['Qual é o maior número: 325, 352 ou 235?', '352', () => String(Math.max(325, 352, 235)), 'as centenas empatam (3); nas dezenas, 5 > 2', '235', () => '235', 'escolheu o menor número.'],
        ['Os livros 1407, 1470, 1047 e 1740 serão guardados do menor para o maior. Qual livro fica em 3º lugar?', '1470', () => String([1407, 1470, 1047, 1740].sort((a, b) => a - b)[2]), 'ordem: 1047, 1407, 1470, 1740', '1740', () => '1740', 'pegou o último lugar (o maior).'],
        ['Os livros 2454, 2545, 2445, 2554 e 2455 serão guardados do menor para o maior. Qual livro fica em 4º lugar?', '2545', () => String([2454, 2545, 2445, 2554, 2455].sort((a, b) => a - b)[3]), 'ordem: 2445, 2454, 2455, 2545, 2554', '2455', () => '2455', 'contou o 3º lugar.'],
      ] },
      { titulo: 'Os livros novos', bncc: 'EF03MA06', niveis: [
        ['A estante A tem 120 livros e a estante B, 45. Quantos livros há nas duas?', '165', () => String(120 + 45), '120 + 45 = 165', '75', () => String(120 - 45), 'tirou em vez de juntar.'],
        ['A biblioteca tinha 1.380 livros e recebeu 250 de doação. Quantos livros tem agora?', '1.630', () => N(1380 + 250), '1.380 + 250 = 1.630', '1.130', () => N(1380 - 250), 'tirou em vez de juntar.'],
        ['A biblioteca tinha 2.380 livros, recebeu 350 de doação e emprestou 129. Quantos livros estão na biblioteca agora?', '2.601', () => N(2380 + 350 - 129), '2.380 + 350 = 2.730 · 2.730 − 129 = 2.601', '2.730', () => N(2380 + 350), 'esqueceu os 129 emprestados.'],
      ] },
      { titulo: 'A numeração das estantes', bncc: 'EF03MA10', niveis: [
        ['As estantes estão numeradas 5, 10, 15, 20... Qual é o número da próxima?', '25', () => String(20 + 5), 'a sequência aumenta de 5 em 5', '21', () => String(20 + 1), 'somou 1 em vez de 5.'],
        ['As prateleiras seguem 100, 125, 150, 175... Qual é o número da próxima?', '200', () => String(175 + 25), 'a sequência aumenta de 25 em 25', '176', () => String(175 + 1), 'somou 1 em vez de 25.'],
        ['As caixas seguem 2400, 2350, 2300, 2250... Qual é o número da caixa que vem 2 depois da 2250?', '2150', () => String(2250 - 50 - 50), 'diminui de 50 em 50: 2200, 2150', '2200', () => String(2250 - 50), 'contou só uma caixa depois.'],
      ] },
    ],
  },
  {
    n: 5, titulo: 'O Caso do Relógio Parado', palavra: 'HORA',
    abertura: 'O relógio da sala parou, e ninguém sabe a que horas começou o recreio nem quanto tempo ele durou. Vamos investigar os horários!',
    solucao: 'O relógio parou por falta de pilha e marcava a HORA errada. Com as contas, a turma descobriu os horários certos do recreio.',
    etapas: [
      { titulo: 'O relógio da sala', bncc: 'EF03MA23', niveis: [
        ['No relógio de ponteiros, o ponteiro pequeno está no 9 e o grande, no 12. Que horas são?', '9h00', () => hm(h(9)), 'ponteiro pequeno no 9 e grande no 12: 9 horas exatas', '12h45', () => hm(h(12, 45)), 'trocou os ponteiros.'],
        ['O ponteiro pequeno está entre o 9 e o 10, e o grande está no 6. Que horas são?', '9h30', () => hm(h(9, 30)), 'passou das 9; grande no 6 = 30 minutos', '10h30', () => hm(h(10, 30)), 'leu o número seguinte do ponteiro pequeno.'],
        ['O relógio digital marcava 9:30 quando parou. Ele estava 20 minutos atrasado. Que horas eram de verdade?', '9h50', () => hm(h(9, 30) + 20), '9h30 + 20 min = 9h50', '9h10', () => hm(h(9, 30) - 20), 'tirou 20 minutos em vez de somar.'],
      ] },
      { titulo: 'Quanto durou o recreio', bncc: 'EF03MA22', niveis: [
        ['O recreio começou às 10h00 e terminou às 10h20. Quanto tempo durou?', '20 min', () => min(h(10, 20) - h(10)), 'de 10h00 a 10h20 = 20 minutos', '10h20', () => hm(h(10, 20)), 'respondeu o horário do fim, e não quanto tempo durou.'],
        ['O recreio começou às 9h45 e terminou às 10h05. Quanto tempo durou?', '20 min', () => min(h(10, 5) - h(9, 45)), 'de 9h45 a 10h00 = 15 min · mais 5 min = 20 min', '60 min', () => min(1005 - 945), 'fez 1005 − 945, como se a hora tivesse 100 minutos.'],
        ['O recreio começou às 9h15 e durou 20 minutos. A que horas terminou?', '9h35', () => hm(h(9, 15) + 20), '9h15 + 20 min = 9h35', '8h55', () => hm(h(9, 15) - 20), 'tirou 20 minutos em vez de somar.'],
      ] },
      { titulo: 'As aulas antes do recreio', bncc: 'EF03MA22', niveis: [
        ['Cada atividade dura 20 minutos. Quanto tempo duram 2 atividades?', '40 min', () => min(2 * 20), '20 + 20 = 40 min', '22 min', () => min(20 + 2), 'somou 20 + 2.'],
        ['Cada aula dura 50 minutos. Quanto tempo duram 2 aulas, em horas e minutos?', '1h40', () => hm(2 * 50), '50 + 50 = 100 min = 1 h 40 min', '1h00', () => hm(60), 'achou que 100 minutos são 1 hora.'],
        ['Cada aula dura 35 minutos. Antes do recreio há 3 aulas. Começando às 7h30, a que horas termina a 3ª aula?', '9h15', () => hm(h(7, 30) + 3 * 35), '3 × 35 = 105 min = 1h45 · 7h30 + 1h45 = 9h15', '8h35', () => hm(h(7, 30) + 65), 'achou que 105 minutos são 1 hora e 5 minutos.'],
      ] },
      { titulo: 'O tempo parado', bncc: 'EF03MA22', niveis: [
        ['O relógio ficou parado das 8h00 até as 11h00. Quantas horas ficou parado?', '3 h', () => (11 - 8) + ' h', '11 − 8 = 3 horas', '19 h', () => (11 + 8) + ' h', 'somou as horas.'],
        ['O relógio parou às 9h30 e só foi consertado às 14h30. Quantas horas ficou parado?', '5 h', () => (h(14, 30) - h(9, 30)) / 60 + ' h', 'de 9h30 a 14h30 = 5 horas', '4 h', () => '4 h', 'errou a contagem nos dedos (contou 10, 11, 12, 13).'],
        ['O relógio parou às 9h45 e foi consertado às 13h15. Quanto tempo ficou parado?', '3h30', () => hm(h(13, 15) - h(9, 45)), '9h45 até 13h45 = 4 h; menos 30 min = 3h30', '3h70', () => '3h' + (1315 - 945 - 300), 'fez 1315 − 945 = 370, como se a hora tivesse 100 minutos.'],
      ] },
    ],
  },
  {
    n: 6, titulo: 'O Mistério da Feirinha de Trocas', palavra: 'NOTA',
    abertura: 'Na feirinha de trocas da escola, cada objeto tem um preço de mentirinha em reais. No fim do dia, o caixa não fechou. Vamos conferir as contas!',
    solucao: 'O caixa estava certo: uma NOTA de R$ 10 ficou presa dentro do caderno de recibos.',
    etapas: [
      { titulo: 'Os pagamentos', bncc: 'EF03MA24', niveis: [
        ['Lia pagou com 2 notas de R$ 5 e 3 moedas de R$ 1. Quanto ela pagou?', 'R$ 13', () => R(2 * 5 + 3), '10 + 3 = 13 reais', 'R$ 5', () => R(2 + 3), 'contou a quantidade de notas e moedas, não o valor.'],
        ['Theo pagou com 1 nota de R$ 20, 2 notas de R$ 5 e 4 moedas de R$ 1. Quanto ele pagou?', 'R$ 34', () => R(20 + 2 * 5 + 4), '20 + 10 + 4 = 34 reais', 'R$ 7', () => R(1 + 2 + 4), 'contou a quantidade de notas e moedas, não o valor.'],
        ['Bia pagou com 1 nota de R$ 50, 1 nota de R$ 10, 3 notas de R$ 2 e 2 moedas de 50 centavos. Quanto ela pagou?', 'R$ 67', () => R(50 + 10 + 3 * 2 + 1), '50 + 10 + 6 + 1 = 67 reais (2 moedas de 50 centavos = 1 real)', 'R$ 166', () => R(50 + 10 + 6 + 100), 'contou as moedas de 50 centavos como 50 reais.'],
      ] },
      { titulo: 'O troco', bncc: 'EF03MA24', niveis: [
        ['Um carrinho custa R$ 7. Lia pagou com uma nota de R$ 10. Qual é o troco?', 'R$ 3', () => R(10 - 7), '10 − 7 = 3 reais', 'R$ 17', () => R(10 + 7), 'somou em vez de tirar.'],
        ['Um jogo custa R$ 26. Theo pagou com uma nota de R$ 50. Qual é o troco?', 'R$ 24', () => R(50 - 26), '50 − 26 = 24 reais', 'R$ 36', () => R(10 * (5 - 2) + (6 - 0)), 'tirou o menor algarismo do maior em cada coluna, sem desagrupar.'],
        ['Um livro custa R$ 18 e um quebra-cabeça, R$ 25. Bia pagou os dois com uma nota de R$ 50. Qual é o troco?', 'R$ 7', () => R(50 - 18 - 25), '18 + 25 = 43 · 50 − 43 = 7 reais', 'R$ 32', () => R(50 - 18), 'esqueceu o quebra-cabeça.'],
      ] },
      { titulo: 'As trocas de dinheiro', bncc: 'EF03MA24', niveis: [
        ['Quantas moedas de R$ 1 valem o mesmo que uma nota de R$ 10?', '10', () => String(10 / 1), '10 ÷ 1 = 10 moedas', '1', () => '1', 'achou que uma nota troca por uma moeda só.'],
        ['Quantas notas de R$ 2 trocam por uma nota de R$ 20?', '10', () => String(20 / 2), '20 ÷ 2 = 10 notas', '18', () => String(20 - 2), 'tirou 2 em vez de repartir.'],
        ['Quantas moedas de 50 centavos são necessárias para trocar uma nota de R$ 5?', '10', () => String(5 * 2), 'cada real = 2 moedas de 50 centavos · 5 × 2 = 10', '5', () => '5', 'achou que cada moeda de 50 centavos vale 1 real.'],
      ] },
      { titulo: 'O caixa da feirinha', bncc: 'EF03MA06', niveis: [
        ['O caixa começou com R$ 20 e recebeu R$ 13. Quanto deveria ter?', 'R$ 33', () => R(20 + 13), '20 + 13 = 33 reais', 'R$ 7', () => R(20 - 13), 'tirou em vez de juntar.'],
        ['O caixa começou com R$ 40, recebeu R$ 34 e deu R$ 24 de troco. Quanto deveria ter?', 'R$ 50', () => R(40 + 34 - 24), '40 + 34 = 74 · 74 − 24 = 50 reais', 'R$ 98', () => R(40 + 34 + 24), 'somou o troco em vez de tirar.'],
        ['O caixa começou com R$ 30. Recebeu R$ 67 e R$ 43, e deu R$ 7 de troco. Quanto deveria ter?', 'R$ 133', () => R(30 + 67 + 43 - 7), '30 + 67 + 43 = 140 · 140 − 7 = 133 reais', 'R$ 147', () => R(30 + 67 + 43 + 7), 'somou o troco em vez de tirar.'],
      ] },
    ],
  },
  {
    n: 7, titulo: 'O Enigma da Gincana', palavra: 'AZUL',
    figura: 'Gráfico de colunas “Pontos da gincana”: Azul 8 · Verde 12 · Amarela 6 · Vermelha 10.',
    abertura: 'A chuva molhou o cartaz da gincana, e só sobrou o gráfico com os pontos das equipes. Falta a última prova, a corrida do saco. Quem ganhou? Os números guardam a resposta!',
    solucao: 'Com os pontos da corrida do saco, a equipe AZUL virou o jogo e venceu a gincana.',
    etapas: [
      { titulo: 'O gráfico molhado', bncc: 'EF03MA27', niveis: [
        ['Quantos pontos fez a equipe Verde?', '12', () => '12', 'leitura da coluna Verde: 12', '10', () => '10', 'leu a coluna da Vermelha.'],
        ['Quantos pontos as 4 equipes fizeram juntas?', '36', () => String(8 + 12 + 6 + 10), '8 + 12 + 6 + 10 = 36', '26', () => String(8 + 12 + 6), 'esqueceu uma equipe.'],
        ['Juntando Azul e Amarela, quantos pontos elas fizeram a menos que Verde e Vermelha juntas?', '8', () => String((12 + 10) - (8 + 6)), '12 + 10 = 22 · 8 + 6 = 14 · 22 − 14 = 8', '22', () => String(12 + 10), 'calculou só Verde + Vermelha.'],
      ] },
      { titulo: 'Quem está na frente', bncc: 'EF03MA26', niveis: [
        ['Quantos pontos a Verde fez a mais que a Amarela?', '6', () => String(12 - 6), '12 − 6 = 6', '18', () => String(12 + 6), 'somou em vez de comparar.'],
        ['Quantos pontos a Vermelha fez a mais que a Azul?', '2', () => String(10 - 8), '10 − 8 = 2', '18', () => String(10 + 8), 'somou em vez de comparar.'],
        ['Se a Amarela ganhar 5 pontos, quantos pontos ela ainda ficará atrás da Verde?', '1', () => String(12 - (6 + 5)), '6 + 5 = 11 · 12 − 11 = 1', '6', () => String(12 - 6), 'esqueceu os 5 pontos novos.'],
      ] },
      { titulo: 'A corrida do saco', bncc: 'EF03MA07', niveis: [
        ['Cada vitória na corrida vale 5 pontos. A Azul venceu 3 vezes. Quantos pontos ganhou?', '15', () => String(3 * 5), '3 × 5 = 15', '8', () => String(3 + 5), 'somou 3 + 5.'],
        ['Cada vitória vale 3 pontos. A Azul venceu 4 vezes e a Verde, 1 vez. Quantos pontos a Azul ganhou a mais que a Verde?', '9', () => String(4 * 3 - 1 * 3), '12 − 3 = 9', '3', () => String(4 - 1), 'comparou o número de vitórias, sem os pontos.'],
        ['Cada vitória vale 3 pontos e cada empate, 1 ponto. A Azul venceu 4 vezes e empatou 2. Quantos pontos ganhou?', '14', () => String(4 * 3 + 2 * 1), '12 + 2 = 14', '12', () => String(4 * 3), 'esqueceu os empates.'],
      ] },
      { titulo: 'O placar final', bncc: 'EF03MA06', niveis: [
        ['A Azul tinha 8 pontos e ganhou 15 na corrida. Com quantos pontos terminou?', '23', () => String(8 + 15), '8 + 15 = 23', '7', () => String(15 - 8), 'tirou em vez de juntar.'],
        ['A Azul tinha 8 pontos e ganhou 12; a Verde tinha 12 e ganhou 3. Por quantos pontos a Azul terminou na frente?', '5', () => String((8 + 12) - (12 + 3)), 'Azul 20 · Verde 15 · 20 − 15 = 5', '35', () => String(8 + 12 + 12 + 3), 'somou tudo.'],
        ['A Azul tinha 8 pontos e ganhou 14; a Verde tinha 12 e ganhou 7. Por quantos pontos a Azul venceu?', '3', () => String((8 + 14) - (12 + 7)), 'Azul 22 · Verde 19 · 22 − 19 = 3', '41', () => String(8 + 14 + 12 + 7), 'somou tudo.'],
      ] },
    ],
  },
  {
    n: 8, titulo: 'O Mistério da Receita de Bolo', palavra: 'OVOS',
    abertura: 'O bolo da festa da turma saiu solado! A merendeira acha que alguém mediu errado os ingredientes. Vamos refazer as contas da receita.',
    solucao: 'Na fornada da festa, a receita foi feita pela metade, mas os OVOS não: alguém pôs os ovos da receita inteira, e o bolo solou.',
    etapas: [
      { titulo: 'Os ovos', bncc: 'EF03MA09', niveis: [
        ['A receita pede 4 ovos. Para meia receita, quantos ovos?', '2', () => String(4 / 2), 'metade de 4 = 2', '8', () => String(4 * 2), 'dobrou em vez de dividir.'],
        ['A receita pede 6 ovos. Para a metade da receita, quantos ovos?', '3', () => String(6 / 2), 'metade de 6 = 3', '12', () => String(6 * 2), 'dobrou em vez de dividir.'],
        ['A receita grande pede 12 ovos. A turma fez a terça parte da receita. Quantos ovos?', '4', () => String(12 / 3), 'terça parte de 12 = 12 ÷ 3 = 4', '36', () => String(12 * 3), 'multiplicou por 3 em vez de dividir.'],
      ] },
      { titulo: 'O leite', bncc: 'EF03MA20', niveis: [
        ['Cada receita usa 1 litro de leite. Quantos litros para 3 receitas?', '3', () => String(3 * 1), '3 × 1 = 3 litros', '4', () => String(3 + 1), 'somou 3 + 1.'],
        ['Cada receita usa meio litro de leite. Quantos litros para 4 receitas?', '2', () => String(4 / 2), '4 meios litros = 2 litros', '4', () => '4', 'contou 1 litro por receita.'],
        ['Cada receita usa meio litro de leite. A turma fez 6 receitas e já tinha 1 litro. Quantos litros precisa comprar?', '2', () => String(6 / 2 - 1), '6 meios = 3 litros · 3 − 1 = 2', '3', () => String(6 / 2), 'esqueceu o litro que já tinha.'],
      ] },
      { titulo: 'A farinha', bncc: 'EF03MA20', niveis: [
        ['O pacote de farinha tem 1 quilo (1.000 gramas). A turma usou metade. Quantos gramas sobraram?', '500', () => String(1000 / 2), 'metade de 1.000 = 500 g', '50', () => '50', 'achou que metade de 1 quilo são 50 gramas.'],
        ['O pacote tem 1.000 gramas. A receita usou 250 gramas. Quantos gramas sobraram?', '750', () => String(1000 - 250), '1.000 − 250 = 750 g', '1.250', () => N(1000 + 250), 'somou em vez de tirar.'],
        ['O pacote tem 1.000 gramas. Foram feitas 2 receitas de 250 gramas e uma de 300 gramas. Quantos gramas sobraram?', '200', () => String(1000 - 2 * 250 - 300), '500 + 300 = 800 · 1.000 − 800 = 200 g', '450', () => String(1000 - 250 - 300), 'contou só uma receita de 250 g.'],
      ] },
      { titulo: 'O forno', bncc: 'EF03MA22', niveis: [
        ['O bolo fica 30 minutos no forno. Entrou às 9h00. A que horas sai?', '9h30', () => hm(h(9) + 30), '9h00 + 30 min = 9h30', '10h00', () => hm(h(10)), 'somou 1 hora.'],
        ['O bolo fica 40 minutos no forno. Entrou às 9h30. A que horas sai?', '10h10', () => hm(h(9, 30) + 40), '9h30 + 30 = 10h00 · + 10 = 10h10', '9h70', () => `9h${30 + 40}`, 'somou 30 + 40 = 70 minutos e não trocou 60 minutos por 1 hora.'],
        ['Cada fornada leva 35 minutos. A turma assou 2 fornadas seguidas, começando às 9h40. A que horas terminou?', '10h50', () => hm(h(9, 40) + 70), '2 × 35 = 70 min · 9h40 + 70 min = 10h50', '10h15', () => hm(h(9, 40) + 35), 'contou só uma fornada.'],
      ] },
    ],
  },
  {
    n: 9, titulo: 'O Caso da Fita Métrica Sumida', palavra: 'FITA',
    abertura: 'A turma vai enfeitar a sala para a festa, mas a fita métrica sumiu e a decoração ficou curta. Vamos medir tudo de novo!',
    solucao: 'A FITA métrica estava enrolada dentro da caixa de enfeites. Com as medidas certas, a decoração ficou completa.',
    etapas: [
      { titulo: 'Metros e centímetros', bncc: 'EF03MA19', niveis: [
        ['A mesa tem 1 metro de comprimento. Quantos centímetros são?', '100', () => String(1 * 100), '1 m = 100 cm', '10', () => '10', 'achou que 1 metro tem 10 centímetros.'],
        ['A janela tem 2 metros e 30 centímetros. Quantos centímetros são ao todo?', '230', () => String(2 * 100 + 30), '200 + 30 = 230 cm', '32', () => String(2 + 30), 'somou 2 + 30 sem trocar os metros por centímetros.'],
        ['O mural tem 3 metros e 5 centímetros. Quantos centímetros são ao todo?', '305', () => String(3 * 100 + 5), '300 + 5 = 305 cm', '350', () => '350', 'escreveu 3 e 50, trocando 5 centímetros por 50.'],
      ] },
      { titulo: 'A fita que falta', bncc: 'EF03MA19', niveis: [
        ['A turma tem uma fita de 40 cm e outra de 35 cm. Juntas, quantos centímetros?', '75', () => String(40 + 35), '40 + 35 = 75 cm', '5', () => String(40 - 35), 'tirou em vez de juntar.'],
        ['Para enfeitar a porta, são necessários 230 cm de fita. A turma tem 180 cm. Quantos centímetros faltam?', '50', () => String(230 - 180), '230 − 180 = 50 cm', '150', () => String(100 * (2 - 1) + 10 * (8 - 3) + 0), 'tirou o menor algarismo do maior em cada coluna, sem desagrupar.'],
        ['A janela tem 230 cm e o mural, 305 cm. A turma tem 4 metros de fita. Quantos centímetros faltam para enfeitar os dois?', '135', () => String(230 + 305 - 400), '230 + 305 = 535 · 4 m = 400 cm · 535 − 400 = 135', '535', () => String(230 + 305), 'esqueceu a fita que a turma já tem.'],
      ] },
      { titulo: 'Os laços', bncc: 'EF03MA07', niveis: [
        ['Cada laço usa 10 cm de fita. Quantos centímetros para 5 laços?', '50', () => String(5 * 10), '5 × 10 = 50 cm', '15', () => String(5 + 10), 'somou 5 + 10.'],
        ['Cada laço usa 25 cm de fita. Quantos centímetros para 4 laços?', '100', () => String(4 * 25), '25 + 25 + 25 + 25 = 100 cm', '29', () => String(4 + 25), 'somou 4 + 25.'],
        ['Cada laço usa 25 cm de fita. Serão 2 laços na porta e 2 no mural. Quantos centímetros?', '100', () => String((2 + 2) * 25), '4 laços: 25 + 25 + 25 + 25 = 100 cm', '50', () => String(2 * 25), 'contou só os laços do mural.'],
      ] },
      { titulo: 'Os pedaços', bncc: 'EF03MA08', niveis: [
        ['Uma fita de 24 cm será cortada em 2 pedaços iguais. Quanto mede cada pedaço?', '12', () => String(24 / 2), '24 ÷ 2 = 12 cm', '22', () => String(24 - 2), 'tirou 2 em vez de repartir.'],
        ['Uma fita de 80 cm será cortada em 8 pedaços iguais. Quanto mede cada pedaço?', '10', () => String(80 / 8), '80 ÷ 8 = 10 cm', '72', () => String(80 - 8), 'tirou 8 em vez de repartir.'],
        ['A turma tem 2 metros de fita e vai cortar em 5 pedaços iguais. Quanto mede cada pedaço, em centímetros?', '40', () => String(200 / 5), '2 m = 200 cm · 200 ÷ 5 = 40 cm', '195', () => String(200 - 5), 'tirou 5 em vez de repartir.'],
      ] },
    ],
  },
  {
    n: 10, titulo: 'O Mistério da Excursão', palavra: 'MALA',
    abertura: 'A turma vai ao zoológico! Mas a lista de quem vai em cada transporte se perdeu. Vamos refazer as contas para ninguém ficar para trás.',
    solucao: 'A lista estava dentro da MALA da professora, no bagageiro do ônibus.',
    etapas: [
      { titulo: 'As vans', bncc: 'EF03MA08', niveis: [
        ['16 alunos vão em 2 vans, com o mesmo número de alunos em cada uma. Quantos alunos em cada van?', '8', () => String(16 / 2), '16 ÷ 2 = 8', '14', () => String(16 - 2), 'tirou 2 em vez de repartir.'],
        ['36 alunos serão divididos igualmente em 4 grupos de visita. Quantos alunos por grupo?', '9', () => String(36 / 4), '36 ÷ 4 = 9', '32', () => String(36 - 4), 'tirou 4 em vez de repartir.'],
        ['40 alunos e 5 adultos vão ao passeio, divididos igualmente em 5 vans. Quantas pessoas em cada van?', '9', () => String((40 + 5) / 5), '40 + 5 = 45 · 45 ÷ 5 = 9', '8', () => String(40 / 5), 'esqueceu os 5 adultos.'],
      ] },
      { titulo: 'Os bancos do lanche', bncc: 'EF03MA08', niveis: [
        ['Cada mesa do lanche tem 5 lugares. Quantas mesas para 20 alunos?', '4', () => String(20 / 5), '20 ÷ 5 = 4 mesas', '15', () => String(20 - 5), 'tirou 5 em vez de dividir.'],
        ['Cada banco tem 3 lugares. Quantos bancos para 24 alunos?', '8', () => String(24 / 3), '24 ÷ 3 = 8 bancos', '21', () => String(24 - 3), 'tirou 3 em vez de dividir.'],
        ['Cada banco tem 6 lugares. 40 alunos vão sentar. Quantos bancos são necessários, no mínimo?', '7', () => String(Math.ceil(40 / 6)), '40 ÷ 6 = 6 e sobram 4 alunos · eles precisam de mais 1 banco = 7', '6', () => String(Math.floor(40 / 6)), 'esqueceu os 4 alunos que sobram.'],
      ] },
      { titulo: 'Ingressos e lanches', bncc: 'EF03MA24', niveis: [
        ['Cada lanche custa R$ 3. Quanto custam 4 lanches?', 'R$ 12', () => R(4 * 3), '4 × 3 = 12 reais', 'R$ 7', () => R(4 + 3), 'somou 4 + 3.'],
        ['O ingresso custa R$ 5. Quanto custam os ingressos de 10 alunos?', 'R$ 50', () => R(10 * 5), '10 × 5 = 50 reais', 'R$ 15', () => R(10 + 5), 'somou 10 + 5.'],
        ['O ingresso custa R$ 5 e o lanche, R$ 4. Quanto um grupo de 10 alunos vai gastar com ingresso e lanche?', 'R$ 90', () => R(10 * (5 + 4)), '5 + 4 = 9 reais por aluno · 10 × 9 = 90 reais', 'R$ 50', () => R(10 * 5), 'esqueceu o lanche.'],
      ] },
      { titulo: 'A viagem', bncc: 'EF03MA22', niveis: [
        ['O ônibus sai às 8h00 e a viagem dura 1 hora. A que horas chega?', '9h00', () => hm(h(8) + 60), '8h00 + 1 h = 9h00', '8h01', () => hm(h(8) + 1), 'somou 1 minuto em vez de 1 hora.'],
        ['O ônibus sai às 7h45 e a viagem dura 1 hora e 30 minutos. A que horas chega?', '9h15', () => hm(h(7, 45) + 90), '7h45 + 1 h = 8h45 · + 30 min = 9h15', '8h75', () => `8h${45 + 30}`, 'somou 45 + 30 = 75 minutos e não trocou 60 minutos por 1 hora.'],
        ['A visita começa às 9h15 e dura 2 horas e 50 minutos. A que horas termina?', '12h05', () => hm(h(9, 15) + 170), '9h15 + 2 h = 11h15 · + 50 min = 12h05', '11h65', () => `11h${15 + 50}`, 'somou 15 + 50 = 65 minutos e não trocou 60 minutos por 1 hora.'],
      ] },
    ],
  },
];
