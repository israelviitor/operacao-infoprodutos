// Formatação dos números como aparecem nas folhas (PT): milhar com espaço, decimal com vírgula.
const n = (x) => {
  const s = String(+(+x).toFixed(2));
  const [int, dec] = s.split('.');
  const milhar = int.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return dec ? `${milhar},${dec}` : milhar;
};
const u = (x, unidade) => `${n(x)} ${unidade}`;
const hm = (min) => `${Math.floor(min / 60)}:${String(min % 60).padStart(2, '0')}`;
const { iguais } = require('../barras');
module.exports = { n, u, hm, iguais };
