import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
  Bell,
  Shield,
  Award,
  Globe,
  Mic,
  Video,
  Edit,
  Trash2,
  Filter,
  Search,
  Download,
  RefreshCw
} from 'lucide-react';
import ApprovalWorkflow from '@/components/admin/ApprovalWorkflow';
import { useAuth } from '@/contexts/AuthContext';

const EnhancedAdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [announcement, setAnnouncement] = useState('');

  const stats = [
    {
      title: 'Total Users',
      value: '125,432',
      change: '+12.5%',
      icon: Users,
      color: 'blue',
      subStats: [
        { label: 'Students', value: '98,234' },
        { label: 'Instructors', value: '1,234' },
        { label: 'Content Writers', value: '234' },
        { label: 'Bloggers', value: '156' }
      ]
    },
    {
      title: 'Active Courses',
      value: '1,247',
      change: '+8.2%',
      icon: BookOpen,
      color: 'green',
      subStats: [
        { label: 'Published', value: '1,156' },
        { label: 'Pending', value: '67' },
        { label: 'Draft', value: '24' }
      ]
    },
    {
      title: 'Total Revenue',
      value: '$2.4M',
      change: '+15.3%',
      icon: DollarSign,
      color: 'yellow',
      subStats: [
        { label: 'This Month', value: '$234K' },
        { label: 'Course Sales', value: '$1.8M' },
        { label: 'Subscriptions', value: '$600K' }
      ]
    },
    {
      title: 'Course Completion',
      value: '87%',
      change: '+2.1%',
      icon: TrendingUp,
      color: 'purple',
      subStats: [
        { label: 'Average Progress', value: '67%' },
        { label: 'Certificates Issued', value: '45,678' }
      ]
    }
  ];

  const recentActivity = [
    {
      id: '1',
      type: 'course_approval',
      title: 'Advanced Financial Modeling',
      user: 'Dr. Sarah Johnson',
      action: 'submitted for approval',
      time: '10 minutes ago',
      status: 'pending'
    },
    {
      id: '2',
      type: 'user_registration',
      title: 'New Instructor Application',
      user: 'Michael Chen',
      action: 'applied as instructor',
      time: '25 minutes ago',
      status: 'pending'
    },
    {
      id: '3',
      type: 'payment',
      title: 'Course Purchase',
      user: 'Lisa Zhang',
      action: 'purchased Investment Banking Course',
      time: '1 hour ago',
      status: 'completed'
    },
    {
      id: '4',
      type: 'blog_approval',
      title: 'Risk Management Strategies',
      user: 'Emma Rodriguez',
      action: 'submitted blog post',
      time: '2 hours ago',
      status: 'pending'
    },
    {
      id: '5',
      type: 'webinar',
      title: 'ESG Investing Workshop',
      user: 'Prof. David Kim',
      action: 'scheduled webinar',
      time: '3 hours ago',
      status: 'approved'
    }
  ];

  const userManagement = [
    {
      id: '1',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      role: 'student',
      joinDate: '2024-01-15',
      lastActive: '2 hours ago',
      status: 'active',
      coursesEnrolled: 5
    },
    {
      id: '2',
      name: 'Dr. Robert Smith',
      email: 'robert@example.com',
      role: 'instructor',
      joinDate: '2023-12-10',
      lastActive: '1 day ago',
      status: 'active',
      coursesCreated: 8
    },
    {
      id: '3',
      name: 'Maria Garcia',
      email: 'maria@example.com',
      role: 'content-writer',
      joinDate: '2024-01-20',
      lastActive: '5 hours ago',
      status: 'suspended',
      articlesPublished: 12
    }
  ];

  const handleApproval = (id: string, action: 'approve' | 'reject') => {
    console.log(`${action} item ${id}`);
    // Implementation for approval/rejection
  };

  const handleUserAction = (userId: string, action: 'ban' | 'upgrade' | 'reset') => {
    console.log(`${action} user ${userId}`);
    // Implementation for user management
  };

  const sendAnnouncement = () => {
    if (announcement.trim()) {
      console.log('Sending announcement:', announcement);
      setAnnouncement('');
      // Implementation for sending platform-wide announcements
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.name}. Manage your platform and monitor performance</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600 font-medium">{stat.change} from last period</p>
                  </div>
                  <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                </div>
                <div className="space-y-1">
                  {stat.subStats.map((subStat, subIndex) => (
                    <div key={subIndex} className="flex justify-between text-xs text-gray-500">
                      <span>{subStat.label}:</span>
                      <span className="font-medium">{subStat.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-8 w-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="approvals">Approvals</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                        activity.type === 'course_approval' ? 'bg-blue-100' :
                        activity.type === 'user_registration' ? 'bg-green-100' :
                        activity.type === 'payment' ? 'bg-yellow-100' :
                        activity.type === 'blog_approval' ? 'bg-purple-100' : 'bg-gray-100'
                      }`}>
                        {activity.type === 'course_approval' && <BookOpen className="h-4 w-4 text-blue-600" />}
                        {activity.type === 'user_registration' && <Users className="h-4 w-4 text-green-600" />}
                        {activity.type === 'payment' && <DollarSign className="h-4 w-4 text-yellow-600" />}
                        {activity.type === 'blog_approval' && <FileText className="h-4 w-4 text-purple-600" />}
                        {activity.type === 'webinar' && <Video className="h-4 w-4 text-gray-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{activity.title}</p>
                        <p className="text-xs text-gray-600">{activity.user} {activity.action}</p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs text-gray-400">{activity.time}</p>
                          <Badge variant={activity.status === 'pending' ? 'outline' : 'default'}>
                            {activity.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Frequently used admin functions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full justify-start bg-blue-600 hover:bg-blue-700"
                    onClick={() => setActiveTab('approvals')}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Review Pending Approvals
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => setActiveTab('users')}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Manage Users
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => setActiveTab('content')}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Content Moderation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => setActiveTab('analytics')}
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Analytics
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => setActiveTab('announcements')}
                  >
                    <Bell className="h-4 w-4 mr-2" />
                    Send Announcement
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => setActiveTab('settings')}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Platform Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="approvals" className="space-y-6">
            <ApprovalWorkflow />
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage users, roles, and permissions</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-1" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <Input placeholder="Search users..." className="flex-1" />
                    <Select>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Filter by role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Roles</SelectItem>
                        <SelectItem value="student">Students</SelectItem>
                        <SelectItem value="instructor">Instructors</SelectItem>
                        <SelectItem value="content-writer">Content Writers</SelectItem>
                        <SelectItem value="blogger">Bloggers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-3">
                    {userManagement.map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">{user.name}</h4>
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <Badge variant="outline">{user.role}</Badge>
                              <span>•</span>
                              <span>{user.email}</span>
                              <span>•</span>
                              <span>Joined {user.joinDate}</span>
                            </div>
                            <p className="text-sm text-gray-400">Last active: {user.lastActive}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={user.status === 'active' ? 'default' : 'destructive'}>
                            {user.status}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-red-600"
                            onClick={() => handleUserAction(user.id, 'ban')}
                          >
                            {user.status === 'active' ? 'Suspend' : 'Activate'}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-6 text-center">
                    <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Courses</h3>
                    <p className="text-3xl font-bold text-blue-600 mb-2">1,247</p>
                    <p className="text-sm text-gray-500 mb-4">67 pending approval</p>
                    <Button className="w-full">Manage Courses</Button>
                  </Card>
                  
                  <Card className="p-6 text-center">
                    <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Blog Posts</h3>
                    <p className="text-3xl font-bold text-green-600 mb-2">456</p>
                    <p className="text-sm text-gray-500 mb-4">23 pending approval</p>
                    <Button className="w-full">Manage Blogs</Button>
                  </Card>
                  
                  <Card className="p-6 text-center">
                    <Video className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Webinars</h3>
                    <p className="text-3xl font-bold text-purple-600 mb-2">89</p>
                    <p className="text-sm text-gray-500 mb-4">12 upcoming</p>
                    <Button className="w-full">Manage Webinars</Button>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Platform Analytics</CardTitle>
                    <CardDescription>Detailed analytics and reports</CardDescription>
                  </div>
                  <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7d">7 days</SelectItem>
                      <SelectItem value="30d">30 days</SelectItem>
                      <SelectItem value="90d">90 days</SelectItem>
                      <SelectItem value="1y">1 year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h4 className="text-2xl font-bold text-blue-600">125K+</h4>
                    <p className="text-sm text-gray-600">Total Users</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <h4 className="text-2xl font-bold text-green-600">$2.4M</h4>
                    <p className="text-sm text-gray-600">Total Revenue</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <h4 className="text-2xl font-bold text-yellow-600">87%</h4>
                    <p className="text-sm text-gray-600">Completion Rate</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <h4 className="text-2xl font-bold text-purple-600">4.8</h4>
                    <p className="text-sm text-gray-600">Avg Rating</p>
                  </div>
                </div>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Analytics charts would be implemented here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Management</CardTitle>
                <CardDescription>Monitor transactions, payouts, and disputes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="text-2xl font-bold text-green-600">$234K</h4>
                    <p className="text-sm text-gray-600">This Month Revenue</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="text-2xl font-bold text-blue-600">$89K</h4>
                    <p className="text-sm text-gray-600">Pending Payouts</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="text-2xl font-bold text-red-600">12</h4>
                    <p className="text-sm text-gray-600">Disputed Transactions</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button className="w-full">View All Transactions</Button>
                  <Button variant="outline" className="w-full">Manage Payouts</Button>
                  <Button variant="outline" className="w-full">Handle Disputes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="announcements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Platform Announcements
                </CardTitle>
                <CardDescription>Send notifications to all users or specific groups</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Announcement Message</label>
                    <Textarea
                      value={announcement}
                      onChange={(e) => setAnnouncement(e.target.value)}
                      placeholder="Enter your announcement message..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Target Audience</label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select audience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Users</SelectItem>
                          <SelectItem value="students">Students Only</SelectItem>
                          <SelectItem value="instructors">Instructors Only</SelectItem>
                          <SelectItem value="writers">Content Writers</SelectItem>
                          <SelectItem value="bloggers">Bloggers Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Priority</label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button 
                    onClick={sendAnnouncement}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={!announcement.trim()}
                  >
                    <Bell className="h-4 w-4 mr-2" />
                    Send Announcement
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Platform Settings
                </CardTitle>
                <CardDescription>Configure platform-wide settings and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4">
                    <h4 className="font-medium mb-3">General Settings</h4>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Globe className="h-4 w-4 mr-2" />
                        Platform Configuration
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Shield className="h-4 w-4 mr-2" />
                        Security Settings
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Bell className="h-4 w-4 mr-2" />
                        Notification Templates
                      </Button>
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <h4 className="font-medium mb-3">Content Management</h4>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Content Policies
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Award className="h-4 w-4 mr-2" />
                        Certification Settings
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Comment Moderation
                      </Button>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EnhancedAdminDashboard;
