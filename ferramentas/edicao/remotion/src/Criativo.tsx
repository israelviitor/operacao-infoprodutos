import {AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig, interpolate} from 'remotion';
import {Take, Look} from './Take';
import {Captions, Word} from './Captions';
import {HookTitle, Checklist, BrandReveal, Selo, Counter, Badges, Stars, PriceTag, BigText, Versus, OpCard, CTA, Continhas, CodeWord} from './Graphics';
import {loadFonts} from './Fonts';

loadFonts();
export type Scene = {from: number; to: number; src: string; zoomIn?: boolean; startFrom?: number; focusY?: number};
// tempos de overlay em segundos (absolutos); "at" internos também em segundos absolutos
export type Overlay =
  | {t: 'hook'; from: number; to: number; lines: string[]; highlight: string; highlightAt?: number; panel?: boolean}
  | {t: 'selo'; from: number; to: number; text: string}
  | {t: 'check'; from: number; to: number; mark: '✓' | '✕'; items: {text: string; at: number}[]; size?: number}
  | {t: 'brand'; from: number; to: number}
  | {t: 'counter'; from: number; to: number; value: number; label: string}
  | {t: 'badges'; from: number; to: number; items: {text: string; at: number}[]; title?: string}
  | {t: 'stars'; from: number; to: number}
  | {t: 'price'; from: number; to: number; price: string; at: number}
  | {t: 'big'; from: number; to: number; text: string; sub?: string}
  | {t: 'versus'; from: number; to: number; a: string; b: string; atB: number}
  | {t: 'op'; from: number; to: number; chuteAt: number; certoAt: number}
  | {t: 'cta'; from: number; to: number; phrase: string; price?: string}
  | {t: 'continhas'; from: number; to: number; marks: {at: number; kind: 'x' | 'risco'; row: number}[]}
  | {t: 'code'; from: number; to: number; word: string; wrong: {idx: number; letter: string; fixAt: number}; at: number[]};
export type Config = {
  audio: string; words: Word[]; music: string; musicVol: number; dur: number;
  scenes: Scene[]; overlays: Overlay[]; hide: [number, number][]; keys: string[];
  sfx: {at: number; name: 'impact' | 'pop' | 'boom' | 'ding' | 'tick'; vol?: number}[];
};
const DEF_VOL = {impact: 0.45, pop: 0.3, boom: 0.4, ding: 0.35, tick: 0.2};

export const Criativo: React.FC<{cfg: Config}> = ({cfg}) => {
  const {fps, durationInFrames} = useVideoConfig();
  const F = (s: number) => Math.round(s * fps);
  const rel = (o: {from: number}, at: number) => F(at) - F(o.from);
  const render = (o: Overlay) => {
    switch (o.t) {
      case 'hook': return <HookTitle lines={o.lines} highlight={o.highlight} highlightFrom={o.highlightAt ? rel(o, o.highlightAt) : 8} panel={o.panel} />;
      case 'selo': return <Selo text={o.text} />;
      case 'check': return <Checklist mark={o.mark} size={o.size} items={o.items.map((i) => ({text: i.text, at: rel(o, i.at)}))} />;
      case 'brand': return <BrandReveal dur={F(o.to) - F(o.from)} />;
      case 'counter': return <Counter to={o.value} label={o.label} />;
      case 'badges': return <Badges title={o.title} items={o.items.map((i) => ({text: i.text, at: rel(o, i.at)}))} />;
      case 'stars': return <Stars />;
      case 'price': return <PriceTag price={o.price} at={rel(o, o.at)} />;
      case 'big': return <BigText text={o.text} sub={o.sub} />;
      case 'versus': return <Versus a={o.a} b={o.b} atB={rel(o, o.atB)} />;
      case 'op': return <OpCard chuteAt={rel(o, o.chuteAt)} certoAt={rel(o, o.certoAt)} />;
      case 'cta': return <CTA phrase={o.phrase} price={o.price} />;
      case 'continhas': return <Continhas marks={o.marks.map((m) => ({...m, at: rel(o, m.at)}))} />;
      case 'code': return <CodeWord word={o.word} wrong={{...o.wrong, fixAt: rel(o, o.wrong.fixAt)}} at={o.at.map((a) => rel(o, a))} />;
    }
  };
  // tick do contador (a cada 3 quadros durante 24 quadros) e ding no fim
  const counterSfx = cfg.overlays.filter((o) => o.t === 'counter').flatMap((o) => [...Array(8)].map((_, i) => ({at: o.from + (i * 3) / fps, name: 'tick' as const})).concat([{at: o.from + 24 / fps, name: 'ding' as any}]));
  return (
    <AbsoluteFill style={{background: '#000'}}>
      {cfg.scenes.map((s, i) => (
        <Sequence key={i} from={F(s.from)} durationInFrames={F(s.to) - F(s.from)}>
          <Take src={s.src} kind={s.src.endsWith('.png') ? 'folha' : 'video'} dur={F(s.to) - F(s.from)} zoomIn={s.zoomIn ?? i % 2 === 0} startFrom={s.startFrom} focusY={s.focusY} />
        </Sequence>
      ))}
      <Look />
      {cfg.overlays.map((o, i) => (
        <Sequence key={i} from={F(o.from)} durationInFrames={F(o.to) - F(o.from)}>{render(o)}</Sequence>
      ))}
      <Captions words={cfg.words} keywords={cfg.keys} hide={[...cfg.hide, ...cfg.overlays.filter((o) => !['selo', 'continhas', 'code'].includes(o.t)).map((o) => [o.from, o.to] as [number, number])]} />
      <Audio src={staticFile(cfg.audio)} />
      <Audio src={staticFile(cfg.music)} volume={(f) => cfg.musicVol * interpolate(f, [0, 10, durationInFrames - 45, durationInFrames], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} />
      {[...cfg.sfx, ...counterSfx].map((s, i) => (
        <Sequence key={'s' + i} from={F(s.at)}><Audio src={staticFile(`sfx/${s.name}.wav`)} volume={s.vol ?? DEF_VOL[s.name]} /></Sequence>
      ))}
    </AbsoluteFill>
  );
};
