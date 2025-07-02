import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  LayoutDashboard,
  Users,
  BookOpen,
  FileText,
  Video,
  Settings,
  Bell,
  TrendingUp,
  DollarSign,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Menu,
  X,
  MessageSquare,
  Calendar,
  Award,
  Globe,
  Star,
  Edit3
} from 'lucide-react';
import ApprovalWorkflow from '@/components/admin/ApprovalWorkflow';
import UserSettings from '@/pages/UserSettings';
import NotificationCenter from '@/pages/NotificationCenter';
import FeedbackList from '@/components/feedback/FeedbackList';
import DynamicContentManager from '@/components/admin/DynamicContentManager';
import { Feedback } from '@/types/feedback';
import UserManagement from '@/components/admin/UserManagement';
import CourseManagement from '@/components/admin/CourseManagement';

const AdminDashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  // Mock feedback data for admin view
  const [feedbacks] = useState<Feedback[]>([
    {
      id: '1',
      studentId: 'student1',
      studentName: 'John Doe',
      type: 'course',
      targetId: 'course1',
      targetName: 'Advanced Financial Analysis',
      rating: 5,
      comment: 'Excellent course with practical examples. The instructor was very knowledgeable.',
      isAnonymous: false,
      createdAt: '2024-01-20',
      status: 'pending'
    },
    {
      id: '2',
      studentId: 'student2',
      studentName: 'Anonymous User',
      type: 'instructor',
      targetId: 'instructor1',
      targetName: 'Dr. Sarah Johnson',
      rating: 4,
      comment: 'Great teaching style, but could use more real-world examples.',
      isAnonymous: true,
      createdAt: '2024-01-19',
      status: 'reviewed'
    },
    {
      id: '3',
      studentId: 'student3',
      studentName: 'Alice Smith',
      type: 'platform',
      rating: 3,
      comment: 'The platform is good but navigation could be improved.',
      isAnonymous: false,
      createdAt: '2024-01-18',
      status: 'pending'
    }
  ]);

  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/admin' },
    { icon: CheckCircle, label: 'Approvals', path: '/admin/approvals' },
    { icon: Users, label: 'User Management', path: '/admin/users' },
    { icon: BookOpen, label: 'Course Management', path: '/admin/courses' },
    { icon: FileText, label: 'Content Management', path: '/admin/content' },
    { icon: Edit3, label: 'Dynamic Content', path: '/admin/dynamic-content' },
    { icon: Video, label: 'Media Library', path: '/admin/media' },
    { icon: Star, label: 'Feedback', path: '/admin/feedback' },
    { icon: TrendingUp, label: 'Analytics', path: '/admin/analytics' },
    { icon: DollarSign, label: 'Revenue', path: '/admin/revenue' },
    { icon: Bell, label: 'Notifications', path: '/admin/notifications' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  const stats = [
    { title: 'Total Users', value: '12,847', change: '+12%', icon: Users, color: 'blue' },
    { title: 'Active Courses', value: '284', change: '+8%', icon: BookOpen, color: 'green' },
    { title: 'Pending Approvals', value: '23', change: '+5%', icon: Clock, color: 'yellow' },
    { title: 'Monthly Revenue', value: '$84,392', change: '+18%', icon: DollarSign, color: 'purple' },
  ];

  const recentActivities = [
    { id: 1, type: 'course', title: 'New course submitted: Advanced Tax Planning', user: 'Dr. Sarah Johnson', time: '2 hours ago', status: 'pending' },
    { id: 2, type: 'blog', title: 'Blog post: IFRS Updates 2024', user: 'Emma Rodriguez', time: '4 hours ago', status: 'approved' },
    { id: 3, type: 'user', title: 'New instructor application', user: 'Michael Chen', time: '6 hours ago', status: 'pending' },
    { id: 4, type: 'webinar', title: 'Webinar scheduled: US Tax Changes', user: 'Prof. David Kim', time: '1 day ago', status: 'approved' },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'course': return <BookOpen className="h-4 w-4" />;
      case 'blog': return <FileText className="h-4 w-4" />;
      case 'webinar': return <Video className="h-4 w-4" />;
      case 'user': return <Users className="h-4 w-4" />;
      default: return <MessageSquare className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {sidebarOpen && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Routes>
          <Route path="/" element={<AdminOverview stats={stats} recentActivities={recentActivities} getActivityIcon={getActivityIcon} getStatusColor={getStatusColor} />} />
          <Route path="/approvals" element={<ApprovalWorkflow />} />
          <Route path="/users" element={<UserManagementWrapper />} />
          <Route path="/courses" element={<CourseManagementWrapper />} />
          <Route path="/content" element={<ContentManagement />} />
          <Route path="/dynamic-content" element={<DynamicContentManager />} />
          <Route path="/media" element={<MediaLibrary />} />
          <Route path="/feedback" element={<FeedbackManagement feedbacks={feedbacks} />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/revenue" element={<RevenueManagement />} />  
          <Route path="/notifications" element={<NotificationCenter />} />
          <Route path="/settings" element={<UserSettings />} />
        </Routes>
      </div>
    </div>
  );
};

// Admin Overview Component
const AdminOverview: React.FC<{
  stats: any[];
  recentActivities: any[];
  getActivityIcon: (type: string) => JSX.Element;
  getStatusColor: (status: string) => string;
}> = ({ stats, recentActivities, getActivityIcon, getStatusColor }) => {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Manage your platform and monitor key metrics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activities */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
          <CardDescription>Latest submissions and platform activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white rounded-full">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-600">by {activity.user} • {activity.time}</p>
                  </div>
                </div>
                <Badge className={getStatusColor(activity.status)}>
                  {activity.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
              Pending Approvals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Review and approve submitted content</p>
            <Link to="/admin/approvals">
              <Button className="w-full">Review Now</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-blue-600" />
              User Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Manage users, roles, and permissions</p>
            <Link to="/admin/users">
              <Button variant="outline" className="w-full">Manage Users</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
              Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">View detailed platform analytics</p>
            <Link to="/admin/analytics">
              <Button variant="outline" className="w-full">View Analytics</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Feedback Management Component
const FeedbackManagement: React.FC<{ feedbacks: Feedback[] }> = ({ feedbacks }) => (
  <div className="flex-1 p-6 overflow-y-auto">
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Feedback Management</h1>
      <p className="text-gray-600">Review and manage student feedback across the platform</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Total Feedback</p>
              <p className="text-3xl font-bold text-gray-900">{feedbacks.length}</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100">
              <MessageSquare className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Average Rating</p>
              <p className="text-3xl font-bold text-gray-900">
                {(feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length).toFixed(1)}
              </p>
            </div>
            <div className="p-3 rounded-full bg-yellow-100">
              <Star className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Pending Review</p>
              <p className="text-3xl font-bold text-gray-900">
                {feedbacks.filter(f => f.status === 'pending').length}
              </p>
            </div>
            <div className="p-3 rounded-full bg-orange-100">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <FeedbackList feedbacks={feedbacks} title="All Student Feedback" />
  </div>
);

// Updated placeholder components to use the new functional ones
const UserManagementWrapper: React.FC = () => <UserManagement />;
const CourseManagementWrapper: React.FC = () => <CourseManagement />;

// Placeholder components for other admin sections
const ContentManagement: React.FC = () => (
  <div className="flex-1 p-6">
    <h2 className="text-2xl font-bold mb-4">Content Management</h2>
    <Card>
      <CardContent className="p-6">
        <p>Content management interface will be implemented here.</p>
      </CardContent>
    </Card>
  </div>
);

const MediaLibrary: React.FC = () => (
  <div className="flex-1 p-6">
    <h2 className="text-2xl font-bold mb-4">Media Library</h2>
    <Card>
      <CardContent className="p-6">
        <p>Media library interface will be implemented here.</p>
      </CardContent>
    </Card>
  </div>
);

const Analytics: React.FC = () => (
  <div className="flex-1 p-6">
    <h2 className="text-2xl font-bold mb-4">Analytics</h2>
    <Card>
      <CardContent className="p-6">
        <p>Analytics dashboard will be implemented here.</p>
      </CardContent>
    </Card>
  </div>
);

const RevenueManagement: React.FC = () => (
  <div className="flex-1 p-6">
    <h2 className="text-2xl font-bold mb-4">Revenue Management</h2>
    <Card>
      <CardContent className="p-6">
        <p>Revenue management interface will be implemented here.</p>
      </CardContent>
    </Card>
  </div>
);

export default AdminDashboard;
