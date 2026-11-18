// Math Missions (pais, en-US) — criativos em vídeo. Áudios do Drive "Audios para Ads": Audio C0N → MM0N.
import {Config} from './Criativo';
import mm01 from './data/mm01.json';

const T = (id: number | string) => `takes/${id}.mp4`;
const GUIA = 'mm/guia.png', CARTAO = 'mm/cartao.png', COOKIE = 'mm/cookie.png', TESOURO = 'mm/tesouro.png';
const S = (from: number, to: number, src: string, x: Partial<Config['scenes'][0]> = {}) => ({from, to, src, ...x});
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
    {t: 'hook', from: 0, to: 4.88, lines: ['BEFORE YOU PUSH', 'YOUR CHILD TO DO', 'MORE MATH...'], highlight: 'GET TO KNOW THIS|WAY OF LEARNING', highlightAt: 2.66},
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
