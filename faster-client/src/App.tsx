import { useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import ThreeRouter, { history } from './ThreeRouter';

import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { ISourceOptions } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import particlesOptions from './particles.json';

import { HomePage } from './pages/Home';
import { NoPage } from './pages/404';
import './App.css';

function App() {
  console.log('Rendering App...');
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  return (
    <div className='App'>
      <Particles
        options={particlesOptions as ISourceOptions}
        init={particlesInit}
      />
      <ThreeRouter history={history}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </ThreeRouter>
    </div>
  );
}

export default App;
