import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

type HeroGLTF = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh;
  };
};

export const Hero = ({ rotate }: { rotate: boolean }) => {
  const heroPath: string = `${import.meta.env.BASE_URL}models/k4t.glb`;
  const { nodes } = useGLTF(heroPath) as HeroGLTF;

  const material = new THREE.MeshStandardMaterial({
    color: '#000000',
  });

  const groupRef = useRef<THREE.Group | null>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (rotate && groupRef.current) {
      groupRef.current.rotation.x += 0.01;
      groupRef.current.rotation.y -= 0.01;
      groupRef.current.rotation.z += 0.001;
    } else if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t) / 10;
    }
  });

  return (
    <group
      ref={groupRef}
      name='hero'
      position={[0, 0, 0]}
      rotation={[-2.354, 1.212, 2.42]}
      castShadow
      receiveShadow>
      {Object.entries(nodes).map(([key, node]) => (
        <mesh
          key={key}
          castShadow
          receiveShadow
          geometry={node.geometry}
          material={material}
        />
      ))}
    </group>
  );
};

useGLTF.preload(`${import.meta.env.BASE_URL}models/k4t.glb`);
