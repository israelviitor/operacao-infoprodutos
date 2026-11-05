import {Composition} from 'remotion';
import {C01} from './C01';
export const Root: React.FC = () => (
  <>
    <Composition id="C01-teste" component={C01} durationInFrames={Math.round(23.4 * 30)} fps={30} width={1080} height={1920} defaultProps={{music: 'audio/729.mp3', musicVol: 0.12}} />
  </>
);
