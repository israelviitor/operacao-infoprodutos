import {Composition} from 'remotion';
import {Criativo} from './Criativo';
import * as V from './videos';
const list = {C01: V.C01, C02: V.C02, C03: V.C03, C04: V.C04, C05: V.C05, C04H2: V.C04H2, C04H3: V.C04H3, C02H2: V.C02H2, C04H4: V.C04H4, C05H2: V.C05H2, C06: V.C06, C07: V.C07};
export const Root: React.FC = () => (
  <>
    {Object.entries(list).map(([id, cfg]) => (
      <Composition key={id} id={id} component={Criativo as any} durationInFrames={Math.round(cfg.dur * 30)} fps={30} width={1080} height={1920} defaultProps={{cfg}} />
    ))}
  </>
);
