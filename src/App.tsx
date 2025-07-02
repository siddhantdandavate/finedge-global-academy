import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { ContentProvider } from '@/contexts/ContentContext';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import Layout from '@/components/Layout';

// Pages
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import CoursesPage from '@/pages/CoursesPage';
import CoursePlayer from '@/pages/CoursePlayer';
import InstructorsPage from '@/pages/InstructorsPage';
import WebinarsPage from '@/pages/WebinarsPage';
import PodcastsPage from '@/pages/PodcastsPage';
import BlogPage from '@/pages/BlogPage';
import PaymentPage from '@/pages/PaymentPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import BlogDetail from '@/pages/BlogDetail';
import NotFound from '@/pages/NotFound';
import NotificationCenter from '@/pages/NotificationCenter';
import UserSettings from '@/pages/UserSettings';
import HelpCenter from '@/pages/HelpCenter';
import PrivacyPolicy from '@/pages/PrivacyPolicy';

// Dashboards
import StudentDashboard from '@/components/dashboards/StudentDashboard';
import InstructorDashboard from '@/components/dashboards/InstructorDashboard';
import AdminDashboard from '@/components/dashboards/AdminDashboard';
import ContentWriterDashboard from '@/components/dashboards/ContentWriterDashboard';
import BloggerDashboard from '@/components/dashboards/BloggerDashboard';

function App() {
  return (
    <AuthProvider>
      <ContentProvider>
        <Router>
          <Layout>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/courses" element={<CoursesPage />} />
                  <Route path="/course/:id" element={<CoursePlayer />} />
                  <Route path="/instructors" element={<InstructorsPage />} />
                  <Route path="/webinars" element={<WebinarsPage />} />
                  <Route path="/podcasts" element={<PodcastsPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/blog/:id" element={<BlogDetail />} />
                  <Route path="/help" element={<HelpCenter />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  
                  {/* Protected Routes */}
                  <Route path="/payment" element={
                    <ProtectedRoute>
                      <PaymentPage />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="/notifications" element={
                    <ProtectedRoute>
                      <NotificationCenter />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="/settings" element={
                    <ProtectedRoute>
                      <UserSettings />
                    </ProtectedRoute>
                  } />

                  {/* Role-based Dashboard Routes - Fixed paths */}
                  <Route path="/student/*" element={
                    <ProtectedRoute allowedRoles={['student']}>
                      <StudentDashboard />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="/instructor/*" element={
                    <ProtectedRoute allowedRoles={['instructor']}>
                      <InstructorDashboard />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="/admin/*" element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <AdminDashboard />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="/content-writer/*" element={
                    <ProtectedRoute allowedRoles={['content-writer']}>
                      <ContentWriterDashboard />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="/blogger/*" element={
                    <ProtectedRoute allowedRoles={['blogger']}>
                      <BloggerDashboard />
                    </ProtectedRoute>
                  } />

                  {/* 404 Route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <Toaster />
            </div>
          </Layout>
        </Router>
      </ContentProvider>
    </AuthProvider>
  );
}

export default App;
