// External libraries
import React, { useRef, useMemo, useState, useCallback } from 'react';
import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
import { Decal, RenderTexture, PerspectiveCamera, Text, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { GLTF } from 'three-stdlib';

// Internal imports
import { useVibe } from '../hooks/useVibe';

// Type definitions
type HeroGLTF = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh;
  };
};

interface HeroProps {
  bop: boolean;
}

export const Hero: React.FC<HeroProps> = ({ bop }) => {
  const heroPath = `${import.meta.env.BASE_URL}models/k4t.glb`;

  // References
  const textRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  // State management
  const [decalColor, setDecalColor] = useState('#000000');
  const [hovered, setHovered] = useState(false);
  
  // Context hooks
  const { gl } = useThree();
  const { computeColor } = useVibe();
  const { nodes } = useGLTF(heroPath) as HeroGLTF;

  // Event handlers
  const handlePointerOver = useCallback(() => {
    setHovered(true);
    gl.domElement.style.cursor = 'pointer';
  }, [gl]);

  const handlePointerOut = useCallback(() => {
    setHovered(false);
    gl.domElement.style.cursor = 'auto';
  }, [gl]);

  const handleDecalClick = useCallback(() => {
    window.open('https://www.linkedin.com/in/dk4tz', '_blank');
  }, []);

  // Memoized computations
  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#000000',
    roughness: 0.25,
    metalness: 0.5,
  }), []);

  const heroGeometry = useMemo(() => {
    const geometries = Object.values(nodes)
      .filter(node => node.geometry && node.geometry.index)
      .map(node => node.geometry) as THREE.BufferGeometry[];
    return BufferGeometryUtils.mergeGeometries(geometries);
  }, [nodes]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Update decal position and color
    if (textRef.current) {
      textRef.current.position.x = Math.sin(t) * 10;
      setDecalColor(computeColor(5));
    }

    // Animate hero's position and rotation
    if (groupRef.current) {
      if (bop) {
        groupRef.current.rotation.x += 0.01;
        groupRef.current.rotation.y -= 0.01;
        groupRef.current.rotation.z += 0.001;
      } else {
        groupRef.current.position.y = Math.sin(t) / 10;
      }
    }
  });

  // JSX Render
  return (
    <group
      ref={groupRef}
      name="hero"
      position={[0, 0, 0]}
      rotation={[-2.354, 1.212, 2.42]}
      castShadow
      receiveShadow
    >
      <mesh material={material} castShadow receiveShadow geometry={heroGeometry} dispose={null}>
        <Decal
          position={[-.5, -.75, -.25]}
          rotation={[-2.25, 1.7, 2.25]}
          scale={[1, 0.3, 1.2]}
          onClick={handleDecalClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
        >
          <meshStandardMaterial roughness={0.6} transparent opacity={1} emissive={hovered ? '#333333' : '#000000'}>
            <RenderTexture attach="map" anisotropy={16}>
              <PerspectiveCamera makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
              <color attach="background" args={[decalColor]} />
              <Text rotation={[0, Math.PI, 0]} ref={textRef} fontSize={4} color="white">
                david katz works
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </Decal>
      </mesh>
    </group>
  );
};

// Preload the model for better performance
useGLTF.preload(`${import.meta.env.BASE_URL}models/k4t.glb`);
