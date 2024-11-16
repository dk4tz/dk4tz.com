import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

import { useScroll } from '@react-three/drei';
import { useVibe } from '../hooks/useVibe';

interface ScrollChevronProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: () => void;
	targetOffset?: number;
}

export const ScrollChevron: React.FC<ScrollChevronProps> = ({
	onClick,
	targetOffset = 1,
	...props
}) => {
	const { computeColor } = useVibe();
	const [chevronColor, setChevronColor] = useState('#000000');

	const scroll = useScroll();
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		if (scroll.el) {
			console.log('scroll height: ', scroll.el.scrollHeight);
			console.log('scroll.el ', scroll.pages);
			scroll.el.scrollTo({
				top: targetOffset * scroll.el.scrollHeight,
				behavior: 'smooth'
			});
		}
		onClick ? onClick() : console.log('Scrolling...');
	};

	useFrame(() => {
		setChevronColor(computeColor(5));
	});

	return (
		<button
			className='mt-auto cursor-pointer'
			aria-label='Scroll to the next page'
			role='button'
			onClick={handleClick}
			{...props}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 16 16'
				className='h-12 w-12 animate-bounce'
				style={{ color: chevronColor }}
			>
				<path
					fill='currentColor'
					fillRule='evenodd'
					d='M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67'
				/>
			</svg>
		</button>
	);
};
