// Lote 1 — 5º ano (10 missões). Formato de cada problema: ver 3ano.js. Descritores da Matriz de Referência do Saeb (5º ano) quando se aplicam.
// A missão 04 (Cápsula do Tempo) segue o mockup do dono, palavra por palavra no N2 das etapas 1 e 2.
const { RS, dec, fmtNum } = require('./util');
const N = (n) => fmtNum(n);
const km = (x) => dec(x) + ' km';
const L = (x) => dec(x) + ' L';

module.exports = [
  {
    n: 1, titulo: 'O Mistério do Desconto Sumido', palavra: 'SELO',
    abertura: 'Na feira de livros, a loja anunciou descontos. Mas, no caixa, a conta da professora não bateu com o cartaz. Vamos conferir cada desconto!',
    solucao: 'O desconto valia só para os produtos com SELO amarelo, e o caixa não viu o selo. A professora recebeu a diferença de volta.',
    etapas: [
      { titulo: 'O valor do desconto', bncc: 'EF05MA06', saeb: 'D26', niveis: [
        ['Um livro custa R$ 40,00 e tem 10% de desconto. Quanto é o desconto?', 'R$ 4,00', () => RS(4000 / 10), '10% = 1/10 · 40,00 ÷ 10 = 4,00', 'R$ 30,00', () => RS(4000 - 1000), 'tirou 10 reais do preço.'],
        ['Um livro de R$ 60,00 tem 25% de desconto. Quanto é o desconto?', 'R$ 15,00', () => RS(6000 / 4), '25% = 1/4 · 60,00 ÷ 4 = 15,00', 'R$ 35,00', () => RS(6000 - 2500), 'tirou 25 reais do preço.'],
        ['Um livro de R$ 80,00 tem 75% de desconto. Quanto é o desconto?', 'R$ 60,00', () => RS((8000 / 4) * 3), '75% = 3/4 · 80,00 ÷ 4 = 20,00 · 3 × 20,00 = 60,00', 'R$ 5,00', () => RS(8000 - 7500), 'tirou 75 reais do preço.'],
      ] },
      { titulo: 'O preço com desconto', bncc: 'EF05MA06', saeb: 'D26', niveis: [
        ['Com o desconto de 10%, quanto passa a custar o livro de R$ 40,00?', 'R$ 36,00', () => RS(4000 - 400), '40,00 − 4,00 = 36,00', 'R$ 44,00', () => RS(4000 + 400), 'somou o desconto em vez de tirar.'],
        ['Com 25% de desconto, quanto passa a custar o livro de R$ 60,00?', 'R$ 45,00', () => RS(6000 - 1500), '60,00 − 15,00 = 45,00', 'R$ 75,00', () => RS(6000 + 1500), 'somou o desconto em vez de tirar.'],
        ['Um jogo de R$ 120,00 tem 25% de desconto. Quanto passa a custar?', 'R$ 90,00', () => RS(12000 - 12000 / 4), '120,00 ÷ 4 = 30,00 · 120,00 − 30,00 = 90,00', 'R$ 30,00', () => RS(12000 / 4), 'respondeu só o desconto.'],
      ] },
      { titulo: 'Qual loja é mais barata', bncc: 'EF05MA06', saeb: 'D26', niveis: [
        ['Loja A: caderno de R$ 20,00 com 50% de desconto. Loja B: o mesmo caderno por R$ 12,00. Qual é o menor preço?', 'R$ 10,00', () => RS(Math.min(2000 / 2, 1200)), '50% de 20,00 = 10,00 · 10,00 < 12,00', 'R$ 12,00', () => RS(1200), 'não calculou o desconto da loja A.'],
        ['Loja A: R$ 60,00 com 10% de desconto. Loja B: R$ 56,00 sem desconto. Qual é o menor preço?', 'R$ 54,00', () => RS(Math.min(6000 - 600, 5600)), '60,00 − 6,00 = 54,00 · 54,00 < 56,00', 'R$ 56,00', () => RS(5600), 'não calculou o desconto da loja A.'],
        ['Loja A: R$ 100,00 com 25% de desconto. Loja B: R$ 90,00 com 10% de desconto. Qual é o menor preço?', 'R$ 75,00', () => RS(Math.min(10000 - 2500, 9000 - 900)), 'A: 100,00 − 25,00 = 75,00 · B: 90,00 − 9,00 = 81,00', 'R$ 81,00', () => RS(9000 - 900), 'achou que o menor preço de etiqueta é sempre o mais barato.'],
      ] },
      { titulo: 'O que a professora pagou a mais', bncc: 'EF05MA06', saeb: 'D26', niveis: [
        ['O livro custava R$ 30,00 com 50% de desconto, mas ela pagou o preço cheio. Quanto pagou a mais?', 'R$ 15,00', () => RS(3000 / 2), '50% de 30,00 = 15,00', 'R$ 45,00', () => RS(3000 + 1500), 'somou o desconto ao preço.'],
        ['Ela comprou 2 livros de R$ 60,00 que tinham 25% de desconto, mas pagou o preço cheio. Quanto pagou a mais?', 'R$ 30,00', () => RS(2 * (6000 / 4)), '25% de 60,00 = 15,00 · 2 × 15,00 = 30,00', 'R$ 120,00', () => RS(2 * 6000), 'respondeu o preço cheio dos 2 livros.'],
        ['Ela comprou o livro de R$ 80,00 (75% de desconto) e um jogo de R$ 100,00 (25% de desconto), mas pagou tudo cheio. Quanto pagou a mais?', 'R$ 85,00', () => RS(6000 + 10000 / 4), '60,00 + 25,00 = 85,00', 'R$ 180,00', () => RS(8000 + 10000), 'somou os preços cheios.'],
      ] },
    ],
  },
  {
    n: 2, titulo: 'O Caso da Maratona da Escola', palavra: 'META',
    abertura: 'Na maratona da escola, as distâncias foram anotadas com vírgula. Agora há uma disputa: quem correu mais? E a escola bateu a meta? Vamos conferir as anotações.',
    solucao: 'A anotação errada estava na META: o cartaz dizia 5 km, mas a prova oficial tinha 6 km. Com a meta certa, a conta fecha.',
    etapas: [
      { titulo: 'Quem correu mais', bncc: 'EF05MA05', niveis: [
        ['Ana correu 1,5 km e Bia, 1,2 km. Quem correu mais? (responda a distância)', '1,5 km', () => km(Math.max(1.5, 1.2)), '5 décimos > 2 décimos', '1,2 km', () => km(1.2), 'escolheu a menor distância.'],
        ['Ana correu 2,45 km, Bia 2,5 km e Caio 2,405 km. Qual foi a maior distância?', '2,5 km', () => km(Math.max(2.45, 2.5, 2.405)), '2,5 = 2,500 > 2,450 > 2,405', '2,45 km', () => km(2.45), 'achou que 45 é maior que 5, sem olhar a casa dos décimos.'],
        ['As distâncias foram 3,08 km, 3,8 km, 3,75 km e 3,085 km. Qual é a segunda maior?', '3,75 km', () => km([3.08, 3.8, 3.75, 3.085].sort((a, b) => b - a)[1]), 'ordem: 3,8 · 3,75 · 3,085 · 3,08', '3,085 km', () => km(3.085), 'achou que o número com mais algarismos é maior.'],
      ] },
      { titulo: 'O total', bncc: 'EF05MA07', saeb: 'D25', niveis: [
        ['Ana correu 1,5 km de manhã e 1,5 km à tarde. Quanto correu ao todo?', '3 km', () => km(1.5 + 1.5), '1,5 + 1,5 = 3,0', '2,1 km', () => km(2.1), 'somou 5 + 5 = 10 e escreveu “,10” sem passar 1 inteiro para a frente.'],
        ['Bia correu 2,5 km e depois 1,75 km. Quanto correu ao todo?', '4,25 km', () => km(2.5 + 1.75), '2,50 + 1,75 = 4,25', '3,8 km', () => km(3.8), 'somou 5 + 75 = 80 sem alinhar a vírgula.'],
        ['Caio correu 2,405 km, depois 1,8 km e depois 0,95 km. Quanto correu ao todo?', '5,155 km', () => km(2.405 + 1.8 + 0.95), '2,405 + 1,800 + 0,950 = 5,155', '3,355 km', () => km(2.405 + 0.95), 'esqueceu o trecho de 1,8 km.'],
      ] },
      { titulo: 'Quanto faltou', bncc: 'EF05MA07', saeb: 'D25', niveis: [
        ['A meta era 5 km. Ana correu 3 km. Quanto faltou?', '2 km', () => km(5 - 3), '5 − 3 = 2', '8 km', () => km(5 + 3), 'somou em vez de tirar.'],
        ['A meta era 5 km. Bia correu 4,25 km. Quanto faltou?', '0,75 km', () => km(5 - 4.25), '5,00 − 4,25 = 0,75', '1,25 km', () => km(1.25), 'fez 5 − 4 = 1 e manteve o ,25.'],
        ['A meta era 6 km. Caio correu 5,155 km. Quanto faltou?', '0,845 km', () => km(6 - 5.155), '6,000 − 5,155 = 0,845', '1,155 km', () => km(1.155), 'fez 6 − 5 = 1 e manteve o ,155.'],
      ] },
      { titulo: 'As voltas', bncc: 'EF05MA08', saeb: 'D20', niveis: [
        ['Cada volta na pista tem 0,2 km. Quantos quilômetros em 5 voltas?', '1 km', () => km(0.2 * 5), '5 × 0,2 = 1,0', '0,1 km', () => km(0.1), 'fez 5 × 2 = 10 e escreveu 0,10.'],
        ['Cada volta na pista tem 0,25 km. Quantos quilômetros em 12 voltas?', '3 km', () => km(0.25 * 12), '12 × 0,25 = 3,00', '30 km', () => km(30), 'colocou a vírgula no lugar errado (12 × 25 = 300).'],
        ['Cada volta tem 0,25 km. Caio deu 18 voltas e correu mais 0,4 km na reta final. Quantos quilômetros ao todo?', '4,9 km', () => km(0.25 * 18 + 0.4), '18 × 0,25 = 4,5 · 4,5 + 0,4 = 4,9', '4,5 km', () => km(0.25 * 18), 'esqueceu a reta final.'],
      ] },
    ],
  },
  {
    n: 3, titulo: 'O Mistério da Receita Dobrada', palavra: 'FUBA',
    abertura: 'A cantina vai fazer bolo de fubá para a festa da escola. A receita é para 8 pessoas, mas serão muito mais. Na hora de multiplicar, alguém se confundiu. Vamos ajustar a receita!',
    solucao: 'Ao multiplicar a receita, alguém aumentou só o FUBÁ e esqueceu o resto: o bolo ficou seco. Com a proporção certa, deu tudo certo.',
    etapas: [
      { titulo: 'Os ovos', bncc: 'EF05MA12', saeb: 'D20', niveis: [
        ['A receita para 8 pessoas usa 2 xícaras de fubá. Quantas xícaras para 16 pessoas?', '4', () => String(2 * (16 / 8)), '16 é o dobro de 8 · 2 × 2 = 4', '10', () => String(2 + 8), 'somou 2 + 8.'],
        ['A receita para 8 pessoas usa 3 ovos. Quantos ovos para 40 pessoas?', '15', () => String(3 * (40 / 8)), '40 ÷ 8 = 5 receitas · 5 × 3 = 15', '35', () => String(40 - 8 + 3), 'somou a diferença de pessoas (32) aos ovos.'],
        ['A receita para 8 pessoas usa 3 ovos. Quantos ovos para 56 pessoas?', '21', () => String(3 * (56 / 8)), '56 ÷ 8 = 7 receitas · 7 × 3 = 21', '51', () => String(56 - 8 + 3), 'somou a diferença de pessoas (48) aos ovos.'],
      ] },
      { titulo: 'O leite e o óleo', bncc: 'EF05MA12', niveis: [
        ['A receita para 8 pessoas usa meia xícara de óleo. Quantas xícaras para 16 pessoas?', '1', () => String(0.5 * 2), '2 receitas · 2 × 1/2 = 1 xícara', '2', () => '2', 'contou 1 xícara por receita.'],
        ['A receita para 8 pessoas usa 1/2 xícara de óleo. Quantas xícaras para 40 pessoas?', '2 e 1/2', () => { const t = 5 * 0.5; return `${Math.floor(t)} e 1/2`; }, '5 receitas · 5 × 1/2 = 5/2 = 2 e 1/2', '5', () => '5', 'contou 1 xícara por receita.'],
        ['A receita para 8 pessoas usa 3/4 de xícara de leite. Quantas xícaras para 56 pessoas?', '5 e 1/4', () => { const q = 7 * 3; return `${Math.floor(q / 4)} e ${q % 4}/4`; }, '7 receitas · 7 × 3/4 = 21/4 = 5 e 1/4', '7', () => String(7), 'contou 1 xícara por receita.'],
      ] },
      { titulo: 'Quantos bolos', bncc: 'EF05MA08', saeb: 'D20', niveis: [
        ['Cada bolo serve 8 pessoas. Quantos bolos para 24 pessoas?', '3', () => String(24 / 8), '24 ÷ 8 = 3', '16', () => String(24 - 8), 'tirou 8 em vez de dividir.'],
        ['Cada bolo serve 8 pessoas. A escola tem 312 pessoas. Quantos bolos?', '39', () => String(312 / 8), '312 ÷ 8 = 39', '304', () => String(312 - 8), 'tirou 8 em vez de dividir.'],
        ['Cada bolo serve 12 pessoas. A escola tem 350 pessoas. Quantos bolos são necessários, no mínimo?', '30', () => String(Math.ceil(350 / 12)), '350 ÷ 12 = 29 e sobram 2 pessoas · mais 1 bolo = 30', '29', () => String(Math.floor(350 / 12)), 'esqueceu as 2 pessoas que sobram.'],
      ] },
      { titulo: 'O custo', bncc: 'EF05MA08', saeb: 'D20', niveis: [
        ['Cada bolo custa R$ 9,00 de ingredientes. Quanto custam 3 bolos?', 'R$ 27,00', () => RS(3 * 900), '3 × 9,00 = 27,00', 'R$ 12,00', () => RS(300 + 900), 'somou 3 + 9.'],
        ['Cada bolo custa R$ 8,50 de ingredientes. Quanto custam 39 bolos?', 'R$ 331,50', () => RS(39 * 850), '39 × 8,50 = 331,50', 'R$ 47,50', () => RS(3900 + 850), 'somou 39 + 8,50.'],
        ['Cada bolo custa R$ 12,40. A cantina tem R$ 400,00 para os 30 bolos. Quanto vai sobrar?', 'R$ 28,00', () => RS(40000 - 30 * 1240), '30 × 12,40 = 372,00 · 400,00 − 372,00 = 28,00', 'R$ 372,00', () => RS(30 * 1240), 'calculou o custo e esqueceu de ver quanto sobra.'],
      ] },
    ],
  },
  {
    n: 4, titulo: 'O Mistério da Cápsula do Tempo', palavra: 'ARTE', mockup: true,
    figura: 'Gráfico de colunas “Itens mais votados”: Fotos 12 · Cartas 8 · Desenhos 15 · Objetos 5.',
    abertura: 'A turma decidiu criar uma cápsula do tempo com lembranças do ano. Para escolher quais itens iriam entrar, fizeram uma votação. Agora, eles precisam analisar os resultados para tomar a decisão final.',
    solucao: 'Decisão final: a cápsula vai guardar ARTE. Os desenhos venceram a votação, as fotos também entraram, e tudo coube na cápsula.',
    etapas: [
      { titulo: 'A votação', bncc: 'EF05MA24', saeb: 'D28', niveis: [
        ['Quantos votos teve o item “Fotos”?', '12', () => '12', 'leitura da coluna Fotos: 12', '15', () => '15', 'leu a coluna de Desenhos.'],
        ['Qual foi o item mais votado?', 'Desenhos', () => [['Fotos', 12], ['Cartas', 8], ['Desenhos', 15], ['Objetos', 5]].sort((a, b) => b[1] - a[1])[0][0], 'a coluna mais alta é a de Desenhos (15)', 'Fotos', () => 'Fotos', 'escolheu a primeira coluna alta que viu.'],
        ['Se cada aluno votou uma vez, quantos alunos votaram?', '40', () => String(12 + 8 + 15 + 5), '12 + 8 + 15 + 5 = 40', '35', () => String(12 + 8 + 15), 'esqueceu a coluna de Objetos.'],
      ] },
      { titulo: 'A comparação', bncc: 'EF05MA24', saeb: 'D28', niveis: [
        ['Quantos votos a mais “Fotos” teve em relação a “Objetos”?', '7', () => String(12 - 5), '12 − 5 = 7', '17', () => String(12 + 5), 'somou em vez de comparar.'],
        ['Quantos votos a mais “Desenhos” teve em relação a “Cartas”?', '7', () => String(15 - 8), '15 − 8 = 7', '23', () => String(15 + 8), 'somou em vez de comparar.'],
        ['Os dois itens mais votados, juntos, tiveram quantos votos a mais que os dois menos votados juntos?', '14', () => String((15 + 12) - (8 + 5)), '15 + 12 = 27 · 8 + 5 = 13 · 27 − 13 = 14', '27', () => String(15 + 12), 'calculou só os dois mais votados.'],
      ] },
      { titulo: 'A regra da cápsula', bncc: 'EF05MA03', saeb: 'D24', niveis: [
        ['Só entram na cápsula os itens com pelo menos 1/4 dos 40 votos. Quanto é 1/4 de 40?', '10', () => String(40 / 4), '40 ÷ 4 = 10', '36', () => String(40 - 4), 'tirou 4 em vez de dividir.'],
        ['Só entram na cápsula os itens com pelo menos 1/4 dos 40 votos. Quantos itens vão entrar?', '2 itens', () => [12, 8, 15, 5].filter((v) => v >= 40 / 4).length + ' itens', '1/4 de 40 = 10 · só Fotos (12) e Desenhos (15) têm 10 ou mais', '3 itens', () => '3 itens', 'incluiu Cartas (8), que não chega a 10.'],
        ['Que fração dos 40 votos teve o item “Objetos”? (escreva na forma mais simples)', '1/8', () => { const g = (a, b) => (b ? g(b, a % b) : a); const d = g(5, 40); return `${5 / d}/${40 / d}`; }, '5/40 = 1/8', '1/5', () => '1/5', 'trocou a fração: dividiu o 5 pelo 5, mas não dividiu o 40 por 5.'],
      ] },
      { titulo: 'Cabe tudo?', bncc: 'EF05MA08', saeb: 'D20', niveis: [
        ['Cada desenho ocupa 2 cm de altura na pilha. Quantos centímetros para 15 desenhos?', '30 cm', () => 15 * 2 + ' cm', '15 × 2 = 30 cm', '17 cm', () => (15 + 2) + ' cm', 'somou 15 + 2.'],
        ['A cápsula tem 50 cm de altura. Cada desenho dobrado ocupa 1,5 cm. Quantos centímetros ocupam os 28 desenhos da turma?', '42 cm', () => dec(28 * 1.5) + ' cm', '28 × 1,5 = 42 cm (cabe nos 50 cm)', '29,5 cm', () => dec(28 + 1.5) + ' cm', 'somou 28 + 1,5.'],
        ['A cápsula tem 50 cm de altura. Vão entrar 28 desenhos de 1,5 cm e 12 fotos de 0,5 cm. Quantos centímetros sobram?', '2 cm', () => dec(50 - 28 * 1.5 - 12 * 0.5) + ' cm', '42 + 6 = 48 · 50 − 48 = 2 cm', '8 cm', () => dec(50 - 28 * 1.5) + ' cm', 'esqueceu as fotos.'],
      ] },
    ],
  },
  {
    n: 5, titulo: 'O Enigma do Terreno da Horta Nova', palavra: 'TELA',
    abertura: 'A escola ganhou um terreno para uma horta nova. A turma precisa planejar os canteiros e a cerca, mas o desenho do terreno está com medidas faltando!',
    solucao: 'A medida que faltava era a da TELA: com o portão, bastam 44 metros de cerca, e o dinheiro da escola quase dá para tudo.',
    etapas: [
      { titulo: 'O contorno', bncc: 'EF05MA20', saeb: 'D11', niveis: [
        ['O canteiro é um retângulo de 4 m por 2 m. Qual é o perímetro?', '12 m', () => 2 * (4 + 2) + ' m', '4 + 2 + 4 + 2 = 12 m', '6 m', () => (4 + 2) + ' m', 'somou só dois lados.'],
        ['O terreno é retangular, com 15 m por 8 m. Quantos metros de cerca são necessários para contorná-lo?', '46 m', () => 2 * (15 + 8) + ' m', '15 + 8 + 15 + 8 = 46 m', '23 m', () => (15 + 8) + ' m', 'somou só dois lados.'],
        ['O terreno tem 15 m por 8 m. Haverá um portão de 2 m, sem cerca. Quantos metros de cerca são necessários?', '44 m', () => (2 * (15 + 8) - 2) + ' m', '46 − 2 = 44 m', '46 m', () => 2 * (15 + 8) + ' m', 'esqueceu o portão.'],
      ] },
      { titulo: 'A área', bncc: 'EF05MA20', saeb: 'D12', niveis: [
        ['Qual é a área do canteiro de 4 m por 2 m?', '8 m²', () => 4 * 2 + ' m²', '4 × 2 = 8 m²', '12 m²', () => 2 * (4 + 2) + ' m²', 'calculou o perímetro, e não a área.'],
        ['Qual é a área do terreno de 15 m por 8 m?', '120 m²', () => 15 * 8 + ' m²', '15 × 8 = 120 m²', '46 m²', () => 2 * (15 + 8) + ' m²', 'calculou o perímetro, e não a área.'],
        ['No terreno de 15 m por 8 m, uma calçada ocupa uma faixa de 15 m por 1 m. Qual é a área que sobra para plantar?', '105 m²', () => (15 * 8 - 15 * 1) + ' m²', '120 − 15 = 105 m²', '120 m²', () => 15 * 8 + ' m²', 'esqueceu a calçada.'],
      ] },
      { titulo: 'Os canteiros', bncc: 'EF05MA08', saeb: 'D20', niveis: [
        ['Cada canteiro tem 8 m². Quantos canteiros cabem em 24 m²?', '3', () => String(24 / 8), '24 ÷ 8 = 3', '16', () => String(24 - 8), 'tirou 8 em vez de dividir.'],
        ['Cada canteiro tem 6 m². Quantos canteiros cabem em 120 m²?', '20', () => String(120 / 6), '120 ÷ 6 = 20', '114', () => String(120 - 6), 'tirou 6 em vez de dividir.'],
        ['Cada canteiro tem 6 m² e precisa de mais 1 m² de corredor. Quantos canteiros cabem em 105 m²?', '15', () => String(105 / (6 + 1)), '6 + 1 = 7 m² por canteiro · 105 ÷ 7 = 15', '17', () => String(Math.floor(105 / 6)), 'esqueceu o corredor.'],
      ] },
      { titulo: 'O preço da tela', bncc: 'EF05MA08', saeb: 'D20', niveis: [
        ['A tela custa R$ 5,00 o metro. Quanto custam 12 m?', 'R$ 60,00', () => RS(12 * 500), '12 × 5,00 = 60,00', 'R$ 17,00', () => RS(1200 + 500), 'somou 12 + 5.'],
        ['A tela custa R$ 7,50 o metro. Quanto custam 46 m?', 'R$ 345,00', () => RS(46 * 750), '46 × 7,50 = 345,00', 'R$ 53,50', () => RS(4600 + 750), 'somou 46 + 7,50.'],
        ['A tela custa R$ 7,50 o metro, e a escola tem R$ 300,00. Quanto falta para comprar os 44 m?', 'R$ 30,00', () => RS(44 * 750 - 30000), '44 × 7,50 = 330,00 · 330,00 − 300,00 = 30,00', 'R$ 330,00', () => RS(44 * 750), 'calculou o preço e esqueceu de comparar com os R$ 300,00.'],
      ] },
    ],
  },
  {
    n: 6, titulo: 'O Caso do Tesouro no Plano', palavra: 'MAPA',
    figura: 'Plano cartesiano (1º quadrante), x de 0 a 10 e y de 0 a 8: Escola (0, 0) · Árvore (2, 5) · Poço (6, 3) · Pedra (4, 7) · Ponte (8, 1).',
    abertura: 'A turma do ano passado deixou um tesouro escondido no pátio e um mapa com coordenadas. Para achar o tesouro, é preciso andar certinho pelo plano!',
    solucao: 'O tesouro estava no ponto certo, mas ninguém achava porque o MAPA estava de cabeça para baixo. Com as coordenadas, a turma achou a caixa!',
    etapas: [
      { titulo: 'As coordenadas', bncc: 'EF05MA15', niveis: [
        ['Quais são as coordenadas da Árvore? (x, y)', '(2, 5)', () => `(${2}, ${5})`, 'x = 2 (para a direita) · y = 5 (para cima)', '(5, 2)', () => '(5, 2)', 'trocou x com y.'],
        ['Saindo da Escola (0, 0), ande 6 para a direita e 3 para cima. A que coordenadas você chega?', '(6, 3)', () => `(${0 + 6}, ${0 + 3})`, 'x = 6 · y = 3: o Poço', '(3, 6)', () => '(3, 6)', 'trocou x com y.'],
        ['Saindo do Poço (6, 3), ande 2 para a esquerda e 4 para cima. A que coordenadas você chega?', '(4, 7)', () => `(${6 - 2}, ${3 + 4})`, 'x = 6 − 2 = 4 · y = 3 + 4 = 7: a Pedra', '(8, 7)', () => `(${6 + 2}, ${3 + 4})`, 'andou para a direita em vez da esquerda.'],
      ] },
      { titulo: 'As distâncias', bncc: 'EF05MA15', niveis: [
        ['Da Escola (0, 0) até a Árvore (2, 5), andando pelas linhas, quantas unidades?', '7', () => String(2 + 5), '2 para a direita + 5 para cima = 7', '3', () => String(5 - 2), 'subtraiu x de y.'],
        ['Da Escola (0, 0) até a Ponte (8, 1), andando pelas linhas, quantas unidades?', '9', () => String(8 + 1), '8 + 1 = 9', '8', () => '8', 'esqueceu de subir 1.'],
        ['Da Árvore (2, 5) até o Poço (6, 3) e depois até a Ponte (8, 1), andando pelas linhas, quantas unidades?', '10', () => String((6 - 2) + (5 - 3) + (8 - 6) + (3 - 1)), '(4 + 2) + (2 + 2) = 10', '6', () => String((6 - 2) + (5 - 3)), 'contou só o primeiro trecho.'],
      ] },
      { titulo: 'Os metros', bncc: 'EF05MA08', saeb: 'D20', niveis: [
        ['Cada unidade do mapa vale 10 m. Quantos metros são 7 unidades?', '70 m', () => 7 * 10 + ' m', '7 × 10 = 70 m', '17 m', () => (7 + 10) + ' m', 'somou 7 + 10.'],
        ['Cada unidade vale 10 m. Quantos metros da Escola até a Ponte (9 unidades)?', '90 m', () => 9 * 10 + ' m', '9 × 10 = 90 m', '19 m', () => (9 + 10) + ' m', 'somou 9 + 10.'],
        ['Cada unidade vale 12,5 m. Quantos metros são 10 unidades?', '125 m', () => dec(12.5 * 10) + ' m', '10 × 12,5 = 125 m', '22,5 m', () => dec(12.5 + 10) + ' m', 'somou 12,5 + 10.'],
      ] },
      { titulo: 'O tesouro', bncc: 'EF05MA15', niveis: [
        ['O tesouro está 2 unidades à direita da Árvore (2, 5). Quais são as coordenadas?', '(4, 5)', () => `(${2 + 2}, ${5})`, 'x = 2 + 2 = 4 · y continua 5', '(2, 7)', () => `(${2}, ${5 + 2})`, 'andou para cima em vez de para a direita.'],
        ['O x do tesouro é o dobro do x da Árvore (2, 5); o y é o mesmo do Poço (6, 3). Quais são as coordenadas?', '(4, 3)', () => `(${2 * 2}, ${3})`, 'x = 2 × 2 = 4 · y = 3', '(3, 4)', () => '(3, 4)', 'trocou x com y.'],
        ['O x do tesouro é o x da Pedra (4, 7) mais o x da Árvore (2, 5); o y é o y da Pedra menos o y do Poço (6, 3). Quais são as coordenadas?', '(6, 4)', () => `(${4 + 2}, ${7 - 3})`, 'x = 4 + 2 = 6 · y = 7 − 3 = 4', '(6, 10)', () => `(${4 + 2}, ${7 + 3})`, 'somou os y em vez de subtrair.'],
      ] },
    ],
  },
  {
    n: 7, titulo: 'O Mistério da Torta Dividida', palavra: 'ZERO',
    abertura: 'Na festa, três tortas iguais foram cortadas de jeitos diferentes. Lia, Rui e Bia brigaram: cada um diz que o outro comeu mais. Vamos usar frações para resolver a briga!',
    solucao: 'A briga não tinha motivo: 2/4, 4/8 e 6/12 são frações equivalentes. Os três comeram meia torta, e a diferença é ZERO.',
    etapas: [
      { titulo: 'Os pedaços', bncc: 'EF05MA04', saeb: 'D21', niveis: [
        ['A torta de Lia foi cortada em 4 pedaços iguais, e ela comeu 2. Que fração da torta ela comeu?', '2/4', () => `${2}/${4}`, '2 pedaços de 4 = 2/4', '2/2', () => '2/2', 'colocou embaixo os pedaços comidos, e não o total.'],
        ['Rui comeu 4/8 da torta dele. Escreva essa fração na forma mais simples.', '1/2', () => `${4 / 4}/${8 / 4}`, '4/8 = (4 ÷ 4)/(8 ÷ 4) = 1/2', '2/8', () => `${4 / 2}/8`, 'dividiu só o número de cima.'],
        ['Bia comeu 6/12 da torta dela. Escreva essa fração na forma mais simples.', '1/2', () => `${6 / 6}/${12 / 6}`, '6/12 = (6 ÷ 6)/(12 ÷ 6) = 1/2', '1/6', () => `${6 / 6}/6`, 'dividiu só o número de cima e copiou o 6 embaixo.'],
      ] },
      { titulo: 'Quem comeu mais', bncc: 'EF05MA05', saeb: 'D21', niveis: [
        ['Quem comeu mais: quem pegou 1/2 ou quem pegou 1/3 de uma torta igual? (responda a fração)', '1/2', () => '1/2', 'em 2 partes, cada pedaço é maior que em 3', '1/3', () => '1/3', 'achou que número maior embaixo é pedaço maior.'],
        ['Qual é maior: 3/4 ou 5/8 de uma torta? (responda a fração)', '3/4', () => (3 / 4 > 5 / 8 ? '3/4' : '5/8'), '3/4 = 6/8 > 5/8', '5/8', () => '5/8', 'achou que números maiores dão uma fração maior.'],
        ['Qual é a maior fração: 2/3, 3/4 ou 5/6?', '5/6', () => [['2/3', 2 / 3], ['3/4', 3 / 4], ['5/6', 5 / 6]].sort((a, b) => b[1] - a[1])[0][0], 'em doze avos: 8/12 · 9/12 · 10/12', '3/4', () => '3/4', 'comparou sem pôr as frações no mesmo denominador.'],
      ] },
      { titulo: 'Os morangos', bncc: 'EF05MA03', saeb: 'D24', niveis: [
        ['A torta tinha 24 morangos. Quantos morangos há na metade da torta?', '12', () => String(24 / 2), '24 ÷ 2 = 12', '22', () => String(24 - 2), 'tirou 2 em vez de dividir.'],
        ['A torta tinha 24 morangos. Rui comeu 3/8 dos morangos. Quantos morangos ele comeu?', '9', () => String((24 / 8) * 3), '24 ÷ 8 = 3 · 3 × 3 = 9', '3', () => String(24 / 8), 'achou só 1/8 e esqueceu de multiplicar por 3.'],
        ['A torta tinha 24 morangos. Lia comeu 2/4 e Rui, 3/8 dos morangos. Quantos sobraram?', '3', () => String(24 - (24 / 4) * 2 - (24 / 8) * 3), '12 + 9 = 21 · 24 − 21 = 3', '12', () => String(24 - (24 / 4) * 2), 'tirou só os morangos de Lia.'],
      ] },
      { titulo: 'A briga', bncc: 'EF05MA04', saeb: 'D21', niveis: [
        ['1/2 é igual a quantos quartos? (1/2 = ?/4)', '2', () => String((1 * 4) / 2), '1/2 = 2/4 (multiplica em cima e embaixo por 2)', '4', () => '4', 'copiou o 4 de baixo.'],
        ['Para 3/4 ficar com denominador 8, qual é o numerador? (3/4 = ?/8)', '6', () => String((3 * 8) / 4), '3/4 = (3 × 2)/(4 × 2) = 6/8', '7', () => String(3 + 4), 'somou 4 no numerador, em vez de multiplicar por 2.'],
        ['Lia comeu 2/4, Rui 4/8 e Bia 6/12 das tortas. Qual é a diferença entre o maior e o menor pedaço?', '0', () => String(6 / 12 - 2 / 4), '2/4 = 4/8 = 6/12 = 1/2 · 1/2 − 1/2 = 0', '4/8', () => `${6 - 2}/${12 - 4}`, 'subtraiu os números de cima e os de baixo.'],
      ] },
    ],
  },
  {
    n: 8, titulo: 'O Caso do Aquário Vazio', palavra: 'FURO',
    abertura: 'Na volta do feriado, o aquário da sala estava quase vazio! Os peixes estavam bem, mas faltava muita água. Evaporou ou vazou? Vamos medir!',
    solucao: 'Não foi só evaporação: havia um FURO na mangueira do filtro. A turma trocou a mangueira e completou a água.',
    etapas: [
      { titulo: 'Litros e mililitros', bncc: 'EF05MA19', saeb: 'D7', niveis: [
        ['O aquário tinha 20 litros. Quantos mililitros são?', N(20000) + ' mL', () => N(20 * 1000) + ' mL', '1 L = 1 000 mL · 20 × 1 000 = 20 000 mL', N(2000) + ' mL', () => N(20 * 100) + ' mL', 'achou que 1 litro tem 100 mililitros.'],
        ['Faltam 3,5 litros de água. Quantos mililitros são?', N(3500) + ' mL', () => N(3.5 * 1000) + ' mL', '3,5 × 1 000 = 3 500 mL', '350 mL', () => N(3.5 * 100) + ' mL', 'achou que 1 litro tem 100 mililitros.'],
        ['Faltam 3 litros e 750 mL. Escreva essa quantidade em litros.', '3,75 L', () => L(3 + 750 / 1000), '750 mL = 0,75 L · 3 + 0,75 = 3,75 L', '3,075 L', () => L(3.075), 'colocou o 750 na casa errada.'],
      ] },
      { titulo: 'O volume', bncc: 'EF05MA21', niveis: [
        ['Uma caixa comporta 3 × 2 × 2 cubinhos. Quantos cubinhos cabem nela?', '12', () => String(3 * 2 * 2), '3 × 2 = 6 por camada · 2 camadas = 12', '7', () => String(3 + 2 + 2), 'somou as medidas.'],
        ['O aquário mede 40 cm × 20 cm × 25 cm. Qual é o volume, em cm³?', N(20000) + ' cm³', () => N(40 * 20 * 25) + ' cm³', '40 × 20 = 800 · 800 × 25 = 20 000 cm³', '85 cm³', () => (40 + 20 + 25) + ' cm³', 'somou as medidas.'],
        ['O aquário mede 40 cm × 20 cm × 25 cm, mas a água chegava só a 20 cm de altura. Quantos litros de água havia? (1 000 cm³ = 1 L)', '16 L', () => L((40 * 20 * 20) / 1000), '40 × 20 × 20 = 16 000 cm³ = 16 L', '20 L', () => L((40 * 20 * 25) / 1000), 'usou a altura do aquário (25 cm), e não a da água.'],
      ] },
      { titulo: 'A evaporação', bncc: 'EF05MA08', saeb: 'D20', niveis: [
        ['Na sala fechada, evaporam 0,2 L de água por dia. Quantos litros evaporam em 5 dias?', '1 L', () => L(0.2 * 5), '5 × 0,2 = 1,0 L', '0,1 L', () => L(0.1), 'fez 5 × 2 = 10 e escreveu 0,10.'],
        ['O feriado durou 6 dias, e evaporaram 0,25 L por dia. Quantos litros evaporaram?', '1,5 L', () => L(0.25 * 6), '6 × 0,25 = 1,50 L', '6,25 L', () => L(6 + 0.25), 'somou 6 + 0,25.'],
        ['Em 6 dias evaporaram 0,25 L por dia, mas faltavam 3,75 L. Quantos litros vazaram?', '2,25 L', () => L(3.75 - 0.25 * 6), '6 × 0,25 = 1,5 · 3,75 − 1,5 = 2,25 L', '1,5 L', () => L(0.25 * 6), 'respondeu só o que evaporou.'],
      ] },
      { titulo: 'O vazamento', bncc: 'EF05MA08', saeb: 'D20', niveis: [
        ['Vazaram 2 L em 4 dias, a mesma quantidade por dia. Quantos litros por dia?', '0,5 L', () => L(2 / 4), '2 ÷ 4 = 0,5 L', '8 L', () => L(2 * 4), 'multiplicou em vez de dividir.'],
        ['Vazaram 3 L em 6 dias, a mesma quantidade por dia. Quantos mililitros por dia?', '500 mL', () => N((3 * 1000) / 6) + ' mL', '3 L = 3 000 mL · 3 000 ÷ 6 = 500 mL', N(2000) + ' mL', () => N((6 / 3) * 1000) + ' mL', 'dividiu os dias pelos litros (6 ÷ 3).'],
        ['Vazaram 2,25 L em 6 dias, a mesma quantidade por dia. Quantos mililitros por dia?', '375 mL', () => N((2.25 * 1000) / 6) + ' mL', '2,25 L = 2 250 mL · 2 250 ÷ 6 = 375 mL', N(2250) + ' mL', () => N(2.25 * 1000) + ' mL', 'converteu para mililitros, mas esqueceu de dividir pelos 6 dias.'],
      ] },
    ],
  },
  {
    n: 9, titulo: 'O Mistério da Rifa da Formatura', palavra: 'DOIS',
    abertura: 'A turma do 5º ano fez uma rifa para pagar a festa de formatura. A rifa arrecadou mais do que o esperado. Será que houve erro nas contas? Vamos conferir!',
    solucao: 'Os números da rifa foram impressos em DOIS blocos iguais, e alguns foram vendidos duas vezes! A turma vai avisar os compradores e fazer um sorteio justo.',
    etapas: [
      { titulo: 'A arrecadação', bncc: 'EF05MA08', saeb: 'D20', niveis: [
        ['Foram vendidos 120 números a R$ 2,00 cada. Quanto a rifa arrecadou?', 'R$ 240,00', () => RS(120 * 200), '120 × 2,00 = 240,00', 'R$ 122,00', () => RS(12000 + 200), 'somou 120 + 2.'],
        ['Foram vendidos 345 números a R$ 3,00 cada. Quanto a rifa arrecadou?', 'R$ 1.035,00', () => RS(345 * 300), '345 × 3,00 = 1 035,00', 'R$ 925,00', () => RS(92500), 'esqueceu os “vai um” (3 × 5 = 15 e 3 × 4 = 12).'],
        ['Foram vendidos 345 números a R$ 3,00 e 128 números premiados a R$ 5,00. Quanto a rifa arrecadou?', 'R$ 1.675,00', () => RS(345 * 300 + 128 * 500), '1 035,00 + 640,00 = 1 675,00', 'R$ 1.035,00', () => RS(345 * 300), 'esqueceu os números premiados.'],
      ] },
      { titulo: 'A meta', bncc: 'EF05MA07', saeb: 'D19', niveis: [
        ['A meta era R$ 200,00, e a rifa arrecadou R$ 240,00. Quanto passou da meta?', 'R$ 40,00', () => RS(24000 - 20000), '240,00 − 200,00 = 40,00', 'R$ 440,00', () => RS(24000 + 20000), 'somou em vez de comparar.'],
        ['A meta era R$ 900,00, e a rifa arrecadou R$ 1.035,00. Quanto passou da meta?', 'R$ 135,00', () => RS(103500 - 90000), '1 035,00 − 900,00 = 135,00', 'R$ 1.935,00', () => RS(103500 + 90000), 'somou em vez de comparar.'],
        ['A meta era R$ 1.500,00. A rifa arrecadou R$ 1.675,00, e os prêmios custaram R$ 120,00. Depois de pagar os prêmios, quanto passou da meta?', 'R$ 55,00', () => RS(167500 - 12000 - 150000), '1 675,00 − 120,00 = 1 555,00 · 1 555,00 − 1 500,00 = 55,00', 'R$ 175,00', () => RS(167500 - 150000), 'esqueceu o custo dos prêmios.'],
      ] },
      { titulo: 'A divisão do dinheiro', bncc: 'EF05MA08', saeb: 'D20', niveis: [
        ['Os R$ 240,00 serão divididos igualmente entre 4 comissões. Quanto cada uma recebe?', 'R$ 60,00', () => RS(24000 / 4), '240,00 ÷ 4 = 60,00', 'R$ 236,00', () => RS(24000 - 400), 'tirou 4 em vez de dividir.'],
        ['Os R$ 1.035,00 serão divididos igualmente entre os 23 alunos da turma. Quanto cada um recebe para a festa?', 'R$ 45,00', () => RS(103500 / 23), '1 035,00 ÷ 23 = 45,00', 'R$ 1.012,00', () => RS(103500 - 2300), 'tirou 23 em vez de dividir.'],
        ['Dos R$ 1.675,00, saem R$ 120,00 dos prêmios, e o resto é dividido igualmente entre 25 alunos. Quanto cada um recebe?', 'R$ 62,20', () => RS((167500 - 12000) / 25), '1 675,00 − 120,00 = 1 555,00 · 1 555,00 ÷ 25 = 62,20', 'R$ 67,00', () => RS(167500 / 25), 'esqueceu de tirar os prêmios antes de dividir.'],
      ] },
      { titulo: 'A chance de ganhar', bncc: 'EF05MA23', niveis: [
        ['A rifa tem 100 números, e Lia comprou 1. Qual é a chance de ela ganhar? (escreva como fração)', '1/100', () => `1/${100}`, '1 número em 100 = 1/100', '99/100', () => `${100 - 1}/100`, 'calculou a chance de não ganhar.'],
        ['Foram vendidos 345 números diferentes, e Leo comprou 5. Qual é a chance de ele ganhar? (fração na forma mais simples)', '1/69', () => `1/${345 / 5}`, '5/345 = 1/69', '5/340', () => `5/${345 - 5}`, 'tirou os números de Leo do total.'],
        ['Descobriram que cada um dos 345 números foi impresso em 2 bilhetes, e todos os bilhetes foram vendidos. Quantos bilhetes foram vendidos?', '690', () => String(345 * 2), '345 × 2 = 690', '347', () => String(345 + 2), 'somou 345 + 2.'],
      ] },
    ],
  },
  {
    n: 10, titulo: 'O Caso dos Prêmios da Gincana', palavra: 'JUIZ',
    abertura: 'A gincana da escola ganhou 1 200 pacotes de figurinhas como prêmio. A divisão entre as equipes gerou confusão: tem equipe dizendo que recebeu menos do que devia. Vamos refazer a partilha!',
    solucao: 'Ninguém foi prejudicado: o JUIZ da gincana dividiu os prêmios pelos pontos, e o dobro e o triplo estavam certos.',
    etapas: [
      { titulo: 'O dobro e o triplo', bncc: 'EF05MA13', niveis: [
        ['30 prêmios serão divididos entre 2 equipes: a maior recebe o dobro da menor. Quanto recebe a maior?', '20', () => String((30 / 3) * 2), 'menor = 1 parte, maior = 2 partes · 30 ÷ 3 = 10 · 2 × 10 = 20', '15', () => String(30 / 2), 'dividiu em 2 partes iguais.'],
        ['1 200 pacotes serão divididos entre 2 equipes: a maior recebe o triplo da menor. Quanto recebe a menor?', '300', () => String(1200 / 4), 'menor = 1 parte, maior = 3 partes · 1 200 ÷ 4 = 300', '400', () => String(1200 / 3), 'dividiu por 3, esquecendo a parte da menor.'],
        ['1 200 pacotes serão divididos entre 3 equipes: a Azul recebe o dobro da Verde, e a Vermelha, o triplo da Verde. Quanto recebe a Vermelha?', '600', () => String((1200 / 6) * 3), 'Verde 1 parte + Azul 2 + Vermelha 3 = 6 partes · 1 200 ÷ 6 = 200 · 3 × 200 = 600', '400', () => String(1200 / 3), 'dividiu em 3 partes iguais.'],
      ] },
      { titulo: 'A diferença', bncc: 'EF05MA07', saeb: 'D19', niveis: [
        ['A equipe maior recebeu 20 prêmios e a menor, 10. Quantos a maior recebeu a mais?', '10', () => String(20 - 10), '20 − 10 = 10', '30', () => String(20 + 10), 'somou em vez de comparar.'],
        ['A equipe maior recebeu 900 pacotes e a menor, 300. Quantos a maior recebeu a mais?', '600', () => String(900 - 300), '900 − 300 = 600', N(1200), () => N(900 + 300), 'somou em vez de comparar.'],
        ['A Vermelha recebeu 600 pacotes, a Azul 400 e a Verde 200. Quantos a Vermelha recebeu a mais que as outras duas juntas?', '0', () => String(600 - (400 + 200)), '400 + 200 = 600 · 600 − 600 = 0', '200', () => String(600 - 400), 'comparou só com a Azul.'],
      ] },
      { titulo: 'As figurinhas', bncc: 'EF05MA08', saeb: 'D20', niveis: [
        ['Cada pacote tem 5 figurinhas. Quantas figurinhas há em 20 pacotes?', '100', () => String(20 * 5), '20 × 5 = 100', '25', () => String(20 + 5), 'somou 20 + 5.'],
        ['Cada pacote tem 5 figurinhas. Quantas figurinhas há em 1 200 pacotes?', N(6000), () => N(1200 * 5), '1 200 × 5 = 6 000', N(1205), () => N(1200 + 5), 'somou 1 200 + 5.'],
        ['A gincana tem 1 200 pacotes com 5 figurinhas e ganhou mais 25 caixas com 1 000 figurinhas cada. Quantas figurinhas ao todo?', N(31000), () => N(1200 * 5 + 25 * 1000), '6 000 + 25 000 = 31 000', N(7025), () => N(1200 * 5 + 25 + 1000), 'somou 25 + 1 000 em vez de multiplicar.'],
      ] },
      { titulo: 'A parte de cada um', bncc: 'EF05MA13', niveis: [
        ['A equipe maior recebeu 20 dos 30 prêmios. Que fração do total ela recebeu? (forma mais simples)', '2/3', () => `${20 / 10}/${30 / 10}`, '20/30 = 2/3', '1/3', () => '1/3', 'calculou a parte da equipe menor.'],
        ['A equipe menor recebeu 300 dos 1 200 pacotes. Que fração do total ela recebeu? (forma mais simples)', '1/4', () => `${300 / 300}/${1200 / 300}`, '300/1 200 = 1/4', '1/3', () => `${300 / 300}/${900 / 300}`, 'comparou com a parte da outra equipe (300 de 900), e não com o total.'],
        ['A Vermelha recebeu 600 dos 1 200 pacotes. Que porcentagem do total ela recebeu?', '50%', () => (600 / 1200) * 100 + '%', '600/1 200 = 1/2 = 50%', '60%', () => '60%', 'trocou 600 por 60%.'],
      ] },
    ],
  },
];
