import { Suspense, useEffect, useState } from 'react';

import { Canvas } from '@react-three/fiber';
import { Bounds, ContactShadows, OrbitControls } from '@react-three/drei';
import { PacmanLoader } from 'react-spinners';

import { Hero } from './Hero';
import { Lights } from './Lights';
import { BopButton } from './BopButton';

export const Portrait = () => {
  const [isBopping, setIsBopping] = useState(false);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Canvas
          shadows
          camera={{ position: [0, 0, 150], fov: 55 }}
          aria-label='hero-sculpture'>
          <Lights />
          <Bounds fit clip observe margin={0.5} damping={2}>
            <Hero rotate={isBopping} />
            <ContactShadows position={[0, -2.4, 0]} blur={2} />
          </Bounds>
          <OrbitControls
            makeDefault
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
        <BopButton isBopping={isBopping} toggleBop={setIsBopping} />
      </Suspense>
    </>
  );
};

const Loader = () => {
  const [showMessage, setShowMessage] = useState(false);
  const waitingMessage =
    'This page is pretty beefy... Keep waiting or try again when you have a better connection.';

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center align-middle'>
      <div className='rounded-lg bg-black bg-opacity-70 p-16'>
        <PacmanLoader color='yellow' />
      </div>
      {showMessage && (
        <div className='font-mono mt-4 text-center text-black'>
          {waitingMessage}
        </div>
      )}
    </div>
  );
};
