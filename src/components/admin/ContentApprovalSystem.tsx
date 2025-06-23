
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  CheckCircle, 
  XCircle, 
  Eye, 
  Clock, 
  FileText, 
  Video, 
  Mic, 
  BookOpen,
  AlertTriangle,
  MessageSquare,
  Calendar,
  User,
  Star,
  TrendingUp
} from 'lucide-react';

interface ContentItem {
  id: string;
  type: 'course' | 'blog' | 'webinar' | 'podcast';
  title: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  submittedDate: string;
  status: 'pending' | 'approved' | 'rejected' | 'under_review';
  priority: 'low' | 'medium' | 'high';
  category: string;
  description: string;
  thumbnailUrl?: string;
  estimatedDuration?: string;
  targetAudience?: string;
  previousFeedback?: string;
}

const ContentApprovalSystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [feedback, setFeedback] = useState('');
  const [bulkSelected, setBulkSelected] = useState<string[]>([]);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      type: 'course',
      title: 'Advanced Options Trading Strategies',
      author: {
        name: 'Dr. Michael Rodriguez',
        role: 'instructor',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
      },
      submittedDate: '2024-01-20',
      status: 'pending',
      priority: 'high',
      category: 'Trading',
      description: 'Comprehensive course covering advanced options strategies including spreads, straddles, and exotic options.',
      estimatedDuration: '15 hours',
      targetAudience: 'Advanced traders and finance professionals'
    },
    {
      id: '2',
      type: 'blog',
      title: 'The Future of Cryptocurrency in Finance',
      author: {
        name: 'Emma Thompson',
        role: 'blogger',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
      },
      submittedDate: '2024-01-19',
      status: 'under_review',
      priority: 'medium',
      category: 'Cryptocurrency',
      description: 'Exploring the evolving role of cryptocurrency in traditional finance and its impact on global markets.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=200&fit=crop'
    },
    {
      id: '3',
      type: 'webinar',
      title: 'ESG Investing Workshop',
      author: {
        name: 'Prof. Sarah Chen',
        role: 'instructor',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
      },
      submittedDate: '2024-01-18',
      status: 'approved',
      priority: 'high',
      category: 'Sustainable Finance',
      description: 'Interactive workshop on Environmental, Social, and Governance investing principles and strategies.',
      estimatedDuration: '2 hours'
    },
    {
      id: '4',
      type: 'blog',
      title: 'Risk Management in Volatile Markets',
      author: {
        name: 'Alex Johnson',
        role: 'content-writer',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      },
      submittedDate: '2024-01-17',
      status: 'rejected',
      priority: 'medium',
      category: 'Risk Management',
      description: 'Comprehensive guide to managing investment risks during market volatility.',
      previousFeedback: 'Please add more statistical data and recent case studies. The theoretical framework needs strengthening.'
    },
    {
      id: '5',
      type: 'podcast',
      title: 'Interview with Goldman Sachs Executive',
      author: {
        name: 'David Kim',
        role: 'instructor',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
      },
      submittedDate: '2024-01-16',
      status: 'pending',
      priority: 'high',
      category: 'Career',
      description: 'Exclusive interview discussing career paths in investment banking and market insights.',
      estimatedDuration: '45 minutes'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'under_review': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return <BookOpen className="h-4 w-4" />;
      case 'blog': return <FileText className="h-4 w-4" />;
      case 'webinar': return <Video className="h-4 w-4" />;
      case 'podcast': return <Mic className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const handleApprove = (itemId: string) => {
    console.log('Approving item:', itemId);
    // Implementation for approval
  };

  const handleReject = (itemId: string, rejectionFeedback: string) => {
    console.log('Rejecting item:', itemId, 'with feedback:', rejectionFeedback);
    // Implementation for rejection
  };

  const handleBulkAction = (action: 'approve' | 'reject') => {
    console.log(`Bulk ${action} for items:`, bulkSelected);
    setBulkSelected([]);
  };

  const filteredItems = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.status === activeTab || item.type === activeTab);

  const stats = {
    pending: contentItems.filter(item => item.status === 'pending').length,
    under_review: contentItems.filter(item => item.status === 'under_review').length,
    approved_today: contentItems.filter(item => item.status === 'approved').length,
    rejected_today: contentItems.filter(item => item.status === 'rejected').length
  };

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Pending Review</p>
                <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Under Review</p>
                <p className="text-3xl font-bold text-blue-600">{stats.under_review}</p>
              </div>
              <Eye className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Approved Today</p>
                <p className="text-3xl font-bold text-green-600">{stats.approved_today}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Rejected Today</p>
                <p className="text-3xl font-bold text-red-600">{stats.rejected_today}</p>
              </div>
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Approval Interface */}
      <Card>
        <CardHeader>
          <CardTitle>Content Approval Dashboard</CardTitle>
          <CardDescription>Review and approve submitted content from instructors, bloggers, and content writers</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid grid-cols-7 w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="under_review">Review</TabsTrigger>
              <TabsTrigger value="course">Courses</TabsTrigger>
              <TabsTrigger value="blog">Blogs</TabsTrigger>
              <TabsTrigger value="webinar">Webinars</TabsTrigger>
              <TabsTrigger value="podcast">Podcasts</TabsTrigger>
            </TabsList>

            {/* Bulk Actions */}
            {bulkSelected.length > 0 && (
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <span className="font-medium">{bulkSelected.length} items selected</span>
                <div className="space-x-2">
                  <Button 
                    size="sm" 
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => handleBulkAction('approve')}
                  >
                    Bulk Approve
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="text-red-600 border-red-200 hover:bg-red-50"
                    onClick={() => handleBulkAction('reject')}
                  >
                    Bulk Reject
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => setBulkSelected([])}
                  >
                    Clear Selection
                  </Button>
                </div>
              </div>
            )}

            <TabsContent value={activeTab} className="space-y-4">
              {filteredItems.map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <input
                          type="checkbox"
                          checked={bulkSelected.includes(item.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setBulkSelected([...bulkSelected, item.id]);
                            } else {
                              setBulkSelected(bulkSelected.filter(id => id !== item.id));
                            }
                          }}
                          className="mt-1"
                        />
                        
                        {item.thumbnailUrl && (
                          <img 
                            src={item.thumbnailUrl} 
                            alt={item.title}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                        )}
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            {getTypeIcon(item.type)}
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <Badge className={getPriorityColor(item.priority)}>
                              {item.priority}
                            </Badge>
                            <Badge className={getStatusColor(item.status)}>
                              {item.status.replace('_', ' ')}
                            </Badge>
                          </div>
                          
                          <p className="text-gray-600 mb-3">{item.description}</p>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center space-x-1">
                              <User className="h-4 w-4" />
                              <span>{item.author.name} ({item.author.role})</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{item.submittedDate}</span>
                            </div>
                            {item.estimatedDuration && (
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{item.estimatedDuration}</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">{item.category}</Badge>
                            {item.targetAudience && (
                              <Badge variant="outline">{item.targetAudience}</Badge>
                            )}
                          </div>
                          
                          {item.previousFeedback && (
                            <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                              <p className="text-sm text-red-800">
                                <strong>Previous Feedback:</strong> {item.previousFeedback}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-2 ml-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => setSelectedItem(item)}
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              Review
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="flex items-center space-x-2">
                                {getTypeIcon(item.type)}
                                <span>{item.title}</span>
                              </DialogTitle>
                              <DialogDescription>
                                Review content and provide approval decision
                              </DialogDescription>
                            </DialogHeader>
                            
                            <div className="space-y-6">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="text-sm font-medium">Author:</label>
                                  <div className="flex items-center space-x-2 mt-1">
                                    <Avatar className="w-6 h-6">
                                      <AvatarImage src={item.author.avatar} />
                                      <AvatarFallback>{item.author.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <span>{item.author.name}</span>
                                  </div>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Submitted:</label>
                                  <p className="mt-1">{item.submittedDate}</p>
                                </div>
                              </div>
                              
                              <div>
                                <label className="text-sm font-medium">Description:</label>
                                <p className="mt-1 text-gray-600">{item.description}</p>
                              </div>
                              
                              <div>
                                <label className="text-sm font-medium">Feedback/Comments:</label>
                                <Textarea
                                  value={feedback}
                                  onChange={(e) => setFeedback(e.target.value)}
                                  placeholder="Provide feedback for approval/rejection..."
                                  className="mt-1"
                                  rows={4}
                                />
                              </div>
                              
                              <div className="flex justify-end space-x-3">
                                <Button 
                                  variant="outline" 
                                  className="text-red-600 border-red-200 hover:bg-red-50"
                                  onClick={() => handleReject(item.id, feedback)}
                                >
                                  <XCircle className="h-4 w-4 mr-1" />
                                  Reject
                                </Button>
                                <Button 
                                  className="bg-green-600 hover:bg-green-700"
                                  onClick={() => handleApprove(item.id)}
                                >
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                  Approve
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        
                        {item.status === 'pending' && (
                          <>
                            <Button 
                              size="sm" 
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => handleApprove(item.id)}
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="text-red-600 border-red-200 hover:bg-red-50"
                              onClick={() => handleReject(item.id, '')}
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
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentApprovalSystem;
