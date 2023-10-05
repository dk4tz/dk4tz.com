import { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';

const WAITING_MESSAGE =
  'This page is pretty beefy... Keep waiting or try again when you have a better connection.';

export const Loader: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center align-middle'>
      <div className='rounded-lg bg-black bg-opacity-70 p-16'>
        <PacmanLoader color='yellow' />
      </div>
      {showMessage && (
        <div className='font-mono mt-4 text-center text-black'>
          {WAITING_MESSAGE}
        </div>
      )}
    </div>
  );
};
