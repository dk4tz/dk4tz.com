import { Bounds, ContactShadows, OrbitControls } from '@react-three/drei';
import React from 'react';

import { Hero } from './Hero';
import { Lights } from './Lights';
import { VibeyBackground } from './VibeyBackground';

interface PortraitProps {
	isBopping: boolean;
}

export const Portrait: React.FC<PortraitProps> = ({ isBopping }) => {
	const isDesktop = window.innerWidth >= 640;
	return (
		<>
			<VibeyBackground isBopping={isBopping} />
			<Lights />
			<Bounds fit clip observe margin={0.5} damping={2}>
				<Hero bop={isBopping} />
				<ContactShadows position={[0, -2.4, 0]} blur={2} />
			</Bounds>
			{isDesktop && (
				<OrbitControls
					makeDefault
					enableZoom={false}
					enablePan={false}
					maxPolarAngle={Math.PI / 2}
				/>
			)}
		</>
	);
};
