import { Bounds } from '@react-three/drei';
import { Model } from './Model';

const GLB_MODEL = '/allosaurus_fragilis.glb';

export const Geometry = (props: JSX.IntrinsicElements['group']) => {
  return (
    <>
      <Bounds fit clip observe margin={1} damping={2}>
        <Model name='dino' gltf={GLB_MODEL} />
      </Bounds>
    </>
  );
};
