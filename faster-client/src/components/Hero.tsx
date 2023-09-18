import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
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
  const { nodes } = useGLTF('/k4t.glb') as HeroGLTF;
  // const [github] = useTexture(['/github.png']);
  // const textRef = useRef();

  const material = new THREE.MeshStandardMaterial({
    color: 'black',
    roughness: 0,
    metalness: 0.5,
  });

  return (
    <group {...props} dispose={null}>
      <group
        name='hero'
        position={[0, 0, 0]}
        rotation={[-2.354, 1.212, 2.42]}
        castShadow
        receiveShadow>
        {Object.keys(nodes).map((key, index) => {
          if (key in nodes && index > 0) {
            return (
              <mesh
                key={key}
                castShadow
                receiveShadow
                geometry={nodes[key as keyof HeroGLTF['nodes']].geometry}
                material={material}
              />
            );
          }
          console.log('missing key: ', key);
          return null;
        })}
      </group>
    </group>
  );
};
