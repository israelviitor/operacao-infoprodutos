// Idioma e imagem da marca do vídeo em renderização (definidos pelo Criativo antes de renderizar)
let LANG: 'pt' | 'en' = 'pt';
let BRAND_IMG = 'folhas/mockup-basico.png';
let BRAND_NAME: [string, string] = ['MATEMÁTICA', 'EM MISSÃO'];
export const setLocale = (lang: 'pt' | 'en' = 'pt', brandImg?: string, brandName?: [string, string]) => {
  LANG = lang;
  BRAND_IMG = brandImg ?? (lang === 'en' ? 'mm/guia.png' : 'folhas/mockup-basico.png');
  BRAND_NAME = brandName ?? (lang === 'en' ? ['MATH', 'MISSIONS'] : ['MATEMÁTICA', 'EM MISSÃO']);
};
export const lang = () => LANG;
export const brandImg = () => BRAND_IMG;
export const brandName = () => BRAND_NAME;
const S = {
  pt: {cta: 'TOQUE EM SAIBA MAIS', only: 'POR APENAS', level: 'NÍVEL', levels: '3 NÍVEIS DE DIFICULDADE', code: 'PALAVRA-CÓDIGO', noFit: '✕ A PALAVRA NÃO FECHA', fit: '✓ A PALAVRA FECHOU!', sheet: 'LISTA DE EXERCÍCIOS'},
  en: {cta: 'TAP LEARN MORE', only: 'ONLY', level: 'LEVEL', levels: '3 DIFFICULTY LEVELS', code: 'CODE WORD', noFit: "✕ THE WORD DOESN'T FIT", fit: '✓ CASE CRACKED!', sheet: 'MATH WORKSHEET'},
};
export const t = (k: keyof typeof S.pt) => S[LANG][k];
