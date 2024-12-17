import { BaseScrollCard } from './BaseScrollCard';

export const IntroScrollCard: React.FC = () => {
	return (
		<BaseScrollCard
			header={{
				title: "Hi! I'm David 👋",
				align: 'left'
			}}
		>
			<p className='text-white'>
				Also known as DKatz. I'm a full-stack engineer passionate about
				building products on the frontier of artificial intelligence.
				Thanks for checking out my little corner of the internet.
			</p>
		</BaseScrollCard>
	);
};
