
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Star, 
  Users, 
  BookOpen, 
  Award,
  Linkedin,
  Twitter,
  Globe
} from 'lucide-react';

const InstructorsPage: React.FC = () => {
  const instructors = [
    {
      id: '1',
      name: 'CA Anuj Mehra',
      title: 'Senior Investment Banker',
      company: 'ICICI Bank',
      bio: 'Former VP at ICICI Bank with 15+ years in investment banking. Expert in M&A, capital markets, and financial modeling for Indian markets.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 4.9,
      students: 12847,
      courses: 8,
      specialties: ['Investment Banking', 'Financial Modeling', 'GST Compliance'],
      linkedin: 'https://linkedin.com/in/anujmehra',
      twitter: 'https://twitter.com/anujmehra',
      website: 'https://anujmehra.com'
    },
    {
      id: '2',
      name: 'CA Shalini Rao',
      title: 'Quantitative Analyst',
      company: 'Kotak Mahindra Bank',
      bio: 'Quantitative analyst with expertise in risk management, derivatives pricing, and algorithmic trading strategies for Indian financial markets.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 4.8,
      students: 9563,
      courses: 6,
      specialties: ['Risk Management', 'Derivatives', 'Algorithmic Trading'],
      linkedin: 'https://linkedin.com/in/shalinirao',
      twitter: null,
      website: null
    },
    {
      id: '3',
      name: 'CA Vikram Shah',
      title: 'Portfolio Manager',
      company: 'Axis Mutual Fund',
      bio: 'Portfolio manager specializing in fixed income and alternative investments with 12 years of experience in Indian capital markets.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 4.7,
      students: 7234,
      courses: 5,
      specialties: ['Portfolio Management', 'Fixed Income', 'Alternative Investments'],
      linkedin: 'https://linkedin.com/in/vikramshah',
      twitter: 'https://twitter.com/vikramshah',
      website: 'https://vikramshah.com'
    },
    {
      id: '4',
      name: 'CA Neha Kulkarni',
      title: 'Tax & Compliance Expert',
      company: 'Deloitte India',
      bio: 'Former tax consultant at Deloitte India, specializing in GST, international taxation, and compliance for multinational corporations.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 4.6,
      students: 5678,
      courses: 4,
      specialties: ['GST Mastery', 'International Taxation', 'Tax Compliance'],
      linkedin: 'https://linkedin.com/in/nehakulkarni',
      twitter: 'https://twitter.com/nehakulkarni',
      website: null
    },
    {
      id: '5',
      name: 'CA Rajesh Gupta',
      title: 'Corporate Finance Director',
      company: 'Tata Consultancy Services',
      bio: 'Corporate finance director with extensive experience in capital budgeting, valuation, and strategic planning for Indian enterprises.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 4.5,
      students: 4321,
      courses: 3,
      specialties: ['Corporate Finance', 'Valuation', 'Strategic Planning'],
      linkedin: 'https://linkedin.com/in/rajeshgupta',
      twitter: null,
      website: 'https://rajeshgupta.com'
    },
    {
      id: '6',
      name: 'CA Priya Sharma',
      title: 'Audit & Assurance Specialist',
      company: 'EY India',
      bio: 'Professional auditor with 18+ years experience in statutory audits, internal audits, and assurance services for Indian companies.',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
      rating: 4.8,
      students: 3456,
      courses: 7,
      specialties: ['Statutory Audit', 'Internal Audit', 'Assurance Services'],
      linkedin: 'https://linkedin.com/in/priyasharma',
      twitter: 'https://twitter.com/priyasharma',
      website: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Expert CA Instructors</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from India's top Chartered Accountants with decades of experience at leading financial institutions
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">25+</p>
              <p className="text-sm text-gray-600">Expert CA Instructors</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">50K+</p>
              <p className="text-sm text-gray-600">Students Taught</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-6 text-center">
              <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">100+</p>
              <p className="text-sm text-gray-600">Courses Created</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">4.7★</p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </CardContent>
          </Card>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <Card key={instructor.id} className="overflow-hidden hover:shadow-lg transition-shadow border-t-4 border-t-orange-400">
              <CardHeader className="text-center bg-gradient-to-br from-orange-50 to-blue-50">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-white shadow-lg">
                  <AvatarImage src={instructor.avatar} alt={instructor.name} />
                  <AvatarFallback className="bg-gradient-to-br from-orange-400 to-blue-500 text-white">
                    {instructor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl text-gray-800">{instructor.name}</CardTitle>
                <CardDescription className="text-center">
                  <p className="font-medium text-gray-700">{instructor.title}</p>
                  <p className="text-sm text-blue-600">{instructor.company}</p>
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 text-center">
                  {instructor.bio}
                </p>
                
                {/* Specialties */}
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {instructor.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-gradient-to-r from-orange-100 to-blue-100 text-gray-700">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-bold">{instructor.rating}</span>
                    </div>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-4 w-4 text-blue-500 mr-1" />
                      <span className="text-sm font-bold">{instructor.students.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-gray-500">Students</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <BookOpen className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm font-bold">{instructor.courses}</span>
                    </div>
                    <p className="text-xs text-gray-500">Courses</p>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-3 pt-4 border-t border-gray-100">
                  {instructor.linkedin && (
                    <a 
                      href={instructor.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {instructor.twitter && (
                    <a 
                      href={instructor.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {instructor.website && (
                    <a 
                      href={instructor.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorsPage;
