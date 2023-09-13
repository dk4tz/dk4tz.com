/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from 'three';
import React, { useRef } from 'react';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type HeroGLTF = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_14: THREE.Mesh;
  };
  materials: {
    model: THREE.MeshBasicMaterial;
  };
};

export const Hero = (props: JSX.IntrinsicElements['group']) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { nodes, materials } = useGLTF('/k4t.glb') as HeroGLTF;
  const [github] = useTexture(['/github.png']);

  return (
    <group {...props} dispose={null}>
      <group name='cat' rotation={[-2.354, 1.212, 2.42]}>
        {Object.keys(nodes).map(
          (key, index) =>
            index > 0 && (
              <mesh
                key={key}
                ref={key === 'Object_2' ? meshRef : undefined}
                castShadow
                receiveShadow
                geometry={(nodes as any)[key].geometry}
                material={materials.model}
              />
            )
        )}
      </group>
      {/* {meshRef.current && (
        <Decal
          mesh={meshRef.current}
          position={[0.2, 0.2, 0.2]}
          rotation={[0, 0, 0]}
          scale={[0.25, 0.25, 0.25]}
          map={github}
          map-anisotropy={16}
        />
      )} */}
    </group>
  );
};

useGLTF.preload('/k4t.glb');
