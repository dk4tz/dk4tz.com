import { Suspense, useCallback, useRef, useState } from 'react';

import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Bounds, Html, OrbitControls } from '@react-three/drei';
import Particles from 'react-particles';
import { PuffLoader } from 'react-spinners';
import { loadFull } from 'tsparticles';

import type { Engine } from 'tsparticles-engine';
import { ISourceOptions } from 'tsparticles-engine';

import { BopButton } from './BopButton';
import { Hero } from './Hero';
import particlesOptions from '../particles.json';

export const Portrait = () => {
  const [isBopping, setIsBopping] = useState(false);
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles
        className='particles'
        options={particlesOptions as ISourceOptions}
        init={particlesInit}
      />
      <Canvas
        shadows
        camera={{ position: [0, 0, 150], fov: 55 }}
        aria-label='hero-sculpture'>
        <Suspense fallback={<Loader />}>
          <Lights />
          <Bounds fit clip observe margin={1} damping={2}>
            <Hero rotate={isBopping} />
          </Bounds>
          <OrbitControls makeDefault enablePan={false} />
        </Suspense>
      </Canvas>
      <BopButton isBopping={isBopping} toggleBop={setIsBopping} />
    </>
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
