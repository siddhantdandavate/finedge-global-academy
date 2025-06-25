
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, Send } from 'lucide-react';
import { FeedbackFormData } from '@/types/feedback';

interface FeedbackFormProps {
  onSubmit: (feedback: FeedbackFormData) => void;
  courses?: { id: string; title: string }[];
  instructors?: { id: string; name: string }[];
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ 
  onSubmit, 
  courses = [], 
  instructors = [] 
}) => {
  const [formData, setFormData] = useState<FeedbackFormData>({
    type: 'course',
    rating: 0,
    comment: '',
    isAnonymous: false
  });

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rating === 0) {
      alert('Please select a rating');
      return;
    }
    onSubmit(formData);
    // Reset form
    setFormData({
      type: 'course',
      rating: 0,
      comment: '',
      isAnonymous: false,
      targetId: undefined,
      targetName: undefined
    });
  };

  const handleTypeChange = (type: 'course' | 'instructor' | 'platform') => {
    setFormData(prev => ({ 
      ...prev, 
      type, 
      targetId: undefined, 
      targetName: undefined 
    }));
  };

  const handleTargetChange = (value: string) => {
    if (formData.type === 'course') {
      const course = courses.find(c => c.id === value);
      setFormData(prev => ({ 
        ...prev, 
        targetId: value, 
        targetName: course?.title 
      }));
    } else if (formData.type === 'instructor') {
      const instructor = instructors.find(i => i.id === value);
      setFormData(prev => ({ 
        ...prev, 
        targetId: value, 
        targetName: instructor?.name 
      }));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submit Feedback</CardTitle>
        <CardDescription>
          Help us improve by sharing your experience
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Feedback Type */}
          <div className="space-y-2">
            <Label>Feedback Type</Label>
            <Select 
              value={formData.type} 
              onValueChange={handleTypeChange}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="course">Course Feedback</SelectItem>
                <SelectItem value="instructor">Instructor Feedback</SelectItem>
                <SelectItem value="platform">Platform Feedback</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Target Selection */}
          {formData.type === 'course' && courses.length > 0 && (
            <div className="space-y-2">
              <Label>Select Course</Label>
              <Select 
                value={formData.targetId || ''} 
                onValueChange={handleTargetChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose a course" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map(course => (
                    <SelectItem key={course.id} value={course.id}>
                      {course.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {formData.type === 'instructor' && instructors.length > 0 && (
            <div className="space-y-2">
              <Label>Select Instructor</Label>
              <Select 
                value={formData.targetId || ''} 
                onValueChange={handleTargetChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose an instructor" />
                </SelectTrigger>
                <SelectContent>
                  {instructors.map(instructor => (
                    <SelectItem key={instructor.id} value={instructor.id}>
                      {instructor.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Star Rating */}
          <div className="space-y-2">
            <Label>Rating</Label>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingClick(star)}
                  className="focus:outline-none"
                >
                  <Star
                    className={`h-6 w-6 ${
                      star <= formData.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {formData.rating > 0 && `${formData.rating}/5`}
              </span>
            </div>
          </div>

          {/* Comment */}
          <div className="space-y-2">
            <Label htmlFor="comment">Comments (Optional)</Label>
            <Textarea
              id="comment"
              placeholder="Share your detailed feedback..."
              value={formData.comment}
              onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
              rows={4}
            />
          </div>

          {/* Anonymous Option */}
          <div className="flex items-center space-x-2">
            <Switch
              id="anonymous"
              checked={formData.isAnonymous}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, isAnonymous: checked }))
              }
            />
            <Label htmlFor="anonymous">Submit as anonymous feedback</Label>
          </div>

          <Button type="submit" className="w-full">
            <Send className="h-4 w-4 mr-2" />
            Submit Feedback
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FeedbackForm;
