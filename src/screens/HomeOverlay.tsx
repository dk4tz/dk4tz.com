import { Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';

import { Icon } from '../components/Icon';
import { ScrollCard } from '../components/ScrollCard';
import { ScrollChevron } from '../components/ScrollChevron';
import { ScrollPage } from '../components/ScrollPage';

export const HomeOverlay: React.FC = () => {
	const scroll = useScroll();
	const [showChevron, setShowChevron] = useState(false);
	const [pageOpacities, setPageOpacities] = useState({
		first: 1,
		second: 1,
		third: 1,
		fourth: 1
	});

	useEffect(() => {
		const timer = setTimeout(() => setShowChevron(true), 4000);
		return () => clearTimeout(timer);
	}, []);

	useFrame(() => {
		setPageOpacities({
			first: 1 - scroll.range(0, 0.1),
			second: scroll.curve(0.125, 0.25),
			third: scroll.curve(0.4, 0.25),
			fourth: scroll.range(0.75, 0.25)
		});
	});

	const resetChevronVisibility = () => {
		setShowChevron(false);
		setTimeout(() => setShowChevron(true), 4000);
	};

	const chevron_opacity = `mt-auto transition-opacity duration-1000 ease-in ${
		showChevron ? 'opacity-100' : 'opacity-0'
	}`;

	return (
		<Scroll html>
			<div className='w-screen'>
				<ScrollPage
					alignment={'items-center'}
					opacity={pageOpacities.first}
				>
					<ScrollChevron
						targetOffset={0.2}
						onClick={resetChevronVisibility}
						className={chevron_opacity}
					/>
				</ScrollPage>
				<ScrollPage
					alignment={'items-start'}
					opacity={pageOpacities.second}
				>
					<IntroScrollCard />
					<div className={'mt-4 flex w-full justify-center sm:w-1/3'}>
						<ScrollChevron
							targetOffset={0.48}
							onClick={resetChevronVisibility}
							className={chevron_opacity}
						/>
					</div>
				</ScrollPage>
				<ScrollPage
					alignment={'items-end'}
					opacity={pageOpacities.third}
				>
					<ToolkitScrollCard />
					<div className={'mt-4 flex w-full justify-center sm:w-1/3'}>
						<ScrollChevron
							targetOffset={1}
							onClick={resetChevronVisibility}
							className={chevron_opacity}
						/>
					</div>
				</ScrollPage>
				<ScrollPage
					alignment={'items-center'}
					opacity={pageOpacities.fourth}
				>
					<ContactScrollCard />
				</ScrollPage>
			</div>
		</Scroll>
	);
};

const IntroScrollCard: React.FC = () => {
	return (
		<ScrollCard title={"Hi! I'm David 👋"}>
			<p className=' text-white'>
				Also known as DKatz. I am a professional technical architect and
				application developer. Thanks for checking out my little corner
				of the internet.
			</p>
		</ScrollCard>
	);
};

const ToolkitScrollCard: React.FC = () => {
	return (
		<ScrollCard
			title={'I build powerful software and write beautiful emails 🤗'}
		>
			<p className='mb-2 text-white'>Here's my toolkit:</p>
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
		</ScrollCard>
	);
};

const ContactScrollCard: React.FC = () => {
	return (
		<div className='flex h-full w-full items-center justify-center'>
			<ScrollCard title={"Let's connect 🤝"}>
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
			</ScrollCard>
		</div>
	);
};
