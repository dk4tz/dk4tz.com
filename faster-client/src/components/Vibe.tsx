import chroma from 'chroma-js';
import * as THREE from 'three';
import { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';

interface VibeProps {
  isBopping: boolean;
}

export const Vibe: React.FC<VibeProps> = ({ isBopping }) => {
  const [colorStep, setColorStep] = useState(0);

  useEffect(() => {
    const updateColor = () => {
      const stepChange = isBopping ? 1 : -1;
      setColorStep((prevStep) => (prevStep + stepChange + 360) % 360);
    };

    const interval = setInterval(updateColor, 100);
    return () => clearInterval(interval);
  }, [isBopping]);

  useFrame(({ scene }) => {
    const color = isBopping ? chroma.hsl(colorStep, 0.5, 0.7).hex() : '#e1e1e1';
    scene.background = new THREE.Color(color);
  });

  return null;
};
