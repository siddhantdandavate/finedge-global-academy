
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  DollarSign, 
  Eye, 
  Clock,
  Award,
  Globe,
  Calendar,
  BarChart3
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AnalyticsDashboard: React.FC = () => {
  // Mock data for charts
  const userGrowthData = [
    { month: 'Jan', users: 1200, revenue: 15000 },
    { month: 'Feb', users: 1800, revenue: 22000 },
    { month: 'Mar', users: 2400, revenue: 28000 },
    { month: 'Apr', users: 3200, revenue: 35000 },
    { month: 'May', users: 4100, revenue: 42000 },
    { month: 'Jun', users: 5200, revenue: 58000 },
  ];

  const courseEngagementData = [
    { course: 'Financial Analysis', students: 1234, completion: 87, rating: 4.8 },
    { course: 'Tax Planning', students: 956, completion: 92, rating: 4.9 },
    { course: 'IFRS Standards', students: 743, completion: 78, rating: 4.6 },
    { course: 'GST Compliance', students: 689, completion: 85, rating: 4.7 },
    { course: 'Audit Procedures', students: 567, completion: 81, rating: 4.5 },
  ];

  const trafficSourceData = [
    { name: 'Direct', value: 35, color: '#8884d8' },
    { name: 'Google Search', value: 28, color: '#82ca9d' },
    { name: 'Social Media', value: 18, color: '#ffc658' },
    { name: 'Referrals', value: 12, color: '#ff7300' },
    { name: 'Email', value: 7, color: '#00ff00' },
  ];

  const geographicData = [
    { region: 'India', users: 8234, percentage: 45 },
    { region: 'USA', users: 3456, percentage: 19 },
    { region: 'UK', users: 2134, percentage: 12 },
    { region: 'Canada', users: 1789, percentage: 10 },
    { region: 'Australia', users: 1245, percentage: 7 },
    { region: 'Others', users: 1289, percentage: 7 },
  ];

  const recentActivity = [
    { type: 'course_completion', user: 'Sarah Johnson', course: 'Financial Modeling', time: '2 minutes ago' },
    { type: 'new_registration', user: 'Michael Chen', course: null, time: '15 minutes ago' },
    { type: 'course_purchase', user: 'Emma Rodriguez', course: 'Tax Planning Advanced', time: '1 hour ago' },
    { type: 'certificate_earned', user: 'David Kim', course: 'IFRS Fundamentals', time: '2 hours ago' },
    { type: 'webinar_joined', user: 'Lisa Wang', course: 'GST Updates 2024', time: '3 hours ago' },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'course_completion': return <Award className="h-4 w-4 text-green-600" />;
      case 'new_registration': return <Users className="h-4 w-4 text-blue-600" />;
      case 'course_purchase': return <DollarSign className="h-4 w-4 text-yellow-600" />;
      case 'certificate_earned': return <Award className="h-4 w-4 text-purple-600" />;
      case 'webinar_joined': return <Calendar className="h-4 w-4 text-orange-600" />;
      default: return <Eye className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Analytics Dashboard</h2>
        <p className="text-gray-600">Comprehensive platform performance metrics and insights</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid grid-cols-5 w-full max-w-2xl">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Users</p>
                    <p className="text-3xl font-bold">18,247</p>
                    <p className="text-sm text-green-600">+12.5% from last month</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Courses</p>
                    <p className="text-3xl font-bold">247</p>
                    <p className="text-sm text-green-600">+8.2% from last month</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                    <p className="text-3xl font-bold">$58,392</p>
                    <p className="text-sm text-green-600">+18.7% from last month</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Avg. Session Time</p>
                    <p className="text-3xl font-bold">24m</p>
                    <p className="text-sm text-green-600">+5.3% from last month</p>
                  </div>
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Growth Chart */}
          <Card>
            <CardHeader>
              <CardTitle>User Growth & Revenue Trends</CardTitle>
              <CardDescription>Monthly user acquisition and revenue growth</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} name="Users" />
                    <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={2} name="Revenue ($)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Platform Activity</CardTitle>
              <CardDescription>Real-time user activities and engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    {getActivityIcon(activity.type)}
                    <div className="flex-1">
                      <p className="font-medium">{activity.user}</p>
                      <p className="text-sm text-gray-600">
                        {activity.type.replace('_', ' ')} 
                        {activity.course && ` - ${activity.course}`}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Geographic Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>User distribution by region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {geographicData.map((region) => (
                    <div key={region.region} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">{region.region}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">{region.users.toLocaleString()}</span>
                        <Badge variant="secondary">{region.percentage}%</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Traffic Sources */}
            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>How users discover the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={trafficSourceData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {trafficSourceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="courses" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Performance</CardTitle>
              <CardDescription>Student engagement and completion rates by course</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courseEngagementData.map((course) => (
                  <div key={course.course} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{course.course}</h4>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{course.students} students</Badge>
                        <Badge className="bg-yellow-100 text-yellow-800">★ {course.rating}</Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>Completion Rate: {course.completion}%</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${course.completion}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Analytics</CardTitle>
              <CardDescription>Monthly revenue trends and breakdowns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                    <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="traffic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Analysis</CardTitle>
              <CardDescription>Page views and user engagement metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Detailed traffic analytics will be available with real data integration</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsDashboard;
