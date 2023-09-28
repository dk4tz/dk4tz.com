import { Suspense, useCallback, useState } from 'react';

import { Canvas } from '@react-three/fiber';
import { Bounds, Html, OrbitControls } from '@react-three/drei';
import Particles from 'react-particles';
import { PuffLoader } from 'react-spinners';
import { loadFull } from 'tsparticles';

import type { Engine } from 'tsparticles-engine';
import { ISourceOptions } from 'tsparticles-engine';

import { Hero } from './Hero';
import { Lights } from './Lights';
import { BopButton } from './BopButton';
import particlesOptions from '../particles.json';

export const Portrait = () => {
  const [isBopping, setIsBopping] = useState(false);

  // Check if the device is mobile
  const isMobile = window.innerWidth <= 768;
  console.log('Optimized for; ', isMobile ? 'mobile' : 'desktop');

  // Modify the options object for mobile devices
  const options = isMobile
    ? {
        ...particlesOptions,
        particles: {
          ...particlesOptions.particles,
          number: {
            ...particlesOptions.particles.number,
            value: 250, // Reduce the number of particles
          },
          lineLinked: {
            ...particlesOptions.particles.lineLinked,
            distance: 100, // Reduce the line link distance
          },
        },
      }
    : particlesOptions;

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles
        className='particles'
        options={options as ISourceOptions}
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

// const Lights = () => {
//   // Directional light with shadows
//   const light = useRef<THREE.DirectionalLight>(new THREE.DirectionalLight());
//   const spotLight = useRef<THREE.SpotLight>(new THREE.SpotLight());

//   return (
//     <>
//       <ambientLight color='#888888' intensity={0.1} />
//       <directionalLight
//         ref={light}
//         color='#ffffff'
//         intensity={1}
//         position={[-1, 2, 4]}
//         castShadow
//       />
//       <spotLight
//         ref={spotLight}
//         color='#ffffff'
//         intensity={5}
//         position={[0, 5, 10]}
//         angle={Math.PI / 8}
//         penumbra={0.2}
//         castShadow
//       />
//     </>
//   );
// };

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
