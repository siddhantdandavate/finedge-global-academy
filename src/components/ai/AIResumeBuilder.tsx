
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Download, 
  Eye, 
  Wand2, 
  User, 
  Briefcase, 
  GraduationCap,
  Award,
  Plus,
  X,
  Lightbulb
} from 'lucide-react';

const AIResumeBuilder: React.FC = () => {
  const [activeSection, setActiveSection] = useState('personal');
  const [resumeData, setResumeData] = useState({
    personal: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      linkedIn: '',
      summary: ''
    },
    experience: [],
    education: [],
    skills: [],
    certifications: [],
    courses: []
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const sections = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'courses', label: 'Courses', icon: FileText }
  ];

  const handleAIEnhance = async (section: string, content: string) => {
    setIsGenerating(true);
    // Simulate AI enhancement
    setTimeout(() => {
      setIsGenerating(false);
      // AI enhancement logic would go here
    }, 2000);
  };

  const generateResume = () => {
    // Resume generation logic
    console.log('Generating resume with data:', resumeData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Resume Builder</h1>
          <p className="text-gray-600">Create a professional resume tailored to your finance career</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Resume Sections</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {sections.map((section) => (
                  <Button
                    key={section.id}
                    variant={activeSection === section.id ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveSection(section.id)}
                  >
                    <section.icon className="h-4 w-4 mr-2" />
                    {section.label}
                  </Button>
                ))}
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Wand2 className="h-5 w-5 mr-2" />
                  AI Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Lightbulb className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="font-medium text-blue-800">Tip</span>
                    </div>
                    <p className="text-sm text-blue-700">
                      Highlight your cross-border finance expertise to stand out to global employers.
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleAIEnhance(activeSection, '')}
                    disabled={isGenerating}
                  >
                    {isGenerating ? 'Enhancing...' : 'AI Enhance Section'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  {sections.find(s => s.id === activeSection)?.label}
                </CardTitle>
                <CardDescription>
                  Fill in your information and let AI enhance it
                </CardDescription>
              </CardHeader>
              <CardContent>
                {activeSection === 'personal' && (
                  <PersonalInfoForm 
                    data={resumeData.personal} 
                    onChange={(data) => setResumeData(prev => ({...prev, personal: data}))}
                  />
                )}
                {activeSection === 'experience' && (
                  <ExperienceForm 
                    data={resumeData.experience} 
                    onChange={(data) => setResumeData(prev => ({...prev, experience: data}))}
                  />
                )}
                {activeSection === 'education' && (
                  <EducationForm 
                    data={resumeData.education} 
                    onChange={(data) => setResumeData(prev => ({...prev, education: data}))}
                  />
                )}
                {activeSection === 'skills' && (
                  <SkillsForm 
                    data={resumeData.skills} 
                    onChange={(data) => setResumeData(prev => ({...prev, skills: data}))}
                  />
                )}
                {activeSection === 'courses' && (
                  <CoursesForm 
                    data={resumeData.courses} 
                    onChange={(data) => setResumeData(prev => ({...prev, courses: data}))}
                  />
                )}
              </CardContent>
            </Card>
          </div>

          {/* Preview */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Resume Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white border rounded-lg p-4 mb-4 min-h-96">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold">{resumeData.personal.fullName || 'Your Name'}</h3>
                    <p className="text-sm text-gray-600">{resumeData.personal.email}</p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm border-b">Professional Summary</h4>
                      <p className="text-xs mt-1">{resumeData.personal.summary || 'Your professional summary will appear here...'}</p>
                    </div>
                    {resumeData.experience.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-sm border-b">Experience</h4>
                        <div className="text-xs mt-1 space-y-2">
                          {resumeData.experience.slice(0, 2).map((exp, idx) => (
                            <div key={idx}>
                              <p className="font-medium">{exp.title}</p>
                              <p className="text-gray-600">{exp.company}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Button className="w-full" onClick={generateResume}>
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Eye className="h-4 w-4 mr-2" />
                    Full Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

// Form Components
const PersonalInfoForm: React.FC<{ data: any; onChange: (data: any) => void }> = ({ data, onChange }) => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <Input 
          id="fullName" 
          value={data.fullName} 
          onChange={(e) => onChange({...data, fullName: e.target.value})}
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          type="email" 
          value={data.email} 
          onChange={(e) => onChange({...data, email: e.target.value})}
        />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input 
          id="phone" 
          value={data.phone} 
          onChange={(e) => onChange({...data, phone: e.target.value})}
        />
      </div>
      <div>
        <Label htmlFor="location">Location</Label>
        <Input 
          id="location" 
          value={data.location} 
          onChange={(e) => onChange({...data, location: e.target.value})}
        />
      </div>
    </div>
    <div>
      <Label htmlFor="summary">Professional Summary</Label>
      <Textarea 
        id="summary" 
        value={data.summary} 
        onChange={(e) => onChange({...data, summary: e.target.value})}
        rows={4}
        placeholder="Write a compelling summary of your finance expertise..."
      />
    </div>
  </div>
);

const ExperienceForm: React.FC<{ data: any[]; onChange: (data: any[]) => void }> = ({ data, onChange }) => (
  <div className="space-y-4">
    {data.map((exp, index) => (
      <Card key={index}>
        <CardContent className="p-4">
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <h4 className="font-medium">Experience {index + 1}</h4>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onChange(data.filter((_, i) => i !== index))}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Input 
                placeholder="Job Title" 
                value={exp.title || ''} 
                onChange={(e) => {
                  const newData = [...data];
                  newData[index] = {...newData[index], title: e.target.value};
                  onChange(newData);
                }}
              />
              <Input 
                placeholder="Company" 
                value={exp.company || ''} 
                onChange={(e) => {
                  const newData = [...data];
                  newData[index] = {...newData[index], company: e.target.value};
                  onChange(newData);
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
    <Button 
      variant="outline" 
      onClick={() => onChange([...data, { title: '', company: '', duration: '', description: '' }])}
      className="w-full"
    >
      <Plus className="h-4 w-4 mr-2" />
      Add Experience
    </Button>
  </div>
);

const EducationForm: React.FC<{ data: any[]; onChange: (data: any[]) => void }> = ({ data, onChange }) => (
  <div className="space-y-4">
    <p className="text-sm text-gray-600">Add your educational background</p>
    <Button 
      variant="outline" 
      onClick={() => onChange([...data, { degree: '', institution: '', year: '' }])}
      className="w-full"
    >
      <Plus className="h-4 w-4 mr-2" />
      Add Education
    </Button>
  </div>
);

const SkillsForm: React.FC<{ data: any[]; onChange: (data: any[]) => void }> = ({ data, onChange }) => (
  <div className="space-y-4">
    <p className="text-sm text-gray-600">Add your professional skills</p>
    <div className="flex flex-wrap gap-2">
      {data.map((skill, index) => (
        <Badge key={index} variant="secondary" className="cursor-pointer">
          {skill}
          <X 
            className="h-3 w-3 ml-1" 
            onClick={() => onChange(data.filter((_, i) => i !== index))}
          />
        </Badge>
      ))}
    </div>
    <Button 
      variant="outline" 
      onClick={() => onChange([...data, 'New Skill'])}
      className="w-full"
    >
      <Plus className="h-4 w-4 mr-2" />
      Add Skill
    </Button>
  </div>
);

const CoursesForm: React.FC<{ data: any[]; onChange: (data: any[]) => void }> = ({ data, onChange }) => (
  <div className="space-y-4">
    <p className="text-sm text-gray-600">Include your completed courses from Finedge</p>
    <Button 
      variant="outline" 
      onClick={() => onChange([...data, { title: '', completion: '', certificate: '' }])}
      className="w-full"
    >
      <Plus className="h-4 w-4 mr-2" />
      Add Course
    </Button>
  </div>
);

export default AIResumeBuilder;
