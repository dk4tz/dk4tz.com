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
			<PacmanLoader color='yellow' />
			{showMessage && (
				<div className='mt-4 text-center text-black'>
					{WAITING_MESSAGE}
				</div>
			)}
		</div>
	);
};
