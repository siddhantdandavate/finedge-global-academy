import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  BarChart3,
  FileText,
  MessageSquare,
  Settings,
  Eye,
  Globe
} from 'lucide-react';
import ContentManagement from '@/components/admin/ContentManagement';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Total Users',
      value: '125,432',
      change: '+12.5%',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Active Courses',
      value: '1,247',
      change: '+8.2%',
      icon: BookOpen,
      color: 'green'
    },
    {
      title: 'Total Revenue',
      value: '$2.4M',
      change: '+15.3%',
      icon: DollarSign,
      color: 'yellow'
    },
    {
      title: 'Course Completion',
      value: '87%',
      change: '+2.1%',
      icon: TrendingUp,
      color: 'purple'
    }
  ];

  const pendingApprovals = [
    {
      id: '1',
      type: 'Instructor Application',
      name: 'Dr. Michael Rodriguez',
      email: 'michael.r@email.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      submitted: '2 hours ago',
      status: 'pending'
    },
    {
      id: '2',
      type: 'Course Content',
      name: 'Advanced Options Trading',
      instructor: 'Sarah Johnson',
      submitted: '5 hours ago',
      status: 'pending'
    },
    {
      id: '3',
      type: '&webinar',
      name: 'Market Analysis Workshop',
      instructor: 'John Chen',
      submitted: '1 day ago',
      status: 'pending'
    },
    {
      id: '4',
      type: 'Blog Post',
      name: 'Future of Cryptocurrency',
      author: 'Emma Thompson',
      submitted: '3 hours ago',
      status: 'pending'
    }
  ];

  const recentActivity = [
    {
      id: '1',
      action: 'Course approved',
      details: 'Financial Modeling Masterclass by Dr. Sarah Johnson',
      time: '10 minutes ago',
      type: 'approval'
    },
    {
      id: '2',
      action: 'New user registered',
      details: 'Alex Rodriguez joined as Student',
      time: '25 minutes ago',
      type: 'registration'
    },
    {
      id: '3',
      action: 'Payment processed',
      details: '$299 course purchase by Lisa Chen',
      time: '1 hour ago',
      type: 'payment'
    },
    {
      id: '4',
      action: 'Blog post published',
      details: 'Risk Management Strategies by Michael Brown',
      time: '2 hours ago',
      type: 'content'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your platform and monitor performance</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600 font-medium">{stat.change} from last month</p>
                  </div>
                  <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-4 lg:grid-cols-7 w-full lg:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="approvals">Approvals</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="cms">CMS</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Pending Approvals */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Pending Approvals
                  </CardTitle>
                  <CardDescription>Items waiting for your review</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pendingApprovals.slice(0, 4).map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        {item.type === 'Instructor Application' && (
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={item.avatar} />
                            <AvatarFallback>{item.name?.charAt(0)}</AvatarFallback>
                          </Avatar>
                        )}
                        <div>
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-xs text-gray-500">{item.type}</p>
                          <p className="text-xs text-gray-400">{item.submitted}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                          <XCircle className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription>Latest platform activities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`p-1 rounded-full ${
                        activity.type === 'approval' ? 'bg-green-100' :
                        activity.type === 'registration' ? 'bg-blue-100' :
                        activity.type === 'payment' ? 'bg-yellow-100' : 'bg-purple-100'
                      }`}>
                        {activity.type === 'approval' && <CheckCircle className="h-4 w-4 text-green-600" />}
                        {activity.type === 'registration' && <Users className="h-4 w-4 text-blue-600" />}
                        {activity.type === 'payment' && <DollarSign className="h-4 w-4 text-yellow-600" />}
                        {activity.type === 'content' && <FileText className="h-4 w-4 text-purple-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{activity.action}</p>
                        <p className="text-xs text-gray-600">{activity.details}</p>
                        <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="approvals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Approvals</CardTitle>
                <CardDescription>Review and approve content, instructors, and other submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingApprovals.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        {item.type === 'Instructor Application' && (
                          <Avatar>
                            <AvatarImage src={item.avatar} />
                            <AvatarFallback>{item.name?.charAt(0)}</AvatarFallback>
                          </Avatar>
                        )}
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Badge variant="outline">{item.type}</Badge>
                            <span>•</span>
                            <span>{item.submitted}</span>
                          </div>
                          {item.email && <p className="text-sm text-gray-500">{item.email}</p>}
                          {item.instructor && <p className="text-sm text-gray-500">by {item.instructor}</p>}
                          {item.author && <p className="text-sm text-gray-500">by {item.author}</p>}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button className="bg-green-600 hover:bg-green-700">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Approve
                        </Button>
                        <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                          <XCircle className="h-4 w-4 mr-2" />
                          Reject
                        </Button>
                        <Button variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          Review
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage users, roles, and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">User management interface will be implemented here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
                <CardDescription>Manage courses, blogs, webinars, and other content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Content management interface will be implemented here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cms" className="space-y-6">
            <ContentManagement />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Analytics</CardTitle>
                <CardDescription>View detailed analytics and reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Analytics dashboard will be implemented here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
                <CardDescription>Configure platform-wide settings and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Settings interface will be implemented here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
