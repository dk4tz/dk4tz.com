import React from 'react';
import { ChatBubble } from './ChatBubble';
import { ChatMessage } from './Portrait';

interface ChatWindowProps {
  messages: ChatMessage[];
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <group>
      {messages.map((message, index) => (
        <group key={message.id} position={[0, -index * 1, 0]}>
          <ChatBubble type={message.type} content={message.content} />
        </group>
      ))}
    </group>
  );
};
