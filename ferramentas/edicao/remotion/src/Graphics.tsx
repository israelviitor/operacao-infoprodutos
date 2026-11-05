import {AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from './theme';

const font = {fontFamily: theme.font, fontWeight: 900} as const;
const useSpring = (delay = 0, damping = 12) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  return spring({frame: f - delay, fps, config: {damping, stiffness: 180}});
};

// Gancho: título gigante + linha em caixa de destaque
export const HookTitle: React.FC<{lines: string[]; highlight: string}> = ({lines, highlight}) => {
  const a = useSpring(0, 11);
  const b = useSpring(8, 10);
  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', padding: 60, marginTop: -120}}>
      <div style={{transform: `scale(${0.6 + 0.4 * a})`, opacity: a, textAlign: 'center'}}>
        {lines.map((l, i) => (
          <div key={i} style={{...font, fontSize: 90, lineHeight: 1.04, color: theme.white, WebkitTextStroke: `14px ${theme.navyDark}`, paintOrder: 'stroke fill', textShadow: '0 10px 30px rgba(0,0,0,.6)'}}>
            {l}
          </div>
        ))}
      </div>
      <div style={{marginTop: 34, transform: `rotate(-3deg) scale(${b})`, background: theme.yellow, color: theme.navyDark, ...font, fontSize: 76, whiteSpace: 'nowrap', padding: '10px 34px', borderRadius: 20, boxShadow: '0 12px 0 rgba(0,0,0,.35)'}}>
        {highlight}
      </div>
    </AbsoluteFill>
  );
};

// Selo no topo (pílula com borda)
export const Selo: React.FC<{text: string}> = ({text}) => {
  const a = useSpring(0, 12);
  return (
    <AbsoluteFill style={{top: 250, alignItems: 'center', height: 'auto'}}>
      <div style={{transform: `translateY(${(1 - a) * -60}px) scale(${a})`, ...font, fontSize: 50, color: theme.white, background: 'rgba(15,22,56,.85)', border: `5px solid ${theme.yellow}`, padding: '14px 36px', borderRadius: 999}}>
        {text}
      </div>
    </AbsoluteFill>
  );
};

// Lista: itens entram um a um (frames relativos ao início do bloco)
export const Checklist: React.FC<{items: {text: string; at: number}[]; mark: '✓' | '✕'}> = ({items, mark}) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  return (
    <AbsoluteFill style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 34}}>
      {items.map((it, i) => {
        const s = spring({frame: f - it.at, fps, config: {damping: 11, stiffness: 200}});
        return (
          <div key={i} style={{display: 'flex', alignItems: 'center', gap: 26, width: 820, transform: `scale(${0.5 + 0.5 * s})`, opacity: Math.min(1, s * 1.5), background: 'rgba(15,22,56,.88)', border: `5px solid ${theme.yellow}`, borderRadius: 28, padding: '22px 34px'}}>
            <div style={{width: 92, height: 92, borderRadius: 999, background: mark === '✓' ? theme.yellow : '#E5484D', color: theme.navyDark, ...font, fontSize: 64, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{mark}</div>
            <div style={{...font, fontSize: 80, color: theme.white}}>{it.text}</div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

// Revelação da marca: fundo na cor da marca + mockup do Básico
export const BrandReveal: React.FC<{dur: number}> = ({dur}) => {
  const f = useCurrentFrame();
  const a = useSpring(0, 10);
  const t = useSpring(6, 12);
  const kb = interpolate(f, [0, dur], [1, 1.06]);
  return (
    <AbsoluteFill style={{background: `radial-gradient(circle at 50% 40%, #2B3A86 0%, ${theme.navy} 55%, ${theme.navyDark} 100%)`, alignItems: 'center'}}>
      <div style={{marginTop: 230, transform: `scale(${t})`, ...font, fontSize: 96, color: theme.white, textAlign: 'center', lineHeight: 1}}>
        MATEMÁTICA<br />
        <span style={{color: theme.yellow}}>EM MISSÃO</span>
      </div>
      <Img src={staticFile('folhas/mockup-basico.png')} style={{width: 880, marginTop: 50, borderRadius: 24, transform: `scale(${a * kb}) rotate(${(1 - a) * -8}deg)`, boxShadow: '0 40px 90px rgba(0,0,0,.6)'}} />
    </AbsoluteFill>
  );
};
