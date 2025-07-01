
import React, { useState } from 'react';
import SimpleChatbot from '@/components/ai/SimpleChatbot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  return (
    <>
      {children}
      <SimpleChatbot 
        isOpen={chatbotOpen} 
        onToggle={() => setChatbotOpen(!chatbotOpen)} 
      />
    </>
  );
};

export default Layout;
