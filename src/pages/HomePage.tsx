
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  BookOpen, 
  Users, 
  Award, 
  TrendingUp,
  Star,
  Play,
  Clock,
  Globe,
  Moon,
  Sun,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Video,
  FileText,
  Calendar,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [email, setEmail] = useState('');

  // YouTube Flickers Data
  const youtubeTeasers = [
    {
      id: 1,
      title: "Australian Tax Law for Indian CAs",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=225&fit=crop",
      videoId: "dQw4w9WgXcQ", // Sample YouTube ID
      instructor: "Dr. Sarah Miller",
      duration: "2:45",
      views: "12.5K"
    },
    {
      id: 2,
      title: "US GAAP vs Indian Accounting Standards",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
      videoId: "dQw4w9WgXcQ",
      instructor: "Prof. Michael Chen",
      duration: "3:20",
      views: "8.9K"
    },
    {
      id: 3,
      title: "International Financial Reporting",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=225&fit=crop",
      videoId: "dQw4w9WgXcQ",
      instructor: "Emma Rodriguez",
      duration: "4:15",
      views: "15.2K"
    }
  ];

  // Featured Courses
  const featuredCourses = [
    {
      id: 1,
      title: "Complete International Taxation Course",
      instructor: "Dr. James Wilson",
      price: "$299",
      originalPrice: "$399",
      rating: 4.8,
      students: 2847,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=300&h=200&fit=crop",
      badge: "Bestseller",
      duration: "45 hours"
    },
    {
      id: 2,
      title: "Cross-Border M&A for CAs",
      instructor: "Sarah Kumar",
      price: "$199",
      originalPrice: "$299",
      rating: 4.9,
      students: 1532,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      badge: "New",
      duration: "32 hours"
    },
    {
      id: 3,
      title: "Australian Corporate Law Fundamentals",
      instructor: "Michael Thompson",
      price: "$149",
      originalPrice: "$199",
      rating: 4.7,
      students: 3241,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=200&fit=crop",
      badge: "Popular",
      duration: "28 hours"
    }
  ];

  // Featured Blogs
  const featuredBlogs = [
    {
      id: 1,
      title: "Understanding IFRS 17 Implementation Challenges",
      excerpt: "Comprehensive guide to navigating the complexities of IFRS 17 for insurance contracts...",
      author: "Emma Rodriguez",
      readTime: "8 min read",
      publishedDate: "2024-01-15",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=300&h=200&fit=crop",
      tags: ["IFRS", "Insurance", "Compliance"]
    },
    {
      id: 2,
      title: "Digital Transformation in Finance: A CA's Perspective",
      excerpt: "How chartered accountants can leverage technology for better client service and efficiency...",
      author: "Dr. Raj Patel",
      readTime: "12 min read",
      publishedDate: "2024-01-12",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&h=200&fit=crop",
      tags: ["Technology", "Digital", "CA Practice"]
    }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Senior CA, Mumbai",
      content: "Finedge helped me understand Australian tax laws perfectly. The cross-border expertise is unmatched!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      name: "David Chen",
      role: "Tax Partner, Sydney",
      content: "The quality of instruction and practical examples make complex international law easy to grasp.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % youtubeTeasers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + youtubeTeasers.length) % youtubeTeasers.length);
  };

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Master Global Finance with Finedge
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Empowering Chartered Accountants worldwide with cross-border expertise, 
              international certifications, and AI-powered learning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/courses">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Courses
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                  Start Free Trial
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold">250K+</div>
                <div className="text-blue-100">Global Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-100">Expert Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-blue-100">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-blue-100">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Flickers Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Course Previews</h2>
            <p className="text-xl text-gray-600">Get a sneak peek at our expert-led content</p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" 
                   style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {youtubeTeasers.map((teaser) => (
                  <div key={teaser.id} className="w-full flex-shrink-0 relative group">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={teaser.thumbnail} 
                        alt={teaser.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="lg" className="bg-white/90 text-gray-900 hover:bg-white">
                          <Play className="mr-2 h-6 w-6" />
                          Watch Preview
                        </Button>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        <Clock className="inline h-4 w-4 mr-1" />
                        {teaser.duration}
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        {teaser.views} views
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-white text-xl font-semibold mb-2">{teaser.title}</h3>
                      <p className="text-gray-200">by {teaser.instructor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation */}
            <Button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full w-12 h-12 p-0"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full w-12 h-12 p-0"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            
            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {youtubeTeasers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Featured Courses</h2>
              <p className="text-xl text-gray-600">Master international finance with expert guidance</p>
            </div>
            <Link to="/courses">
              <Button variant="outline" className="flex items-center">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                    {course.badge}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription>by {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({course.rating})</span>
                    </div>
                    <span className="text-sm text-gray-600">{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-600">{course.price}</span>
                      <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <Clock className="inline h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blogs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
              <p className="text-xl text-gray-600">Stay updated with industry trends and expert analysis</p>
            </div>
            <Link to="/blog">
              <Button variant="outline" className="flex items-center">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredBlogs.map((blog) => (
              <Card key={blog.id} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="flex">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-1/3 h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="w-2/3 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {blog.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>by {blog.author}</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Join thousands of successful finance professionals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-4 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center">
                    <Avatar className="mr-3">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Ahead of the Curve</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get weekly insights, course updates, and exclusive content delivered to your inbox
          </p>
          <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white text-gray-900"
              required
            />
            <Button type="submit" className="bg-green-600 hover:bg-green-700 px-8">
              Subscribe
            </Button>
          </form>
          <div className="flex items-center justify-center mt-4 text-blue-200">
            <CheckCircle className="h-4 w-4 mr-2" />
            <span className="text-sm">No spam, unsubscribe anytime</span>
          </div>
        </div>
      </section>

      {/* Footer Features */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-400">Learn laws and practices from 50+ countries</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Learning</h3>
              <p className="text-gray-400">Industry-recognized certificates and credentials</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Support</h3>
              <p className="text-gray-400">24/7 intelligent tutoring and assistance</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p className="text-gray-400">Track your progress and advance your career</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
