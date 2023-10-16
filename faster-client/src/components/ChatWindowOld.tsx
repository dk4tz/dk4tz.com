import React, { useState } from 'react';
import { Html } from '@react-three/drei';

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
}

export const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        type: 'user',
        content: inputValue,
      };

      setMessages([...messages, userMessage]);
      setInputValue('');

      setTimeout(() => {
        const botMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          content: 'Hello! This is a bot message.',
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 1000);
    }
  };

  return (
    <Html
      center
      position={[0, 0, 0]}
      className='absolute right-0 h-screen w-1/2'>
      <div className='flex h-full flex-col rounded-lg bg-black bg-opacity-70 p-8'>
        <div className='messages mb-4 flex-grow overflow-y-auto rounded border border-white'>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message m-2 rounded p-2 ${
                message.type === 'user'
                  ? 'ml-auto bg-blue-500'
                  : 'mr-auto bg-gray-500'
              }`}>
              {message.content}
            </div>
          ))}
        </div>
        <div className='input-area flex items-center'>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Type a message...'
            className='mr-2 flex-grow rounded border border-white p-2'
          />
          <button
            onClick={handleSendMessage}
            className='rounded bg-blue-500 px-4 py-2 text-white'>
            Send
          </button>
        </div>
      </div>
    </Html>
  );
};
