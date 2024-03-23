import chroma from 'chroma-js';
import { useRef } from 'react';
import * as THREE from 'three';

export const useVibe = () => {
	const clockRef = useRef(new THREE.Clock());

	const computeColor = (freq: number) => {
		const elapsedTime = clockRef.current.getElapsedTime();
		const noise = (Math.random() - 0.5) * 0.001;
		const colorValue = Math.floor(
			((Math.sin(elapsedTime / freq) + noise) * 0.5 + 0.5) * 360
		);
		return chroma.hsl(colorValue, 1, 0.75).hex();
	};

	return { computeColor };
};
