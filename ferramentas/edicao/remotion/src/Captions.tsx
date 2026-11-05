import {AbsoluteFill, useCurrentFrame, useVideoConfig, spring} from 'remotion';
import {theme} from './theme';

export type Word = {w: string; s: number; e: number};
// Junta tokens que o Whisper separa ("R" "$" "17" ",90" -> "R$ 17,90")
export const fixWords = (ws: Word[]): Word[] => {
  const out: Word[] = [];
  for (const w of ws) {
    const p = out[out.length - 1];
    if (p && (w.w === '$' || /^,\d/.test(w.w) || (p.w.endsWith('$') && /^\d/.test(w.w)))) {
      p.w = w.w === '$' ? p.w + '$' : /^,/.test(w.w) ? p.w + w.w : p.w + ' ' + w.w;
      p.e = w.e;
    } else out.push({...w});
  }
  return out;
};
const FN = new Set(['para', 'de', 'e', 'a', 'o', 'em', 'as', 'os', 'que', 'da', 'do', 'com', 'uma', 'um', 'sua', 'seu', 'seus', 'suas', 'no', 'na', 'por', 'mais', 'quais', 'não']);
export const chunk = (ws: Word[]): Word[][] => {
  const res: Word[][] = [];
  let cur: Word[] = [];
  ws.forEach((w, i) => {
    cur.push(w);
    const next = ws[i + 1];
    const pause = next ? next.s - w.e > 0.3 : true;
    const punct = /[.,?!]$/.test(w.w);
    if (punct || pause) {
      res.push(cur);
      cur = [];
    } else if (cur.length >= 3) {
      // não termina o bloco em palavra de ligação: ela passa para o próximo
      const last = cur[cur.length - 1];
      if (FN.has(last.w.toLowerCase()) && cur.length > 1) {
        cur.pop();
        res.push(cur);
        cur = [last];
      } else {
        res.push(cur);
        cur = [];
      }
    }
  });
  if (cur.length) res.push(cur);
  return res;
};

export const Captions: React.FC<{words: Word[]; keywords: string[]; hide: [number, number][]}> = ({words, keywords, hide}) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = f / fps;
  if (hide.some(([a, b]) => t >= a && t < b)) return null;
  const chunks = chunk(fixWords(words));
  const c = chunks.find((ch, i) => t >= ch[0].s && t < (chunks[i + 1] ? chunks[i + 1][0].s : ch[ch.length - 1].e + 0.4));
  if (!c) return null;
  const enter = spring({frame: f - Math.round(c[0].s * fps), fps, config: {damping: 14, stiffness: 220}});
  const clean = (s: string) => s.replace(/[.,?!]/g, '').toUpperCase();
  return (
    <AbsoluteFill style={{top: '61%', height: 'auto', alignItems: 'center'}}>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '6px 30px', width: 960, transform: `scale(${0.85 + 0.15 * enter})`}}>
        {c.map((w, i) => {
          const txt = clean(w.w);
          const active = t >= w.s && t < w.e + 0.05;
          const isKey = keywords.some((k) => txt.includes(k));
          const base: React.CSSProperties = {fontFamily: theme.font, fontWeight: 900, fontSize: 92, lineHeight: 1.08, letterSpacing: -1};
          if (isKey)
            return (
              <span key={i} style={{...base, color: theme.navyDark, background: theme.yellow, padding: '0 18px', borderRadius: 14, transform: `rotate(-2.5deg) scale(${active ? 1.08 : 1})`, boxShadow: '0 8px 0 rgba(0,0,0,.35)'}}>
                {txt}
              </span>
            );
          return (
            <span key={i} style={{...base, color: active ? theme.yellow : theme.white, WebkitTextStroke: `12px ${theme.navyDark}`, paintOrder: 'stroke fill', textShadow: '0 8px 18px rgba(0,0,0,.6)', transform: `scale(${active ? 1.08 : 1})`, display: 'inline-block'}}>
              {txt}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
