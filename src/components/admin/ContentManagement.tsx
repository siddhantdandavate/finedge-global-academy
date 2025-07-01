
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Edit, 
  Save, 
  Plus, 
  Trash2, 
  Globe, 
  FileText,
  Settings,
  Languages
} from 'lucide-react';

interface ContentItem {
  id: string;
  key: string;
  content: { [language: string]: string };
  section: string;
  type: 'text' | 'html' | 'json';
  lastModified: string;
}

const ContentManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('content');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [editingItem, setEditingItem] = useState<string | null>(null);

  // Mock content data
  const [contentItems, setContentItems] = useState<ContentItem[]>([
    {
      id: '1',
      key: 'hero.title',
      content: {
        en: 'Master Global Finance with Finedge',
        hi: 'फाइनएज के साथ वैश्विक वित्त में महारत हासिल करें',
        mr: 'फाइनएजसह जागतिक वित्तामध्ये प्रभुत्व मिळवा'
      },
      section: 'Hero',
      type: 'text',
      lastModified: '2024-01-15'
    },
    {
      id: '2',
      key: 'hero.subtitle',
      content: {
        en: 'Empowering Indian Chartered Accountants with international expertise',
        hi: 'भारतीय चार्टर्ड अकाउंटेंट्स को अंतर्राष्ट्रीय विशेषज्ञता के साथ सशक्त बनाना',
        mr: 'भारतीय चार्टर्ड अकाउंटंट्सना आंतरराष्ट्रीय कौशल्यासह सक्षम करणे'
      },
      section: 'Hero',
      type: 'text',
      lastModified: '2024-01-15'
    }
  ]);

  const [languages] = useState([
    { code: 'en', name: 'English', enabled: true },
    { code: 'hi', name: 'Hindi', enabled: true },
    { code: 'mr', name: 'Marathi', enabled: true },
    { code: 'gu', name: 'Gujarati', enabled: false },
    { code: 'ta', name: 'Tamil', enabled: false },
    { code: 'te', name: 'Telugu', enabled: false },
  ]);

  const handleSaveContent = (itemId: string, newContent: string) => {
    setContentItems(prev => prev.map(item => 
      item.id === itemId 
        ? { 
            ...item, 
            content: { 
              ...item.content, 
              [selectedLanguage]: newContent 
            },
            lastModified: new Date().toISOString().split('T')[0]
          }
        : item
    ));
    setEditingItem(null);
  };

  const handleAddNewContent = () => {
    const newId = Date.now().toString();
    const newItem: ContentItem = {
      id: newId,
      key: 'new.content.key',
      content: { [selectedLanguage]: 'New content' },
      section: 'General',
      type: 'text',
      lastModified: new Date().toISOString().split('T')[0]
    };
    setContentItems(prev => [...prev, newItem]);
    setEditingItem(newId);
  };

  const handleDeleteContent = (itemId: string) => {
    setContentItems(prev => prev.filter(item => item.id !== itemId));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Content Management System</h2>
        <p className="text-gray-600">Manage website content dynamically across multiple languages</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="languages">Languages</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          {/* Language Selector */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Language Selection
              </CardTitle>
              <CardDescription>Select language to edit content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {languages.filter(lang => lang.enabled).map(language => (
                  <Button
                    key={language.code}
                    variant={selectedLanguage === language.code ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLanguage(language.code)}
                  >
                    {language.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Content Items */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Content Items
                  </CardTitle>
                  <CardDescription>
                    Editing content for: <Badge variant="secondary">{selectedLanguage}</Badge>
                  </CardDescription>
                </div>
                <Button onClick={handleAddNewContent} size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Content
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contentItems.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{item.section}</Badge>
                        <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                          {item.key}
                        </code>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">
                          Modified: {item.lastModified}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setEditingItem(editingItem === item.id ? null : item.id)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteContent(item.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    {editingItem === item.id ? (
                      <div className="space-y-2">
                        <Textarea
                          value={item.content[selectedLanguage] || ''}
                          onChange={(e) => {
                            const newContent = e.target.value;
                            setContentItems(prev => prev.map(prevItem => 
                              prevItem.id === item.id 
                                ? { 
                                    ...prevItem, 
                                    content: { 
                                      ...prevItem.content, 
                                      [selectedLanguage]: newContent 
                                    }
                                  }
                                : prevItem
                            ));
                          }}
                          className="min-h-[100px]"
                        />
                        <div className="flex gap-2">
                          <Button 
                            size="sm"
                            onClick={() => handleSaveContent(item.id, item.content[selectedLanguage] || '')}
                          >
                            <Save className="h-4 w-4 mr-2" />
                            Save
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setEditingItem(null)}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="text-sm">
                          {item.content[selectedLanguage] || 
                            <span className="text-gray-400 italic">
                              No content available for {selectedLanguage}
                            </span>
                          }
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="languages" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="h-5 w-5" />
                Language Management
              </CardTitle>
              <CardDescription>Enable or disable languages for your website</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {languages.map((language) => (
                  <div key={language.code} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <span className="font-medium">{language.name}</span>
                      <span className="ml-2 text-gray-500">({language.code})</span>
                    </div>
                    <Badge variant={language.enabled ? "default" : "secondary"}>
                      {language.enabled ? "Enabled" : "Disabled"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                CMS Settings
              </CardTitle>
              <CardDescription>Configure content management system settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Default Language</label>
                  <div className="mt-1">
                    <select className="w-full p-2 border rounded-md">
                      <option value="en">English</option>
                      <option value="hi">Hindi</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Auto-save Changes</label>
                  <div className="mt-1">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Automatically save changes every 30 seconds</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Content Backup</label>
                  <div className="mt-1 space-y-2">
                    <Button variant="outline" size="sm">
                      Export Content
                    </Button>
                    <Button variant="outline" size="sm">
                      Import Content
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentManagement;
