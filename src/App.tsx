
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProtectedRoute } from '@/components/ProtectedRoute';

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
import AdminDashboard from '@/pages/AdminDashboard';

// Dashboards
import StudentDashboard from '@/components/dashboards/StudentDashboard';
import InstructorDashboard from '@/components/dashboards/InstructorDashboard';
import BloggerDashboard from '@/components/dashboards/BloggerDashboard';
import ContentWriterDashboard from '@/components/dashboards/ContentWriterDashboard';

// Blog System
import BlogSystem from '@/components/blog/BlogSystem';

// Webinar System
import WebinarSystem from '@/components/webinar/WebinarSystem';

function App() {
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
              <Route path="/blog/*" element={<BlogSystem />} />
              <Route path="/webinar/*" element={<WebinarSystem />} />
              
              {/* Protected Routes */}
              <Route path="/admin" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/student" element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentDashboard />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/instructor" element={
                <ProtectedRoute allowedRoles={['instructor']}>
                  <InstructorDashboard />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/blogger" element={
                <ProtectedRoute allowedRoles={['blogger']}>
                  <BloggerDashboard />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/content-writer" element={
                <ProtectedRoute allowedRoles={['content-writer']}>
                  <ContentWriterDashboard />
                </ProtectedRoute>
              } />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
