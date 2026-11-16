// 30 Desafios Relâmpago (bônus): um mini-problema de desenho por dia, 5 minutos.
// 1–10 acompanham o Nível 1, 11–20 o Nível 2 e 21–30 o Nível 3 (ver ../INDICE.md).
// Sem moeda real (moedas de ouro e pontos do jogo) e com medidas universais.
// Cada desafio: texto, resposta (r), cálculo conferido pelo gerador (calc), conta, desenho (modelo para o gabarito).
const { iguais } = require('./barras');
const ml = (n) => n.toLocaleString('pt-BR').replace(/\./g, ' ');
const dec = (n, u) => String(+n.toFixed(2)).replace('.', ',') + (u ? ' ' + u : '');

module.exports = [
  // ---------- Nível 1 · o primeiro desenho ----------
  { texto: 'Lia tinha 23 adesivos e ganhou 15 da avó. Quantos adesivos ela tem agora?', r: '38', calc: () => String(23 + 15), conta: '23 + 15 = 38', desenho: 'Parte-todo · ? no todo',
    modelo: [{ total: '?', partes: [{ u: 23, t: '23' }, { u: 15, t: '15' }] }] },
  { texto: 'Havia 40 balões na festa. 16 estouraram. Quantos balões sobraram?', r: '24', calc: () => String(40 - 16), conta: '40 − 16 = 24', desenho: 'Parte-todo · ? numa parte',
    modelo: [{ total: '40', partes: [{ u: 16, t: '16' }, { u: 24, t: '?' }] }] },
  { texto: 'Theo leu 32 páginas. Nina leu 19. Quantas páginas Theo leu a mais?', r: '13', calc: () => String(32 - 19), conta: '32 − 19 = 13', desenho: 'Comparação',
    modelo: [{ nome: 'Theo', partes: [{ u: 32, t: '32' }] }, { nome: 'Nina', partes: [{ u: 19, t: '19' }, { u: 13, t: '?', tracejada: true }] }] },
  { texto: 'São 5 caixas com 6 ovos em cada uma. Quantos ovos ao todo?', r: '30', calc: () => String(5 * 6), conta: '5 × 6 = 30', desenho: 'Pedaços iguais · ? no total',
    modelo: [{ total: '?', partes: iguais(5, '6') }] },
  { texto: 'O treino de futebol dura 60 minutos. Já passaram 35. Quantos minutos faltam?', r: '25 min', calc: () => (60 - 35) + ' min', conta: '60 − 35 = 25', desenho: 'Parte-todo com minutos',
    modelo: [{ total: '60 min', partes: [{ u: 35, t: '35 min' }, { u: 25, t: '?' }] }] },
  { texto: '24 morangos vão ser repartidos igualmente entre 4 crianças. Quantos morangos cada uma ganha?', r: '6', calc: () => String(24 / 4), conta: '24 ÷ 4 = 6', desenho: 'Pedaços iguais · ? num pedaço',
    modelo: [{ total: '24', partes: [{ u: 1, t: '?' }, ...iguais(3, ' ')] }] },
  { texto: 'O álbum tem 50 espaços e já tem 34 figurinhas coladas. Quantas figurinhas faltam?', r: '16', calc: () => String(50 - 34), conta: '50 − 34 = 16', desenho: 'Parte-todo · quanto falta',
    modelo: [{ total: '50', partes: [{ u: 34, t: '34' }, { u: 16, t: '?' }] }] },
  { texto: 'Uma trilha tem 2 trechos: um de 48 m e outro de 37 m. Quantos metros tem a trilha toda?', r: '85 m', calc: () => (48 + 37) + ' m', conta: '48 + 37 = 85', desenho: 'Parte-todo com metros',
    modelo: [{ total: '?', partes: [{ u: 48, t: '48 m' }, { u: 37, t: '37 m' }] }] },
  { texto: 'Metade das 18 maçãs vai para a torta. Quantas maçãs vão para a torta?', r: '9', calc: () => String(18 / 2), conta: '18 ÷ 2 = 9', desenho: 'Barra em 2 partes iguais',
    modelo: [{ total: '18', partes: [{ u: 1, t: '?', cinza: true }, { u: 1, t: ' ' }] }] },
  { texto: 'A torre azul tem 45 blocos. A torre vermelha tem 12 blocos a menos. Quantos blocos tem a torre vermelha?', r: '33', calc: () => String(45 - 12), conta: '45 − 12 = 33', desenho: 'Comparação · ? na barra menor',
    modelo: [{ nome: 'Azul', partes: [{ u: 45, t: '45' }] }, { nome: 'Vermelha', partes: [{ u: 33, t: '?' }, { u: 12, t: '12', tracejada: true }] }] },

  // ---------- Nível 2 · dois passos ----------
  { texto: 'Uma caixa pesa 1 000 g com tudo dentro: 450 g de livros, 320 g de brinquedos, e o resto é o peso da caixa vazia. Quanto pesa a caixa vazia?', r: '230 g', calc: () => (1000 - 450 - 320) + ' g', conta: '450 + 320 = 770 · 1 000 − 770 = 230', desenho: 'Parte-todo com 3 partes',
    modelo: [{ total: '1 000 g', partes: [{ u: 450, t: '450 g' }, { u: 320, t: '320 g' }, { u: 230, t: '?' }] }] },
  { texto: 'Ana tem 120 pontos no jogo. Bia tem 35 pontos a mais que Ana. Quantos pontos as duas têm juntas?', r: '275', calc: () => String(120 + (120 + 35)), conta: '120 + 35 = 155 · 120 + 155 = 275', desenho: 'Comparação com total',
    modelo: [{ nome: 'Ana', partes: [{ u: 120, t: '120' }] }, { nome: 'Bia', partes: [{ u: 120, t: '120' }, { u: 35, t: '35' }] }] },
  { texto: 'A torre de Léo tem 8 blocos. A torre de Mia é 4 vezes mais alta. Quantos blocos tem a torre de Mia?', r: '32', calc: () => String(8 * 4), conta: '4 × 8 = 32', desenho: 'Vezes mais: 1 unidade contra 4',
    modelo: [{ nome: 'Léo', partes: iguais(1, '8') }, { nome: 'Mia', partes: iguais(4, '8') }] },
  { texto: 'Um pote tem 15 bolinhas de gude. Outro pote tem o triplo. Quantas bolinhas há nos dois potes juntos?', r: '60', calc: () => String(15 + 15 * 3), conta: '3 × 15 = 45 · 15 + 45 = 60 (ou 4 × 15)', desenho: 'Vezes mais com total',
    modelo: [{ nome: 'Pote 1', partes: iguais(1, '15') }, { nome: 'Pote 2', partes: iguais(3, '15') }] },
  { texto: 'O canteiro tem 36 flores. 2/3 delas são amarelas. Quantas flores amarelas há?', r: '24', calc: () => String(36 / 3 * 2), conta: '36 ÷ 3 = 12 · 2 × 12 = 24', desenho: 'Fração de uma quantidade',
    modelo: [{ total: '36', partes: [{ u: 1, t: '12', cinza: true }, { u: 1, t: '12', cinza: true }, { u: 1, t: '12' }] }] },
  { texto: 'Uma garrafa tinha 1 000 mL de suco. Já beberam 3/4 da garrafa. Quantos mL sobraram?', r: '250 mL', calc: () => (1000 / 4) + ' mL', conta: '1 000 ÷ 4 = 250 · sobrou 1 dos 4 pedaços = 250', desenho: 'Fração · ? no pedaço que sobrou',
    modelo: [{ total: '1 000 mL', partes: [...iguais(3, ' ').map((p) => ({ ...p, cinza: true })), { u: 1, t: '?' }] }] },
  { texto: '53 pessoas vão para a excursão em carros de 5 lugares. Quantos carros são precisos para levar todo mundo?', r: '11', calc: () => String(Math.ceil(53 / 5)), conta: '53 ÷ 5 = 10, resto 3 · os 3 que sobram precisam de mais 1 carro: 11', desenho: 'Pedaços iguais com sobra',
    modelo: [{ total: '53', partes: [...iguais(10, '5'), { u: 0.6, t: '3', tracejada: true }] }] },
  { texto: 'Uma volta na pista leva 1 minuto e 20 segundos. Quanto tempo levam 3 voltas?', r: '4 min', calc: () => (3 * 80 / 60) + ' min', conta: '1 min 20 s = 80 s · 3 × 80 = 240 s = 4 min', desenho: 'Pedaços iguais com segundos',
    modelo: [{ total: '?', partes: iguais(3, '80 s') }] },
  { texto: 'Um balde tem 5 L de água. Tiraram 3 copos de 750 mL. Quantos mL de água sobraram no balde?', r: '2 750 mL', calc: () => ml(5000 - 3 * 750) + ' mL', conta: '5 L = 5 000 mL · 3 × 750 = 2 250 · 5 000 − 2 250 = 2 750', desenho: 'Parte-todo com pedaços iguais',
    modelo: [{ total: '5 000 mL', partes: [...iguais(3, '750', 750), { u: 2750, t: '?' }] }] },
  { texto: 'Na loja do jogo, a espada custa 240 moedas de ouro e o escudo custa a metade do preço da espada. Quanto custam os dois juntos?', r: '360', calc: () => String(240 + 240 / 2), conta: '240 ÷ 2 = 120 · 240 + 120 = 360', desenho: 'Comparação com total',
    modelo: [{ nome: 'Espada', partes: iguais(2, '120') }, { nome: 'Escudo', partes: iguais(1, '120') }] },

  // ---------- Nível 3 · vários passos ----------
  { texto: 'No salto em distância, Rui pulou 2,35 m e Sofia pulou 2,8 m. Quantos metros Sofia pulou a mais?', r: '0,45 m', calc: () => dec(2.8 - 2.35, 'm'), conta: '2,80 − 2,35 = 0,45', desenho: 'Comparação com vírgula',
    modelo: [{ nome: 'Sofia', partes: [{ u: 280, t: '2,80 m' }] }, { nome: 'Rui', partes: [{ u: 235, t: '2,35 m' }, { u: 45, t: '?', tracejada: true }] }] },
  { texto: '5 garrafas iguais têm 2 L de água ao todo. Quantos litros têm 8 dessas garrafas?', r: '3,2 L', calc: () => dec(2 / 5 * 8, 'L'), conta: '2 ÷ 5 = 0,4 L por garrafa · 8 × 0,4 = 3,2', desenho: 'Unidade: achar 1 pedaço',
    modelo: [{ nome: '5 garrafas', total: '2 L', partes: iguais(5, '0,4') }, { nome: '8 garrafas', total: '?', partes: iguais(8, '0,4') }] },
  { texto: '3 cadernos iguais pesam 450 g. Quanto pesam 7 desses cadernos?', r: '1 050 g', calc: () => ml(450 / 3 * 7) + ' g', conta: '450 ÷ 3 = 150 · 7 × 150 = 1 050', desenho: 'Unidade: achar 1 pedaço',
    modelo: [{ nome: '3 cad.', total: '450 g', partes: iguais(3, '150') }, { nome: '7 cad.', total: '?', partes: iguais(7, '150') }] },
  { texto: 'Duas cordas medem 20 m juntas. Uma é 4 m mais comprida que a outra. Quanto mede a corda maior?', r: '12 m', calc: () => ((20 - 4) / 2 + 4) + ' m', conta: '20 − 4 = 16 · 16 ÷ 2 = 8 · 8 + 4 = 12', desenho: 'Soma e diferença',
    modelo: [{ nome: 'Maior', partes: [{ u: 8, t: '?' }, { u: 4, t: '4 m' }] }, { nome: 'Menor', partes: [{ u: 8, t: ' ' }] }] },
  { texto: 'Davi tem 50 figurinhas e Eva tem 30. Quantas figurinhas Davi precisa dar para Eva para os dois ficarem com a mesma quantidade?', r: '10', calc: () => String((50 - 30) / 2), conta: '50 − 30 = 20 · 20 ÷ 2 = 10', desenho: 'Antes e depois',
    modelo: [{ nome: 'Davi', partes: [{ u: 30, t: '30' }, { u: 10, t: '?' }, { u: 10, t: ' ' }] }, { nome: 'Eva', partes: [{ u: 30, t: '30' }] }] },
  { texto: 'Havia 60 biscoitos. Comeram 1/3 deles. Depois, comeram 1/4 do que sobrou. Quantos biscoitos sobraram no fim?', r: '30', calc: () => String((60 - 60 / 3) - (60 - 60 / 3) / 4), conta: '60 ÷ 3 = 20 · sobram 40 · 40 ÷ 4 = 10 · 40 − 10 = 30', desenho: 'Fração do que sobrou',
    modelo: [{ total: '60', partes: [{ u: 2, t: '20', cinza: true }, { u: 1, t: '10', cinza: true }, { u: 3, t: '?' }] }] },
  { texto: 'Numa jarra de 1 000 mL de refresco, para cada 2 partes de água vão 3 partes de suco. Quantos mL de suco há na jarra?', r: '600 mL', calc: () => (1000 / 5 * 3) + ' mL', conta: '2 + 3 = 5 partes · 1 000 ÷ 5 = 200 · 3 × 200 = 600', desenho: 'Partes desiguais (razão)',
    modelo: [{ nome: 'Água', partes: iguais(2, '200') }, { nome: 'Suco', partes: iguais(3, '200') }] },
  { texto: 'Uma armadura do jogo custa 80 pontos e está com 25% de desconto. Quantos pontos ela custa agora?', r: '60', calc: () => String(80 - 80 * 0.25), conta: '25% = 1/4 · 80 ÷ 4 = 20 · 80 − 20 = 60', desenho: 'Barra em 4 partes (25%)',
    modelo: [{ total: '80 pontos', partes: [{ u: 1, t: '20', cinza: true }, ...iguais(3, '').map((p) => ({ ...p, t: ' ' }))] }] },
  { texto: 'O jardim retangular mede 12 m por 7 m. A cerca já cobre 30 m em volta dele. Quantos metros de cerca faltam?', r: '8 m', calc: () => (2 * (12 + 7) - 30) + ' m', conta: '12 + 7 + 12 + 7 = 38 · 38 − 30 = 8', desenho: 'Parte-todo: perímetro',
    modelo: [{ total: '38 m', partes: [{ u: 30, t: '30 m' }, { u: 8, t: '?' }] }] },
  { texto: 'Dois irmãos têm 140 moedas de ouro juntos. O mais velho gasta 20 e, aí, os dois ficam com a mesma quantidade. Quantas moedas tem o mais novo?', r: '60', calc: () => String((140 - 20) / 2), conta: '140 − 20 = 120 · 120 ÷ 2 = 60', desenho: 'Soma e diferença (antes e depois)',
    modelo: [{ nome: 'Velho', partes: [{ u: 60, t: ' ' }, { u: 20, t: '20' }] }, { nome: 'Novo', partes: [{ u: 60, t: '?' }] }] },
];
