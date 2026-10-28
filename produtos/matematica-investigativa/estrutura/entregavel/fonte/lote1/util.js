// Formatadores usados nas respostas (a resposta é texto, comparada letra a letra com o cálculo).
const fmtNum = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const dec = (x, casas = 3) => {
  let s = (Math.round(x * 10 ** casas) / 10 ** casas).toFixed(casas).replace(/0+$/, '').replace(/\.$/, '');
  const [i, d] = s.split('.');
  return fmtNum(i) + (d ? ',' + d : '');
};
module.exports = {
  fmtNum,
  dec,
  R: (n) => 'R$ ' + fmtNum(n),                         // reais inteiros (3º ano)
  RS: (c) => 'R$ ' + fmtNum(Math.floor(c / 100)) + ',' + String(c % 100).padStart(2, '0'), // centavos -> R$ 1.035,00
  min: (n) => n + ' min',
  hm: (t) => `${Math.floor(t / 60)}h${String(t % 60).padStart(2, '0')}`, // minutos desde 0h -> 9h05
  h: (hh, mm = 0) => hh * 60 + mm,
};
