import {Config} from './Criativo';
import c1 from './data/c1.json';
import c2 from './data/c2.json';
import c3 from './data/c3.json';
import c4 from './data/c4.json';
import c5 from './data/c5.json';

const T = (id: number) => `takes/${id}.mp4`;
const HORTA = 'folhas/horta-3ano.png', FEIRA = 'folhas/feira-4ano.png', CAPSULA = 'folhas/capsula-5ano.png', GAB = 'folhas/gabarito-capsula.png', MOCK = 'folhas/mockup-basico.png';
const S = (from: number, to: number, src: string, x: Partial<Config['scenes'][0]> = {}) => ({from, to, src, ...x});
const serie = (a: number, b: number, c: number) => [{text: '3º', at: a}, {text: '4º', at: b}, {text: '5º', at: c}];

// C01 — audio c1 — "Já imaginou transformar..."
export const C01: Config = {
  audio: 'audio/c1.mp3', words: c1 as any, music: 'audio/729.mp3', musicVol: 0.12, dur: 48.3,
  keys: ['MISSÃO', 'MATEMÁTICA', 'INVESTIGAR', 'INTERPRETAR', 'CONTAS', 'ENVOLVENTE'],
  scenes: [
    S(0, 2.9, T(34126)), S(2.9, 5.96, T(14782), {zoomIn: false}), S(5.96, 8.72, T(45564)), S(8.72, 10.68, T(47242), {zoomIn: false}),
    S(10.68, 11.76, T(21626), {startFrom: 150}), S(11.76, 12.58, T(21623), {startFrom: 30}), S(12.58, 13.32, T(42185)), S(13.32, 14.9, T(21612)),
    S(16.56, 19.22, HORTA, {focusY: 25}), S(19.22, 20.68, HORTA, {focusY: 45}), S(20.68, 23.34, T(34126), {startFrom: 400}),
    S(23.34, 24.74, T(28901)), S(24.74, 26.66, T(46423), {zoomIn: false}), S(26.66, 29.28, T(25260)), S(29.28, 31.12, FEIRA),
    S(31.12, 32.8, CAPSULA, {zoomIn: false}), S(32.8, 34.8, GAB, {focusY: 40}), S(34.8, 37.0, T(42187)), S(37.0, 39.28, T(48298)), S(39.28, 40.1, T(6363)),
  ],
  overlays: [
    {t: 'hook', from: 0, to: 5.96, lines: ['PROBLEMAS DE', 'MATEMÁTICA QUE'], highlight: 'PRENDEM A TURMA?'},
    {t: 'selo', from: 5.96, to: 8.72, text: '✕ MAIS UMA LISTA'},
    {t: 'check', from: 11.76, to: 14.9, mark: '✓', items: [{text: 'PISTAS', at: 11.76}, {text: 'DESAFIOS', at: 12.58}, {text: 'MISTÉRIOS', at: 13.32}]},
    {t: 'brand', from: 14.9, to: 16.56},
    {t: 'selo', from: 16.56, to: 19.22, text: 'CADA MISSÃO É UMA HISTÓRIA'},
    {t: 'selo', from: 23.56, to: 26.66, text: 'SEM PERDER HORAS PREPARANDO'},
    {t: 'counter', from: 26.66, to: 29.28, value: 30, label: 'MISSÕES PRONTAS PARA IMPRIMIR'},
    {t: 'badges', from: 29.28, to: 31.12, title: 'DO 3º AO 5º ANO', items: serie(29.36, 29.8, 30.2)},
    {t: 'stars', from: 31.12, to: 32.8},
    {t: 'selo', from: 32.8, to: 34.8, text: '✓ GABARITO COMENTADO'},
    {t: 'brand', from: 40.1, to: 43.94},
    {t: 'price', from: 41.76, to: 43.94, price: 'R$ 17,90', at: 42.08},
    {t: 'cta', from: 43.94, to: 48.3, phrase: '30 MISSÕES PRONTAS PARA IMPRIMIR', price: 'R$ 17,90'},
  ],
  hide: [],
  sfx: [{at: 0, name: 'impact'}, {at: 11.76, name: 'pop'}, {at: 12.58, name: 'pop'}, {at: 13.32, name: 'pop'}, {at: 14.9, name: 'boom'},
    {at: 29.36, name: 'pop'}, {at: 29.8, name: 'pop'}, {at: 30.2, name: 'pop'}, {at: 31.12, name: 'pop'}, {at: 42.08, name: 'impact'}, {at: 44.32, name: 'ding'}],
};

// C02 — audio c2 — "Você explica a conta, a turma entende..."
export const C02: Config = {
  audio: 'audio/c2.mp3', words: c2 as any, music: 'audio/822.mp3', musicVol: 0.035, dur: 50.4,
  keys: ['CALCULAR', 'INTERPRETAR', 'OPERAÇÃO', 'HISTÓRIA', 'DESVENDAR', 'MISSÃO', 'IMPRIMIR'],
  scenes: [
    S(0, 2.4, T(4616)), S(2.4, 4.0, T(34126), {zoomIn: false}), S(4.0, 7.66, T(14782)), S(7.66, 9.28, T(34126), {startFrom: 300}),
    S(9.28, 13.92, HORTA, {focusY: 40}), S(13.92, 16.12, T(20235)), S(16.12, 19.32, T(20468), {zoomIn: false}), S(19.32, 20.88, T(47241)),
    S(22.48, 24.16, T(6363)), S(24.16, 26.3, T(21612)), S(26.3, 28.22, HORTA, {focusY: 20}), S(28.22, 30.68, T(21623)),
    S(30.68, 35.46, FEIRA, {zoomIn: false}), S(35.46, 38.78, CAPSULA), S(38.78, 40.54, HORTA, {zoomIn: false}), S(40.54, 42.36, GAB),
    S(42.36, 44.22, T(6363), {startFrom: 200}), S(44.22, 46.38, T(25260)),
  ],
  overlays: [
    {t: 'hook', from: 0, to: 7.66, lines: ['VOCÊ EXPLICA A CONTA,', 'A TURMA ENTENDE...'], highlight: 'MAS TRAVA NO PROBLEMA?'},
    {t: 'versus', from: 9.28, to: 13.92, a: 'SABER CALCULAR', b: 'SABER INTERPRETAR', atB: 10.38},
    {t: 'selo', from: 13.92, to: 16.4, text: '✕ SÓ REPETIR CONTINHAS'},
    {t: 'brand', from: 20.88, to: 22.48},
    {t: 'counter', from: 22.48, to: 24.16, value: 30, label: 'ATIVIDADES'},
    {t: 'selo', from: 24.16, to: 28.22, text: 'CADA PROBLEMA É UMA HISTÓRIA'},
    {t: 'check', from: 30.68, to: 35.46, mark: '✓', size: 64, items: [{text: 'LER', at: 30.68}, {text: 'INTERPRETAR', at: 31.56}, {text: 'ESCOLHER A OPERAÇÃO', at: 32.58}, {text: 'ENCONTRAR A RESPOSTA', at: 33.86}]},
    {t: 'badges', from: 35.46, to: 38.78, title: '3º, 4º E 5º ANO', items: serie(36.64, 37.2, 37.86)},
    {t: 'stars', from: 38.78, to: 40.54},
    {t: 'selo', from: 40.54, to: 42.36, text: '✓ GABARITO COMENTADO'},
    {t: 'selo', from: 44.22, to: 46.38, text: 'É SÓ ESCOLHER E IMPRIMIR'},
    {t: 'cta', from: 46.38, to: 50.4, phrase: 'TENHA ACESSO ÀS 30 MISSÕES'},
  ],
  hide: [],
  sfx: [{at: 0, name: 'impact'}, {at: 9.28, name: 'pop'}, {at: 10.38, name: 'pop'}, {at: 20.88, name: 'boom'},
    {at: 30.68, name: 'pop'}, {at: 31.56, name: 'pop'}, {at: 32.58, name: 'pop'}, {at: 33.86, name: 'pop'},
    {at: 36.64, name: 'pop'}, {at: 37.2, name: 'pop'}, {at: 37.86, name: 'pop'}, {at: 38.78, name: 'pop'}, {at: 48.56, name: 'ding'}],
};

// C03 — audio c5 — "Você também já passou a noite procurando atividades..."
export const C03: Config = {
  audio: 'audio/c5.mp3', words: c5 as any, music: 'audio/786.mp3', musicVol: 0.033, dur: 52.9,
  keys: ['BIBLIOTECA', 'MISSÃO', 'HISTÓRIA', 'INTERPRETAR', 'DESAFIOS', 'IMPRIME', 'IMPRIMIR'],
  scenes: [
    S(0, 3.44, T(17450)), S(3.44, 6.46, T(1793), {zoomIn: false}), S(6.46, 8.78, T(1781)), S(8.78, 11.14, T(14669)),
    S(11.14, 14.48, T(3819), {zoomIn: false}), S(14.48, 16.82, T(28897)), S(16.82, 19.5, T(28901), {zoomIn: false}), S(19.5, 21.2, T(50726)),
    S(21.2, 23.72, T(6363)), S(23.72, 25.96, T(25260)), S(25.96, 28.36, HORTA, {focusY: 22}), S(28.36, 29.88, FEIRA),
    S(29.88, 32.26, T(42185), {zoomIn: false}), S(32.26, 33.32, T(21623)), S(33.32, 35.8, CAPSULA), S(35.8, 37.84, HORTA, {zoomIn: false}),
    S(37.84, 38.96, GAB), S(38.96, 41.72, T(47242)), S(41.72, 44.16, T(6363), {startFrom: 200}), S(44.16, 46.02, T(25260), {startFrom: 300}),
  ],
  overlays: [
    {t: 'hook', from: 0, to: 6.46, lines: ['PASSOU A NOITE', 'PROCURANDO'], highlight: 'ATIVIDADES DIFERENTES?'},
    {t: 'check', from: 8.78, to: 14.48, mark: '✕', size: 62, items: [{text: 'NÃO SERVE PARA A SUA SÉRIE', at: 8.78}, {text: 'PRECISA ADAPTAR', at: 11.14}, {text: 'NÃO TEM GABARITO', at: 12.9}]},
    {t: 'selo', from: 15.68, to: 19.5, text: 'UM TEMPÃO PERDIDO'},
    {t: 'counter', from: 21.2, to: 23.72, value: 30, label: 'MISSÕES DE MATEMÁTICA PRONTAS'},
    {t: 'selo', from: 25.96, to: 28.36, text: 'CADA MISSÃO TRAZ UMA HISTÓRIA'},
    {t: 'badges', from: 33.32, to: 35.8, title: 'DO 3º AO 5º ANO', items: serie(34.18, 34.5, 34.86)},
    {t: 'stars', from: 35.8, to: 37.84},
    {t: 'selo', from: 37.84, to: 38.96, text: '✓ GABARITO COMENTADO'},
    {t: 'selo', from: 38.96, to: 41.72, text: '✓ ROTEIRO DE APLICAÇÃO'},
    {t: 'brand', from: 46.02, to: 49.78},
    {t: 'price', from: 47.68, to: 49.78, price: 'R$ 17,90', at: 48.0},
    {t: 'cta', from: 49.78, to: 52.9, phrase: 'CONHEÇA AS 30 MISSÕES', price: 'R$ 17,90'},
  ],
  hide: [],
  sfx: [{at: 0, name: 'impact'}, {at: 8.78, name: 'pop'}, {at: 11.14, name: 'pop'}, {at: 12.9, name: 'pop'},
    {at: 34.18, name: 'pop'}, {at: 34.5, name: 'pop'}, {at: 34.86, name: 'pop'}, {at: 35.8, name: 'pop'}, {at: 46.02, name: 'boom'}, {at: 48.0, name: 'impact'}, {at: 50.2, name: 'ding'}],
};

// C04 — audio c3 — "E se, para resolver um mistério..."
export const C04: Config = {
  audio: 'audio/c3.mp3', words: c3 as any, music: 'audio/671.mp3', musicVol: 0.07, dur: 49.6,
  keys: ['MISTÉRIO', 'INVESTIGAÇÃO', 'INTERPRETAR', 'OPERAÇÕES', 'PRATICANDO', 'MISSÃO'],
  scenes: [
    S(0, 3.46, T(21612)), S(3.46, 6.58, T(4616), {zoomIn: false}), S(6.58, 7.68, T(47241)), S(7.68, 10.42, HORTA, {focusY: 22}),
    S(10.42, 13.48, T(21623)), S(13.48, 15.16, T(21612), {startFrom: 120}), S(15.16, 17.3, T(21626), {startFrom: 100}), S(17.3, 18.52, T(42187)),
    S(18.52, 21.22, FEIRA, {focusY: 40}), S(21.22, 23.22, T(34126), {startFrom: 200}), S(23.22, 25.68, T(42185)), S(25.68, 28.08, CAPSULA, {zoomIn: false}),
    S(28.08, 30.16, T(48298)), S(30.16, 31.94, T(46423)), S(31.94, 33.58, T(1781), {zoomIn: false}), S(33.58, 35.22, T(45564)),
    S(36.88, 39.2, T(25260)), S(39.2, 41.14, HORTA), S(41.14, 44.22, GAB, {zoomIn: false}), S(44.22, 46.78, T(28901)),
  ],
  overlays: [
    {t: 'hook', from: 0, to: 6.58, lines: ['E SE, PARA RESOLVER', 'UM MISTÉRIO,'], highlight: 'PRECISASSEM INTERPRETAR?'},
        {t: 'check', from: 9.64, to: 13.48, mark: '✓', items: [{text: 'HISTÓRIA', at: 9.64}, {text: 'PISTAS', at: 10.42}, {text: 'DESAFIOS', at: 10.96}]},
    {t: 'big', from: 13.48, to: 15.16, text: 'SÓ QUE EXISTE UM DETALHE...'},
    {t: 'selo', from: 18.52, to: 23.22, text: 'ENCONTRAR A OPERAÇÃO CERTA'},
    {t: 'selo', from: 30.84, to: 35.22, text: '✕ HORAS INVENTANDO HISTÓRIAS'},
    {t: 'brand', from: 35.22, to: 36.88},
    {t: 'counter', from: 36.88, to: 39.2, value: 30, label: 'MISSÕES PRONTAS PARA IMPRIMIR'},
    {t: 'stars', from: 39.2, to: 41.14},
    {t: 'selo', from: 41.14, to: 44.22, text: '✓ GABARITO COMENTADO'},
    {t: 'selo', from: 44.22, to: 46.78, text: '✕ CRIAR QUESTÕES DO ZERO'},
    {t: 'cta', from: 46.78, to: 49.6, phrase: 'VEJA COMO FUNCIONA'},
  ],
  hide: [],
  sfx: [{at: 0, name: 'impact'}, {at: 9.64, name: 'pop'}, {at: 10.42, name: 'pop'}, {at: 10.96, name: 'pop'}, {at: 13.48, name: 'boom'},
    {at: 35.22, name: 'boom'}, {at: 39.2, name: 'pop'}, {at: 47.18, name: 'ding'}],
};

// C05 — audio c4 — "É de mais ou de vezes?"
export const C05: Config = {
  audio: 'audio/c4.mp3', words: c4 as any, music: 'audio/830.mp3', musicVol: 0.041, dur: 43.9,
  keys: ['CONTINHAS', 'INTERPRETAR', 'MISTÉRIO', 'HISTÓRIA', 'DECIDE', 'MISSÃO'],
  scenes: [
    S(0, 2.42, T(20235)), S(2.42, 4.38, T(14782), {zoomIn: false}), S(4.38, 5.92, T(3819)), S(5.92, 7.7, T(45564), {zoomIn: false}),
    S(7.7, 13.78, T(47242)), S(13.78, 15.48, T(1793)), S(15.48, 17.52, T(17450), {zoomIn: false}), S(17.52, 18.5, T(48298)),
    S(18.5, 20.52, T(20468)), S(20.52, 22.48, T(34126), {zoomIn: false}), S(22.48, 24.62, T(4616)), S(24.62, 26.3, T(21588)),
    S(27.48, 29.94, CAPSULA, {focusY: 22}), S(29.94, 31.8, FEIRA, {zoomIn: false}), S(31.8, 33.74, T(42185)), S(33.74, 37.12, T(21612)),
    S(37.12, 38.92, T(15841)), S(38.92, 40.78, T(50726), {zoomIn: false}),
  ],
  overlays: [
    {t: 'hook', from: 0, to: 4.38, lines: ['"É DE MAIS OU', 'DE VEZES?"'], highlight: 'SUA TURMA TAMBÉM PERGUNTA?'},
    {t: 'op', from: 7.7, to: 13.78, chuteAt: 11.18, certoAt: 12.46},
    {t: 'big', from: 17.52, to: 18.5, text: 'NÃO É.'},
    {t: 'selo', from: 18.5, to: 22.48, text: '✕ LISTA DE CONTINHAS'},
    {t: 'brand', from: 26.3, to: 27.48},
    {t: 'selo', from: 29.94, to: 33.74, text: 'NINGUÉM DIZ A CONTA'},
    {t: 'counter', from: 33.74, to: 36.3, value: 30, label: 'MISTÉRIOS PARA A TURMA DESVENDAR'},
    {t: 'cta', from: 40.78, to: 43.9, phrase: 'VEJA UMA MISSÃO POR DENTRO'},
  ],
  hide: [],
  sfx: [{at: 0, name: 'impact'}, {at: 7.7, name: 'pop'}, {at: 11.18, name: 'pop'}, {at: 12.46, name: 'ding'}, {at: 17.52, name: 'impact'}, {at: 26.3, name: 'boom'}, {at: 41.18, name: 'ding'}],
};

// Variações do C04: troca só o gancho; o resto do C04 é deslocado no tempo (corte do áudio c3 em 6,10 s)
import h2 from './data/c04-hook2.json';
import h3 from './data/c04-hook3.json';
const BODY = 6.58; // "Funciona assim" no C04 original
const shiftC04 = (delta: number, words: any, audio: string, intro: Config['scenes'], hook: Config['overlays'][0], introSfx: Config['sfx']): Config => {
  const sh = (t: number) => +(t + delta).toFixed(3);
  return {
    ...C04, audio, words, dur: sh(C04.dur),
    scenes: [...intro, ...C04.scenes.filter((s) => s.from >= BODY).map((s) => ({...s, from: sh(s.from), to: sh(s.to)}))],
    overlays: [hook, ...C04.overlays.filter((o) => o.from >= BODY).map((o: any) => ({...o, from: sh(o.from), to: sh(o.to),
      ...(o.items ? {items: o.items.map((i: any) => ({...i, at: sh(i.at)}))} : {}), ...(o.at ? {at: sh(o.at)} : {}), ...(o.atB ? {atB: sh(o.atB)} : {}),
      ...(o.chuteAt ? {chuteAt: sh(o.chuteAt), certoAt: sh(o.certoAt)} : {})}))],
    sfx: [...introSfx, ...C04.sfx.filter((x) => x.at >= BODY).map((x) => ({...x, at: sh(x.at)}))],
  };
};
// Hook 2 — "Isso aqui parece uma investigação de mistério, mas na verdade é uma atividade de matemática para crianças." (body em +0,431 s)
export const C04H2: Config = shiftC04(0.431, h2, 'audio/c04-hook2.wav',
  [S(0, 2.88, T(21612)), S(2.88, 7.011, T(34126), {zoomIn: false})],
  {t: 'hook', from: 0, to: 7.011, lines: ['PARECE UMA', 'INVESTIGAÇÃO', 'DE MISTÉRIO...'], highlight: 'MAS É UMA ATIVIDADE|DE MATEMÁTICA!', highlightAt: 2.88},
  [{at: 0, name: 'impact'}, {at: 2.88, name: 'pop'}]);
// Hook 3 — "Esqueça seus alunos como estudantes, a partir de agora eles serão detetives." (body em −0,771 s)
export const C04H3: Config = shiftC04(-0.771, h3, 'audio/c04-hook3.wav',
  [S(0, 2.68, T(20235)), S(2.68, 5.809, T(21612), {zoomIn: false})],
  {t: 'hook', from: 0, to: 5.809, lines: ['ESQUEÇA SEUS', 'ALUNOS COMO', 'ESTUDANTES...'], highlight: 'AGORA ELES SERÃO|DETETIVES!', highlightAt: 2.68},
  [{at: 0, name: 'impact'}, {at: 2.68, name: 'pop'}]);
