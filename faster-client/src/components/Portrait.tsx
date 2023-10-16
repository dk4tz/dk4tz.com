import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, ContactShadows, OrbitControls } from '@react-three/drei';

import { Hero } from './Hero';
import { Lights } from './Lights';
import { BopButton } from './BopButton';
import { Vibe } from './Vibe';
import { Loader } from './Loader';
import { ChatWindow } from './ChatWindow';
import { ChatButton } from './ChatButton';

export interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
}

export const Portrait: React.FC = () => {
  const [isBopping, setIsBopping] = useState(false);
  const [isChatting, setIsChatting] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');

  // Function to handle sending of user's message and also
  // to simulate a bot's reply after 1 second.
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        type: 'user',
        content: inputValue,
      };

      setMessages((prev) => [...prev, userMessage]);
      setInputValue('');

      setTimeout(() => {
        const botReply: ChatMessage = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          content: 'Thank you!',
        };
        setMessages((prev) => [...prev, botReply]);
      }, 1000);
    }
  };

  return (
    <Suspense fallback={<Loader />}>
      {/* Main 3D Canvas */}
      <Canvas
        shadows
        camera={{ position: [0, 0, 150], fov: 55 }}
        aria-label='hero-sculpture'>
        <Vibe isBopping={isBopping} />
        <Lights />

        {/* Bounds act as a container and helper for positioning */}
        <Bounds fit clip observe margin={0.5} damping={2}>
          <Hero bop={isBopping} />
          <ContactShadows position={[0, -2.4, 0]} blur={2} />

          {/* Render ChatWindow if isChatting is true */}
          {isChatting && <ChatWindow messages={messages} />}
        </Bounds>

        <OrbitControls
          makeDefault
          enableZoom={true}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>

      {/* Input field for chat, displayed only if isChatting is true. */}
      {isChatting && (
        <div className='z-1000 absolute bottom-10 left-1/2 flex -translate-x-1/2 transform items-center'>
          <input
            className='mr-2 rounded-l bg-gray-300 px-2 py-1'
            placeholder='Type a message...'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className='rounded-r bg-blue-500 px-2 py-1 text-white'
            onClick={handleSendMessage}>
            Send
          </button>
        </div>
      )}

      {/* Action Buttons for Bop and Chat functionalities */}
      <BopButton isBopping={isBopping} toggleBop={setIsBopping} />
      <ChatButton isChatting={isChatting} toggleChat={setIsChatting} />
    </Suspense>
  );
};
