import {
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
  MouseEventHandler,
} from 'react';

interface BopButtonProps {
  isBopping: boolean;
  toggleBop: Dispatch<SetStateAction<boolean>>;
}

export const BopButton: React.FC<BopButtonProps> = ({
  isBopping,
  toggleBop,
}) => {
  const musicPath = `${import.meta.env.BASE_URL}music/zhu_japan.mp3`;
  const audio = useRef(new Audio(musicPath)).current;

  useEffect(() => {
    audio.loop = true;

    if (isBopping) {
      audio.play().catch((error) => {
        console.error('Music failed:', error);
      });
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isBopping, audio]);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    toggleBop((prevBop) => !prevBop);
  };

  const buttonContent = isBopping ? '⏸️' : '▶️';

  return (
    <button
      className='fixed bottom-4 right-4 h-[5vh] w-[5vh] rounded bg-gray-400 bg-opacity-10 p-2 hover:bg-opacity-40'
      onClick={handleClick}>
      {buttonContent}
    </button>
  );
};
