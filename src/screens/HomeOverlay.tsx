import { Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';

import { Icon } from '../components/Icon';
import { ScrollCard } from '../components/ScrollCard';
import { ScrollPage } from '../components/ScrollPage';
import { VibeyDownChevron } from '../components/VibeyDownChevron';

export const HomeOverlay: React.FC = () => {
	const scroll = useScroll();
	const [showChevron, setShowChevron] = useState(false); // Add state for chevron visibility

	const [opacityFirstPage, setOpacityFirstPage] = useState(1);
	const [opacitySecondPage, setOpacitySecondPage] = useState(1);
	const [opacityThirdPage, setOpacityThirdPage] = useState(1);
	const [opacityFourthPage, setOpacityFourthPage] = useState(1);

	useEffect(() => {
		// Set timeout to show chevron after 1000ms
		const timer = setTimeout(() => {
			setShowChevron(true);
		}, 4000);

		return () => clearTimeout(timer);
	}, []);

	useFrame(() => {
		setOpacityFirstPage(1 - scroll.range(0, 1 / 10));
		setOpacitySecondPage(scroll.curve(1 / 8, 1 / 4));
		setOpacityThirdPage(scroll.curve(4 / 10, 1 / 4));
		setOpacityFourthPage(scroll.range(3 / 4, 1 / 4));
	});

	return (
		<Scroll html>
			<div className='w-screen'>
				<ScrollPage
					alignment={'items-center'}
					opacity={opacityFirstPage}
				>
					<div
						className={`mt-auto transition-opacity duration-1000 ease-in ${
							showChevron ? 'opacity-100' : 'opacity-0'
						}`}
					>
						<VibeyDownChevron />
					</div>
				</ScrollPage>
				<ScrollPage opacity={opacitySecondPage}>
					<IntroScrollCard />
				</ScrollPage>
				<ScrollPage alignment={'items-end'} opacity={opacityThirdPage}>
					<ToolkitScrollCard />
				</ScrollPage>
				<ScrollPage
					alignment={'items-center'}
					opacity={opacityFourthPage}
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
