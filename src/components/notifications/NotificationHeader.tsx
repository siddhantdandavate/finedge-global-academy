
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

interface NotificationHeaderProps {
  unreadCount: number;
  onMarkAllAsRead: () => void;
}

const NotificationHeader: React.FC<NotificationHeaderProps> = ({
  unreadCount,
  onMarkAllAsRead
}) => {
  return (
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
          <Button onClick={onMarkAllAsRead} variant="outline">
            <CheckCircle className="h-4 w-4 mr-2" />
            Mark All as Read
          </Button>
        )}
      </div>
    </div>
  );
};

export default NotificationHeader;
