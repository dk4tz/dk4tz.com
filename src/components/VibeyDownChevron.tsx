import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import { useVibe } from '../hooks/useVibe';

// interface VibeyDownChevronProps {
// 	color: string;
// }

export const VibeyDownChevron: React.FC = () => {
	const { computeColor } = useVibe();
	const [chevronColor, setChevronColor] = useState('#000000');

	// console.log(data);

	useFrame(() => {
		setChevronColor(computeColor(5));
	});
	return (
		<div className='mt-auto h-12 w-12 animate-bounce'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 16 16'
				className='h-full w-full'
				style={{ color: chevronColor }}
			>
				<path
					fill='currentColor'
					fillRule='evenodd'
					d='M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67'
				/>
			</svg>
		</div>
	);
};
