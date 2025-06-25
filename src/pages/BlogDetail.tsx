
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  Clock, 
  Eye, 
  Share2, 
  BookOpen,
  ArrowLeft,
  Heart,
  MessageSquare,
  Tag,
  ChevronRight
} from 'lucide-react';

const BlogDetail: React.FC = () => {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(24);

  // Mock blog post data - in real app, this would be fetched based on ID
  const blogPost = {
    id: '1',
    title: 'Understanding IFRS 17: Implementation Challenges and Solutions',
    content: `
      <h2>Introduction to IFRS 17</h2>
      <p>The International Financial Reporting Standard 17 (IFRS 17) represents one of the most significant changes to insurance accounting in decades. This comprehensive standard replaces IFRS 4 and introduces a new framework for measuring and recognizing insurance contracts.</p>
      
      <h2>Key Implementation Challenges</h2>
      <p>Organizations worldwide are facing numerous challenges in implementing IFRS 17:</p>
      
      <h3>1. Data and Systems Requirements</h3>
      <p>The standard requires granular data that many insurers haven't previously collected or maintained. This includes detailed cash flow projections, risk adjustment calculations, and contractual service margin tracking.</p>
      
      <h3>2. Actuarial Model Updates</h3>
      <p>Traditional actuarial models need significant modifications to accommodate the new measurement approaches under IFRS 17. This includes building new models for the Building Block Approach (BBA) and Premium Allocation Approach (PAA).</p>
      
      <h3>3. Process and Control Changes</h3>
      <p>The standard requires new processes for contract grouping, cash flow estimation, and discount rate determination. Organizations must establish robust controls to ensure accuracy and compliance.</p>
      
      <h2>Practical Solutions and Best Practices</h2>
      
      <h3>Phased Implementation Approach</h3>
      <p>Rather than attempting a complete overhaul simultaneously, successful organizations are adopting a phased approach:</p>
      <ul>
        <li>Phase 1: Foundation building (data, systems, governance)</li>
        <li>Phase 2: Model development and testing</li>
        <li>Phase 3: Process integration and parallel running</li>
        <li>Phase 4: Full implementation and optimization</li>
      </ul>
      
      <h3>Technology Solutions</h3>
      <p>Modern actuarial software platforms are essential for IFRS 17 compliance. Key features to look for include:</p>
      <ul>
        <li>Automated cash flow modeling</li>
        <li>Real-time discount curve integration</li>
        <li>Comprehensive audit trails</li>
        <li>Scalable calculation engines</li>
      </ul>
      
      <h2>Looking Forward</h2>
      <p>While IFRS 17 implementation is complex, it ultimately provides stakeholders with more transparent and comparable information about insurance contracts. Organizations that invest in robust implementation frameworks will be better positioned for long-term success.</p>
    `,
    author: {
      name: 'Emma Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      role: 'Content Writer',
      bio: 'Emma is a seasoned financial reporting expert with over 10 years of experience in international accounting standards implementation.'
    },
    publishedDate: '2024-01-15',
    readTime: '8 min read',
    views: 2847,
    category: 'Accounting Standards',
    tags: ['IFRS', 'Insurance', 'Compliance', 'Financial Reporting'],
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&h=600&fit=crop'
  };

  const relatedPosts = [
    {
      id: '2',
      title: 'IFRS 9 vs IFRS 17: Key Differences for Insurers',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop'
    },
    {
      id: '3',
      title: 'Building Effective IFRS 17 Implementation Teams',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop'
    }
  ];

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blogPost.title,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/blog" className="hover:text-blue-600">Blog</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900">{blogPost.category}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article>
              {/* Header */}
              <div className="mb-8">
                <img 
                  src={blogPost.image} 
                  alt={blogPost.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
                />
                
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge variant="secondary">{blogPost.category}</Badge>
                  {blogPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {blogPost.title}
                </h1>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={blogPost.author.avatar} />
                      <AvatarFallback>{blogPost.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900">{blogPost.author.name}</p>
                      <p className="text-sm text-gray-600">{blogPost.author.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(blogPost.publishedDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPost.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{blogPost.views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4 mb-8">
                  <Button
                    variant={liked ? "default" : "outline"}
                    size="sm"
                    onClick={handleLike}
                    className={liked ? "bg-red-600 hover:bg-red-700" : ""}
                  >
                    <Heart className={`h-4 w-4 mr-2 ${liked ? 'fill-current' : ''}`} />
                    {likes}
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleShare}>
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Comment
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />

              <Separator className="my-8" />

              {/* Author Bio */}
              <Card>
                <CardHeader>
                  <CardTitle>About the Author</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={blogPost.author.avatar} />
                      <AvatarFallback className="text-lg">{blogPost.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{blogPost.author.name}</h3>
                      <p className="text-gray-600 mb-3">{blogPost.author.bio}</p>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Table of Contents */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Table of Contents</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2">
                    <a href="#introduction" className="block text-sm text-blue-600 hover:underline">
                      Introduction to IFRS 17
                    </a>
                    <a href="#challenges" className="block text-sm text-blue-600 hover:underline">
                      Key Implementation Challenges
                    </a>
                    <a href="#solutions" className="block text-sm text-blue-600 hover:underline">
                      Practical Solutions
                    </a>
                    <a href="#forward" className="block text-sm text-blue-600 hover:underline">
                      Looking Forward
                    </a>
                  </nav>
                </CardContent>
              </Card>

              {/* Related Posts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Articles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedPosts.map((post) => (
                    <Link key={post.id} to={`/blog/${post.id}`} className="block group">
                      <div className="flex space-x-3">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-medium line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-600 mt-1">{post.readTime}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Subscribe to Updates</CardTitle>
                  <CardDescription>
                    Get the latest finance insights delivered to your inbox
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12">
          <Link to="/blog">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
