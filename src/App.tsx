
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import AIChatbot from '@/components/ai/AIChatbot';

// Pages
import Index from '@/pages/Index';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import CoursesPage from '@/pages/CoursesPage';
import CoursePlayerPage from '@/pages/CoursePlayer';
import PaymentPage from '@/pages/PaymentPage';
import InstructorsPage from '@/pages/InstructorsPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import NotFound from '@/pages/NotFound';
import EnhancedAdminDashboard from '@/pages/EnhancedAdminDashboard';

// Enhanced Dashboards
import AdminDashboard from '@/components/dashboards/AdminDashboard';
import StudentDashboard from '@/components/dashboards/StudentDashboard';
import InstructorDashboard from '@/components/dashboards/InstructorDashboard';
import BloggerDashboard from '@/components/dashboards/BloggerDashboard';
import ContentWriterDashboard from '@/components/dashboards/ContentWriterDashboard';

// Blog System
import BlogSystem from '@/components/blog/BlogSystem';
import BlogList from '@/components/blog/BlogList';
import BlogDetail from '@/pages/BlogDetail';

// Settings and Notifications
import UserSettings from '@/pages/UserSettings';
import NotificationCenter from '@/pages/NotificationCenter';

// Webinar System
import WebinarSystem from '@/components/webinar/WebinarSystem';

// AI Tools
import AIResumeBuilder from '@/components/ai/AIResumeBuilder';
import AIBlogAssistant from '@/components/ai/AIBlogAssistant';

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isChatbotMinimized, setIsChatbotMinimized] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
    if (!isChatbotOpen) {
      setIsChatbotMinimized(false);
    }
  };

  const minimizeChatbot = () => {
    setIsChatbotMinimized(!isChatbotMinimized);
  };

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/course/:courseId/payment" element={<PaymentPage />} />
              <Route path="/course/:courseId/player" element={<CoursePlayerPage />} />
              <Route path="/course/:courseId" element={<CoursePlayerPage />} />
              <Route path="/instructors" element={<InstructorsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/webinar/*" element={<WebinarSystem />} />
              
              {/* AI Tools */}
              <Route path="/ai/resume-builder" element={
                <ProtectedRoute allowedRoles={['student']}>
                  <AIResumeBuilder />
                </ProtectedRoute>
              } />
              <Route path="/ai/blog-assistant" element={
                <ProtectedRoute allowedRoles={['blogger', 'content-writer']}>
                  <AIBlogAssistant />
                </ProtectedRoute>
              } />

              {/* Settings and Notifications */}
              <Route path="/settings" element={
                <ProtectedRoute>
                  <UserSettings />
                </ProtectedRoute>
              } />
              <Route path="/notifications" element={
                <ProtectedRoute>
                  <NotificationCenter />
                </ProtectedRoute>
              } />
              
              {/* Protected Role-based Dashboards */}
              <Route path="/admin/*" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/student/*" element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentDashboard />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/instructor/*" element={
                <ProtectedRoute allowedRoles={['instructor']}>
                  <InstructorDashboard />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/blogger/*" element={
                <ProtectedRoute allowedRoles={['blogger']}>
                  <BloggerDashboard />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/content-writer/*" element={
                <ProtectedRoute allowedRoles={['content-writer']}>
                  <ContentWriterDashboard />
                </ProtectedRoute>
              } />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
          
          {/* Site-wide AI Chatbot */}
          <AIChatbot 
            isOpen={isChatbotOpen}
            onToggle={toggleChatbot}
            isMinimized={isChatbotMinimized}
            onMinimize={minimizeChatbot}
            courseContext="Finedge Finance Learning"
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
