
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
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Video,
  FileText,
  Calendar,
  ArrowRight,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');

  // Real YouTube CA Educational Videos
  const youtubeTeasers = [
    {
      id: 1,
      title: "Complete GST Course for Indian CAs",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=4l0tUXC4sYs",
      instructor: "CA Anuj Mehra",
      duration: "45:30",
      views: "125K",
      description: "Master GST implementation with practical examples"
    },
    {
      id: 2,
      title: "Australian Tax Law for Indian CAs",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=wQhY4BdBnfY",
      instructor: "CA Shalini Rao",
      duration: "38:15",
      views: "89K",
      description: "Cross-border taxation strategies and compliance"
    },
    {
      id: 3,
      title: "IFRS Implementation Masterclass",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=Jw0cIPBtla4",
      instructor: "CA Vikram Shah",
      duration: "52:40",
      views: "156K",
      description: "International Financial Reporting Standards deep dive"
    },
    {
      id: 4,
      title: "Canadian CPA vs Indian CA - Key Differences",
      thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instructor: "CA Neha Kulkarni",
      duration: "34:20",
      views: "67K",
      description: "Understanding global accounting standards differences"
    },
    {
      id: 5,
      title: "UK ACCA to Indian CA Conversion Guide",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=abc123xyz",
      instructor: "CA Ritika Iyer",
      duration: "41:10",
      views: "92K",
      description: "Step-by-step guide for international CA recognition"
    }
  ];

  // Updated Featured Courses with Indian context
  const featuredCourses = [
    {
      id: 1,
      title: "Complete International Taxation for Indian CAs",
      instructor: "CA Anuj Mehra",
      price: "₹24,999",
      originalPrice: "₹32,999",
      rating: 4.8,
      students: 2847,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=300&h=200&fit=crop",
      badge: "Bestseller",
      duration: "45 hours"
    },
    {
      id: 2,
      title: "GST Mastery: From Basics to Advanced",
      instructor: "CA Shalini Rao",
      price: "₹15,999",
      originalPrice: "₹22,999",
      rating: 4.9,
      students: 1532,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      badge: "New",
      duration: "32 hours"
    },
    {
      id: 3,
      title: "Australian Corporate Law for Indian CAs",
      instructor: "CA Vikram Shah",
      price: "₹12,999",
      originalPrice: "₹16,999",
      rating: 4.7,
      students: 3241,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=200&fit=crop",
      badge: "Popular",
      duration: "28 hours"
    }
  ];

  // Updated Featured Blogs with Indian CA focus
  const featuredBlogs = [
    {
      id: 1,
      title: "New GST Rules 2024: Impact on Indian Businesses",
      excerpt: "Comprehensive analysis of latest GST amendments and their practical implications for chartered accountants...",
      author: "CA Neha Kulkarni",
      readTime: "8 min read",
      publishedDate: "2024-01-15",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=300&h=200&fit=crop",
      tags: ["GST", "Tax Policy", "India"]
    },
    {
      id: 2,
      title: "Cross-Border M&A: Indian CA's Guide to Global Deals",
      excerpt: "How Indian chartered accountants can excel in international mergers and acquisitions...",
      author: "CA Ritika Iyer",
      readTime: "12 min read",
      publishedDate: "2024-01-12",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&h=200&fit=crop",
      tags: ["M&A", "International", "Strategy"]
    }
  ];

  // Updated testimonials with Indian professionals
  const testimonials = [
    {
      id: 1,
      name: "CA Aditya Chauhan",
      role: "Senior Tax Consultant, Mumbai",
      content: "Finedge helped me master Australian tax laws perfectly. The cross-border expertise training is unmatched in India!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      name: "CA Sneha Patil",
      role: "International Tax Partner, Bangalore",
      content: "The quality of instruction and practical case studies make complex international regulations easy to understand and apply.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % youtubeTeasers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + youtubeTeasers.length) % youtubeTeasers.length);
  };

  const handleVideoClick = (videoUrl: string) => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section with Indian gradient colors */}
      <section className="relative bg-gradient-to-r from-orange-500 via-blue-600 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
              Master Global Finance with Finedge
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Empowering Indian Chartered Accountants with international expertise, 
              cross-border certifications, and AI-powered learning
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
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-blue-100">Indian CAs Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">200+</div>
                <div className="text-blue-100">Expert Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-blue-100">Countries Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-blue-100">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Flickers Carousel - Now Functional */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Free CA Learning Videos</h2>
            <p className="text-xl text-gray-600">Watch expert lectures from top Indian CAs on YouTube</p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" 
                   style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {youtubeTeasers.map((teaser) => (
                  <div key={teaser.id} className="w-full flex-shrink-0 relative group cursor-pointer"
                       onClick={() => handleVideoClick(teaser.videoUrl)}>
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={teaser.thumbnail} 
                        alt={teaser.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="lg" className="bg-red-600 text-white hover:bg-red-700">
                          <Play className="mr-2 h-6 w-6" />
                          Watch on YouTube
                        </Button>
                      </div>
                      <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        YouTube
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
                      <p className="text-gray-200 mb-1">by {teaser.instructor}</p>
                      <p className="text-gray-300 text-sm">{teaser.description}</p>
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
                    index === currentSlide ? 'bg-orange-600' : 'bg-gray-300'
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
              <p className="text-xl text-gray-600">Master international finance with expert Indian CA guidance</p>
            </div>
            <Link to="/courses">
              <Button variant="outline" className="flex items-center border-orange-200 text-orange-600 hover:bg-orange-50">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden border-orange-100">
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
                  <CardTitle className="line-clamp-2 group-hover:text-orange-600 transition-colors">
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
                  <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
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
              <h2 className="text-4xl font-bold mb-4">Latest CA Insights</h2>
              <p className="text-xl text-gray-600">Stay updated with Indian and international tax regulations</p>
            </div>
            <Link to="/blog">
              <Button variant="outline" className="flex items-center border-orange-200 text-orange-600 hover:bg-orange-50">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredBlogs.map((blog) => (
              <Card key={blog.id} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden border-orange-100">
                <div className="flex">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-1/3 h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="w-2/3 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {blog.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-orange-100 text-orange-800">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
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
            <h2 className="text-4xl font-bold mb-4">What Indian CAs Say</h2>
            <p className="text-xl text-gray-600">Join thousands of successful chartered accountants across India</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 border-orange-100">
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
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
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
      <section className="py-16 bg-gradient-to-r from-orange-600 via-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Ahead in Your CA Career</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get weekly insights, course updates, and exclusive content for Indian CAs
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
              <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Expertise</h3>
              <p className="text-gray-400">Learn international practices from India's perspective</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Learning</h3>
              <p className="text-gray-400">Industry-recognized certificates for Indian CAs</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Support</h3>
              <p className="text-gray-400">24/7 intelligent tutoring in multiple Indian languages</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p className="text-gray-400">Advance your CA career globally from India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
