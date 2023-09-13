import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { PulseLoader } from 'react-spinners';
import { Geometry } from './Geometry';

export const Portrait = (props: JSX.IntrinsicElements['group']) => {
  console.log('rendering Canvas');
  return (
    <div
      className='relative h-full w-full bg-[#A7A7A7]'
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/map-background.png')`,
      }}>
      <Canvas
        camera={{ position: [0, 250, 150], fov: 55 }}
        aria-label='3D Map of the World'>
        <spotLight
          position={[-100, -100, -100]}
          intensity={0.2}
          angle={0.3}
          penumbra={1}
        />
        <hemisphereLight color='white' position={[-7, 25, 13]} intensity={1} />
        <Suspense
          fallback={
            <Html className='flex h-full w-full items-center justify-center'>
              <PulseLoader
                color='white'
                size={15}
                loading={true}
                aria-label='Loading Spinner'
                speedMultiplier={0.75}
              />
            </Html>
          }>
          <Geometry />
        </Suspense>
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};
