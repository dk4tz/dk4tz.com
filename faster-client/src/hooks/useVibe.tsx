import chroma from 'chroma-js';
import * as THREE from 'three';
import { useRef } from 'react';

export const useVibe = () => {
  const clockRef = useRef(new THREE.Clock());

  const computeColor = (freq: number) => {
    const elapsedTime = clockRef.current.getElapsedTime();
    const colorValue = Math.floor((Math.sin(elapsedTime / freq) * 0.5 + 0.5) * 360);
    return chroma.hsl(colorValue, 1, 0.75).hex();
  };

  return { computeColor };
};
