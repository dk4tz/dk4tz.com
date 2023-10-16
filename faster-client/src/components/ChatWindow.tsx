import React from 'react';
import { Text, Plane } from '@react-three/drei';

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
}

interface ChatWindowProps {
  messages: ChatMessage[];
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <>
      {/* Background plane for chat messages */}
      <Plane args={[5, 7]} position={[-2.5, 1, -1]}>
        <meshStandardMaterial color='black' transparent opacity={0.8} />
      </Plane>

      {/* Render each chat message in 3D text */}
      {messages.map((message, index) => (
        <Text
          key={message.id}
          color={message.type === 'user' ? 'blue' : 'gray'}
          position={[-4.5, 6 - index * 0.5, 0]} // Each message is spaced 0.5 units apart vertically
          fontSize={0.3}
          maxWidth={5}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign={message.type === 'user' ? 'right' : 'left'}
          anchorX={message.type === 'user' ? 'right' : 'left'}>
          {message.content}
        </Text>
      ))}
    </>
  );
};
