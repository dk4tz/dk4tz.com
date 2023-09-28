import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { ISourceOptions } from 'tsparticles-engine';
import type { Engine } from 'tsparticles-engine';

import { Portrait } from '../components/Portrait';
import { Music } from '../components/Music';
import particlesOptions from '../particles.json';

export const HomePage = () => {
  console.log(
    'Hello Anon, \n\n Welcome to my humble digital abode. Please enjoy the Portrait. \n\n -dk4tz'
  );
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  return (
    <>
      <Portrait />
      <Music />
      <Particles
        className='particles'
        options={particlesOptions as ISourceOptions}
        init={particlesInit}
      />
      ;
    </>
  );
};
