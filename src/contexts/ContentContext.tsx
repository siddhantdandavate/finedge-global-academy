
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteContent, defaultSiteContent } from '@/config/siteContent';

interface ContentContextType {
  content: SiteContent;
  updateContent: (newContent: Partial<SiteContent>) => void;
  resetContent: () => void;
  isLoading: boolean;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

interface ContentProviderProps {
  children: ReactNode;
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load content from localStorage on initialization
    const loadStoredContent = () => {
      try {
        const storedContent = localStorage.getItem('finedge-site-content');
        if (storedContent) {
          const parsedContent = JSON.parse(storedContent);
          setContent({ ...defaultSiteContent, ...parsedContent });
        }
      } catch (error) {
        console.error('Error loading stored content:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadStoredContent();
  }, []);

  const updateContent = (newContent: Partial<SiteContent>) => {
    const updatedContent = {
      ...content,
      ...newContent
    };
    setContent(updatedContent);
    
    // Save to localStorage
    try {
      localStorage.setItem('finedge-site-content', JSON.stringify(updatedContent));
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };

  const resetContent = () => {
    setContent(defaultSiteContent);
    localStorage.removeItem('finedge-site-content');
  };

  return (
    <ContentContext.Provider value={{
      content,
      updateContent,
      resetContent,
      isLoading
    }}>
      {children}
    </ContentContext.Provider>
  );
};
