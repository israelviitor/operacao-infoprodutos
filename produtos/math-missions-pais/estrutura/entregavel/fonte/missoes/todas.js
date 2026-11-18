// As 30 missões na ordem do índice (../../INDICE.md): as 3 amostras entram no lugar delas.
const amostras = require('../missoes-amostra');
const am = (id) => amostras.find((m) => m.id === id);
const [n1, n2, n3] = [require('./nivel1'), require('./nivel2'), require('./nivel3')];
const encaixa = (lista, amostra, pos) => [...lista.slice(0, pos), amostra, ...lista.slice(pos)];
module.exports = [
  ...encaixa(n1, am('n1-06-biscoitos'), 5),
  ...encaixa(n2, am('n2-05-tesouro'), 4),
  ...encaixa(n3, am('n3-03-robo'), 2),
];
