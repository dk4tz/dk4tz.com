import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { useVibe } from '../hooks/useVibe';

interface VibeyBackgroundProps {
	isBopping: boolean;
}

export const VibeyBackground: React.FC<VibeyBackgroundProps> = ({
	isBopping
}) => {
	const { computeColor } = useVibe();

	useFrame(({ scene }) => {
		const color = isBopping ? computeColor(10) : '#1A1818';
		scene.background = new THREE.Color(color);
	});

	return null;
};
