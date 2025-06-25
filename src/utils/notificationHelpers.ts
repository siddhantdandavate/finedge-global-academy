
import { 
  BookOpen,
  MessageSquare,
  Award,
  DollarSign,
  Bell
} from 'lucide-react';

export const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'course': return <BookOpen className="h-5 w-5 text-blue-600" />;
    case 'message': return <MessageSquare className="h-5 w-5 text-green-600" />;
    case 'achievement': return <Award className="h-5 w-5 text-yellow-600" />;
    case 'payment': return <DollarSign className="h-5 w-5 text-purple-600" />;
    case 'system': return <Bell className="h-5 w-5 text-gray-600" />;
    default: return <Bell className="h-5 w-5 text-gray-600" />;
  }
};

export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'bg-red-100 text-red-800';
    case 'medium': return 'bg-yellow-100 text-yellow-800';
    case 'low': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};
