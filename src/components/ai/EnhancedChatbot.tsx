
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  Send, 
  Minimize2, 
  Maximize2, 
  X,
  Bot,
  User,
  Lightbulb,
  BookOpen,
  Calculator,
  TrendingUp,
  FileText,
  Video,
  Calendar,
  Settings,
  Award,
  Users
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  suggestions?: string[];
  actions?: { label: string; action: string }[];
}

interface EnhancedChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
  pageContext?: string;
  isMinimized?: boolean;
  onMinimize?: () => void;
}

const EnhancedChatbot: React.FC<EnhancedChatbotProps> = ({ 
  isOpen, 
  onToggle, 
  pageContext = "dashboard",
  isMinimized = false,
  onMinimize
}) => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionMemory, setSessionMemory] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initialize with role-based greeting
    if (user && messages.length === 0) {
      const greeting = generateRoleBasedGreeting();
      setMessages([{
        id: '1',
        type: 'ai',
        content: greeting.content,
        timestamp: new Date(),
        suggestions: greeting.suggestions,
        actions: greeting.actions
      }]);
    }
  }, [user, messages.length]);

  const generateRoleBasedGreeting = () => {
    if (!user) {
      return {
        content: "Hello! I'm your AI assistant for Finedge. How can I help you today?",
        suggestions: ["Browse courses", "Learn about features", "Get help with navigation"],
        actions: []
      };
    }

    switch (user.role) {
      case 'student':
        return {
          content: `Hello ${user.name}! I'm your AI study assistant. I can help you with course content, track your progress, generate resumes, and answer any questions about your learning journey.`,
          suggestions: [
            "Show my course progress",
            "Upcoming webinars",
            "Generate my resume",
            "Explain difficult concepts"
          ],
          actions: [
            { label: "View My Courses", action: "navigate_courses" },
            { label: "Check Certificates", action: "view_certificates" }
          ]
        };
      
      case 'instructor':
        return {
          content: `Welcome ${user.name}! I'm here to help you manage your courses, create engaging content, and connect with your students effectively.`,
          suggestions: [
            "Course creation tips",
            "Student engagement analytics",
            "Schedule a webinar",
            "Draft course descriptions"
          ],
          actions: [
            { label: "Create New Course", action: "create_course" },
            { label: "View Analytics", action: "view_analytics" }
          ]
        };
      
      case 'content-writer':
        return {
          content: `Hi ${user.name}! I'm your writing assistant. I can help you brainstorm article ideas, improve your content, optimize for SEO, and manage your submissions.`,
          suggestions: [
            "Suggest blog topics",
            "SEO optimization tips",
            "Grammar check help",
            "Content structure advice"
          ],
          actions: [
            { label: "Start New Article", action: "create_article" },
            { label: "Check Submissions", action: "view_submissions" }
          ]
        };
      
      case 'blogger':
        return {
          content: `Hello ${user.name}! I'm here to help you create compelling blog content, optimize for engagement, and manage your publishing workflow.`,
          suggestions: [
            "Blog post ideas",
            "Headline suggestions",
            "Content calendar help",
            "Engagement strategies"
          ],
          actions: [
            { label: "Write New Post", action: "create_blog" },
            { label: "View Blog Analytics", action: "blog_analytics" }
          ]
        };
      
      case 'admin':
        return {
          content: `Hello ${user.name}! I'm your admin assistant. I can provide platform insights, help with user management, generate reports, and assist with administrative tasks.`,
          suggestions: [
            "Platform analytics summary",
            "Pending approvals",
            "User management help",
            "Generate reports"
          ],
          actions: [
            { label: "View Dashboard", action: "admin_dashboard" },
            { label: "Check Approvals", action: "pending_approvals" }
          ]
        };
      
      default:
        return {
          content: `Hello ${user.name}! I'm your AI assistant. How can I help you today?`,
          suggestions: ["Platform features", "Navigation help", "Account settings"],
          actions: []
        };
    }
  };

  const generateAIResponse = (userInput: string, userRole: string = 'student'): Message => {
    const input = userInput.toLowerCase();
    setSessionMemory(prev => [...prev, userInput]);

    // Context-aware responses based on page and role
    let response = '';
    let suggestions: string[] = [];
    let actions: { label: string; action: string }[] = [];

    // Role-specific responses
    if (userRole === 'student') {
      if (input.includes('progress') || input.includes('course')) {
        response = "I can see you're interested in tracking your learning progress! You currently have 3 courses in progress with an average completion rate of 67%. Would you like me to show you which courses need attention or suggest your next learning path?";
        suggestions = ["Show detailed progress", "Recommend next course", "Study schedule help"];
        actions = [{ label: "View Progress Dashboard", action: "view_progress" }];
      } else if (input.includes('resume') || input.includes('cv')) {
        response = "I'd be happy to help you create a professional resume! Based on your completed courses and certifications, I can generate a tailored resume highlighting your finance and accounting expertise. Would you like me to create one now?";
        suggestions = ["Generate resume", "Add skills section", "Include certifications"];
        actions = [{ label: "Create Resume", action: "generate_resume" }];
      } else if (input.includes('certificate')) {
        response = "Great question about certificates! You've earned 2 certificates so far. I can help you download them, add them to your LinkedIn profile, or include them in job applications. What would you like to do?";
        suggestions = ["Download certificates", "LinkedIn integration", "Share achievements"];
        actions = [{ label: "View Certificates", action: "view_certificates" }];
      }
    } else if (userRole === 'instructor') {
      if (input.includes('course') || input.includes('create')) {
        response = "I can definitely help you create engaging courses! Based on current trends, courses on 'AI in Finance' and 'ESG Reporting' are highly in demand. I can suggest course structures, help with SEO-optimized titles, and even draft learning objectives. What topic interests you?";
        suggestions = ["Course structure help", "SEO title suggestions", "Learning objectives", "Student engagement tips"];
        actions = [{ label: "Start Course Creator", action: "create_course" }];
      } else if (input.includes('student') || input.includes('analytics')) {
        response = "Your courses are performing well! This month you have 234 active students across 5 courses with an average rating of 4.7/5. Your 'Advanced Financial Modeling' course has the highest engagement. Would you like detailed analytics or tips to improve student engagement?";
        suggestions = ["Detailed analytics", "Engagement strategies", "Student feedback", "Course improvements"];
        actions = [{ label: "View Full Analytics", action: "instructor_analytics" }];
      }
    } else if (userRole === 'content-writer' || userRole === 'blogger') {
      if (input.includes('idea') || input.includes('topic')) {
        response = "Here are some trending topics perfect for your audience: '2024 Tax Law Changes', 'Digital Transformation in Accounting', 'Sustainable Finance Practices', and 'Remote Audit Procedures'. These topics have high search volume and engagement potential. Which one interests you?";
        suggestions = ["Tax law changes article", "Digital transformation piece", "Sustainable finance guide", "Remote audit tips"];
        actions = [{ label: "Start Writing", action: "create_content" }];
      } else if (input.includes('seo') || input.includes('optimize')) {
        response = "For SEO optimization, I recommend: 1) Include target keywords in your title and first paragraph, 2) Use headers (H2, H3) to structure content, 3) Add meta descriptions, 4) Include internal links, and 5) Optimize for featured snippets. Want me to help optimize your current draft?";
        suggestions = ["Keyword research", "Meta description help", "Content structure", "Featured snippet optimization"];
      }
    } else if (userRole === 'admin') {
      if (input.includes('analytics') || input.includes('summary')) {
        response = "Here's your platform summary: 18,247 total users (+12.5% this month), 247 active courses, $58,392 monthly revenue (+18.7%), and 23 pending approvals. Top performing courses are in Tax Planning and Financial Analysis. Would you like detailed insights for any specific area?";
        suggestions = ["User growth details", "Revenue breakdown", "Course performance", "Approval queue"];
        actions = [{ label: "Full Analytics Dashboard", action: "admin_analytics" }];
      } else if (input.includes('approval') || input.includes('pending')) {
        response = "You have 23 items pending approval: 8 new courses, 7 blog posts, 5 instructor applications, and 3 webinar proposals. The oldest submission is from 3 days ago. Would you like me to prioritize them or show details for quick review?";
        suggestions = ["Prioritize by date", "Show course approvals", "Instructor applications", "Quick review mode"];
        actions = [{ label: "Review Approvals", action: "approval_queue" }];
      }
    }

    // General responses if no specific match
    if (!response) {
      if (input.includes('help') || input.includes('support')) {
        response = "I'm here to help! I can assist with platform navigation, feature explanations, troubleshooting, and role-specific tasks. What specific area would you like help with?";
        suggestions = ["Platform features", "Navigation help", "Troubleshooting", "Account settings"];
      } else if (input.includes('webinar') || input.includes('event')) {
        response = "Upcoming webinars this week: 'Advanced GST Strategies' (Jan 25), 'IFRS Updates 2024' (Jan 27), and 'Audit Risk Assessment' (Jan 29). All webinars include live Q&A and downloadable resources. Would you like to register or get more details?";
        suggestions = ["Register for webinars", "View all events", "Set reminders", "Download materials"];
        actions = [{ label: "View Webinars", action: "view_webinars" }];
      } else {
        response = "I understand you're looking for assistance. Could you be more specific about what you'd like help with? I can help with courses, analytics, content creation, platform navigation, or any other questions you might have.";
        suggestions = ["Browse courses", "Platform features", "Get started guide", "Contact support"];
      }
    }

    return {
      id: (Date.now() + 1).toString(),
      type: 'ai',
      content: response,
      timestamp: new Date(),
      suggestions,
      actions
    };
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage, user?.role);
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
  };

  const handleActionClick = (action: string) => {
    // In a real implementation, these would trigger actual navigation or actions
    console.log('Action triggered:', action);
    const actionMessage: Message = {
      id: Date.now().toString(),
      type: 'ai',
      content: `I'd be happy to help you with that! This feature will be available in the full implementation. For now, you can navigate to the relevant section using the main menu.`,
      timestamp: new Date(),
      suggestions: ["Main dashboard", "Course catalog", "User profile", "Settings"]
    };
    setMessages(prev => [...prev, actionMessage]);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={onToggle}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg z-50"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className={`fixed bottom-6 right-6 z-50 shadow-2xl transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-96 h-[700px]'
    }`}>
      <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <CardTitle className="text-lg">Finedge AI Assistant</CardTitle>
            <p className="text-xs text-gray-500">
              {user?.role ? `${user.role.charAt(0).toUpperCase() + user.role.slice(1)} Assistant` : 'AI Helper'}
            </p>
          </div>
        </div>
        <div className="flex space-x-1">
          {onMinimize && (
            <Button size="sm" variant="ghost" onClick={onMinimize}>
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
          )}
          <Button size="sm" variant="ghost" onClick={onToggle}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="flex flex-col h-full p-0">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96">
            {messages.map((message) => (
              <div key={message.id}>
                <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex space-x-2 max-w-[85%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                    <Avatar className="w-8 h-8 flex-shrink-0">
                      {message.type === 'user' ? (
                        <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
                      ) : (
                        <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div className={`rounded-lg p-3 ${
                      message.type === 'user' 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                {message.actions && message.actions.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2 ml-10">
                    {message.actions.map((action, index) => (
                      <Button
                        key={index}
                        size="sm"
                        variant="outline"
                        onClick={() => handleActionClick(action.action)}
                        className="text-xs"
                      >
                        {action.label}
                      </Button>
                    ))}
                  </div>
                )}

                {/* Suggestions */}
                {message.suggestions && message.suggestions.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2 ml-10">
                    {message.suggestions.map((suggestion, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-blue-50 text-xs"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        <Lightbulb className="h-3 w-3 mr-1" />
                        {suggestion}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex space-x-2">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t">
            <div className="flex space-x-2 mb-3 overflow-x-auto">
              {user?.role === 'student' && (
                <>
                  <Button size="sm" variant="outline" className="text-xs whitespace-nowrap" onClick={() => handleSuggestionClick("Show my progress")}>
                    <BookOpen className="h-3 w-3 mr-1" />
                    Progress
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs whitespace-nowrap" onClick={() => handleSuggestionClick("Generate resume")}>
                    <FileText className="h-3 w-3 mr-1" />
                    Resume
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs whitespace-nowrap" onClick={() => handleSuggestionClick("Next webinar")}>
                    <Video className="h-3 w-3 mr-1" />
                    Webinars
                  </Button>
                </>
              )}
              {user?.role === 'instructor' && (
                <>
                  <Button size="sm" variant="outline" className="text-xs whitespace-nowrap" onClick={() => handleSuggestionClick("Course analytics")}>
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Analytics
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs whitespace-nowrap" onClick={() => handleSuggestionClick("Create course")}>
                    <BookOpen className="h-3 w-3 mr-1" />
                    New Course
                  </Button>
                </>
              )}
              {(user?.role === 'content-writer' || user?.role === 'blogger') && (
                <>
                  <Button size="sm" variant="outline" className="text-xs whitespace-nowrap" onClick={() => handleSuggestionClick("Blog ideas")}>
                    <Lightbulb className="h-3 w-3 mr-1" />
                    Ideas
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs whitespace-nowrap" onClick={() => handleSuggestionClick("SEO help")}>
                    <TrendingUp className="h-3 w-3 mr-1" />
                    SEO
                  </Button>
                </>
              )}
              {user?.role === 'admin' && (
                <>
                  <Button size="sm" variant="outline" className="text-xs whitespace-nowrap" onClick={() => handleSuggestionClick("Platform summary")}>
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Summary
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs whitespace-nowrap" onClick={() => handleSuggestionClick("Pending approvals")}>
                    <Users className="h-3 w-3 mr-1" />
                    Approvals
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask me anything about Finedge..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default EnhancedChatbot;
