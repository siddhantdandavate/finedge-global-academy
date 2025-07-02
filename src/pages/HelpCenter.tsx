
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Search, 
  BookOpen, 
  MessageSquare, 
  Phone, 
  Mail,
  HelpCircle,
  Users,
  Video,
  FileText,
  Settings,
  CreditCard,
  Shield
} from 'lucide-react';

const HelpCenter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle, color: 'blue' },
    { id: 'getting-started', name: 'Getting Started', icon: BookOpen, color: 'green' },
    { id: 'courses', name: 'Courses & Learning', icon: Video, color: 'purple' },
    { id: 'account', name: 'Account & Profile', icon: Users, color: 'orange' },
    { id: 'billing', name: 'Billing & Payments', icon: CreditCard, color: 'yellow' },
    { id: 'technical', name: 'Technical Support', icon: Settings, color: 'red' },
    { id: 'security', name: 'Security & Privacy', icon: Shield, color: 'indigo' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'getting-started',
      question: 'How do I get started with Finedge?',
      answer: 'Welcome to Finedge! Start by creating your account, choosing your role (Student, Instructor, Content Writer, Blogger, or Admin), and exploring our course catalog. We recommend taking our "Platform Orientation" course first to familiarize yourself with all features.',
      tags: ['beginner', 'registration', 'orientation']
    },
    {
      id: 2,
      category: 'courses',
      question: 'How do I enroll in a course?',
      answer: 'To enroll in a course: 1) Browse our course catalog, 2) Click on the course you\'re interested in, 3) Review the course details and prerequisites, 4) Click "Enroll Now" and complete the payment process if required. Free courses can be accessed immediately.',
      tags: ['enrollment', 'courses', 'payment']
    },
    {
      id: 3,
      category: 'courses',
      question: 'Can I get a certificate after completing a course?',
      answer: 'Yes! You\'ll receive a digital certificate upon successful completion of any course. Certificates include your name, course title, completion date, and can be downloaded as PDF or shared on LinkedIn. Some courses also offer industry-recognized certifications.',
      tags: ['certificates', 'completion', 'linkedin']
    },
    {
      id: 4,
      category: 'account',
      question: 'How do I change my account role?',
      answer: 'To change your account role, go to Settings > Account Settings > Role Management. Note that changing roles may affect your access to certain features. Contact support if you need to upgrade to Instructor or Content Writer roles.',
      tags: ['account', 'role', 'settings']
    },
    {
      id: 5,
      category: 'billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For Indian users, we also support UPI, net banking, and digital wallets. All payments are processed securely.',
      tags: ['payment', 'billing', 'methods']
    },
    {
      id: 6,
      category: 'technical',
      question: 'Why is my video not playing?',
      answer: 'If videos aren\'t playing: 1) Check your internet connection, 2) Try refreshing the page, 3) Clear your browser cache, 4) Disable browser extensions, 5) Try a different browser. If issues persist, contact our technical support team.',
      tags: ['video', 'technical', 'troubleshooting']
    },
    {
      id: 7,
      category: 'security',
      question: 'How is my personal data protected?',
      answer: 'We take data security seriously. Your data is encrypted in transit and at rest, we follow GDPR compliance standards, conduct regular security audits, and never share your personal information with third parties without your consent.',
      tags: ['privacy', 'security', 'gdpr']
    },
    {
      id: 8,
      category: 'courses',
      question: 'How do I track my learning progress?',
      answer: 'Your learning progress is automatically tracked and displayed in your dashboard. You can view completion percentages, time spent studying, quiz scores, and achievements. Progress reports are also available for download.',
      tags: ['progress', 'tracking', 'dashboard']
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to frequently asked questions and get the help you need to succeed on Finedge
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search for help articles, FAQs, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedCategory === category.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <CardContent className="p-4 text-center">
                <category.icon className={`h-8 w-8 mx-auto mb-2 text-${category.color}-600`} />
                <p className="font-medium text-sm">{category.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-blue-600" />
                Live Chat Support
              </CardTitle>
              <CardDescription>Get instant help from our support team</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Available 24/7 for premium users, business hours for free users.
              </p>
              <Button className="w-full">Start Chat</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-600" />
                Email Support
              </CardTitle>
              <CardDescription>Send us your questions via email</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                We typically respond within 2-4 hours during business days.
              </p>
              <Button variant="outline" className="w-full">Send Email</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Video className="h-5 w-5 mr-2 text-purple-600" />
                Video Tutorials
              </CardTitle>
              <CardDescription>Watch step-by-step guides</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Comprehensive video library covering all platform features.
              </p>
              <Button variant="outline" className="w-full">Watch Tutorials</Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQs */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              {filteredFaqs.length} question(s) found
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-2">
              {filteredFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id.toString()} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-start justify-between w-full">
                      <span className="font-medium">{faq.question}</span>
                      <Badge variant="outline" className="ml-2 text-xs">
                        {categories.find(c => c.id === faq.category)?.name}
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <p className="text-gray-700 mb-3">{faq.answer}</p>
                    <div className="flex flex-wrap gap-1">
                      {faq.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No articles found matching your search.</p>
                <p className="text-sm text-gray-400 mt-2">Try different keywords or browse all categories.</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
              <p className="text-gray-600 mb-6">
                Our support team is here to help you succeed. Don't hesitate to reach out!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto">
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>support@finedge.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span>+91 1234567890</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
