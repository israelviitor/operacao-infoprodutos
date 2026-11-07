import {AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {theme} from './theme';

const font = {fontFamily: theme.font, fontWeight: 900} as const;
const useSpring = (delay = 0, damping = 12) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  return spring({frame: f - delay, fps, config: {damping, stiffness: 180}});
};

// Gancho: título gigante + linha em caixa de destaque
export const HookTitle: React.FC<{lines: string[]; highlight: string; highlightFrom?: number}> = ({lines, highlight, highlightFrom = 8}) => {
  const a = useSpring(0, 11);
  const b = useSpring(highlightFrom, 10);
  const size = Math.min(96, ...lines.map((l) => Math.floor(940 / (l.length * 0.74))));
  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', padding: 60, marginTop: -120}}>
      <div style={{transform: `scale(${0.6 + 0.4 * a})`, opacity: a, textAlign: 'center'}}>
        {lines.map((l, i) => (
          <div key={i} style={{...font, fontSize: size, whiteSpace: 'nowrap', lineHeight: 1.04, color: theme.white, WebkitTextStroke: `14px ${theme.navyDark}`, paintOrder: 'stroke fill', textShadow: '0 10px 30px rgba(0,0,0,.6)'}}>
            {l}
          </div>
        ))}
      </div>
      <div style={{marginTop: 34, transform: `rotate(-3deg) scale(${b})`, background: theme.yellow, color: theme.navyDark, ...font, fontSize: Math.min(80, ...highlight.split('|').map((h) => Math.floor(880 / (h.length * 0.74)))), whiteSpace: 'nowrap', padding: '10px 34px', borderRadius: 20, boxShadow: '0 12px 0 rgba(0,0,0,.35)', textAlign: 'center', lineHeight: 1.08}}>
        {highlight.split('|').map((h, i) => <div key={i}>{h}</div>)}
      </div>
    </AbsoluteFill>
  );
};

// Selo no topo (pílula com borda)
export const Selo: React.FC<{text: string}> = ({text}) => {
  const a = useSpring(0, 12);
  return (
    <AbsoluteFill style={{top: 250, alignItems: 'center', height: 'auto'}}>
      <div style={{transform: `translateY(${(1 - a) * -60}px) scale(${a})`, ...font, fontSize: Math.min(50, Math.floor(900 / (text.length * 0.74))), whiteSpace: 'nowrap', color: theme.white, background: 'rgba(15,22,56,.85)', border: `5px solid ${theme.yellow}`, padding: '14px 36px', borderRadius: 999}}>
        {text}
      </div>
    </AbsoluteFill>
  );
};

// Lista: itens entram um a um (frames relativos ao início do bloco)
export const Checklist: React.FC<{items: {text: string; at: number}[]; mark: '✓' | '✕'; size?: number}> = ({items, mark, size = 80}) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  return (
    <AbsoluteFill style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 34}}>
      {items.map((it, i) => {
        const s = spring({frame: f - it.at, fps, config: {damping: 11, stiffness: 200}});
        return (
          <div key={i} style={{display: 'flex', alignItems: 'center', gap: 26, width: 900, transform: `scale(${0.5 + 0.5 * s})`, opacity: Math.min(1, s * 1.5), background: 'rgba(15,22,56,.88)', border: `5px solid ${theme.yellow}`, borderRadius: 28, padding: '22px 34px'}}>
            <div style={{width: 92, height: 92, borderRadius: 999, background: mark === '✓' ? theme.yellow : '#E5484D', color: theme.navyDark, ...font, fontSize: 64, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{mark}</div>
            <div style={{...font, fontSize: size, color: theme.white, lineHeight: 1.05}}>{it.text}</div>
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

const Panel: React.FC<{children: React.ReactNode; top?: number}> = ({children, top}) => (
  <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', ...(top ? {justifyContent: 'flex-start', paddingTop: top} : {})}}>{children}</AbsoluteFill>
);

// Contador que sobe até o valor
export const Counter: React.FC<{to: number; label: string; dur?: number}> = ({to, label, dur = 24}) => {
  const f = useCurrentFrame();
  const a = useSpring(0, 12);
  const n = Math.round(interpolate(f, [0, dur], [0, to], {extrapolateRight: 'clamp', easing: (x) => 1 - Math.pow(1 - x, 3)}));
  const done = f >= dur;
  return (
    <Panel>
      <div style={{transform: `scale(${a})`, display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(15,22,56,.88)', border: `6px solid ${theme.yellow}`, borderRadius: 40, padding: '30px 70px', marginTop: -140}}>
        <div style={{...font, fontSize: 300, lineHeight: 1, color: theme.yellow, transform: `scale(${done ? 1 + 0.06 * Math.sin((f - dur) / 3) * Math.exp(-(f - dur) / 12) : 1})`}}>{n}</div>
        <div style={{...font, fontSize: 64, color: theme.white, textAlign: 'center', maxWidth: 820}}>{label}</div>
      </div>
    </Panel>
  );
};

// Pílulas que entram uma a uma (ex.: 3º, 4º, 5º ANO)
export const Badges: React.FC<{items: {text: string; at: number}[]; title?: string}> = ({items, title}) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = useSpring(0, 14);
  return (
    <Panel>
      <div style={{marginTop: -140, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, background: 'rgba(15,22,56,.9)', border: `6px solid ${theme.yellow}`, borderRadius: 40, padding: '34px 44px', transform: `scale(${0.7 + 0.3 * t})`, opacity: t}}>
        {title && <div style={{...font, fontSize: 70, color: theme.white, }}>{title}</div>}
        <div style={{display: 'flex', gap: 24}}>
          {items.map((it, i) => {
            const s = spring({frame: f - it.at, fps, config: {damping: 10, stiffness: 220}});
            return (
              <div key={i} style={{transform: `scale(${s}) rotate(${(i - 1) * 3}deg)`, background: i % 2 ? theme.white : theme.yellow, color: theme.navyDark, ...font, fontSize: 110, padding: '18px 34px', borderRadius: 28, boxShadow: '0 12px 0 rgba(0,0,0,.35)'}}>
                {it.text}
              </div>
            );
          })}
        </div>
      </div>
    </Panel>
  );
};

// 3 níveis de dificuldade: ★ / ★★ / ★★★
export const Stars: React.FC<{gap?: number}> = ({gap = 7}) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  return (
    <Panel>
      <div style={{marginTop: -140, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22}}>
        {[1, 2, 3].map((n, i) => {
          const s = spring({frame: f - i * gap, fps, config: {damping: 11, stiffness: 200}});
          return (
            <div key={n} style={{transform: `scale(${s})`, display: 'flex', alignItems: 'center', gap: 26, background: 'rgba(15,22,56,.88)', border: `5px solid ${theme.yellow}`, borderRadius: 26, padding: '14px 40px', width: 760}}>
              <div style={{fontSize: 80, color: theme.yellow, letterSpacing: 6, width: 300}}>{'★'.repeat(n)}</div>
              <div style={{...font, fontSize: 64, color: theme.white}}>NÍVEL {n}</div>
            </div>
          );
        })}
        <div style={{...font, fontSize: 60, color: theme.navyDark, background: theme.yellow, padding: '8px 30px', borderRadius: 16, transform: `rotate(-2deg) scale(${spring({frame: f - 3 * gap, fps, config: {damping: 12}})})`}}>3 NÍVEIS DE DIFICULDADE</div>
      </div>
    </Panel>
  );
};

// Etiqueta de preço que sobe e desce
export const PriceTag: React.FC<{price: string; at: number; label?: string}> = ({price, at, label = 'POR APENAS'}) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = spring({frame: f - at, fps, config: {damping: 9, stiffness: 160}});
  const bob = Math.sin((f - at) / 8) * 8;
  return (
    <AbsoluteFill style={{alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 300}}>
      <div style={{transform: `translateY(${(1 - s) * 300 + (f > at ? bob : 0)}px) rotate(-4deg)`, opacity: s, background: theme.yellow, borderRadius: 32, padding: '18px 56px', boxShadow: '0 18px 0 rgba(0,0,0,.35)', textAlign: 'center'}}>
        <div style={{...font, fontSize: 44, color: theme.navyDark}}>{label}</div>
        <div style={{...font, fontSize: 150, lineHeight: 1, color: theme.navyDark}}>{price}</div>
      </div>
    </AbsoluteFill>
  );
};

// Texto grande de virada ("SÓ QUE EXISTE UM DETALHE...", "NÃO É.")
export const BigText: React.FC<{text: string; sub?: string}> = ({text, sub}) => {
  const a = useSpring(0, 9);
  const b = useSpring(6, 12);
  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', padding: 70, background: 'rgba(15,22,56,.55)'}}>
      <div style={{transform: `scale(${0.4 + 0.6 * a})`, ...font, fontSize: 120, lineHeight: 1.02, color: theme.white, textAlign: 'center', WebkitTextStroke: `14px ${theme.navyDark}`, paintOrder: 'stroke fill', marginTop: -140}}>{text}</div>
      {sub && <div style={{marginTop: 30, transform: `rotate(-3deg) scale(${b})`, ...font, fontSize: 76, color: theme.navyDark, background: theme.yellow, padding: '8px 34px', borderRadius: 18}}>{sub}</div>}
    </AbsoluteFill>
  );
};

// Comparativo A ≠ B
export const Versus: React.FC<{a: string; b: string; atB: number}> = ({a, b, atB}) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const sa = spring({frame: f, fps, config: {damping: 11}});
  const sb = spring({frame: f - atB, fps, config: {damping: 11}});
  const box = (txt: string, s: number, bg: string, fg: string) => (
    <div style={{transform: `scale(${s})`, background: bg, color: fg, ...font, fontSize: 82, padding: '26px 40px', borderRadius: 30, width: 820, textAlign: 'center', boxShadow: '0 14px 0 rgba(0,0,0,.35)'}}>{txt}</div>
  );
  return (
    <Panel>
      <div style={{marginTop: -140, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18}}>
        {box(a, sa, theme.white, theme.navyDark)}
        <div style={{...font, fontSize: 150, color: theme.yellow, transform: `scale(${sb})`, WebkitTextStroke: `10px ${theme.navyDark}`, paintOrder: 'stroke fill', lineHeight: 1}}>≠</div>
        {box(b, sb, theme.yellow, theme.navyDark)}
      </div>
    </Panel>
  );
};

// "É de mais ou de vezes?" → chute em × → era ÷
export const OpCard: React.FC<{chuteAt: number; certoAt: number}> = ({chuteAt, certoAt}) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const sp = (d: number) => spring({frame: f - d, fps, config: {damping: 10, stiffness: 200}});
  const op = (sym: string, i: number, state: 'idle' | 'errado' | 'certo') => {
    const bg = state === 'errado' ? '#E5484D' : state === 'certo' ? '#2EB872' : theme.white;
    return (
      <div key={sym} style={{transform: `scale(${sp(i * 5)}) ${state === 'errado' ? `rotate(${Math.sin(f / 2) * 3}deg)` : ''}`, width: 250, height: 250, borderRadius: 40, background: bg, color: state === 'idle' ? theme.navyDark : theme.white, ...font, fontSize: 190, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 14px 0 rgba(0,0,0,.35)'}}>
        {sym}
      </div>
    );
  };
  const showCerto = f >= certoAt;
  return (
    <Panel>
      <div style={{marginTop: -160, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 34}}>
        <div style={{...font, fontSize: 62, whiteSpace: 'nowrap', color: theme.white, WebkitTextStroke: `10px ${theme.navyDark}`, paintOrder: 'stroke fill'}}>"É DE MAIS OU DE VEZES?"</div>
        <div style={{display: 'flex', gap: 34}}>
          {op('+', 0, 'idle')}
          {op('×', 1, f >= chuteAt ? 'errado' : 'idle')}
          {showCerto && op('÷', 2, 'certo')}
        </div>
        {f >= chuteAt && !showCerto && <div style={{...font, fontSize: 70, color: theme.white, background: '#E5484D', padding: '6px 28px', borderRadius: 16, transform: `scale(${sp(chuteAt)})`}}>METADE CHUTA VEZES</div>}
        {showCerto && <div style={{...font, fontSize: 70, color: theme.navyDark, background: theme.yellow, padding: '6px 28px', borderRadius: 16, transform: `scale(${sp(certoAt)})`}}>ERA DE DIVIDIR</div>}
      </div>
    </Panel>
  );
};

// CTA final: tela da marca + frase + preço + botão pulsando com brilho + seta
export const CTA: React.FC<{phrase: string; price?: string}> = ({phrase, price}) => {
  const f = useCurrentFrame();
  const a = useSpring(0, 12);
  const b = useSpring(8, 10);
  const pulse = 1 + 0.05 * Math.sin(f / 5);
  const shine = ((f * 22) % 1400) - 400;
  const arrow = Math.abs(Math.sin(f / 6)) * 30;
  return (
    <AbsoluteFill style={{background: `radial-gradient(circle at 50% 35%, #2B3A86 0%, ${theme.navy} 55%, ${theme.navyDark} 100%)`, alignItems: 'center'}}>
      <div style={{marginTop: 210, display: 'flex', alignItems: 'center', gap: 18, transform: `scale(${a})`}}>
        <Lupa size={100} />
        <div style={{...font, fontSize: 76, color: theme.white, lineHeight: 0.95}}>
          MATEMÁTICA<br /><span style={{color: theme.yellow}}>EM MISSÃO</span>
        </div>
      </div>
      <Img src={staticFile('folhas/mockup-basico.png')} style={{width: 560, marginTop: 34, borderRadius: 20, transform: `scale(${a})`, boxShadow: '0 30px 70px rgba(0,0,0,.6)'}} />
      <div style={{marginTop: 34, ...font, fontSize: 66, color: theme.white, textAlign: 'center', padding: '0 60px', transform: `scale(${b})`}}>{phrase}</div>
      {price && <div style={{marginTop: 10, ...font, fontSize: 120, color: theme.yellow, transform: `scale(${b})`, lineHeight: 1.05}}>{price}</div>}
      <div style={{marginTop: 26, position: 'relative', overflow: 'hidden', transform: `scale(${b * pulse})`, background: theme.yellow, color: theme.navyDark, ...font, fontSize: 58, whiteSpace: 'nowrap', padding: '24px 64px', borderRadius: 999, boxShadow: `0 0 ${40 + 20 * Math.sin(f / 5)}px rgba(255,200,30,.7)`}}>
        TOQUE EM SAIBA MAIS
        <div style={{position: 'absolute', top: 0, left: shine, width: 120, height: '100%', background: 'linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,.75), rgba(255,255,255,0))', transform: 'skewX(-20deg)'}} />
      </div>
      <svg width="120" height="130" viewBox="0 0 120 130" style={{marginTop: 20 + arrow, transform: `scale(${b})`}}><path d="M60 5 V95 M20 60 L60 115 L100 60" stroke={theme.yellow} strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
    </AbsoluteFill>
  );
};

export const Lupa: React.FC<{size?: number; color?: string}> = ({size = 60, color = theme.yellow}) => (
  <svg width={size} height={size} viewBox="0 0 100 100"><circle cx="40" cy="40" r="28" stroke={color} strokeWidth="12" fill="none" /><path d="M61 61 L90 90" stroke={color} strokeWidth="14" strokeLinecap="round" /></svg>
);
