import {continueRender, delayRender, staticFile} from 'remotion';
let loaded = false;
export const loadFonts = () => {
  if (loaded) return;
  loaded = true;
  const h = delayRender('fonts');
  Promise.all(
    [800, 900].map((w) => {
      const f = new FontFace('Montserrat', `url(${staticFile(`fonts/montserrat-latin-${w}-normal.woff2`)})`, {weight: String(w)});
      return f.load().then((ff) => (document as any).fonts.add(ff));
    })
  ).then(() => continueRender(h));
};
