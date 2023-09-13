import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Html,
  Bounds,
  Decal,
  useTexture,
  PerspectiveCamera,
  RenderTexture,
  useCursor,
  useGLTF,
} from '@react-three/drei';
import { PuffLoader } from 'react-spinners';
import { Hero } from './Hero';

export const Portrait = () => {
  console.log('rendering Canvas');
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 150], fov: 55 }}
      aria-label='hero-image'>
      <Suspense
        fallback={
          <Html className='flex h-full w-full items-center justify-center'>
            <PuffLoader
              color='black'
              size={15}
              loading={true}
              aria-label='Loading Spinner'
              speedMultiplier={0.75}
            />
          </Html>
        }>
        <Bounds fit clip observe margin={1} damping={2}>
          <Hero />
        </Bounds>
        <OrbitControls makeDefault enablePan={false} />
      </Suspense>
    </Canvas>
  );
};

// function Bun(props) {

//   return (
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.mesh.geometry}
//       {...props}
//       dispose={null}>
//       <meshStandardMaterial color='black' roughness={0} metalness={0.5} />
//       <Decal
//         position={[0, 0, 0.75]}
//         rotation={[-0.4, Math.PI, 0]}
//         scale={[0.9, 0.25, 1]}>
//         <meshStandardMaterial
//           roughness={0.6}
//           transparent
//           polygonOffset
//           polygonOffsetFactor={-10}>
//           <RenderTexture attach='map' anisotropy={16}>
//             <PerspectiveCamera
//               makeDefault
//               manual
//               aspect={0.9 / 0.25}
//               position={[0, 0, 5]}
//             />
//             <color attach='background' args={['#af2040']} />
//             <ambientLight intensity={0.5} />
//             <directionalLight position={[10, 10, 5]} />
//             <Text
//               rotation={[0, Math.PI, 0]}
//               ref={textRef}
//               fontSize={4}
//               color='white'>
//               hello from drei
//             </Text>
//           </RenderTexture>
//         </meshStandardMaterial>
//       </Decal>
//       <Decal
//         position={[-0.7, 0.55, 0.3]}
//         rotation={[1, 0, Math.PI]}
//         scale={0.2}
//         map={pmndrs}
//         map-anisotropy={16}
//       />
//     </mesh>
//   );
// }

// function Dodecahedron(props) {
//   const meshRef = useRef();
//   const texture = useTexture('/react.png');
//   const [hovered, hover] = useState(false);
//   const [clicked, click] = useState(false);
//   useCursor(hovered);
//   useFrame(
//     (state, delta) =>
//       (meshRef.current.rotation.x = meshRef.current.rotation.y += delta)
//   );
//   return (
//     <mesh
//       {...props}
//       ref={meshRef}
//       scale={clicked ? 2.25 : 1.75}
//       onClick={() => click(!clicked)}
//       onPointerOver={() => hover(true)}
//       onPointerOut={() => hover(false)}>
//       <dodecahedronGeometry args={[0.75]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'goldenrod'} />
//       <Decal
//         position={[0, -0.2, 0.5]}
//         scale={0.75}
//         map={texture}
//         map-anisotropy={16}
//       />
//     </mesh>
//   );
// }
