interface ScrollPageProps {
	children?: React.ReactNode;
	align?: 'left' | 'middle' | 'right';
	opacity?: number;
}

export const ScrollPage: React.FC<ScrollPageProps> = ({
	children,
	align = 'left',
	opacity = 1
}) => {
	const getAlignmentClass = (align: 'left' | 'middle' | 'right') => {
		switch (align) {
			case 'left':
				return 'items-start';
			case 'middle':
				return 'items-center';
			case 'right':
				return 'items-end';
		}
	};

	return (
		<section
			className={`flex h-[100dvh] flex-col justify-center p-10 ${getAlignmentClass(
				align
			)}`}
			style={{ opacity }}
		>
			{children}
		</section>
	);
};
