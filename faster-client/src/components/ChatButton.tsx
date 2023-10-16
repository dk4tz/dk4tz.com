import React from 'react';

interface ChatButtonProps {
  isChatting: boolean;
  toggleChat: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ChatButton: React.FC<ChatButtonProps> = ({
  isChatting,
  toggleChat,
}) => {
  const buttonContent = isChatting ? '🛑' : '💬';

  return (
    <button
      onClick={() => toggleChat(!isChatting)}
      className='fixed bottom-4 left-4 h-[5vh] w-[5vh] rounded bg-gray-400 bg-opacity-10 p-2 hover:bg-opacity-40'>
      {buttonContent}
    </button>
  );
};
