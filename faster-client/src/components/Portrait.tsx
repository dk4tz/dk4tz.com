import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Bounds, useHelper } from '@react-three/drei';
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
        <Lights />
        <Bounds fit clip observe margin={1} damping={2}>
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
    <>
      <ambientLight color='#888888' intensity={0.5} />
      <directionalLight color='#ffffff' intensity={1} position={[-1, 2, 4]} />

      {/* <spotLight
        ref={light}
        intensity={0.5}
        position={[5, 2, 0]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <ambientLight intensity={0.25} /> */}
    </>
  );
}
