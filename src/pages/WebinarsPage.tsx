
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  Clock, 
  Users, 
  Play, 
  Search,
  Filter,
  Star,
  Video,
  BookOpen
} from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';

const WebinarsPage: React.FC = () => {
  const { content } = useContent();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const webinars = [
    {
      id: 1,
      title: 'Advanced GST Implementation Strategies',
      instructor: 'CA Priya Sharma',
      instructorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b04c?w=100&h=100&fit=crop&crop=face',
      date: '2024-02-15',
      time: '6:00 PM IST',
      duration: '2 hours',
      category: 'taxation',
      participants: 1247,
      rating: 4.8,
      price: 'Free',
      status: 'upcoming',
      description: 'Learn advanced GST strategies and implementation techniques for complex business scenarios.',
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=225&fit=crop'
    },
    {
      id: 2,
      title: 'IFRS Updates and Practical Applications',
      instructor: 'CA Michael Johnson',
      instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      date: '2024-02-18',
      time: '7:00 PM GMT',
      duration: '1.5 hours',
      category: 'accounting',
      participants: 856,
      rating: 4.9,
      price: '₹299',
      status: 'upcoming',
      description: 'Latest IFRS updates and their practical implementation in financial reporting.',
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=225&fit=crop'
    },
    {
      id: 3,
      title: 'Audit Risk Assessment Workshop',
      instructor: 'CA Sarah Williams',
      instructorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      date: '2024-02-12',
      time: '5:30 PM IST',
      duration: '3 hours',
      category: 'audit',
      participants: 2341,
      rating: 4.7,
      price: '₹599',
      status: 'completed',
      description: 'Comprehensive workshop on modern audit risk assessment methodologies.',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop'
    },
    {
      id: 4,
      title: 'Corporate Finance Masterclass',
      instructor: 'CA Rajesh Kumar',
      instructorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      date: '2024-02-20',
      time: '8:00 PM IST',
      duration: '2.5 hours',
      category: 'finance',
      participants: 743,
      rating: 4.6,
      price: '₹799',
      status: 'upcoming',
      description: 'Deep dive into corporate finance principles and advanced financial modeling.',
      thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=225&fit=crop'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'taxation', label: 'Taxation' },
    { value: 'accounting', label: 'Accounting' },
    { value: 'audit', label: 'Audit' },
    { value: 'finance', label: 'Finance' }
  ];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         webinar.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || webinar.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'live': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Live Webinars & Workshops
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join expert-led webinars and interactive workshops to advance your CA career with the latest industry insights and practical knowledge.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search webinars or instructors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Video className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">127</p>
              <p className="text-gray-600">Total Webinars</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">12.5K+</p>
              <p className="text-gray-600">Participants</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">4.8</p>
              <p className="text-gray-600">Average Rating</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">45</p>
              <p className="text-gray-600">Expert Instructors</p>
            </CardContent>
          </Card>
        </div>

        {/* Webinars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWebinars.map((webinar) => (
            <Card key={webinar.id} className="hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={webinar.thumbnail} 
                  alt={webinar.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className={`absolute top-2 right-2 ${getStatusColor(webinar.status)}`}>
                  {webinar.status.toUpperCase()}
                </Badge>
                {webinar.status === 'completed' && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-t-lg">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                )}
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {webinar.category.toUpperCase()}
                  </Badge>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm ml-1">{webinar.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg line-clamp-2">{webinar.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {webinar.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-3">
                  <Avatar className="h-8 w-8 mr-3">
                    <AvatarImage src={webinar.instructorAvatar} />
                    <AvatarFallback>{webinar.instructor.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{webinar.instructor}</span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(webinar.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {webinar.time} • {webinar.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {webinar.participants.toLocaleString()} participants
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-600">
                    {webinar.price}
                  </span>
                  <Button 
                    className={webinar.status === 'completed' 
                      ? "bg-green-600 hover:bg-green-700" 
                      : "bg-orange-500 hover:bg-orange-600"
                    }
                  >
                    {webinar.status === 'completed' ? 'Watch Recording' : 'Register Now'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-orange-500 to-blue-600 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Want to Host a Webinar?</h2>
              <p className="text-xl mb-6 opacity-90">
                Share your expertise with thousands of CA professionals worldwide
              </p>
              <Link to="/instructor">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                  Become an Instructor
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WebinarsPage;
