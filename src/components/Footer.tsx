
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube,
  Download
} from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';

export const Footer: React.FC = () => {
  const { content } = useContent();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: 'Courses', href: '/courses' },
      { name: 'Instructors', href: '/instructors' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Podcasts', href: '/podcasts' },
      { name: 'Blog', href: '/blog' },
      { name: 'About Us', href: '/about' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'System Status', href: '/status' },
      { name: 'Course Refunds', href: '/refunds' },
      { name: 'Accessibility', href: '/accessibility' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR Compliance', href: '/gdpr' },
      { name: 'Academic Integrity', href: '/integrity' }
    ],
    business: [
      { name: 'Finedge for Business', href: '/business' },
      { name: 'Corporate Training', href: '/corporate' },
      { name: 'Become an Instructor', href: '/teach' },
      { name: 'Content Partnership', href: '/partnership' },
      { name: 'Affiliate Program', href: '/affiliate' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                {content.branding.siteName}
              </span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {content.branding.tagline}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-orange-400" />
                <span>{content.contact.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-orange-400" />
                <span>{content.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-orange-400" />
                <span>{content.contact.address}</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white hover:bg-blue-600" onClick={() => window.open(content.social.facebook, '_blank')}>
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white hover:bg-blue-400" onClick={() => window.open(content.social.twitter, '_blank')}>
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white hover:bg-blue-700" onClick={() => window.open(content.social.linkedin, '_blank')}>
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white hover:bg-pink-600" onClick={() => window.open(content.social.instagram, '_blank')}>
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white hover:bg-red-600" onClick={() => window.open(content.social.youtube, '_blank')}>
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Platform</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Business</h3>
            <ul className="space-y-3">
              {footerLinks.business.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-12 mt-12">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get the latest course updates, finance insights, and exclusive offers for CA professionals.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile App Download */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <h3 className="text-lg font-semibold mb-4 text-white">Download Our App</h3>
          <p className="text-gray-300 mb-4">
            Learn on the go with our mobile app. Available on iOS and Android.
          </p>
          <div className="flex space-x-4">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-orange-400">
              <Download className="h-4 w-4 mr-2" />
              App Store
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-orange-400">
              <Download className="h-4 w-4 mr-2" />
              Google Play
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gradient-to-r from-orange-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
              <span>© {currentYear} {content.branding.siteName}. All rights reserved.</span>
              <span className="mx-2">|</span>
              <span className="flex items-center">
                Made in 🇮🇳 India | Empowering Chartered Accountants Globally
              </span>
            </div>
            <div className="flex space-x-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href} 
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
