
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  PlayCircle, 
  Users, 
  Award, 
  Globe, 
  Star, 
  TrendingUp,
  BookOpen,
  ChevronRight,
  Download
} from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';

const HomePage: React.FC = () => {
  const { content } = useContent();

  const youtubeVideos = [
    {
      id: 1,
      title: "Understanding Indian Tax System",
      instructor: "CA Raj Sharma",
      thumbnail: "https://img.youtube.com/vi/4l0tUXC4sYs/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=4l0tUXC4sYs",
      duration: "45:20",
      views: "125K"
    },
    {
      id: 2,
      title: "CA Intermediate GST Lecture",
      instructor: "CA Priya Patel",
      thumbnail: "https://img.youtube.com/vi/Jw0cIPBtla4/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=Jw0cIPBtla4",
      duration: "38:15",
      views: "89K"
    },
    {
      id: 3,
      title: "Australian CPA Policy Differences",
      instructor: "CA Michael Johnson",
      thumbnail: "https://img.youtube.com/vi/wQhY4BdBnfY/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=wQhY4BdBnfY",
      duration: "52:30",
      views: "67K"
    },
    {
      id: 4,
      title: "UK Accounting Standards Update",
      instructor: "CA Sarah Williams",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      duration: "41:25",
      views: "92K"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {content.homepage.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              {content.homepage.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                  {content.homepage.hero.primaryCta}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                  {content.homepage.hero.secondaryCta}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Learning Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Learning Videos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry experts with our curated collection of CA learning content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {youtubeVideos.map((video) => (
              <Card key={video.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle className="h-16 w-16 text-white" />
                  </div>
                  <Badge className="absolute top-2 right-2 bg-black/70 text-white">
                    {video.duration}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{video.instructor}</p>
                  <p className="text-gray-500 text-xs">{video.views} views</p>
                </CardContent>
                <div 
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => window.open(video.url, '_blank')}
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Finedge?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive learning platform designed specifically for Indian Chartered Accountants
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.homepage.features.map((feature, index) => {
              const IconComponent = {
                Globe,
                Award,
                BookOpen,
                TrendingUp
              }[feature.icon] || Globe;
              
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-orange-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {content.homepage.stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-orange-300">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-lg text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of successful CA professionals who trust Finedge
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {content.homepage.testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 text-lg leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-orange-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Advance Your CA Career?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join Finedge today and get access to world-class courses, expert instructors, and a global community of CA professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white px-8 py-4 text-lg">
                  Start Learning Today
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                  Browse Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
