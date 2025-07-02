
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { 
  Play, 
  Pause, 
  Download, 
  Heart, 
  Share2, 
  Search,
  Mic,
  Clock,
  TrendingUp,
  Headphones,
  Star
} from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';

const PodcastsPage: React.FC = () => {
  const { content } = useContent();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);

  const podcasts = [
    {
      id: 1,
      title: 'The Future of Indian Taxation',
      host: 'CA Priya Sharma',
      hostAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b04c?w=100&h=100&fit=crop&crop=face',
      episode: 'Episode 47',
      duration: '45:30',
      publishDate: '2024-02-10',
      category: 'taxation',
      description: 'Exploring upcoming changes in Indian tax policy and their impact on businesses and individuals.',
      thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&h=300&fit=crop',
      plays: 12500,
      likes: 892,
      rating: 4.8,
      audioUrl: 'https://example.com/podcast1.mp3'
    },
    {
      id: 2,
      title: 'Mastering Financial Reporting Standards',
      host: 'CA Michael Johnson',
      hostAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      episode: 'Episode 23',
      duration: '38:45',
      publishDate: '2024-02-08',
      category: 'accounting',
      description: 'Deep dive into the latest financial reporting standards and best practices for CA professionals.',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop',
      plays: 8750,
      likes: 654,
      rating: 4.9,
      audioUrl: 'https://example.com/podcast2.mp3'
    },
    {
      id: 3,
      title: 'Audit Technology Revolution',
      host: 'CA Sarah Williams',
      hostAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      episode: 'Episode 15',
      duration: '52:15',
      publishDate: '2024-02-05',
      category: 'audit',
      description: 'How AI and blockchain are transforming the audit profession and what CAs need to know.',
      thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop',
      plays: 15200,
      likes: 1247,
      rating: 4.7,
      audioUrl: 'https://example.com/podcast3.mp3'
    },
    {
      id: 4,
      title: 'Corporate Finance Insights',
      host: 'CA Rajesh Kumar',
      hostAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      episode: 'Episode 31',
      duration: '41:20',
      publishDate: '2024-02-03',
      category: 'finance',
      description: 'Latest trends in corporate finance and investment strategies for modern businesses.',
      thumbnail: 'https://images.unsplash.com/photo-1590479773265-7464e5d48113?w=300&h=300&fit=crop',
      plays: 9850,
      likes: 723,
      rating: 4.6,
      audioUrl: 'https://example.com/podcast4.mp3'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'taxation', label: 'Taxation' },
    { value: 'accounting', label: 'Accounting' },
    { value: 'audit', label: 'Audit' },
    { value: 'finance', label: 'Finance' }
  ];

  const filteredPodcasts = podcasts.filter(podcast => {
    const matchesSearch = podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         podcast.host.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || podcast.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const togglePlay = (podcastId: number) => {
    setCurrentlyPlaying(currentlyPlaying === podcastId ? null : podcastId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            CA Professional Podcasts
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and expert discussions in the world of Chartered Accountancy through our curated podcast collection.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search podcasts or hosts..."
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
              <Mic className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">156</p>
              <p className="text-gray-600">Total Episodes</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Headphones className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">2.4M+</p>
              <p className="text-gray-600">Total Plays</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">4.7</p>
              <p className="text-gray-600">Average Rating</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">28</p>
              <p className="text-gray-600">Expert Hosts</p>
            </CardContent>
          </Card>
        </div>

        {/* Featured Podcast */}
        <Card className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img 
                src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=200&h=200&fit=crop"
                alt="Featured Podcast"
                className="w-32 h-32 rounded-lg object-cover"
              />
              <div className="flex-1 text-center md:text-left">
                <Badge className="bg-white/20 text-white mb-2">Featured Episode</Badge>
                <h3 className="text-2xl font-bold mb-2">The Future of Indian Taxation</h3>
                <p className="text-blue-100 mb-4">
                  Join CA Priya Sharma as she explores the upcoming changes in Indian tax policy and their far-reaching impact on businesses.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-blue-600"
                    onClick={() => togglePlay(1)}
                  >
                    {currentlyPlaying === 1 ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                    {currentlyPlaying === 1 ? 'Pause' : 'Play Now'}
                  </Button>
                  <span className="text-blue-100">45:30 • 12.5K plays</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Podcasts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPodcasts.map((podcast) => (
            <Card key={podcast.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="relative flex-shrink-0">
                    <img 
                      src={podcast.thumbnail} 
                      alt={podcast.title}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <button
                      onClick={() => togglePlay(podcast.id)}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-200"
                    >
                      {currentlyPlaying === podcast.id ? 
                        <Pause className="h-6 w-6 text-white" /> : 
                        <Play className="h-6 w-6 text-white" />
                      }
                    </button>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        {podcast.category.toUpperCase()}
                      </Badge>
                      <span className="text-sm text-gray-500">{podcast.episode}</span>
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-1 line-clamp-2">
                      {podcast.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={podcast.hostAvatar} />
                        <AvatarFallback>{podcast.host.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-600">{podcast.host}</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {podcast.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {podcast.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Headphones className="h-4 w-4" />
                          {podcast.plays.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          {podcast.rating}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Start Your Own Podcast</h2>
              <p className="text-xl mb-6 opacity-90">
                Share your knowledge and build your personal brand in the CA community
              </p>
              <Link to="/instructor">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                  <Mic className="h-5 w-5 mr-2" />
                  Become a Host
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PodcastsPage;
