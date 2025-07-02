
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle, 
  XCircle, 
  Eye, 
  Clock, 
  FileText, 
  Search,
  Filter,
  Calendar,
  User,
  MessageSquare
} from 'lucide-react';

interface ContentItem {
  id: string;
  type: 'blog' | 'article' | 'webinar' | 'course';
  title: string;
  author: string;
  authorAvatar: string;
  content: string;
  status: 'pending' | 'approved' | 'rejected' | 'revision';
  submittedAt: string;
  category: string;
  tags: string[];
  wordCount: number;
  readTime: string;
}

const ContentManagementSystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const [contentItems, setContentItems] = useState<ContentItem[]>([
    {
      id: '1',
      type: 'blog',
      title: 'Understanding IFRS 15: Revenue Recognition Standards',
      author: 'Dr. Sarah Johnson',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b04c?w=100&h=100&fit=crop&crop=face',
      content: 'IFRS 15 establishes a comprehensive framework for determining whether, how much, and when revenue is recognized...',
      status: 'pending',
      submittedAt: '2024-01-20T10:30:00Z',
      category: 'Accounting Standards',
      tags: ['IFRS', 'Revenue Recognition', 'Financial Reporting'],
      wordCount: 2840,
      readTime: '12 min'
    },
    {
      id: '2',
      type: 'article',
      title: 'GST Compliance for E-commerce Businesses',
      author: 'CA Priya Sharma',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'E-commerce businesses face unique challenges in GST compliance...',
      status: 'pending',
      submittedAt: '2024-01-19T14:20:00Z',
      category: 'Taxation',
      tags: ['GST', 'E-commerce', 'Compliance'],
      wordCount: 1920,
      readTime: '8 min'
    },
    {
      id: '3',
      type: 'webinar',
      title: 'Advanced Tax Planning Strategies for 2024',
      author: 'CA Michael Chen',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: 'Join us for an in-depth exploration of tax planning strategies...',
      status: 'approved',
      submittedAt: '2024-01-18T09:15:00Z',
      category: 'Tax Planning',
      tags: ['Tax Planning', 'Strategies', 'Finance'],
      wordCount: 3200,
      readTime: '15 min'
    }
  ]);

  const handleApprove = (id: string) => {
    setContentItems(prev => prev.map(item => 
      item.id === id ? { ...item, status: 'approved' as const } : item
    ));
  };

  const handleReject = (id: string) => {
    setContentItems(prev => prev.map(item => 
      item.id === id ? { ...item, status: 'rejected' as const } : item
    ));
  };

  const handleRequestRevision = (id: string) => {
    setContentItems(prev => prev.map(item => 
      item.id === id ? { ...item, status: 'revision' as const } : item
    ));
  };

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || item.type === filterType;
    const matchesStatus = activeTab === 'all' || item.status === activeTab;
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'revision': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <FileText className="h-4 w-4" />;
      case 'article': return <FileText className="h-4 w-4" />;
      case 'webinar': return <MessageSquare className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Content Management</h2>
        <p className="text-gray-600">Review and moderate all submitted content</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Review</p>
                <p className="text-2xl font-bold">{contentItems.filter(item => item.status === 'pending').length}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Approved</p>
                <p className="text-2xl font-bold">{contentItems.filter(item => item.status === 'approved').length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Needs Revision</p>
                <p className="text-2xl font-bold">{contentItems.filter(item => item.status === 'revision').length}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Content</p>
                <p className="text-2xl font-bold">{contentItems.length}</p>
              </div>
              <FileText className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search content or authors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Types</option>
              <option value="blog">Blog Posts</option>
              <option value="article">Articles</option>
              <option value="webinar">Webinars</option>
              <option value="course">Courses</option>
            </select>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 w-full max-w-md">
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="revision">Revision</TabsTrigger>
          <TabsTrigger value="all">All</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {filteredContent.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={item.authorAvatar} />
                      <AvatarFallback>{item.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm text-gray-600">by {item.author}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {getTypeIcon(item.type)}
                          <span className="ml-1">{item.type}</span>
                        </Badge>
                        <Badge className={getStatusColor(item.status)}>
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <p>{new Date(item.submittedAt).toLocaleDateString()}</p>
                    <p>{item.wordCount} words • {item.readTime}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 mb-2">{item.content.substring(0, 200)}...</p>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Badge variant="outline">{item.category}</Badge>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                    {item.status === 'pending' && (
                      <>
                        <Button 
                          size="sm" 
                          onClick={() => handleApprove(item.id)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleRequestRevision(item.id)}
                          className="text-blue-600 border-blue-200"
                        >
                          Request Revision
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleReject(item.id)}
                          className="text-red-600 border-red-200"
                        >
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentManagementSystem;
