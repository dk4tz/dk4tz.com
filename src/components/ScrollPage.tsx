interface ScrollPageProps {
	children?: React.ReactNode;
	alignment?: 'items-start' | 'items-end' | 'items-center';
	opacity?: number;
}

export const ScrollPage: React.FC<ScrollPageProps> = ({
	children,
	alignment = 'items-start',
	opacity = 1
}) => {
	return (
		<section
			className={`flex h-screen flex-col justify-start p-10 ${alignment}`}
			style={{ opacity }}
		>
			{children}
		</section>
	);
};
