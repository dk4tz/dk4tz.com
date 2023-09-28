import { useState, useRef, useEffect } from 'react';

export const Music = () => {
  const [isMuted, setIsMuted] = useState(true); // Initial state is muted
  const musicPath: string = `${import.meta.env.BASE_URL}music/zhu_japan.mp3`;

  console.log(musicPath);

  const audioRef = useRef(new Audio(musicPath));

  useEffect(() => {
    // Set audio to loop and initially muted
    audioRef.current.loop = true;
    audioRef.current.muted = isMuted;
    audioRef.current
      .play()
      .catch((error) => console.error('Music failed:', error));
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <button
      className='fixed bottom-4 right-4 rounded-full bg-gray-400 bg-opacity-10 p-2 hover:bg-opacity-40'
      onClick={toggleMute}
      aria-label={isMuted ? 'Unmute' : 'Mute'}>
      {isMuted ? '🔇' : '🔊'}
    </button>
  );
};
