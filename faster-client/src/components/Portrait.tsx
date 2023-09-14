import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Html,
  Bounds,
  SpotLight,
  useHelper,
} from '@react-three/drei';
import { PuffLoader } from 'react-spinners';
import { Hero } from './Hero';
import * as THREE from 'three';

export const Portrait = () => {
  console.log('rendering Canvas');
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 150], fov: 55 }}
      aria-label='hero-image'>
      <Suspense
        fallback={
          <Html className='flex h-full w-full items-center justify-center'>
            <PuffLoader
              color='black'
              size={15}
              loading={true}
              aria-label='Loading Spinner'
              speedMultiplier={0.75}
            />
          </Html>
        }>
        <Bounds fit clip observe margin={1} damping={2}>
          <Lights />
          <Hero />
        </Bounds>
        <OrbitControls makeDefault enablePan={false} />
      </Suspense>
    </Canvas>
  );
};

function Lights() {
  const light = useRef<THREE.SpotLight>(new THREE.SpotLight());
  useHelper(light, THREE.SpotLightHelper, 'cyan');

  return (
    <SpotLight ref={light} intensity={0.5} position={[5, 2, 0]} castShadow />
  );
}
