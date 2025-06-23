
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  BookOpen, 
  Users, 
  Award, 
  Star, 
  Play, 
  Clock, 
  TrendingUp,
  Globe,
  Moon,
  Sun,
  Search,
  ChevronRight,
  Video,
  Mic,
  FileText,
  CheckCircle
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import AIChatbot from '@/components/ai/AIChatbot';

const HomePage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [email, setEmail] = useState('');

  // Featured courses data
  const featuredCourses = [
    {
      id: '1',
      title: 'Advanced Financial Modeling',
      instructor: 'Dr. Sarah Johnson',
      rating: 4.9,
      reviews: 234,
      students: 1247,
      price: 199,
      originalPrice: 299,
      duration: '12 hours',
      level: 'Advanced',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      skills: ['DCF Analysis', 'Valuation', 'Excel Modeling'],
      featured: true
    },
    {
      id: '2',
      title: 'CPA Exam Preparation',
      instructor: 'Prof. Michael Chen',
      rating: 4.8,
      reviews: 189,
      students: 892,
      price: 149,
      originalPrice: 249,
      duration: '20 hours',
      level: 'Intermediate',
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      skills: ['Auditing', 'Taxation', 'Financial Reporting'],
      featured: true
    },
    {
      id: '3',
      title: 'Investment Banking Fundamentals',
      instructor: 'Emma Rodriguez',
      rating: 4.7,
      reviews: 156,
      students: 678,
      price: 299,
      originalPrice: 399,
      duration: '15 hours',
      level: 'Advanced',
      thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
      skills: ['M&A', 'IPO', 'Corporate Finance'],
      featured: true
    }
  ];

  // Categories data
  const categories = [
    { name: 'Financial Modeling', courses: 45, icon: TrendingUp },
    { name: 'CPA Preparation', courses: 32, icon: Award },
    { name: 'Investment Banking', courses: 28, icon: BookOpen },
    { name: 'Risk Management', courses: 23, icon: CheckCircle },
    { name: 'Corporate Finance', courses: 35, icon: Users },
    { name: 'Accounting', courses: 41, icon: FileText }
  ];

  // Popular instructors
  const popularInstructors = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Former Goldman Sachs VP',
      students: 12450,
      courses: 8,
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Prof. Michael Chen',
      title: 'CPA, Big 4 Partner',
      students: 8930,
      courses: 12,
      rating: 4.8,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Emma Rodriguez',
      title: 'JP Morgan Director',
      students: 7650,
      courses: 6,
      rating: 4.7,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ];

  // Student testimonials
  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Financial Analyst',
      company: 'JPMorgan Chase',
      content: 'Finedge transformed my career. The courses are industry-relevant and taught by real professionals.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'CA Student',
      company: 'KPMG',
      content: 'The CPA preparation course helped me pass all sections on the first try. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Investment Banker',
      company: 'Goldman Sachs',
      content: 'Real-world case studies and practical knowledge that I use daily in my work.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face',
      rating: 5
    }
  ];

  // YouTube teasers/flickers
  const youtubeTeasers = [
    {
      id: '1',
      title: 'Financial Modeling Masterclass Preview',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      duration: '2:45',
      views: '125K'
    },
    {
      id: '2',
      title: 'CPA Success Stories',
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop',
      duration: '1:30',
      views: '89K'
    },
    {
      id: '3',
      title: 'Investment Banking Career Guide',
      thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=300&h=200&fit=crop',
      duration: '3:15',
      views: '156K'
    }
  ];

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Newsletter signup logic would go here
      console.log('Newsletter signup:', email);
      setEmail('');
      // Show success message
    }
  };

  const handleDashboardRedirect = () => {
    if (user) {
      switch (user.role) {
        case 'admin':
          navigate('/admin');
          break;
        case 'instructor':
          navigate('/dashboard/instructor');
          break;
        case 'student':
          navigate('/dashboard/student');
          break;
        case 'content-writer':
          navigate('/dashboard/content-writer');
          break;
        case 'blogger':
          navigate('/dashboard/blogger');
          break;
        default:
          navigate('/dashboard/student');
      }
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Master Global <span className="text-yellow-400">Finance</span> Skills
                </h1>
                <p className="text-xl lg:text-2xl opacity-90">
                  Join 50,000+ finance professionals worldwide. Learn from industry experts and advance your career with internationally recognized certifications.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {user ? (
                  <Button 
                    size="lg" 
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg"
                    onClick={handleDashboardRedirect}
                  >
                    Go to Dashboard
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                ) : (
                  <>
                    <Button 
                      size="lg" 
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg"
                      asChild
                    >
                      <Link to="/register">
                        Start Learning Today
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
                      asChild
                    >
                      <Link to="/courses">
                        Browse Courses
                      </Link>
                    </Button>
                  </>
                )}
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-sm opacity-75">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-sm opacity-75">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-sm opacity-75">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop" 
                alt="Finance Professional"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-black p-4 rounded-lg shadow-xl">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-semibold">Industry Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Teasers Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Course Previews</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Get a glimpse of our world-class content</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {youtubeTeasers.map((teaser) => (
              <Card key={teaser.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={teaser.thumbnail} 
                    alt={teaser.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {teaser.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm mb-2">{teaser.title}</h3>
                  <p className="text-xs text-gray-500">{teaser.views} views</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Courses</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Learn from industry experts and advance your career</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-yellow-500 text-black">
                    Featured
                  </Badge>
                  <Badge className="absolute top-4 right-4 bg-blue-600">
                    {course.level}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-sm text-gray-500">({course.reviews})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription>
                    by {course.instructor}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {course.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-green-600">${course.price}</span>
                      {course.originalPrice > course.price && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ${course.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link to={`/course/${course.id}/payment`}>
                      Enroll Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/courses">
                View All Courses
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Popular Categories</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Explore our comprehensive course categories</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                  <category.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-sm mb-2">{category.name}</h3>
                <p className="text-xs text-gray-500">{category.courses} courses</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Instructors Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Learn from Industry Experts</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Our instructors are seasoned professionals from top firms</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularInstructors.map((instructor, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={instructor.avatar} />
                  <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-2">{instructor.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{instructor.title}</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{instructor.students.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Students</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{instructor.courses}</div>
                    <div className="text-xs text-gray-500">Courses</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-600">{instructor.rating}</div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Success Stories</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Hear from our successful graduates</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Finance Trends</h2>
          <p className="text-xl mb-8 opacity-90">Get weekly insights, course updates, and industry news</p>
          <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto flex gap-4">
            <Input 
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-gray-900 flex-1"
              required
            />
            <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* AI Chatbot */}
      <AIChatbot
        isOpen={isChatbotOpen}
        onToggle={() => setIsChatbotOpen(!isChatbotOpen)}
        courseContext="Finedge Platform"
      />
    </div>
  );
};

export default HomePage;
