
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { QRCodeSVG } from 'qrcode.react';
import { 
  Download, 
  Share2, 
  Award, 
  Calendar,
  CheckCircle,
  ExternalLink,
  Linkedin,
  Twitter,
  Facebook,
  Printer,
  Mail,
  Copy,
  Globe
} from 'lucide-react';

interface CertificateSystemProps {
  studentName: string;
  courseName: string;
  instructorName: string;
  completionDate: string;
  credentialId: string;
  skills?: string[];
  courseHours?: number;
  courseLevel?: string;
  studentId?: string;
  certificateType?: 'completion' | 'achievement' | 'participation';
}

const CertificateSystem: React.FC<CertificateSystemProps> = ({
  studentName = "John Doe",
  courseName = "Advanced Financial Modeling",
  instructorName = "Dr. Sarah Johnson",
  completionDate = "January 15, 2024",
  credentialId = "FE-AFM-2024-001",
  skills = ["Financial Modeling", "DCF Analysis", "Valuation", "Excel"],
  courseHours = 12,
  courseLevel = "Advanced",
  studentId = "STU-001",
  certificateType = "completion"
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [shareMethod, setShareMethod] = useState<string | null>(null);

  const certificateUrl = `https://finedge.com/verify/${credentialId}`;
  const linkedInShareUrl = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(courseName)}&organizationName=Finedge&issueYear=${new Date().getFullYear()}&issueMonth=${new Date().getMonth() + 1}&certUrl=${encodeURIComponent(certificateUrl)}`;

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    // Simulate PDF generation
    setTimeout(() => {
      setIsGenerating(false);
      // In a real implementation, this would generate and download a PDF
      console.log('PDF downloaded');
    }, 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = (platform: string) => {
    const message = `I've successfully completed ${courseName} at Finedge! 🎓 #FinanceEducation #ProfessionalDevelopment`;
    
    const shareUrls = {
      linkedin: linkedInShareUrl,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(certificateUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(certificateUrl)}&quote=${encodeURIComponent(message)}`,
      email: `mailto:?subject=${encodeURIComponent(`${courseName} Certification`)}&body=${encodeURIComponent(`${message}\n\nVerify certificate: ${certificateUrl}`)}`
    };
    
    if (shareUrls[platform as keyof typeof shareUrls]) {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(certificateUrl);
    setShareMethod('copied');
    setTimeout(() => setShareMethod(null), 2000);
  };

  const getCertificateTitle = () => {
    switch (certificateType) {
      case 'achievement': return 'Certificate of Achievement';
      case 'participation': return 'Certificate of Participation';
      default: return 'Certificate of Completion';
    }
  };

  return (
    <div className="space-y-8">
      {/* Certificate Preview */}
      <Card className="overflow-hidden print:shadow-none" id="certificate">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 p-12 text-white relative min-h-[600px] print:min-h-screen">
          {/* Decorative Elements */}
          <div className="absolute top-8 right-8 opacity-10">
            <Award className="h-32 w-32" />
          </div>
          <div className="absolute bottom-8 left-8 opacity-10">
            <CheckCircle className="h-24 w-24" />
          </div>
          
          {/* Finedge Logo */}
          <div className="absolute top-8 left-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-green-400 rounded-lg flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-900" />
              </div>
              <div>
                <div className="text-2xl font-bold">Finedge</div>
                <div className="text-sm opacity-75">Global Finance Education</div>
              </div>
            </div>
          </div>
          
          {/* Certificate Content */}
          <div className="relative z-10 text-center space-y-8 mt-20">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold">{getCertificateTitle()}</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto"></div>
            </div>
            
            {/* Award Text */}
            <div className="space-y-6">
              <p className="text-2xl opacity-90">This is to certify that</p>
              <h2 className="text-6xl font-bold text-yellow-400">{studentName}</h2>
              <p className="text-2xl opacity-90">has successfully completed the course</p>
              <h3 className="text-4xl font-semibold">{courseName}</h3>
              <div className="flex justify-center space-x-8 text-lg opacity-80">
                <span>{courseHours} hours</span>
                <span>•</span>
                <span>{courseLevel} Level</span>
                <span>•</span>
                <span>Student ID: {studentId}</span>
              </div>
            </div>
            
            {/* Instructor & Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
              <div className="text-center">
                <div className="border-t border-white/30 pt-4 mx-12">
                  <p className="text-xl font-medium">{instructorName}</p>
                  <p className="opacity-75">Course Instructor</p>
                </div>
              </div>
              <div className="text-center">
                <div className="border-t border-white/30 pt-4 mx-12">
                  <p className="text-xl font-medium">{completionDate}</p>
                  <p className="opacity-75">Date of Completion</p>
                </div>
              </div>
            </div>
            
            {/* QR Code and Credential ID */}
            <div className="flex justify-between items-end pt-8">
              <div className="bg-white p-4 rounded-lg">
                <QRCodeSVG 
                  value={certificateUrl} 
                  size={100}
                  bgColor="#ffffff"
                  fgColor="#000000"
                />
              </div>
              <div className="text-right">
                <p className="opacity-75">Credential ID</p>
                <p className="text-xl font-mono">{credentialId}</p>
                <p className="text-sm opacity-60 mt-2">Verify at: finedge.com/verify</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Certificate Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Download & Print */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Download & Print</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={handleDownloadPDF} 
              disabled={isGenerating}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Generating PDF...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF Certificate
                </>
              )}
            </Button>
            <Button 
              onClick={handlePrint} 
              variant="outline"
              className="w-full"
            >
              <Printer className="h-4 w-4 mr-2" />
              Print Certificate
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              asChild
            >
              <a href={certificateUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Verify Certificate Online
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Share Certificate */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Share2 className="h-5 w-5" />
              <span>Share Your Achievement</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                onClick={() => handleShare('linkedin')}
                className="text-blue-600 border-blue-200 hover:bg-blue-50"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                Add to LinkedIn
              </Button>
              <Button 
                variant="outline" 
                onClick={() => handleShare('twitter')}
                className="text-blue-400 border-blue-200 hover:bg-blue-50"
              >
                <Twitter className="h-4 w-4 mr-2" />
                Tweet
              </Button>
              <Button 
                variant="outline" 
                onClick={() => handleShare('facebook')}
                className="text-blue-800 border-blue-200 hover:bg-blue-50"
              >
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </Button>
              <Button 
                variant="outline" 
                onClick={() => handleShare('email')}
                className="text-gray-600 border-gray-200 hover:bg-gray-50"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Certificate URL:</label>
              <div className="flex space-x-2">
                <Input 
                  value={certificateUrl} 
                  readOnly 
                  className="text-sm"
                />
                <Button 
                  onClick={copyToClipboard}
                  variant="outline"
                  size="sm"
                >
                  {shareMethod === 'copied' ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Skills & Course Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span>Skills Demonstrated & Course Details</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Skills */}
          <div>
            <h4 className="font-medium mb-3">Skills Mastered</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Certificate Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t">
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Certificate Holder:</p>
                <p className="font-medium">{studentName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Course Completed:</p>
                <p className="font-medium">{courseName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Course Duration:</p>
                <p className="font-medium">{courseHours} hours</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Instructor:</p>
                <p className="font-medium">{instructorName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Completion Date:</p>
                <p className="font-medium">{completionDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Credential ID:</p>
                <p className="font-medium font-mono">{credentialId}</p>
              </div>
            </div>
          </div>
          
          {/* Verification Info */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-start space-x-3">
              <Globe className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900">Global Recognition</h4>
                <p className="text-sm text-blue-800 mt-1">
                  This certificate is globally recognized and can be verified online at any time. 
                  Share it with employers, add it to your LinkedIn profile, or include it in your professional portfolio.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CertificateSystem;
