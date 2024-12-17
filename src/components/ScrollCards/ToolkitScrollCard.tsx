import { Icon } from '../Icon';
import { BaseScrollCard } from './BaseScrollCard';

export const ToolkitScrollCard: React.FC = () => {
	return (
		<BaseScrollCard
			header={{
				title: 'I build powerful internet systems and lead high-performing teams 🦾',
				align: 'left'
			}}
		>
			<div className='flex flex-row flex-wrap items-center justify-center'>
				<Icon
					source={'python.png'}
					alt='Python'
					url='https://www.python.org/'
				/>
				<Icon
					source={'javascript.png'}
					alt='JavaScript'
					url='https://www.javascript.com/'
				/>
				<Icon
					source={'aws.png'}
					alt='Amazon Web Services'
					url='https://aws.amazon.com/'
				/>
				<Icon
					source={'azure.png'}
					alt='Microsoft Azure'
					url='https://azure.microsoft.com/'
				/>
				<Icon
					source={'bash.png'}
					alt='Bash'
					url='https://www.gnu.org/software/bash/'
				/>
				<Icon source={'git.png'} alt='Git' url='https://git-scm.com/' />
				<Icon
					source={'node.png'}
					alt='Node.js'
					url='https://nodejs.org/'
				/>
				<Icon source={'bun.png'} alt='Bun' url='https://bun.sh/' />
				<Icon
					source={'psql.png'}
					alt='PostgreSQL'
					url='https://www.postgresql.org/'
				/>
				<Icon
					source={'docker.png'}
					alt='Docker'
					url='https://www.docker.com/'
				/>
				<Icon
					source={'react.png'}
					alt='React'
					url='https://react.dev/'
				/>
				<Icon
					source={'html.png'}
					alt='HTML5'
					url='https://developer.mozilla.org/en-US/docs/Web/HTML'
				/>
				<Icon
					source={'css.png'}
					alt='CSS'
					url='https://developer.mozilla.org/en-US/docs/Web/CSS'
				/>
			</div>
		</BaseScrollCard>
	);
};
