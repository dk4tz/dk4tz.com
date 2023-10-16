import { Box, Text } from '@react-three/drei';
import React from 'react';

interface ChatBubbleProps {
  type: 'user' | 'bot';
  content: string;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ type, content }) => {
  const color = type === 'user' ? 'blue' : 'gray';
  const alignment = type === 'user' ? 1 : -1;

  return (
    <group position={[alignment * 2.5, 0, 0]}>
      <Box args={[2, 0.5, 0.3]} position={[0, 0, 0]}>
        <meshBasicMaterial color={color} />
      </Box>
      <Text fontSize={0.3} position={[0, 0.15, 0.2]}>
        {content}
      </Text>
    </group>
  );
};
