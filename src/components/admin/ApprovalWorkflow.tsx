
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';
import { 
  CheckCircle, 
  XCircle, 
  Eye, 
  Clock, 
  FileText, 
  Video, 
  Mic, 
  BookOpen,
  User,
  Calendar,
  MessageSquare
} from 'lucide-react';

interface ApprovalItem {
  id: string;
  type: 'course' | 'blog' | 'webinar' | 'instructor' | 'content';
  title: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    email: string;
  };
  submittedDate: string;
  status: 'pending' | 'approved' | 'rejected' | 'under_review';
  priority: 'low' | 'medium' | 'high';
  category: string;
  description: string;
  content?: string;
  attachments?: string[];
  targetAudience?: string;
}

const ApprovalWorkflow: React.FC = () => {
  const [items, setItems] = useState<ApprovalItem[]>([
    {
      id: '1',
      type: 'course',
      title: 'Advanced Financial Modeling with Excel',
      author: {
        name: 'Dr. Sarah Johnson',
        role: 'instructor',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
        email: 'sarah.johnson@finedge.com'
      },
      submittedDate: '2024-01-20',
      status: 'pending',
      priority: 'high',
      category: 'Financial Modeling',
      description: 'Comprehensive course covering advanced Excel techniques for financial modeling, including DCF analysis, sensitivity analysis, and scenario modeling.',
      targetAudience: 'Finance professionals and CA students'
    },
    {
      id: '2',
      type: 'blog',
      title: 'Understanding IFRS 16 Lease Accounting',
      author: {
        name: 'Emma Rodriguez',
        role: 'content-writer',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        email: 'emma.rodriguez@finedge.com'
      },
      submittedDate: '2024-01-19',
      status: 'under_review',
      priority: 'medium',
      category: 'Accounting Standards',
      description: 'Detailed explanation of IFRS 16 implementation, practical examples, and impact on financial statements.',
      content: 'This article covers the key aspects of IFRS 16 lease accounting standard...'
    },
    {
      id: '3',
      type: 'instructor',
      title: 'Instructor Application - Michael Chen',
      author: {
        name: 'Michael Chen',
        role: 'applicant',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        email: 'michael.chen@email.com'
      },
      submittedDate: '2024-01-18',
      status: 'pending',
      priority: 'high',
      category: 'Investment Banking',
      description: 'Senior Investment Banker with 12 years experience at Goldman Sachs. Specialized in M&A and Corporate Finance.',
      targetAudience: 'Finance professionals seeking investment banking knowledge'
    },
    {
      id: '4',
      type: 'webinar',
      title: 'ESG Investing: Trends and Opportunities',
      author: {
        name: 'Prof. David Kim',
        role: 'instructor',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
        email: 'david.kim@finedge.com'
      },
      submittedDate: '2024-01-17',
      status: 'approved',
      priority: 'medium',
      category: 'Sustainable Finance',
      description: 'Interactive webinar discussing the latest trends in ESG investing and sustainable finance opportunities.'
    }
  ]);

  const [feedback, setFeedback] = useState('');
  const [selectedItem, setSelectedItem] = useState<ApprovalItem | null>(null);

  const handleApprove = (itemId: string) => {
    setItems(prev => prev.map(item => 
      item.id === itemId 
        ? { ...item, status: 'approved' as const }
        : item
    ));
    
    const item = items.find(i => i.id === itemId);
    toast({
      title: "Content Approved",
      description: `${item?.title} has been approved successfully.`,
    });
  };

  const handleReject = (itemId: string, rejectionFeedback: string) => {
    setItems(prev => prev.map(item => 
      item.id === itemId 
        ? { ...item, status: 'rejected' as const }
        : item
    ));
    
    const item = items.find(i => i.id === itemId);
    toast({
      title: "Content Rejected",
      description: `${item?.title} has been rejected. Feedback sent to author.`,
      variant: "destructive"
    });
    
    console.log('Rejection feedback sent:', rejectionFeedback);
    setFeedback('');
  };

  const handleReview = (itemId: string) => {
    setItems(prev => prev.map(item => 
      item.id === itemId 
        ? { ...item, status: 'under_review' as const }
        : item
    ));
    
    toast({
      title: "Review Started",
      description: "Item moved to under review status.",
    });
  };

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
      case 'instructor': return <User className="h-4 w-4" />;
      case 'content': return <FileText className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const pendingItems = items.filter(item => item.status === 'pending');
  const reviewItems = items.filter(item => item.status === 'under_review');

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{pendingItems.length}</p>
              </div>
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Under Review</p>
                <p className="text-2xl font-bold text-blue-600">{reviewItems.length}</p>
              </div>
              <Eye className="h-6 w-6 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Approved Today</p>
                <p className="text-2xl font-bold text-green-600">8</p>
              </div>
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Rejected Today</p>
                <p className="text-2xl font-bold text-red-600">2</p>
              </div>
              <XCircle className="h-6 w-6 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Approval Items */}
      <Card>
        <CardHeader>
          <CardTitle>Content Approval Queue</CardTitle>
          <CardDescription>Review and approve submitted content from instructors, bloggers, and content writers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <Avatar>
                        <AvatarImage src={item.author.avatar} />
                        <AvatarFallback>{item.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      
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
                        
                        <p className="text-gray-600 mb-2">{item.description}</p>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{item.author.name} ({item.author.role})</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{item.submittedDate}</span>
                          </div>
                        </div>
                        
                        <Badge variant="outline">{item.category}</Badge>
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
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="flex items-center space-x-2">
                              {getTypeIcon(item.type)}
                              <span>{item.title}</span>
                            </DialogTitle>
                            <DialogDescription>
                              Review content and provide approval decision
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="space-y-4">
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
                            
                            {item.content && (
                              <div>
                                <label className="text-sm font-medium">Content Preview:</label>
                                <div className="mt-1 p-3 bg-gray-50 rounded-lg max-h-32 overflow-y-auto">
                                  <p className="text-sm">{item.content}</p>
                                </div>
                              </div>
                            )}
                            
                            <div>
                              <label className="text-sm font-medium">Feedback/Comments:</label>
                              <Textarea
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                placeholder="Provide feedback for approval/rejection..."
                                className="mt-1"
                                rows={3}
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
                                variant="outline" 
                                className="text-blue-600 border-blue-200 hover:bg-blue-50"
                                onClick={() => handleReview(item.id)}
                              >
                                <MessageSquare className="h-4 w-4 mr-1" />
                                Request Changes
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
                        <div className="flex space-x-1">
                          <Button 
                            size="sm" 
                            className="bg-green-600 hover:bg-green-700 text-xs px-2"
                            onClick={() => handleApprove(item.id)}
                          >
                            <CheckCircle className="h-3 w-3" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-red-600 border-red-200 hover:bg-red-50 text-xs px-2"
                            onClick={() => handleReject(item.id, '')}
                          >
                            <XCircle className="h-3 w-3" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApprovalWorkflow;
