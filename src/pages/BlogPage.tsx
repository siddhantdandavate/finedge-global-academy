
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Calendar, 
  Clock, 
  Eye, 
  Heart, 
  MessageCircle,
  Share2,
  BookOpen,
  TrendingUp,
  Users,
  PenTool
} from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';

const BlogPage: React.FC = () => {
  const { content } = useContent();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding the New GST Amendments 2024',
      author: 'CA Priya Sharma',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b04c?w=100&h=100&fit=crop&crop=face',
      publishDate: '2024-02-10',
      readTime: '8 min read',
      category: 'taxation',
      excerpt: 'Comprehensive analysis of the latest GST amendments and their impact on businesses across different sectors.',
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=225&fit=crop',
      views: 2840,
      likes: 156,
      comments: 23,
      featured: true
    },
    {
      id: 2,
      title: 'IFRS 17 Implementation: A Practical Guide',
      author: 'CA Michael Johnson',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      publishDate: '2024-02-08',
      readTime: '12 min read',
      category: 'accounting',
      excerpt: 'Step-by-step guide to implementing IFRS 17 for insurance contracts with real-world examples.',
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=225&fit=crop',
      views: 1920,
      likes: 89,
      comments: 15,
      featured: false
    },
    {
      id: 3,
      title: 'Digital Transformation in Audit Practices',
      author: 'CA Sarah Williams',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      publishDate: '2024-02-05',
      readTime: '10 min read',
      category: 'audit',
      excerpt: 'How technology is reshaping traditional audit practices and what CAs need to know.',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop',
      views: 3150,
      likes: 201,
      comments: 34,
      featured: false
    },
    {
      id: 4,
      title: 'Corporate Finance Trends in Emerging Markets',
      author: 'CA Rajesh Kumar',
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      publishDate: '2024-02-03',
      readTime: '15 min read',
      category: 'finance',
      excerpt: 'Analysis of corporate finance trends and opportunities in emerging markets.',
      thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=225&fit=crop',
      views: 1650,
      likes: 98,
      comments: 19,
      featured: false
    },
    {
      id: 5,
      title: 'ESG Reporting: The New Imperative',
      author: 'CA Emma Rodriguez',
      authorAvatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
      publishDate: '2024-02-01',
      readTime: '9 min read',
      category: 'reporting',
      excerpt: 'Understanding ESG reporting requirements and best practices for sustainable business.',
      thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=225&fit=crop',
      views: 2340,
      likes: 143,
      comments: 28,
      featured: false
    },
    {
      id: 6,
      title: 'Risk Management in the Digital Age',
      author: 'CA David Chen',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      publishDate: '2024-01-28',
      readTime: '11 min read',
      category: 'risk',
      excerpt: 'Modern approaches to risk management and the role of technology in risk assessment.',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop',
      views: 1890,
      likes: 112,
      comments: 21,
      featured: false
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'taxation', label: 'Taxation' },
    { value: 'accounting', label: 'Accounting' },
    { value: 'audit', label: 'Audit' },
    { value: 'finance', label: 'Finance' },
    { value: 'reporting', label: 'Reporting' },
    { value: 'risk', label: 'Risk Management' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || post.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            CA Professional Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest insights, analysis, and expert opinions on accounting, taxation, audit, and finance from leading CA professionals.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search articles, authors, or topics..."
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
              <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">247</p>
              <p className="text-gray-600">Published Articles</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">38</p>
              <p className="text-gray-600">Expert Authors</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Eye className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">1.2M+</p>
              <p className="text-gray-600">Total Views</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">89%</p>
              <p className="text-gray-600">Reader Engagement</p>
            </CardContent>
          </Card>
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <Card className="mb-8 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.thumbnail} 
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <Badge className="mb-3 bg-orange-100 text-orange-800">Featured Article</Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-4 text-lg">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={featuredPost.authorAvatar} />
                    <AvatarFallback>{featuredPost.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-900">{featuredPost.author}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.publishDate).toLocaleDateString()}
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Link to={`/blog/${featuredPost.id}`}>
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      Read Full Article
                    </Button>
                  </Link>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {featuredPost.views.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {featuredPost.likes}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {featuredPost.comments}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={post.thumbnail} 
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge 
                  variant="outline" 
                  className="absolute top-2 left-2 bg-white/90 text-xs"
                >
                  {post.category.toUpperCase()}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2 hover:text-orange-600 transition-colors">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center mb-4">
                  <Avatar className="h-8 w-8 mr-3">
                    <AvatarImage src={post.authorAvatar} />
                    <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{post.author}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString()}
                      <span className="mx-1">•</span>
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {post.views.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {post.likes}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {post.comments}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Share Your Expertise</h2>
              <p className="text-xl mb-6 opacity-90">
                Join our community of CA professionals and share your insights with thousands of readers
              </p>
              <Link to="/blogger">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <PenTool className="h-5 w-5 mr-2" />
                  Start Writing
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
