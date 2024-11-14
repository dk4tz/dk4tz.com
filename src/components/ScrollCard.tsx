interface ScrollCardProps {
	children?: React.ReactNode;
	title?: string;
}

export const ScrollCard: React.FC<ScrollCardProps> = ({ children, title }) => {
	return (
		<div className='w-full flex-col items-center justify-center rounded-xl bg-gray-500 bg-opacity-25 p-4 sm:w-1/3'>
			{title && (
				<h1
					className='mb-1 flex-row text-center text-2xl
					font-bold text-white sm:text-start'
				>
					{title}
				</h1>
			)}
			<div className='mb-1 text-start text-base'>{children}</div>
		</div>
	);
};
