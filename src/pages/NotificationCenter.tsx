
import React, { useState } from 'react';
import { Notification } from '@/types/notification';
import NotificationHeader from '@/components/notifications/NotificationHeader';
import NotificationTabs from '@/components/notifications/NotificationTabs';

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <NotificationHeader 
          unreadCount={unreadCount}
          onMarkAllAsRead={markAllAsRead}
        />
        
        <NotificationTabs
          notifications={notifications}
          unreadNotifications={unreadNotifications}
          onMarkAsRead={markAsRead}
          onMarkAsUnread={markAsUnread}
          onDelete={deleteNotification}
        />
      </div>
    </div>
  );
};

export default NotificationCenter;
