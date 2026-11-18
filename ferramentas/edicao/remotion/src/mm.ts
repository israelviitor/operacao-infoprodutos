// Math Missions (pais, en-US) — criativos em vídeo. Áudios do Drive "Audios para Ads": Audio C0N → MM0N.
import {Config} from './Criativo';
import mm01 from './data/mm01.json';
import mm02 from './data/mm02.json';
import mm03 from './data/mm03.json';
import mm04 from './data/mm04.json';
import mm05 from './data/mm05.json';
import mm06 from './data/mm06.json';
import mm07 from './data/mm07.json';

const T = (id: number | string) => `takes/${id}.mp4`;
const GUIA = 'mm/guia.png', CARTAO = 'mm/cartao.png', COOKIE = 'mm/cookie.png', TESOURO = 'mm/tesouro.png';
const E = (n: string) => `mm/est/${n}.png`; // páginas en-US da Estrutura
const S = (from: number, to: number, src: string, x: Partial<Config['scenes'][0]> = {}) => ({from, to, src, ...x});
// tempos (s) das primeiras n palavras faladas a partir da palavra i
const wt = (w: any[], i: number, n: number) => w.slice(i, i + n).map((x) => x.s);
const base = {lang: 'en' as const, brandImg: GUIA, hide: [] as [number, number][]};

// MM01 — Learning from Singapore (gancho gravado: variação 2)
export const MM01: Config = {
  ...base, audio: 'audio/mm01.mp3', words: mm01 as any, music: 'audio/729.mp3', musicVol: 0.043, dur: 51.0,
  keys: ['SINGAPORE', 'NUMBERS', 'DRAWINGS', 'MISSIONS', 'MYSTERY', 'CLUES', 'DRAWS', 'LEARNING', 'SENSE', 'GUIDE', 'UNDERSTANDING'],
  scenes: [
    S(0, 2.66, T('m34170')), S(2.66, 4.88, T(14782), {zoomIn: false}), S(4.88, 7.18, T('m50109')), S(7.18, 8.68, T(4326), {zoomIn: false}),
    S(8.68, 11.72, T(47242)), S(11.72, 13.16, T('m30964')), S(13.16, 15.72, T('m20173'), {zoomIn: false}), S(15.72, 20.38, GUIA, {focusY: 70}),
    S(20.38, 23.98, CARTAO, {focusY: 30, zoomIn: false}), S(23.98, 26.6, T(45564)), S(28.6, 30.8, T(25260)), S(30.8, 36.7, T(21612), {zoomIn: false}),
    S(36.7, 38.72, TESOURO), S(38.72, 40.2, COOKIE, {focusY: 20, zoomIn: false}), S(40.2, 42.5, GUIA, {focusY: 40}), S(42.5, 44.92, T(42185)), S(44.92, 47.36, T(21626), {startFrom: 120, zoomIn: false}),
  ],
  overlays: [
    {t: 'hookk', from: 0, to: 4.88, lines: ['BEFORE YOU', 'PUSH YOUR', 'CHILD TO DO', 'MORE MATH...'], times: wt(mm01 as any, 0, 9), emph: ['PUSH', 'MORE', 'MATH'], hl: ['GET TO KNOW THIS', 'WAY OF LEARNING'], hlTimes: wt(mm01 as any, 9, 7)},
    {t: 'bar', from: 9.2, to: 11.72, total: '20', parts: [{label: '12', w: 0.6, at: 9.66}, {label: '8', w: 0.4, at: 10.0}]},
    {t: 'big', from: 13.16, to: 15.72, text: 'SINGAPORE', sub: '#1 IN THE WORLD'},
    {t: 'brand', from: 26.6, to: 28.6},
    {t: 'counter', from: 28.6, to: 30.8, value: 30, label: 'MYSTERY MISSIONS'},
    {t: 'check', from: 31.36, to: 36.7, mark: '✓', size: 66, items: [{text: 'READS THE CLUES', at: 31.36}, {text: 'DRAWS THE PROBLEMS', at: 32.56}, {text: 'CRACKS EACH CASE', at: 35.2}]},
    {t: 'stars', from: 36.7, to: 38.72},
    {t: 'selo', from: 40.2, to: 42.5, text: '✓ PARENT GUIDE'},
    {t: 'cta', from: 47.36, to: 51.0, phrase: 'HELP YOUR CHILD BECOME #1'},
  ],
  sfx: [{at: 0, name: 'impact'}, {at: 2.66, name: 'pop'}, {at: 9.66, name: 'pop'}, {at: 10.0, name: 'pop'}, {at: 13.16, name: 'impact', vol: 0.3}, {at: 26.6, name: 'boom'},
    {at: 31.36, name: 'pop'}, {at: 32.56, name: 'pop'}, {at: 35.2, name: 'pop'}, {at: 36.7, name: 'pop'}, {at: 47.6, name: 'ding'}],
};

// MM02 — "I'm bad at math" (gancho gravado: variação 3)
export const MM02: Config = {
  ...base, audio: 'audio/mm02.mp3', words: mm02 as any, music: 'audio/822.mp3', musicVol: 0.038, dur: 54.5,
  keys: ['VISUALIZE', 'DRAWINGS', 'MISSIONS', 'MYSTERY', 'LETTER', 'CLUE', 'UNDERSTAND', 'SIMPLE', 'ANSWER'],
  scenes: [
    S(0, 2.82, T('m5927')), S(2.82, 6.06, T(14782), {zoomIn: false}), S(6.06, 7.64, T('m50116')), S(7.64, 9.9, T(6363)),
    S(9.9, 12.82, T('m5927'), {startFrom: 120, zoomIn: false}), S(12.82, 15.1, T(20235)), S(15.1, 18.9, T('m34170'), {zoomIn: false}), S(18.9, 20.5, T(47241)),
    S(20.5, 22.74, T(47242)), S(24.94, 28.34, CARTAO, {focusY: 25}), S(28.34, 31.76, E('cookie-p3'), {focusY: 30, zoomIn: false}), S(31.76, 33.48, E('cookie-key'), {focusY: 20}),
    S(33.48, 36.84, T(21612)), S(36.84, 41.06, T(47242), {startFrom: 200, zoomIn: false}), S(41.06, 44.34, TESOURO, {focusY: 30}), S(44.34, 47.06, T('m50109')), S(47.06, 50.58, T('m42182'), {zoomIn: false}),
  ],
  overlays: [
    {t: 'hookk', from: 0, to: 6.06, lines: ['WHEN YOUR', 'CHILD SAYS', '"I CAN\'T"...'], times: wt(mm02 as any, 0, 6), emph: ["CAN'T", 'I'], hl: ["MAYBE THEY JUST HAVEN'T", 'FOUND A WAY THAT', 'MAKES SENSE YET'], hlTimes: wt(mm02 as any, 6, 11)},
    {t: 'continhas', from: 7.64, to: 9.9, marks: [{at: 7.7, kind: 'x', row: 1}, {at: 8.12, kind: 'x', row: 3}, {at: 8.68, kind: 'x', row: 5}, {at: 9.2, kind: 'x', row: 6}]},
    {t: 'selo', from: 15.1, to: 18.9, text: '✕ "TRY ONE MORE TIME"'},
    {t: 'bar', from: 20.5, to: 22.74, total: '15', parts: [{label: '9', w: 0.6, at: 21.14}, {label: '?', w: 0.4, at: 21.58, q: true}]},
    {t: 'brand', from: 22.74, to: 24.94},
    {t: 'selo', from: 31.76, to: 33.48, text: '✓ THE RIGHT ANSWER'},
    {t: 'code', from: 36.84, to: 41.06, word: 'NANA', wrong: {idx: 2, letter: 'X', fixAt: 39.5}, at: [37.14, 37.5, 37.94, 38.2]},
    {t: 'cta', from: 50.58, to: 54.5, phrase: 'DISCOVER THIS WAY OF PRACTICING MATH'},
  ],
  sfx: [{at: 0, name: 'impact'}, {at: 2.82, name: 'pop'}, {at: 8.12, name: 'pop'}, {at: 21.14, name: 'pop'}, {at: 21.58, name: 'pop'}, {at: 22.74, name: 'boom'},
    {at: 37.14, name: 'pop'}, {at: 37.5, name: 'pop'}, {at: 37.94, name: 'pop'}, {at: 38.2, name: 'pop'}, {at: 39.5, name: 'ding'}, {at: 50.9, name: 'ding'}],
};

// MM03 — Less strain on your routine (gancho gravado: variação 1)
export const MM03: Config = {
  ...base, audio: 'audio/mm03.mp3', words: mm03 as any, music: 'audio/786.mp3', musicVol: 0.038, dur: 49.3,
  keys: ['PATIENCE', 'ORGANIZED', 'STORY', 'CLUES', 'DRAW', 'CODE', 'WORD', 'REASONING', 'GUIDE', 'GRADES'],
  scenes: [
    S(0, 1.82, T('m4601')), S(1.82, 4.5, T('cv_noite'), {zoomIn: false}), S(4.5, 6.8, T('m50114')), S(6.8, 9.86, T('m5927'), {zoomIn: false}),
    S(9.86, 11.56, T(17450)), S(11.56, 13.42, T(28901), {zoomIn: false}), S(14.38, 17.2, T('cv_desk')), S(17.2, 18.38, E('treasure-p2'), {focusY: 20}),
    S(18.38, 23.9, T(21626), {startFrom: 120, zoomIn: false}), S(23.9, 30.26, T(47242)), S(30.26, 33.54, T('m34170'), {zoomIn: false}), S(33.54, 36.76, E('guide-p5'), {focusY: 30}),
    S(36.76, 38.72, E('cookie-key'), {focusY: 25, zoomIn: false}), S(38.72, 41.58, T(1781)), S(41.58, 44.74, T(1793), {zoomIn: false}),
  ],
  overlays: [
    {t: 'hookk', from: 0, to: 4.5, lines: ["YOU SHOULDN'T", 'NEED TO BECOME', 'A TEACHER...'], times: wt(mm03 as any, 0, 7), emph: ['TEACHER'], hl: ['FOR YOUR CHILD TO', 'PRACTICE MATH AT HOME'], hlTimes: wt(mm03 as any, 7, 8)},
    {t: 'brand', from: 13.42, to: 14.38},
    {t: 'check', from: 18.38, to: 23.9, mark: '✓', size: 66, items: [{text: 'A STORY', at: 18.38}, {text: 'CLUES', at: 19.1}, {text: 'DRAW BEFORE CALCULATING', at: 21.38}]},
    {t: 'code', from: 23.9, to: 30.26, word: 'LAKE', wrong: {idx: 1, letter: 'X', fixAt: 28.48}, at: [24.18, 24.64, 24.98, 25.3]},
    {t: 'selo', from: 35.18, to: 38.72, text: '✓ PARENT GUIDE + ANSWER KEYS'},
    {t: 'cta', from: 44.74, to: 49.3, phrase: "SEE HOW TO RAISE YOUR CHILD'S GRADES"},
  ],
  sfx: [{at: 0, name: 'impact'}, {at: 1.82, name: 'pop'}, {at: 13.42, name: 'boom'}, {at: 18.38, name: 'pop'}, {at: 19.1, name: 'pop'}, {at: 21.38, name: 'pop'},
    {at: 24.18, name: 'pop'}, {at: 24.64, name: 'pop'}, {at: 24.98, name: 'pop'}, {at: 25.3, name: 'pop'}, {at: 28.48, name: 'ding'}, {at: 45.0, name: 'ding'}],
};

// MM04 — An alternative to screens (gancho gravado: variação 2)
export const MM04: Config = {
  ...base, audio: 'audio/mm04.mp3', words: mm04 as any, music: 'audio/671.mp3', musicVol: 0.082, dur: 46.8,
  keys: ['COOKIES', 'SAFE', 'TREASURE', 'MYSTERIES', 'CLUES', 'DRAWINGS', 'SINGAPORE', 'SECRET', 'WORD', 'DISCOVERY', 'PRINT'],
  scenes: [
    S(0, 1.96, T(14669)), S(1.96, 5.1, T('m50116'), {zoomIn: false}), S(5.1, 6.82, COOKIE, {focusY: 15}), S(6.82, 8.52, E('cookie-p2'), {focusY: 30, zoomIn: false}),
    S(8.52, 11.12, TESOURO, {focusY: 15}), S(11.12, 13.64, T(21612), {zoomIn: false}), S(13.64, 18.72, T('m34170')), S(20.74, 22.86, T(25260)),
    S(22.86, 24.88, E('robot-p2'), {focusY: 30, zoomIn: false}), S(24.88, 27.5, T('m30964')), S(27.5, 30.38, T('m20173'), {zoomIn: false}), S(30.38, 33.54, T(47242)),
    S(33.54, 37.98, T(42185), {zoomIn: false}), S(37.98, 39.64, T('cv_typing')), S(39.64, 41.1, T('cv_printer'), {zoomIn: false}), S(41.1, 43.02, T(6363)),
  ],
  overlays: [
    {t: 'hookk', from: 0, to: 5.1, lines: ['SWAP A FEW', 'MINUTES OF', 'SCREEN TIME...'], times: wt(mm04 as any, 0, 7), emph: ['SWAP', 'SCREEN', 'TIME'], hl: ['FOR CLUES, DRAWINGS,', 'AND DISCOVERIES'], hlTimes: wt(mm04 as any, 7, 5)},
    {t: 'check', from: 13.64, to: 18.72, mark: '✓', size: 66, items: [{text: 'INTERPRET CLUES', at: 13.64}, {text: 'DRAW THE PROBLEMS', at: 14.96}, {text: 'FIND THE ANSWERS', at: 17.18}]},
    {t: 'brand', from: 18.72, to: 20.74},
    {t: 'counter', from: 20.74, to: 22.86, value: 30, label: 'PRINTABLE MISSIONS'},
    {t: 'stars', from: 22.86, to: 24.88},
    {t: 'big', from: 27.5, to: 30.38, text: 'SINGAPORE', sub: '#1 IN MATH'},
    {t: 'code', from: 30.38, to: 35.78, word: 'NANA', wrong: {idx: 3, letter: 'X', fixAt: 34.5}, at: [30.68, 31.06, 31.48, 31.78]},
    {t: 'cta', from: 43.02, to: 46.8, phrase: 'MEET THE 30 MYSTERY MISSIONS'},
  ],
  sfx: [{at: 0, name: 'impact'}, {at: 1.96, name: 'pop'}, {at: 13.64, name: 'pop'}, {at: 14.96, name: 'pop'}, {at: 17.18, name: 'pop'}, {at: 18.72, name: 'boom'}, {at: 22.86, name: 'pop'},
    {at: 27.5, name: 'impact', vol: 0.3}, {at: 30.68, name: 'pop'}, {at: 31.06, name: 'pop'}, {at: 31.48, name: 'pop'}, {at: 31.78, name: 'pop'}, {at: 34.5, name: 'ding'}, {at: 43.34, name: 'ding'}],
};

// MM05 — Parents who haven't mastered math (gancho principal)
export const MM05: Config = {
  ...base, audio: 'audio/mm05.mp3', words: mm05 as any, music: 'audio/830.mp3', musicVol: 0.042, dur: 46.4,
  keys: ['MEMORIZING', 'RULES', 'INSECURITY', 'ORGANIZED', 'SCRATCH', 'MYSTERY', 'DRAW', 'GUIDE', 'STUCK', 'EXPLANATIONS'],
  scenes: [
    S(0, 1.76, T('cv_noite')), S(1.76, 4.76, T(34126), {zoomIn: false}), S(4.76, 7.26, T(20468)), S(7.26, 10.06, T(4616), {zoomIn: false}),
    S(10.06, 12.76, T('m50114')), S(12.76, 14.78, T('cv_studying'), {zoomIn: false}), S(16.0, 18.7, E('guide-p1'), {focusY: 25}), S(18.7, 20.92, E('cookie-adult'), {focusY: 20, zoomIn: false}),
    S(20.92, 22.0, T('m34170')), S(22.0, 24.1, T(21612), {zoomIn: false}), S(24.1, 26.98, CARTAO, {focusY: 25}), S(26.98, 30.88, GUIA, {focusY: 35, zoomIn: false}),
    S(30.88, 32.82, E('guide-p5'), {focusY: 30}), S(32.82, 35.2, E('cookie-key'), {focusY: 25, zoomIn: false}), S(35.2, 37.62, T('m50109')), S(37.62, 42.52, T(6363), {zoomIn: false}),
  ],
  overlays: [
    {t: 'hookk', from: 0, to: 4.76, lines: ["YOU DON'T NEED", 'TO BE GOOD', 'AT MATH...'], times: wt(mm05 as any, 0, 8), emph: ['GOOD', 'MATH'], hl: ['TO OFFER YOUR CHILD', 'A DIFFERENT WAY OF LEARNING'], hlTimes: wt(mm05 as any, 8, 9)},
    {t: 'brand', from: 14.78, to: 16.0},
    {t: 'counter', from: 22.0, to: 24.1, value: 30, label: 'MYSTERY MISSIONS'},
    {t: 'selo', from: 26.98, to: 30.88, text: '✓ A GUIDE THAT EXPLAINS THE APPROACH'},
    {t: 'selo', from: 32.82, to: 35.2, text: '✓ ANSWER KEYS WITH EXPLANATIONS'},
    {t: 'check', from: 37.62, to: 42.52, mark: '✓', size: 66, items: [{text: 'CHOOSE THE MISSION', at: 38.14}, {text: 'LET THEM TRY', at: 39.26}, {text: 'CHECK THE SUPPORT', at: 40.54}]},
    {t: 'cta', from: 42.52, to: 46.4, phrase: 'SEE EVERYTHING THAT COMES WITH MATH MISSIONS'},
  ],
  sfx: [{at: 0, name: 'impact'}, {at: 1.76, name: 'pop'}, {at: 14.78, name: 'boom'}, {at: 38.14, name: 'pop'}, {at: 39.26, name: 'pop'}, {at: 40.54, name: 'pop'}, {at: 42.8, name: 'ding'}],
};

// MM06 — Visual demonstration (gancho gravado: variação 2)
export const MM06: Config = {
  ...base, audio: 'audio/mm06.mp3', words: mm06 as any, music: 'audio/799.mp3', musicVol: 0.033, dur: 50.4,
  keys: ['BAR', 'COOKIES', 'MISSING', 'SEVEN', 'SINGAPORE', 'REASONING', 'MYSTERY', 'CLUES', 'SECRET', 'DRAWING', 'TOTAL', 'DISAPPEARED'],
  scenes: [
    S(0, 1.92, E('cookie-p3'), {focusY: 30}), S(1.92, 3.94, T(14782), {zoomIn: false}), S(3.94, 8.36, COOKIE, {focusY: 15}), S(8.36, 10.26, T(47242), {zoomIn: false}),
    S(10.26, 12.54, T(34126)), S(12.54, 22.3, T(47242), {startFrom: 150}), S(22.3, 33.86, T('m50109'), {zoomIn: false}), S(33.86, 36.02, T('m30964')),
    S(36.02, 39.52, T('m20173'), {zoomIn: false}), S(40.72, 43.64, E('cookie-p2'), {focusY: 30}), S(43.64, 46.68, T(21612), {zoomIn: false}),
  ],
  overlays: [
    {t: 'hookk', from: 0, to: 3.94, lines: ['LOOK WHAT', 'HAPPENS WHEN', 'WE TURN THIS', 'PROBLEM...'], times: wt(mm06 as any, 0, 8), emph: ['LOOK', 'PROBLEM'], hl: ['INTO A DRAWING'], hlTimes: wt(mm06 as any, 8, 3)},
    {t: 'big', from: 8.36, to: 10.26, text: 'HOW MANY DISAPPEARED?'},
    {t: 'bar', from: 12.54, to: 33.86, title: 'COOKIES IN THE TIN', total: '20', parts: [{label: '13 LEFT', w: 0.65, at: 15.46}, {label: '?', w: 0.35, at: 18.82, q: true}], answer: {text: '20 − 13 = 7', at: 30.12}},
    {t: 'big', from: 36.02, to: 39.52, text: 'SINGAPORE', sub: '#1 IN MATH'},
    {t: 'brand', from: 39.52, to: 40.72},
    {t: 'code', from: 43.64, to: 46.68, word: 'NANA', wrong: {idx: 2, letter: 'X', fixAt: 45.54}, at: [44.12, 44.48, 44.92, 45.2]},
    {t: 'cta', from: 46.68, to: 50.4, phrase: 'HELP YOUR CHILD BECOME #1'},
  ],
  sfx: [{at: 0, name: 'impact'}, {at: 2.38, name: 'pop'}, {at: 8.36, name: 'impact', vol: 0.3}, {at: 12.54, name: 'pop'}, {at: 15.46, name: 'pop'}, {at: 18.82, name: 'pop'}, {at: 30.12, name: 'ding'},
    {at: 36.02, name: 'impact', vol: 0.3}, {at: 39.52, name: 'boom'}, {at: 44.12, name: 'pop'}, {at: 44.48, name: 'pop'}, {at: 44.92, name: 'pop'}, {at: 45.2, name: 'pop'}, {at: 45.54, name: 'ding'}, {at: 46.98, name: 'ding'}],
};

// MM07 — Desire for the product (gancho gravado: variação 3) — fala o preço e a garantia
export const MM07: Config = {
  ...base, audio: 'audio/mm07.mp3', words: mm07 as any, music: 'audio/565.mp3', musicVol: 0.053, dur: 51.8,
  keys: ['TREASURE', 'CAMPSITE', 'GOLD', 'CLUES', 'CHALLENGES', 'COINS', 'LETTER', 'DRAWINGS', 'BONUSES', 'GUARANTEE', 'TRAIL'],
  scenes: [
    S(0, 2.24, T(21626), {startFrom: 150}), S(2.24, 4.24, TESOURO, {focusY: 15, zoomIn: false}), S(4.24, 7.76, E('treasure-p2'), {focusY: 20}), S(7.76, 10.38, T(21623), {zoomIn: false}),
    S(10.38, 13.14, T(21612)), S(13.14, 15.38, E('treasure-p3'), {focusY: 25, zoomIn: false}), S(15.38, 19.68, T(47242)), S(19.68, 24.34, T(15841), {zoomIn: false}),
    S(26.72, 28.5, T(21626), {startFrom: 300}), S(28.5, 32.04, T('m34170'), {zoomIn: false}), S(32.04, 35.82, CARTAO, {focusY: 25}), S(35.82, 37.86, E('robot-p2'), {focusY: 30, zoomIn: false}),
    S(37.86, 39.18, T('cv_printer')), S(39.18, 41.14, GUIA, {focusY: 35, zoomIn: false}),
  ],
  overlays: [
    {t: 'hookk', from: 0, to: 4.24, lines: ["YOUR CHILD'S", 'NEXT CHALLENGE', 'CAN START...'], times: wt(mm07 as any, 0, 6), emph: ['NEXT', 'CHALLENGE'], hl: ['WITH A MISSING', 'TREASURE'], hlTimes: wt(mm07 as any, 6, 4)},
    {t: 'bar', from: 15.38, to: 19.68, title: 'GOLD COINS', total: '60', parts: [{label: '35', w: 0.58, at: 15.66}, {label: '17', w: 0.28, at: 15.92}, {label: '?', w: 0.14, at: 16.96, q: true}], answer: {text: '8 LEFT', at: 17.34}},
    {t: 'code', from: 19.68, to: 24.34, word: 'LAKE', wrong: {idx: 1, letter: 'X', fixAt: 22.44}, at: [19.68, 20.0, 20.3, 20.7]},
    {t: 'brand', from: 24.34, to: 26.72},
    {t: 'check', from: 28.5, to: 32.04, mark: '✓', size: 66, items: [{text: 'INTERPRETATION', at: 28.9}, {text: 'REASONING', at: 30.36}, {text: 'MATH', at: 31.12}]},
    {t: 'stars', from: 35.82, to: 37.86},
    {t: 'brand', from: 41.14, to: 48.12},
    {t: 'price', from: 43.2, to: 46.6, price: '$9.90', at: 43.78, label: 'COMPLETE KIT + 4 BONUSES'},
    {t: 'price', from: 46.6, to: 48.12, price: '$9.90', at: 46.6, label: '✓ 30-DAY GUARANTEE'},
    {t: 'cta', from: 48.12, to: 51.8, phrase: 'GIVE YOUR CHILD THEIR FIRST MISSION', price: '$9.90'},
  ],
  sfx: [{at: 0, name: 'impact'}, {at: 2.48, name: 'pop'}, {at: 15.66, name: 'pop'}, {at: 15.92, name: 'pop'}, {at: 17.34, name: 'ding'}, {at: 19.68, name: 'pop'}, {at: 20.0, name: 'pop'}, {at: 20.3, name: 'pop'}, {at: 20.7, name: 'pop'},
    {at: 22.44, name: 'ding'}, {at: 24.34, name: 'boom'}, {at: 28.9, name: 'pop'}, {at: 30.36, name: 'pop'}, {at: 31.12, name: 'pop'}, {at: 35.82, name: 'pop'}, {at: 43.78, name: 'impact'}, {at: 48.44, name: 'ding'}],
};
