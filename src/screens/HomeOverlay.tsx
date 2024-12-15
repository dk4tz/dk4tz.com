import { Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';

import { Icon } from '../components/Icon';
import { ScrollCard } from '../components/ScrollCard';
import { ScrollChevron } from '../components/ScrollChevron';
import { ScrollPage } from '../components/ScrollPage';

export type PageKey = 'first' | 'second' | 'third';

export interface PageOpacities {
	first: number;
	second: number;
	third: number;
	fourth: number;
}

export interface PageVisibility {
	first: boolean;
	second: boolean;
	third: boolean;
}
export const HomeOverlay: React.FC = () => {
	const scroll = useScroll();

	const [pageOpacities, setPageOpacities] = useState({
		first: 1,
		second: 1,
		third: 1,
		fourth: 1
	});

	const [pageVisible, setPageVisible] = useState<PageVisibility>({
		first: false,
		second: false,
		third: false
	});

	const [chevronVisible, setChevronVisible] = useState<PageVisibility>({
		first: false,
		second: false,
		third: false
	});

	useEffect(() => {
		const CHEVRON_DELAY_MS = 3500;

		Object.entries(pageVisible).forEach(([page, isVisible]) => {
			const key = page as PageKey;
			if (isVisible && !chevronVisible[key]) {
				const timer = setTimeout(() => {
					setChevronVisible((prev) => ({ ...prev, [page]: true }));
				}, CHEVRON_DELAY_MS);
				return () => clearTimeout(timer);
			} else if (!isVisible) {
				setChevronVisible((prev) => ({ ...prev, [key]: false }));
			}
		});
	}, [pageVisible, chevronVisible]);

	useFrame(() => {
		setPageOpacities({
			first: 1 - scroll.range(0, 0.1),
			second: scroll.curve(0.125, 0.25),
			third: scroll.curve(0.45, 0.25),
			fourth: scroll.range(0.85, 0.15)
		});
		setPageVisible({
			first: scroll.offset < 0.15,
			second: scroll.offset >= 0.2 && scroll.offset < 0.4,
			third: scroll.offset >= 0.45 && scroll.offset < 0.7
		});
	});

	const getChevronClassName = (page: PageKey) =>
		`mt-auto transition-opacity duration-1000 ease-in ${
			chevronVisible[page] && pageVisible[page]
				? 'opacity-100'
				: 'opacity-0'
		}`;

	return (
		<Scroll html>
			<div className='w-screen'>
				<ScrollPage align={'middle'} opacity={pageOpacities.first}>
					<ScrollChevron
						targetOffset={0.2}
						className={getChevronClassName('first')}
					/>
				</ScrollPage>
				<ScrollPage align={'left'} opacity={pageOpacities.second}>
					<IntroScrollCard />
					<div className={'mt-4 flex w-full justify-center sm:w-1/3'}>
						<ScrollChevron
							targetOffset={0.48}
							className={getChevronClassName('second')}
						/>
					</div>
				</ScrollPage>
				<ScrollPage align={'right'} opacity={pageOpacities.third}>
					<ToolkitScrollCard />
					<div className={'mt-4 flex w-full justify-center sm:w-1/3'}>
						<ScrollChevron
							targetOffset={1}
							className={getChevronClassName('third')}
						/>
					</div>
				</ScrollPage>
				<ScrollPage align={'middle'} opacity={pageOpacities.fourth}>
					<ContactScrollCard />
				</ScrollPage>
			</div>
		</Scroll>
	);
};

const IntroScrollCard: React.FC = () => {
	return (
		<ScrollCard
			header={{
				title: "Hi! I'm David 👋",
				align: 'left'
			}}
		>
			<p className='text-white'>
				Also known as dkatz. I'm a full-stack engineer passionate about
				building products on the frontier of artificial intelligence.
				Thanks for checking out my little corner of the internet.
			</p>
		</ScrollCard>
	);
};

const ToolkitScrollCard: React.FC = () => {
	return (
		<ScrollCard
			header={{
				title: 'I build cloud-native systems and lead high-performing teams 🦾',
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
		</ScrollCard>
	);
};

const ContactScrollCard: React.FC = () => {
	return (
		<div className='flex items-center justify-center'>
			<ScrollCard header={{ title: "Let's connect 🤝", align: 'center' }}>
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
