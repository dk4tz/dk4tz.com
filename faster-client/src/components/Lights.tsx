import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export const Lights = () => {
  // Directional light with shadows
  const light = useRef<THREE.DirectionalLight>(new THREE.DirectionalLight());
  const spotLight = useRef<THREE.SpotLight>(new THREE.SpotLight());
  spotLight.current.target.position.set(0, 0, 0);

  return (
    <>
      <ambientLight color='#888888' intensity={1} />
      <directionalLight
        ref={light}
        color='#ffffff'
        intensity={5}
        position={[-1, 2, 4]}
        castShadow
      />
      <spotLight
        ref={spotLight}
        color='#ffffff'
        intensity={50}
        position={[0, 5, 10]}
        angle={Math.PI / 8}
        penumbra={0.2}
        castShadow
      />
    </>
  );
};
