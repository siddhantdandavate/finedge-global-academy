
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  TrendingUp,
  Play,
  CheckCircle,
  Calendar,
  Download,
  MessageSquare,
  Star,
  User,
  Award,
  Target,
  BarChart3
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import FeedbackForm from '@/components/feedback/FeedbackForm';
import FeedbackList from '@/components/feedback/FeedbackList';
import { Feedback, FeedbackFormData } from '@/types/feedback';

const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([
    {
      id: '1',
      studentId: 'student1',
      studentName: 'John Doe',
      type: 'course',
      targetId: 'course1',
      targetName: 'Advanced Financial Analysis',
      rating: 5,
      comment: 'Excellent course with practical examples. Highly recommended!',
      isAnonymous: false,
      createdAt: '2024-01-20',
      status: 'reviewed'
    }
  ]);

  // Mock data
  const enrolledCourses = [
    {
      id: '1',
      title: 'Advanced Financial Analysis',
      instructor: 'Dr. Sarah Johnson',
      progress: 75,
      totalLessons: 12,
      completedLessons: 9,
      nextLesson: 'Risk Assessment Techniques',
      estimatedTime: '2h 30m',
      thumbnail: '/placeholder.svg'
    },
    {
      id: '2',
      title: 'International Tax Planning',
      instructor: 'Prof. Michael Chen',
      progress: 40,
      totalLessons: 15,
      completedLessons: 6,
      nextLesson: 'Cross-Border Transactions',
      estimatedTime: '1h 45m',
      thumbnail: '/placeholder.svg'
    },
    {
      id: '3',
      title: 'Corporate Finance Fundamentals',
      instructor: 'Emma Rodriguez',
      progress: 100,
      totalLessons: 10,
      completedLessons: 10,
      nextLesson: 'Course Completed',
      certificateAvailable: true,
      thumbnail: '/placeholder.svg'
    }
  ];

  const completedCourses = enrolledCourses.filter(course => course.progress === 100);
  const availableInstructors = [
    { id: '1', name: 'Dr. Sarah Johnson' },
    { id: '2', name: 'Prof. Michael Chen' },
    { id: '3', name: 'Emma Rodriguez' }
  ];

  const achievements = [
    { id: 1, title: 'First Course Complete', description: 'Completed your first course', icon: Trophy, earned: true },
    { id: 2, title: 'Quick Learner', description: 'Completed 3 courses in a month', icon: TrendingUp, earned: true },
    { id: 3, title: 'Finance Expert', description: 'Completed 5 finance courses', icon: Award, earned: false },
    { id: 4, title: 'Perfect Score', description: 'Achieved 100% in all quizzes', icon: Target, earned: false }
  ];

  const recentActivities = [
    { id: 1, type: 'lesson', title: 'Completed: Portfolio Optimization', time: '2 hours ago', course: 'Advanced Financial Analysis' },
    { id: 2, type: 'quiz', title: 'Quiz passed with 95%', time: '1 day ago', course: 'International Tax Planning' },
    { id: 3, type: 'certificate', title: 'Certificate earned', time: '3 days ago', course: 'Corporate Finance Fundamentals' },
    { id: 4, type: 'enrollment', title: 'Enrolled in new course', time: '1 week ago', course: 'Risk Management Strategies' }
  ];

  const stats = [
    { title: 'Enrolled Courses', value: '3', icon: BookOpen, color: 'blue' },
    { title: 'Completed Courses', value: '1', icon: CheckCircle, color: 'green' },
    { title: 'Study Hours', value: '47', icon: Clock, color: 'orange' },
    { title: 'Certificates', value: '1', icon: Trophy, color: 'purple' }
  ];

  const handleFeedbackSubmit = (feedbackData: FeedbackFormData) => {
    const newFeedback: Feedback = {
      id: Date.now().toString(),
      studentId: user?.id || 'student1',
      studentName: user?.name || 'Current Student',
      ...feedbackData,
      createdAt: new Date().toLocaleDateString(),
      status: 'pending'
    };
    
    setFeedbacks(prev => [newFeedback, ...prev]);
    console.log('Feedback submitted:', newFeedback);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600">Continue your learning journey</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid grid-cols-5 w-full">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">{course.title}</h3>
                            <p className="text-gray-600">by {course.instructor}</p>
                          </div>
                          <Badge variant={course.progress === 100 ? 'default' : 'secondary'}>
                            {course.progress === 100 ? 'Completed' : 'In Progress'}
                          </Badge>
                        </div>
                        
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                            <span>Progress: {course.completedLessons}/{course.totalLessons} lessons</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">
                            {course.progress < 100 ? (
                              <>
                                <span className="font-medium">Next: </span>
                                {course.nextLesson} • {course.estimatedTime}
                              </>
                            ) : (
                              <span className="text-green-600 font-medium">Course Completed!</span>
                            )}
                          </div>
                          <div className="flex space-x-2">
                            {course.progress < 100 ? (
                              <Button size="sm">
                                <Play className="h-4 w-4 mr-2" />
                                Continue
                              </Button>
                            ) : (
                              <>
                                <Button size="sm" variant="outline">
                                  <Download className="h-4 w-4 mr-2" />
                                  Certificate
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Star className="h-4 w-4 mr-2" />
                                  Review
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FeedbackForm
                onSubmit={handleFeedbackSubmit}
                courses={completedCourses.map(c => ({ id: c.id, title: c.title }))}
                instructors={availableInstructors}
              />
              <div>
                <FeedbackList
                  feedbacks={feedbacks}
                  title="My Feedback History"
                  showStudent={false}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>Track your learning journey and milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Detailed progress analytics coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className={achievement.earned ? 'bg-green-50 border-green-200' : ''}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full ${achievement.earned ? 'bg-green-100' : 'bg-gray-100'}`}>
                        <achievement.icon className={`h-6 w-6 ${achievement.earned ? 'text-green-600' : 'text-gray-400'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold ${achievement.earned ? 'text-green-800' : 'text-gray-700'}`}>
                          {achievement.title}
                        </h3>
                        <p className={`text-sm ${achievement.earned ? 'text-green-600' : 'text-gray-500'}`}>
                          {achievement.description}
                        </p>
                      </div>
                      {achievement.earned && (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your learning activities and achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="p-2 bg-white rounded-full">
                        {activity.type === 'lesson' && <BookOpen className="h-4 w-4 text-blue-600" />}
                        {activity.type === 'quiz' && <CheckCircle className="h-4 w-4 text-green-600" />}
                        {activity.type === 'certificate' && <Trophy className="h-4 w-4 text-yellow-600" />}
                        {activity.type === 'enrollment' && <User className="h-4 w-4 text-purple-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-gray-600">{activity.course} • {activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;
