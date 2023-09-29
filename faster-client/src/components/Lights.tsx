import { useRef } from 'react';
import * as THREE from 'three';

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
        position={[0, 5, 0]}
        castShadow
      />
      <spotLight
        ref={spotLight}
        color='#ffffff'
        intensity={25}
        position={[-1, 5, 0]}
        angle={Math.PI / 8}
        penumbra={1}
        castShadow
      />
    </>
  );
};
