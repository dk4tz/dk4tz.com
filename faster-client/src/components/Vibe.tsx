import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useVibe } from '../hooks/useVibe';
interface VibeProps {
  isBopping: boolean;
}

export const Vibe: React.FC<VibeProps> = ({ isBopping }) => {
  const { computeColor } = useVibe();

  useFrame(({ scene }) => {
    const color = isBopping ? computeColor(10) : '#1A1818';
    scene.background = new THREE.Color(color);
  });

  return null;
};
