
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Mail, Trash2 } from 'lucide-react';
import { Notification } from '@/types/notification';
import { getNotificationIcon, getPriorityColor } from '@/utils/notificationHelpers';

interface NotificationCardProps {
  notification: Notification;
  onMarkAsRead: (id: string) => void;
  onMarkAsUnread: (id: string) => void;
  onDelete: (id: string) => void;
}

const NotificationCard: React.FC<NotificationCardProps> = ({ 
  notification, 
  onMarkAsRead, 
  onMarkAsUnread, 
  onDelete 
}) => {
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

export default NotificationCard;
