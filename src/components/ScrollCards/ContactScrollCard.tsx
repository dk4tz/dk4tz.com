import { Icon } from '../Icon';
import { BaseScrollCard } from './BaseScrollCard';

export const ContactScrollCard: React.FC = () => {
	return (
		<div className='flex items-center justify-center'>
			<BaseScrollCard
				header={{ title: "Let's connect 🤝", align: 'center' }}
			>
				<div className='flex flex-row flex-wrap items-center justify-center'>
					<Icon
						source={'linkedin.png'}
						alt='LinkedIn'
						url='https://www.linkedin.com/in/dk4tz/'
					/>
					<Icon
						source={'github.png'}
						alt='GitHub'
						url='https://www.github.com/dk4tz'
					/>
					<Icon
						source={'email.png'}
						alt='Email'
						url='mailto:hellodavidkatz@pm.me'
					/>
				</div>
			</BaseScrollCard>
		</div>
	);
};
