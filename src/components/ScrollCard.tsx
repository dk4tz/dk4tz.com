interface ScrollCardProps {
	children?: React.ReactNode;
	header?: {
		title: string;
		align: 'center' | 'left' | 'right';
	};
}

export const ScrollCard: React.FC<ScrollCardProps> = ({ children, header }) => {
	const getHeaderAlignment = (align: 'center' | 'left' | 'right') => {
		const baseClasses = 'text-2xl font-bold text-white text-center';

		switch (align) {
			case 'center':
				return `${baseClasses} sm:text-center`;
			case 'left':
				return `${baseClasses} sm:text-start`;
			case 'right':
				return `${baseClasses} sm:text-end`;
		}
	};
	return (
		<div className='w-full min-w-[300px] max-w-xl flex-col items-center justify-center rounded-xl bg-gray-500 bg-opacity-25 p-4 sm:w-1/3'>
			{header && (
				<h1 className={`${getHeaderAlignment(header.align)} mb-2`}>
					{header.title}
				</h1>
			)}
			<div className='text-start text-base'>{children}</div>
		</div>
	);
};
