import { Route, Routes } from 'react-router-dom';
import ThreeRouter, { history } from './ThreeRouter';
import { HomePage } from './pages/Home';
import { NoPage } from './pages/404';
import './App.css';

function App() {
  console.log('re-rendering App');
  return (
    <ThreeRouter history={history}>
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </div>
    </ThreeRouter>
  );
}

export default App;
