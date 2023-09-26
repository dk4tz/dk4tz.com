import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Bounds } from '@react-three/drei';
import { PuffLoader } from 'react-spinners';
import * as THREE from 'three';

import { Hero } from './Hero';

export const Portrait = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 150], fov: 55 }}
      aria-label='hero-sculpture'>
      <Suspense fallback={<Loader />}>
        <Lights />
        <Bounds fit clip observe margin={1} damping={2}>
          <Hero />
        </Bounds>
        <OrbitControls makeDefault enablePan={false} />
      </Suspense>
    </Canvas>
  );
};

const Lights = () => {
  // Directional light with shadows
  const light = useRef<THREE.DirectionalLight>(new THREE.DirectionalLight());
  return (
    <>
      <ambientLight color='#888888' intensity={0.5} />
      <directionalLight
        ref={light}
        color='#ffffff'
        intensity={4}
        position={[-1, 2, 4]}
        castShadow
      />
    </>
  );
};

const Loader = () => (
  <Html className='flex h-full w-full items-center justify-center'>
    <PuffLoader
      color='black'
      size={15}
      loading={true}
      aria-label='Loading Puffer'
      speedMultiplier={0.75}
    />
  </Html>
);
