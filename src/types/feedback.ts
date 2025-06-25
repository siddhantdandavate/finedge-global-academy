
export interface Feedback {
  id: string;
  studentId: string;
  studentName: string;
  type: 'course' | 'instructor' | 'platform';
  targetId?: string; // course ID or instructor ID
  targetName?: string; // course title or instructor name
  rating: number; // 1-5 stars
  comment?: string;
  isAnonymous: boolean;
  createdAt: string;
  status: 'pending' | 'reviewed' | 'resolved';
}

export interface FeedbackFormData {
  type: 'course' | 'instructor' | 'platform';
  targetId?: string;
  targetName?: string;
  rating: number;
  comment: string;
  isAnonymous: boolean;
}
