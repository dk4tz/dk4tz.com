import React from 'react';

interface IconProps {
	source: string;
	url: string;
	alt?: string;
}

export const Icon: React.FC<IconProps> = ({ source, url, alt = 'icon' }) => {
	const handleClick = () => {
		window.open(url, '_blank');
	};

	return (
		<div className='p-2'>
			<img
				src={source}
				alt={alt}
				className='h-8 w-8 cursor-pointer object-contain'
				onClick={handleClick}
			/>
		</div>
	);
};
