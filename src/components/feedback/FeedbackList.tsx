
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, User, MessageSquare } from 'lucide-react';
import { Feedback } from '@/types/feedback';

interface FeedbackListProps {
  feedbacks: Feedback[];
  title?: string;
  showStudent?: boolean;
}

const FeedbackList: React.FC<FeedbackListProps> = ({ 
  feedbacks, 
  title = "Feedback", 
  showStudent = true 
}) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'course': return 'bg-blue-100 text-blue-800';
      case 'instructor': return 'bg-green-100 text-green-800';
      case 'platform': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'reviewed': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (feedbacks.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-8">
          <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No feedback yet</h3>
          <p className="text-gray-600">Feedback will appear here once submitted</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      {feedbacks.map((feedback) => (
        <Card key={feedback.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                {showStudent && !feedback.isAnonymous && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      {feedback.studentName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                )}
                {feedback.isAnonymous && (
                  <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-gray-500" />
                  </div>
                )}
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">
                      {feedback.isAnonymous ? 'Anonymous' : feedback.studentName}
                    </span>
                    <Badge className={getTypeColor(feedback.type)}>
                      {feedback.type}
                    </Badge>
                    <Badge className={getStatusColor(feedback.status)}>
                      {feedback.status}
                    </Badge>
                  </div>
                  {feedback.targetName && (
                    <p className="text-sm text-gray-600">
                      {feedback.type === 'course' ? 'Course: ' : 'Instructor: '}
                      {feedback.targetName}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= feedback.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-1 text-sm text-gray-600">
                  {feedback.rating}/5
                </span>
              </div>
            </div>
          </CardHeader>
          {feedback.comment && (
            <CardContent>
              <p className="text-gray-700">{feedback.comment}</p>
              <p className="text-xs text-gray-500 mt-2">
                Submitted {feedback.createdAt}
              </p>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
};

export default FeedbackList;
