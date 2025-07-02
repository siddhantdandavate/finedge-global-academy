
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Lock, Users, FileText, Globe } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              Last updated: January 15, 2024
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Finedge, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                learning management platform and related services.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-6 w-6 mr-2 text-blue-600" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Name, email address, and contact information</li>
                  <li>• Professional credentials and qualifications</li>
                  <li>• Payment and billing information</li>
                  <li>• Profile photos and biographical information</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Usage Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Course enrollment and completion data</li>
                  <li>• Learning progress and performance metrics</li>
                  <li>• Platform usage patterns and preferences</li>
                  <li>• Device information and IP addresses</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Content Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Course materials, assignments, and submissions</li>
                  <li>• Comments, reviews, and forum posts</li>
                  <li>• Messages and communications within the platform</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-6 w-6 mr-2 text-green-600" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Service Provision</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Deliver courses and learning content</li>
                    <li>• Track progress and issue certificates</li>
                    <li>• Process payments and subscriptions</li>
                    <li>• Provide customer support</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Platform Improvement</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Analyze usage patterns and trends</li>
                    <li>• Improve course recommendations</li>
                    <li>• Enhance user experience</li>
                    <li>• Develop new features</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="h-6 w-6 mr-2 text-red-600" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Technical Safeguards</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• SSL/TLS encryption</li>
                    <li>• Secure data centers</li>
                    <li>• Regular security audits</li>
                    <li>• Access controls and monitoring</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Administrative Safeguards</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Employee background checks</li>
                    <li>• Privacy training programs</li>
                    <li>• Data handling policies</li>
                    <li>• Incident response procedures</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-6 w-6 mr-2 text-purple-600" />
                Your Rights and Choices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">You have the following rights regarding your personal information:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Access and Control</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Access your personal data</li>
                    <li>• Update or correct information</li>
                    <li>• Download your data</li>
                    <li>• Delete your account</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Communication Preferences</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Opt-out of marketing emails</li>
                    <li>• Control notification settings</li>
                    <li>• Manage cookie preferences</li>
                    <li>• Limit data processing</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* International Compliance */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-6 w-6 mr-2 text-orange-600" />
                International Compliance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">GDPR Compliance (EU)</h4>
                  <p className="text-sm text-gray-700">
                    We comply with the General Data Protection Regulation for users in the European Union, 
                    providing enhanced rights and protections for personal data.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">CCPA Compliance (California)</h4>
                  <p className="text-sm text-gray-700">
                    We comply with the California Consumer Privacy Act, providing California residents 
                    with specific rights regarding their personal information.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@finedge.com</p>
                  <p><strong>Address:</strong> Finedge Learning Solutions, 123 Education Street, Learning City, LC 12345</p>
                  <p><strong>Phone:</strong> +91 1234567890</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
