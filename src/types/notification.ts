
export interface Notification {
  id: string;
  type: 'course' | 'message' | 'achievement' | 'payment' | 'system';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
  actionUrl?: string;
}
