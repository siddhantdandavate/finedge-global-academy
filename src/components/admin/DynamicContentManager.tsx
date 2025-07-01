
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  Save, 
  RotateCcw, 
  Plus, 
  Trash2, 
  Edit,
  Globe,
  Users,
  Star,
  BarChart3
} from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';
import { toast } from 'sonner';

const DynamicContentManager: React.FC = () => {
  const { content, updateContent, resetContent } = useContent();
  const [activeTab, setActiveTab] = useState('branding');
  const [editingContent, setEditingContent] = useState(content);

  const handleSave = () => {
    updateContent(editingContent);
    toast.success('Content updated successfully!');
  };

  const handleReset = () => {
    resetContent();
    setEditingContent(content);
    toast.info('Content reset to defaults');
  };

  const updateEditingContent = (path: string, value: any) => {
    const keys = path.split('.');
    const newContent = { ...editingContent };
    let current = newContent;
    
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    
    setEditingContent(newContent);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Dynamic Content Manager</h2>
          <p className="text-gray-600">Manage all website content without touching code</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={handleReset}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset to Defaults
          </Button>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-6 w-full">
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="homepage">Homepage</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="branding" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Site Branding
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="siteName">Site Name</Label>
                <Input
                  id="siteName"
                  value={editingContent.branding.siteName}
                  onChange={(e) => updateEditingContent('branding.siteName', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="tagline">Tagline</Label>
                <Input
                  id="tagline"
                  value={editingContent.branding.tagline}
                  onChange={(e) => updateEditingContent('branding.tagline', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="logo">Logo URL</Label>
                <Input
                  id="logo"
                  value={editingContent.branding.logo.primary}
                  onChange={(e) => updateEditingContent('branding.logo.primary', e.target.value)}
                  placeholder="/path/to/logo.svg"
                />
              </div>
              <div>
                <Label htmlFor="logoAlt">Logo Alt Text</Label>
                <Input
                  id="logoAlt"
                  value={editingContent.branding.logo.alt}
                  onChange={(e) => updateEditingContent('branding.logo.alt', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="navigation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Main Navigation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {editingContent.navigation.main.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 border rounded">
                  <Input
                    value={item.label}
                    onChange={(e) => {
                      const newNav = [...editingContent.navigation.main];
                      newNav[index].label = e.target.value;
                      updateEditingContent('navigation.main', newNav);
                    }}
                    placeholder="Label"
                  />
                  <Input
                    value={item.href}
                    onChange={(e) => {
                      const newNav = [...editingContent.navigation.main];
                      newNav[index].href = e.target.value;
                      updateEditingContent('navigation.main', newNav);
                    }}
                    placeholder="URL"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      const newNav = editingContent.navigation.main.filter((_, i) => i !== index);
                      updateEditingContent('navigation.main', newNav);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                onClick={() => {
                  const newNav = [...editingContent.navigation.main, { label: 'New Link', href: '/' }];
                  updateEditingContent('navigation.main', newNav);
                }}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Navigation Item
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="homepage" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                Hero Section
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="heroTitle">Hero Title</Label>
                <Input
                  id="heroTitle"
                  value={editingContent.homepage.hero.title}
                  onChange={(e) => updateEditingContent('homepage.hero.title', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
                <Textarea
                  id="heroSubtitle"
                  value={editingContent.homepage.hero.subtitle}
                  onChange={(e) => updateEditingContent('homepage.hero.subtitle', e.target.value)}
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="primaryCta">Primary CTA</Label>
                  <Input
                    id="primaryCta"
                    value={editingContent.homepage.hero.primaryCta}
                    onChange={(e) => updateEditingContent('homepage.hero.primaryCta', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="secondaryCta">Secondary CTA</Label>
                  <Input
                    id="secondaryCta"
                    value={editingContent.homepage.hero.secondaryCta}
                    onChange={(e) => updateEditingContent('homepage.hero.secondaryCta', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Statistics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {editingContent.homepage.stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 border rounded">
                  <Input
                    value={stat.label}
                    onChange={(e) => {
                      const newStats = [...editingContent.homepage.stats];
                      newStats[index].label = e.target.value;
                      updateEditingContent('homepage.stats', newStats);
                    }}
                    placeholder="Label"
                  />
                  <Input
                    value={stat.value}
                    onChange={(e) => {
                      const newStats = [...editingContent.homepage.stats];
                      newStats[index].value = e.target.value;
                      updateEditingContent('homepage.stats', newStats);
                    }}
                    placeholder="Value"
                  />
                  <Input
                    value={stat.suffix || ''}
                    onChange={(e) => {
                      const newStats = [...editingContent.homepage.stats];
                      newStats[index].suffix = e.target.value;
                      updateEditingContent('homepage.stats', newStats);
                    }}
                    placeholder="Suffix"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      const newStats = editingContent.homepage.stats.filter((_, i) => i !== index);
                      updateEditingContent('homepage.stats', newStats);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Features Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {editingContent.homepage.features.map((feature, index) => (
                <div key={index} className="p-4 border rounded space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">Feature {index + 1}</Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        const newFeatures = editingContent.homepage.features.filter((_, i) => i !== index);
                        updateEditingContent('homepage.features', newFeatures);
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <Input
                    value={feature.title}
                    onChange={(e) => {
                      const newFeatures = [...editingContent.homepage.features];
                      newFeatures[index].title = e.target.value;
                      updateEditingContent('homepage.features', newFeatures);
                    }}
                    placeholder="Feature Title"
                  />
                  <Textarea
                    value={feature.description}
                    onChange={(e) => {
                      const newFeatures = [...editingContent.homepage.features];
                      newFeatures[index].description = e.target.value;
                      updateEditingContent('homepage.features', newFeatures);
                    }}
                    placeholder="Feature Description"
                    rows={2}
                  />
                  <Input
                    value={feature.icon}
                    onChange={(e) => {
                      const newFeatures = [...editingContent.homepage.features];
                      newFeatures[index].icon = e.target.value;
                      updateEditingContent('homepage.features', newFeatures);
                    }}
                    placeholder="Icon Name (e.g., Globe, Award)"
                  />
                </div>
              ))}
              <Button
                onClick={() => {
                  const newFeatures = [...editingContent.homepage.features, {
                    title: 'New Feature',
                    description: 'Feature description',
                    icon: 'Star'
                  }];
                  updateEditingContent('homepage.features', newFeatures);
                }}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Feature
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testimonials" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Testimonials
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {editingContent.homepage.testimonials.map((testimonial, index) => (
                <div key={index} className="p-4 border rounded space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">Testimonial {index + 1}</Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        const newTestimonials = editingContent.homepage.testimonials.filter((_, i) => i !== index);
                        updateEditingContent('homepage.testimonials', newTestimonials);
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      value={testimonial.name}
                      onChange={(e) => {
                        const newTestimonials = [...editingContent.homepage.testimonials];
                        newTestimonials[index].name = e.target.value;
                        updateEditingContent('homepage.testimonials', newTestimonials);
                      }}
                      placeholder="Name"
                    />
                    <Input
                      value={testimonial.role}
                      onChange={(e) => {
                        const newTestimonials = [...editingContent.homepage.testimonials];
                        newTestimonials[index].role = e.target.value;
                        updateEditingContent('homepage.testimonials', newTestimonials);
                      }}
                      placeholder="Role"
                    />
                  </div>
                  <Textarea
                    value={testimonial.content}
                    onChange={(e) => {
                      const newTestimonials = [...editingContent.homepage.testimonials];
                      newTestimonials[index].content = e.target.value;
                      updateEditingContent('homepage.testimonials', newTestimonials);
                    }}
                    placeholder="Testimonial Content"
                    rows={3}
                  />
                  <Input
                    type="number"
                    min="1"
                    max="5"
                    value={testimonial.rating}
                    onChange={(e) => {
                      const newTestimonials = [...editingContent.homepage.testimonials];
                      newTestimonials[index].rating = parseInt(e.target.value);
                      updateEditingContent('homepage.testimonials', newTestimonials);
                    }}
                    placeholder="Rating (1-5)"
                  />
                </div>
              ))}
              <Button
                onClick={() => {
                  const newTestimonials = [...editingContent.homepage.testimonials, {
                    name: 'New User',
                    role: 'CA Professional',
                    content: 'Great experience!',
                    rating: 5
                  }];
                  updateEditingContent('homepage.testimonials', newTestimonials);
                }}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Testimonial
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={editingContent.contact.email}
                  onChange={(e) => updateEditingContent('contact.email', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={editingContent.contact.phone}
                  onChange={(e) => updateEditingContent('contact.phone', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={editingContent.contact.address}
                  onChange={(e) => updateEditingContent('contact.address', e.target.value)}
                  rows={2}
                />
              </div>
              
              <div className="space-y-3">
                <Label>Social Media Links</Label>
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    value={editingContent.social.youtube}
                    onChange={(e) => updateEditingContent('social.youtube', e.target.value)}
                    placeholder="YouTube URL"
                  />
                  <Input
                    value={editingContent.social.linkedin}
                    onChange={(e) => updateEditingContent('social.linkedin', e.target.value)}
                    placeholder="LinkedIn URL"
                  />
                  <Input
                    value={editingContent.social.twitter}
                    onChange={(e) => updateEditingContent('social.twitter', e.target.value)}
                    placeholder="Twitter URL"
                  />
                  <Input
                    value={editingContent.social.facebook}
                    onChange={(e) => updateEditingContent('social.facebook', e.target.value)}
                    placeholder="Facebook URL"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DynamicContentManager;
