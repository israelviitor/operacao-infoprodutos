import {AbsoluteFill, Img, OffthreadVideo, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

// Take de vídeo (já padronizado 1080x1920) ou folha (PNG) com Ken Burns + entrada "punch"
export const Take: React.FC<{src: string; kind: 'video' | 'folha'; dur: number; zoomIn?: boolean; startFrom?: number; focusY?: number}> = ({src, kind, dur, zoomIn = true, startFrom = 0, focusY = 50}) => {
  const f = useCurrentFrame();
  const kb = interpolate(f, [0, dur], zoomIn ? [1.0, 1.12] : [1.12, 1.0], {extrapolateRight: 'clamp'});
  const punch = interpolate(f, [0, 6], [1.16, 1], {extrapolateRight: 'clamp'});
  const blur = interpolate(f, [0, 6], [10, 0], {extrapolateRight: 'clamp'});
  const grade = 'contrast(1.07) saturate(1.12)';
  if (kind === 'video') {
    return (
      <AbsoluteFill style={{transform: `scale(${kb * punch})`, filter: `${grade} blur(${blur}px)`}}>
        <OffthreadVideo src={staticFile(src)} startFrom={startFrom} muted style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      </AbsoluteFill>
    );
  }
  // folha: fundo desfocado da própria folha + folha inteira centralizada
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{filter: `blur(40px) brightness(0.55) ${grade}`, transform: 'scale(1.3)'}}>
        <Img src={staticFile(src)} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      </AbsoluteFill>
      <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', transform: `scale(${kb * punch})`, transformOrigin: `50% ${focusY}%`, filter: `blur(${blur}px)`}}>
        <Img src={staticFile(src)} style={{width: '88%', borderRadius: 18, boxShadow: '0 30px 80px rgba(0,0,0,.55)', marginTop: -180}} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const Look: React.FC = () => (
  <>
    <AbsoluteFill style={{background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,.55) 100%)'}} />
    <AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(0,0,0,0) 48%, rgba(0,0,0,.45) 60%, rgba(0,0,0,.45) 72%, rgba(0,0,0,0) 82%)'}} />
  </>
);
