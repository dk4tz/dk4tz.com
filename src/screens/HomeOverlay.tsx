import { Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

import {
	ContactScrollCard,
	IntroScrollCard,
	ToolkitScrollCard
} from '../components/ScrollCards';
import { ScrollChevron } from '../components/ScrollChevron';
import { ScrollPage } from '../components/ScrollPage';

const DEFAULT_CHEVRON_DELAY = 3000;

type ScrollSection = {
	startFade: number;
	fadeDuration: number;
	appearAt: number;
	disappearAt: number;
	scrollTarget?: number;
	chevronDelay?: number;
};

const scrollConfig: Record<string, ScrollSection> = {
	intro: {
		startFade: 0,
		fadeDuration: 0.1,
		appearAt: 0,
		disappearAt: 0.15,
		scrollTarget: 0.25,
		chevronDelay: 5000
	},
	about: {
		startFade: 0.15,
		fadeDuration: 0.25,
		appearAt: 0.2,
		disappearAt: 0.4,
		scrollTarget: 0.52
	},
	toolkit: {
		startFade: 0.5,
		fadeDuration: 0.25,
		appearAt: 0.55,
		disappearAt: 0.7,
		scrollTarget: 1
	},
	contact: {
		startFade: 0.85,
		fadeDuration: 0.15,
		appearAt: 0.85,
		disappearAt: 1
	}
};

type SectionName = keyof typeof scrollConfig;

export const HomeOverlay = () => {
	const scroll = useScroll();
	const [opacities, setOpacities] = useState<Record<SectionName, number>>({
		intro: 1,
		about: 1,
		toolkit: 1,
		contact: 1
	});

	const [visibleChevrons, setVisibleChevrons] = useState<
		Record<SectionName, boolean>
	>({
		intro: false,
		about: false,
		toolkit: false,
		contact: false
	});

	const sectionVisibleTimestamps = useRef<Record<SectionName, number>>({
		intro: Date.now(),
		about: 0,
		toolkit: 0,
		contact: 0
	});

	useFrame(() => {
		const currentTime = Date.now();
		const offset = scroll.offset;

		setOpacities({
			intro:
				1 -
				scroll.range(
					scrollConfig.intro.startFade,
					scrollConfig.intro.fadeDuration
				),
			about: scroll.curve(
				scrollConfig.about.startFade,
				scrollConfig.about.fadeDuration
			),
			toolkit: scroll.curve(
				scrollConfig.toolkit.startFade,
				scrollConfig.toolkit.fadeDuration
			),
			contact: scroll.range(
				scrollConfig.contact.startFade,
				scrollConfig.contact.fadeDuration
			)
		});

		const currentVisibility = {
			intro: offset < scrollConfig.intro.disappearAt,
			about:
				offset >= scrollConfig.about.appearAt &&
				offset < scrollConfig.about.disappearAt,
			toolkit:
				offset >= scrollConfig.toolkit.appearAt &&
				offset < scrollConfig.toolkit.disappearAt,
			contact: true
		};

		Object.entries(currentVisibility).forEach(([section, isVisible]) => {
			const sectionName: SectionName = section;
			const delay =
				scrollConfig[sectionName].chevronDelay ?? DEFAULT_CHEVRON_DELAY;

			if (!isVisible) {
				sectionVisibleTimestamps.current[sectionName] = 0;
				setVisibleChevrons((prev) => ({
					...prev,
					[sectionName]: false
				}));
				return;
			}

			if (sectionVisibleTimestamps.current[sectionName] === 0) {
				sectionVisibleTimestamps.current[sectionName] = currentTime;
				setVisibleChevrons((prev) => ({
					...prev,
					[sectionName]: false
				}));
				return;
			}

			const timeSinceVisible =
				currentTime - sectionVisibleTimestamps.current[sectionName];
			setVisibleChevrons((prev) => ({
				...prev,
				[sectionName]: timeSinceVisible >= delay
			}));
		});
	});

	const getChevronProps = (section: SectionName) => ({
		targetOffset: scrollConfig[section]?.scrollTarget,
		className: `mt-auto transition-opacity duration-1000 ease-in ${
			visibleChevrons[section] ? 'opacity-100' : 'opacity-0'
		}`
	});

	return (
		<Scroll html>
			<div className='w-screen'>
				<ScrollPage align='middle' opacity={opacities.intro}>
					<ScrollChevron {...getChevronProps('intro')} />
				</ScrollPage>

				<ScrollPage align='left' opacity={opacities.about}>
					<IntroScrollCard />
					<div className='mt-4 flex w-full justify-center sm:w-1/3'>
						<ScrollChevron {...getChevronProps('about')} />
					</div>
				</ScrollPage>

				<ScrollPage align='right' opacity={opacities.toolkit}>
					<ToolkitScrollCard />
					<div className='mt-4 flex w-full justify-center sm:w-1/3'>
						<ScrollChevron {...getChevronProps('toolkit')} />
					</div>
				</ScrollPage>

				<ScrollPage align='middle' opacity={opacities.contact}>
					<ContactScrollCard />
				</ScrollPage>
			</div>
		</Scroll>
	);
};

export default HomeOverlay;
