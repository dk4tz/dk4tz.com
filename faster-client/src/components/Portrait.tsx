import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, ContactShadows, OrbitControls } from '@react-three/drei';

import { Hero } from './Hero';
import { Lights } from './Lights';
import { BopButton } from './BopButton';
import { Vibe } from './Vibe';
import { Loader } from './Loader';

export const Portrait: React.FC = () => {
  const [isBopping, setIsBopping] = useState(false);
  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 150], fov: 55 }}
        aria-label='hero-sculpture'>
        <Vibe isBopping={isBopping} />
        <Lights />
        <Bounds fit clip observe margin={0.5} damping={2}>
          <Hero bop={isBopping} />
          <ContactShadows position={[0, -2.4, 0]} blur={2} />
        </Bounds>
        <OrbitControls
          makeDefault
          enableZoom={true}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
      <BopButton isBopping={isBopping} toggleBop={setIsBopping} />
    </Suspense>
  );
};
