import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type HeroGLTF = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh;
  };
};

export const Hero = () => {
  const heroPath: string = `${import.meta.env.BASE_URL}models/k4t.glb`;
  console.log(heroPath);
  const { nodes } = useGLTF(heroPath) as HeroGLTF;

  const material = new THREE.MeshStandardMaterial({
    color: 'black',
  });

  return (
    <group
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
