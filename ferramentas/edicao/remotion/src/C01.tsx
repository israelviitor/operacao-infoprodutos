import {AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig, interpolate} from 'remotion';
import {Take, Look} from './Take';
import {Captions, Word} from './Captions';
import {HookTitle, Checklist, BrandReveal, Selo} from './Graphics';
import {loadFonts} from './Fonts';
import words from './data/c1.json';

loadFonts();
type Scene = {from: number; to: number; src: string; kind: 'video' | 'folha'; zoomIn?: boolean; startFrom?: number; focusY?: number};
// tempos em segundos, tirados da transcrição (c1.json)
const scenes: Scene[] = [
  {from: 0, to: 2.9, src: 'takes/34126.mp4', kind: 'video'},
  {from: 2.9, to: 5.96, src: 'takes/14782.mp4', kind: 'video', zoomIn: false},
  {from: 5.96, to: 8.72, src: 'takes/45564.mp4', kind: 'video'},            // lista de exercícios
  {from: 8.72, to: 10.68, src: 'takes/47242.mp4', kind: 'video', zoomIn: false}, // transformar sua aula
  {from: 10.68, to: 11.76, src: 'takes/21626.mp4', kind: 'video', startFrom: 150}, // missão
  {from: 11.76, to: 12.58, src: 'takes/21623.mp4', kind: 'video', startFrom: 30}, // pistas
  {from: 12.58, to: 13.32, src: 'takes/42185.mp4', kind: 'video'},          // desafios
  {from: 13.32, to: 14.9, src: 'takes/21612.mp4', kind: 'video'},           // mistérios
  {from: 16.56, to: 19.22, src: 'folhas/horta-3ano.png', kind: 'folha', focusY: 25}, // investigar as histórias
  {from: 19.22, to: 20.68, src: 'folhas/horta-3ano.png', kind: 'folha', zoomIn: true, focusY: 45}, // interpretar os problemas
  {from: 20.68, to: 23.4, src: 'takes/34126.mp4', kind: 'video', startFrom: 400}, // quais contas fazer
];
const KEYS = ['MISSÃO', 'MATEMÁTICA', 'INVESTIGAR', 'INTERPRETAR', 'CONTAS'];

export const C01: React.FC<{music: string; musicVol: number}> = ({music, musicVol}) => {
  const {fps, durationInFrames} = useVideoConfig();
  const F = (s: number) => Math.round(s * fps);
  return (
    <AbsoluteFill style={{background: '#000'}}>
      {scenes.map((s, i) => (
        <Sequence key={i} from={F(s.from)} durationInFrames={F(s.to) - F(s.from)}>
          <Take src={s.src} kind={s.kind} dur={F(s.to) - F(s.from)} zoomIn={s.zoomIn ?? i % 2 === 0} startFrom={s.startFrom} focusY={s.focusY} />
        </Sequence>
      ))}
      <Look />
      {/* gancho 0–5,96 s: sem legenda */}
      <Sequence from={0} durationInFrames={F(5.96)}>
        <HookTitle lines={['PROBLEMAS DE', 'MATEMÁTICA QUE']} highlight="PRENDEM A TURMA?" />
      </Sequence>
      <Sequence from={F(5.96)} durationInFrames={F(8.72) - F(5.96)}>
        <Selo text="✕ MAIS UMA LISTA" />
      </Sequence>
      <Sequence from={F(11.76)} durationInFrames={F(14.9) - F(11.76)}>
        <Checklist mark="✓" items={[{text: 'PISTAS', at: 0}, {text: 'DESAFIOS', at: F(12.58) - F(11.76)}, {text: 'MISTÉRIOS', at: F(13.32) - F(11.76)}]} />
      </Sequence>
      <Sequence from={F(14.9)} durationInFrames={F(16.56) - F(14.9)}>
        <BrandReveal dur={F(16.56) - F(14.9)} />
      </Sequence>
      <Sequence from={F(16.56)} durationInFrames={F(19.22) - F(16.56)}>
        <Selo text="🔍 CADA MISSÃO É UMA HISTÓRIA" />
      </Sequence>
      <Captions words={words as Word[]} keywords={KEYS} hide={[[0, 5.96], [11.76, 16.56]]} />
      {/* áudio */}
      <Audio src={staticFile('audio/c1.mp3')} />
      <Audio src={staticFile(music)} volume={(f) => musicVol * interpolate(f, [0, 10, durationInFrames - 45, durationInFrames], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})} />
      <Sequence from={0}><Audio src={staticFile('sfx/impact.wav')} volume={0.45} /></Sequence>
      <Sequence from={F(11.76)}><Audio src={staticFile('sfx/pop.wav')} volume={0.3} /></Sequence>
      <Sequence from={F(12.58)}><Audio src={staticFile('sfx/pop.wav')} volume={0.3} /></Sequence>
      <Sequence from={F(13.32)}><Audio src={staticFile('sfx/pop.wav')} volume={0.3} /></Sequence>
      <Sequence from={F(14.9)}><Audio src={staticFile('sfx/boom.wav')} volume={0.4} /></Sequence>
    </AbsoluteFill>
  );
};
