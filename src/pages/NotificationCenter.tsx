
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bell, 
  BellOff, 
  CheckCircle, 
  XCircle, 
  Clock, 
  BookOpen,
  MessageSquare,
  Award,
  DollarSign,
  Users,
  Trash2,
  Mail
} from 'lucide-react';

interface Notification {
  id: string;
  type: 'course' | 'message' | 'achievement' | 'payment' | 'system';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
  actionUrl?: string;
}

const NotificationCenter: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'course',
      title: 'New Course Available',
      message: 'Advanced International Tax Planning course is now available for enrollment.',
      timestamp: '2 hours ago',
      read: false,
      priority: 'high',
      actionUrl: '/courses/advanced-tax-planning'
    },
    {
      id: '2',
      type: 'achievement',
      title: 'Certificate Earned!',
      message: 'Congratulations! You have completed the Financial Modeling course and earned your certificate.',
      timestamp: '1 day ago',
      read: false,
      priority: 'high'
    },
    {
      id: '3',
      type: 'message',
      title: 'New Reply from Instructor',
      message: 'Dr. Sarah Johnson replied to your question in Advanced Accounting course.',
      timestamp: '2 days ago',
      read: true,
      priority: 'medium'
    },
    {
      id: '4',
      type: 'payment',
      title: 'Payment Confirmed',
      message: 'Your payment for Cross-Border Finance course has been processed successfully.',
      timestamp: '3 days ago',
      read: true,
      priority: 'low'
    },
    {
      id: '5',
      type: 'system',
      title: 'Maintenance Notice',
      message: 'Scheduled maintenance will occur on Sunday from 2:00 AM to 4:00 AM UTC.',
      timestamp: '1 week ago',
      read: false,
      priority: 'medium'
    }
  ]);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'course': return <BookOpen className="h-5 w-5 text-blue-600" />;
      case 'message': return <MessageSquare className="h-5 w-5 text-green-600" />;
      case 'achievement': return <Award className="h-5 w-5 text-yellow-600" />;
      case 'payment': return <DollarSign className="h-5 w-5 text-purple-600" />;
      case 'system': return <Bell className="h-5 w-5 text-gray-600" />;
      default: return <Bell className="h-5 w-5 text-gray-600" />;
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

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAsUnread = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: false } : notif
      )
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const unreadCount = notifications.filter(n => !n.read).length;
  const unreadNotifications = notifications.filter(n => !n.read);
  const readNotifications = notifications.filter(n => n.read);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
            <p className="text-gray-600">Stay updated with your learning progress and platform updates</p>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="text-sm">
              {unreadCount} unread
            </Badge>
            {unreadCount > 0 && (
              <Button onClick={markAllAsRead} variant="outline">
                <CheckCircle className="h-4 w-4 mr-2" />
                Mark All as Read
              </Button>
            )}
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">
              All ({notifications.length})
            </TabsTrigger>
            <TabsTrigger value="unread">
              Unread ({unreadCount})
            </TabsTrigger>
            <TabsTrigger value="courses">
              Courses
            </TabsTrigger>
            <TabsTrigger value="achievements">
              Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="space-y-4">
              {notifications.map((notification) => (
                <NotificationCard
                  key={notification.id}
                  notification={notification}
                  onMarkAsRead={markAsRead}
                  onMarkAsUnread={markAsUnread}
                  onDelete={deleteNotification}
                  getNotificationIcon={getNotificationIcon}
                  getPriorityColor={getPriorityColor}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="unread">
            <div className="space-y-4">
              {unreadNotifications.length > 0 ? (
                unreadNotifications.map((notification) => (
                  <NotificationCard
                    key={notification.id}
                    notification={notification}
                    onMarkAsRead={markAsRead}
                    onMarkAsUnread={markAsUnread}
                    onDelete={deleteNotification}
                    getNotificationIcon={getNotificationIcon}
                    getPriorityColor={getPriorityColor}
                  />
                ))
              ) : (
                <Card>
                  <CardContent className="text-center py-12">
                    <BellOff className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No unread notifications</h3>
                    <p className="text-gray-600">You're all caught up!</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="courses">
            <div className="space-y-4">
              {notifications.filter(n => n.type === 'course').map((notification) => (
                <NotificationCard
                  key={notification.id}
                  notification={notification}
                  onMarkAsRead={markAsRead}
                  onMarkAsUnread={markAsUnread}
                  onDelete={deleteNotification}
                  getNotificationIcon={getNotificationIcon}
                  getPriorityColor={getPriorityColor}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="space-y-4">
              {notifications.filter(n => n.type === 'achievement').map((notification) => (
                <NotificationCard
                  key={notification.id}
                  notification={notification}
                  onMarkAsRead={markAsRead}
                  onMarkAsUnread={markAsUnread}
                  onDelete={deleteNotification}
                  getNotificationIcon={getNotificationIcon}
                  getPriorityColor={getPriorityColor}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const NotificationCard: React.FC<{
  notification: Notification;
  onMarkAsRead: (id: string) => void;
  onMarkAsUnread: (id: string) => void;
  onDelete: (id: string) => void;
  getNotificationIcon: (type: string) => JSX.Element;
  getPriorityColor: (priority: string) => string;
}> = ({ notification, onMarkAsRead, onMarkAsUnread, onDelete, getNotificationIcon, getPriorityColor }) => {
  return (
    <Card className={`transition-all hover:shadow-md ${!notification.read ? 'bg-blue-50 border-blue-200' : ''}`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-1">
            <div className="flex-shrink-0 mt-1">
              {getNotificationIcon(notification.type)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className={`font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                  {notification.title}
                </h3>
                <Badge className={getPriorityColor(notification.priority)} variant="secondary">
                  {notification.priority}
                </Badge>
                {!notification.read && (
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                )}
              </div>
              <p className={`text-sm ${!notification.read ? 'text-gray-700' : 'text-gray-600'} mb-2`}>
                {notification.message}
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {notification.timestamp}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 ml-4">
            {!notification.read ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onMarkAsRead(notification.id)}
                className="text-blue-600 hover:text-blue-700"
              >
                <CheckCircle className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onMarkAsUnread(notification.id)}
                className="text-gray-600 hover:text-gray-700"
              >
                <Mail className="h-4 w-4" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(notification.id)}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {notification.actionUrl && (
          <div className="mt-4">
            <Button size="sm" variant="outline">
              View Details
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NotificationCenter;
