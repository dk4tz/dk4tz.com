import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';

import { ScrollControls } from '@react-three/drei';
import { BopButton } from '../components/BopButton';
import { Loader } from '../components/Loader';
import { Portrait } from '../components/Portrait';
import { HomeOverlay } from './HomeOverlay';

export const HomeScreen: React.FC = () => {
	const [isBopping, setIsBopping] = useState(false);

	return (
		<Suspense fallback={<Loader />}>
			<Canvas
				shadows
				camera={{ position: [0, 0, 150], fov: 55 }}
				aria-label='hero-sculpture'
			>
				<ScrollControls pages={4} damping={0.5}>
					<Portrait isBopping={isBopping} />
					<HomeOverlay />
				</ScrollControls>
			</Canvas>
			<BopButton isBopping={isBopping} toggleBop={setIsBopping} />
		</Suspense>
	);
};
