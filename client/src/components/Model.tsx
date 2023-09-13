import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_7: THREE.SkinnedMesh;
    Object_9: THREE.SkinnedMesh;
    Object_11: THREE.SkinnedMesh;
    Object_13: THREE.SkinnedMesh;
    Object_15: THREE.SkinnedMesh;
    Object_17: THREE.SkinnedMesh;
    Object_19: THREE.SkinnedMesh;
    Object_21: THREE.SkinnedMesh;
    Object_23: THREE.SkinnedMesh;
    Object_25: THREE.SkinnedMesh;
    Object_27: THREE.SkinnedMesh;
    Object_29: THREE.SkinnedMesh;
    Object_31: THREE.SkinnedMesh;
    Object_33: THREE.SkinnedMesh;
    Object_35: THREE.SkinnedMesh;
    Object_39: THREE.Mesh;
    Object_40: THREE.Mesh;
    Object_42: THREE.Mesh;
    Object_43: THREE.Mesh;
    Object_44: THREE.Mesh;
    GLTF_created_0_rootJoint: THREE.Bone;
  };
  materials: {
    Muscle: THREE.MeshStandardMaterial;
    ['skull.001']: THREE.MeshStandardMaterial;
    ['Material.003']: THREE.MeshStandardMaterial;
  };
};

type ModelProps = JSX.IntrinsicElements['group'] & { gltf: string };

type GLTFActions = Record<string, THREE.AnimationAction>;

export function Model(props: ModelProps) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials, animations } = useGLTF(
    '/allosaurus_fragilis.glb'
  ) as GLTFResult;
  const { actions } = useAnimations<THREE.AnimationClip>(animations, group);

  const handleOnClick = () => {
    actions.Animation!.play();
  };

  return (
    <group ref={group} {...props} dispose={null} onClick={handleOnClick}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
          <group name='root'>
            <group name='GLTF_SceneRootNode' rotation={[Math.PI / 2, 0, 0]}>
              <group
                name='Armature005_17'
                position={[0.887, -0.055, 1.637]}
                scale={0.837}>
                <group name='GLTF_created_0'>
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name='Object_7'
                    geometry={nodes.Object_7.geometry}
                    material={materials.Muscle}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name='Object_9'
                    geometry={nodes.Object_9.geometry}
                    material={materials.Muscle}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name='Object_11'
                    geometry={nodes.Object_11.geometry}
                    material={materials.Muscle}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name='Object_13'
                    geometry={nodes.Object_13.geometry}
                    material={materials.Muscle}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name='Object_15'
                    geometry={nodes.Object_15.geometry}
                    material={materials.Muscle}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name='Object_17'
                    geometry={nodes.Object_17.geometry}
                    material={materials.Muscle}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <skinnedMesh
                    name='Object_19'
                    geometry={nodes.Object_19.geometry}
                    material={materials.Muscle}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    name='Object_21'
                    geometry={nodes.Object_21.geometry}
                    material={materials.Muscle}
                    skeleton={nodes.Object_21.skeleton}
                  />
                  <skinnedMesh
                    name='Object_23'
                    geometry={nodes.Object_23.geometry}
                    material={materials.Muscle}
                    skeleton={nodes.Object_23.skeleton}
                  />
                  <skinnedMesh
                    name='Object_25'
                    geometry={nodes.Object_25.geometry}
                    material={materials.Muscle}
                    skeleton={nodes.Object_25.skeleton}
                  />
                  <skinnedMesh
                    name='Object_27'
                    geometry={nodes.Object_27.geometry}
                    material={materials.Muscle}
                    skeleton={nodes.Object_27.skeleton}
                  />
                  <skinnedMesh
                    name='Object_29'
                    geometry={nodes.Object_29.geometry}
                    material={materials.Muscle}
                    skeleton={nodes.Object_29.skeleton}
                  />
                  <skinnedMesh
                    name='Object_31'
                    geometry={nodes.Object_31.geometry}
                    material={materials.Muscle}
                    skeleton={nodes.Object_31.skeleton}
                  />
                  <skinnedMesh
                    name='Object_33'
                    geometry={nodes.Object_33.geometry}
                    material={materials.Muscle}
                    skeleton={nodes.Object_33.skeleton}
                  />
                  <skinnedMesh
                    name='Object_35'
                    geometry={nodes.Object_35.geometry}
                    material={materials.Muscle}
                    skeleton={nodes.Object_35.skeleton}
                  />
                  <group name='Cylinder067_2' />
                  <group name='Cylinder069_3' />
                  <group name='Cylinder070_4' />
                  <group name='Cylinder071_5' />
                  <group name='Cylinder072_6' />
                  <group name='Cylinder073_7' />
                  <group name='Cylinder074_8' />
                  <group name='Cylinder075_9' />
                  <group name='Cylinder076_10' />
                  <group name='Cylinder077_11' />
                  <group name='Cylinder078_12' />
                  <group name='Cylinder079_13' />
                  <group name='Cylinder080_14' />
                  <group name='Cylinder081_15' />
                  <group name='Cylinder082_16' />
                </group>
              </group>
              <group
                name='Allosaurus-final-jaw_18'
                position={[0.871, -0.03, 1.633]}
                rotation={[-1.54, -0.011, 3.055]}
                scale={0.004}>
                <mesh
                  name='Object_39'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_39.geometry}
                  material={materials['skull.001']}
                />
                <mesh
                  name='Object_40'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials['Material.003']}
                />
              </group>
              <group
                name='Allosaurus-skull_19'
                position={[-0.051, 1.022, 3.973]}
                rotation={[-1.545, -0.005, 3.041]}
                scale={0.004}>
                <mesh
                  name='Object_42'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials['skull.001']}
                />
                <mesh
                  name='Object_43'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_43.geometry}
                  material={materials['skull.001']}
                />
                <mesh
                  name='Object_44'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials['Material.003']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/allosaurus_fragilis.glb');
