
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BellOff } from 'lucide-react';
import { Notification } from '@/types/notification';
import NotificationCard from './NotificationCard';

interface NotificationTabsProps {
  notifications: Notification[];
  unreadNotifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onMarkAsUnread: (id: string) => void;
  onDelete: (id: string) => void;
}

const NotificationTabs: React.FC<NotificationTabsProps> = ({
  notifications,
  unreadNotifications,
  onMarkAsRead,
  onMarkAsUnread,
  onDelete
}) => {
  const unreadCount = unreadNotifications.length;

  return (
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
              onMarkAsRead={onMarkAsRead}
              onMarkAsUnread={onMarkAsUnread}
              onDelete={onDelete}
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
                onMarkAsRead={onMarkAsRead}
                onMarkAsUnread={onMarkAsUnread}
                onDelete={onDelete}
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
              onMarkAsRead={onMarkAsRead}
              onMarkAsUnread={onMarkAsUnread}
              onDelete={onDelete}
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
              onMarkAsRead={onMarkAsRead}
              onMarkAsUnread={onMarkAsUnread}
              onDelete={onDelete}
            />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default NotificationTabs;
