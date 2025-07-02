
import React, { useState } from 'react';
import EnhancedChatbot from '@/components/ai/EnhancedChatbot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatbotMinimized, setChatbotMinimized] = useState(false);

  return (
    <>
      {children}
      <EnhancedChatbot
        isOpen={chatbotOpen}
        onToggle={() => setChatbotOpen(!chatbotOpen)}
        isMinimized={chatbotMinimized}
        onMinimize={() => setChatbotMinimized(!chatbotMinimized)}
      />
    </>
  );
};

export default Layout;
