
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle, 
  XCircle, 
  Eye, 
  Clock,
  BookOpen,
  FileText,
  Video,
  Mic,
  User
} from 'lucide-react';

const ApprovalWorkflow: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const pendingApprovals = [
    {
      id: '1',
      type: 'course',
      title: 'Advanced GST Implementation for Indian Businesses',
      submittedBy: 'Shalini Rao',
      submittedDate: '2024-01-22',
      category: 'Tax Planning',
      status: 'pending',
      description: 'Comprehensive course covering GST implementation strategies...',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: '2',
      type: 'blog',
      title: 'Australian Tax Changes Impact on Indian CAs',
      submittedBy: 'Vikram Shah',
      submittedDate: '2024-01-21',
      category: 'International Tax',
      status: 'pending',
      description: 'Analysis of recent Australian tax policy changes...',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: '3',
      type: 'webinar',
      title: 'Live Session: IFRS 16 Implementation Challenges',
      submittedBy: 'Neha Kulkarni',
      submittedDate: '2024-01-20',
      category: 'Accounting Standards',
      status: 'pending',
      description: 'Interactive webinar on IFRS 16 lease accounting...',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: '4',
      type: 'podcast',
      title: 'CA Career Transitions in Post-COVID Era',
      submittedBy: 'Anuj Mehra',
      submittedDate: '2024-01-19',
      category: 'Career Development',
      status: 'pending',
      description: 'Discussion on career opportunities for CAs...'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return <BookOpen className="h-4 w-4" />;
      case 'blog': return <FileText className="h-4 w-4" />;
      case 'webinar': return <Video className="h-4 w-4" />;
      case 'podcast': return <Mic className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'course': return 'bg-blue-100 text-blue-800';
      case 'blog': return 'bg-green-100 text-green-800';
      case 'webinar': return 'bg-purple-100 text-purple-800';
      case 'podcast': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleApprove = (id: string) => {
    console.log('Approved item:', id);
    // In real implementation, this would call an API
  };

  const handleReject = (id: string) => {
    console.log('Rejected item:', id);
    // In real implementation, this would call an API
  };

  const filteredApprovals = activeTab === 'all' 
    ? pendingApprovals 
    : pendingApprovals.filter(item => item.type === activeTab);

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Approval Workflow</h1>
        <p className="text-gray-600">Review and approve submitted content from instructors and content creators</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-5 w-full max-w-2xl">
          <TabsTrigger value="all">All ({pendingApprovals.length})</TabsTrigger>
          <TabsTrigger value="course">Courses</TabsTrigger>
          <TabsTrigger value="blog">Blogs</TabsTrigger>
          <TabsTrigger value="webinar">Webinars</TabsTrigger>
          <TabsTrigger value="podcast">Podcasts</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-6">
          {filteredApprovals.length === 0 ? (
            <Card>
              <CardContent className="text-center py-8">
                <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No pending approvals</h3>
                <p className="text-gray-600">All submissions have been reviewed</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredApprovals.map((item) => (
                <Card key={item.id} className="border-l-4 border-l-orange-400">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          {item.avatar ? (
                            <AvatarImage src={item.avatar} />
                          ) : (
                            <AvatarFallback>
                              <User className="h-6 w-6" />
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <CardDescription className="flex items-center space-x-2 mt-1">
                            <span>by {item.submittedBy}</span>
                            <span>•</span>
                            <span>{item.submittedDate}</span>
                            <span>•</span>
                            <span>{item.category}</span>
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={getTypeColor(item.type)}>
                        {getTypeIcon(item.type)}
                        <span className="ml-1 capitalize">{item.type}</span>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <div className="flex space-x-3">
                      <Button 
                        onClick={() => handleApprove(item.id)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Approve
                      </Button>
                      <Button 
                        onClick={() => handleReject(item.id)}
                        variant="outline" 
                        className="text-red-600 border-red-200 hover:bg-red-50"
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        Reject
                      </Button>
                      <Button variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ApprovalWorkflow;
