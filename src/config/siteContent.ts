
export interface SiteContent {
  branding: {
    siteName: string;
    tagline: string;
    logo: {
      primary: string;
      alt: string;
      favicon: string;
    };
  };
  navigation: {
    main: Array<{
      label: string;
      href: string;
      isExternal?: boolean;
    }>;
    footer: Array<{
      title: string;
      links: Array<{
        label: string;
        href: string;
        isExternal?: boolean;
      }>;
    }>;
  };
  homepage: {
    hero: {
      title: string;
      subtitle: string;
      primaryCta: string;
      secondaryCta: string;
      backgroundImage?: string;
    };
    features: Array<{
      title: string;
      description: string;
      icon: string;
      link?: string;
    }>;
    testimonials: Array<{
      name: string;
      role: string;
      content: string;
      avatar?: string;
      rating: number;
    }>;
    stats: Array<{
      label: string;
      value: string;
      suffix?: string;
    }>;
  };
  social: {
    youtube: string;
    linkedin: string;
    twitter: string;
    facebook: string;
    instagram: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
}

export const defaultSiteContent: SiteContent = {
  branding: {
    siteName: "Finedge",
    tagline: "Made in 🇮🇳 India | Empowering Chartered Accountants Globally",
    logo: {
      primary: "/logo.svg",
      alt: "Finedge Logo",
      favicon: "/favicon.ico"
    }
  },
  navigation: {
    main: [
      { label: "Home", href: "/" },
      { label: "Courses", href: "/courses" },
      { label: "Instructors", href: "/instructors" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ],
    footer: [
      {
        title: "Learn",
        links: [
          { label: "Courses", href: "/courses" },
          { label: "Free Videos", href: "/courses?filter=free" },
          { label: "Webinars", href: "/webinars" },
          { label: "Blog", href: "/blog" }
        ]
      },
      {
        title: "Community",
        links: [
          { label: "Instructors", href: "/instructors" },
          { label: "Students", href: "/community" },
          { label: "Success Stories", href: "/testimonials" },
          { label: "Events", href: "/events" }
        ]
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Contact", href: "/contact" },
          { label: "Careers", href: "/careers" },
          { label: "Privacy Policy", href: "/privacy" }
        ]
      }
    ]
  },
  homepage: {
    hero: {
      title: "Master Global Finance with Finedge",
      subtitle: "Empowering Indian Chartered Accountants with international expertise, cross-border certifications, and AI-powered learning",
      primaryCta: "Explore Courses",
      secondaryCta: "Start Free Trial"
    },
    features: [
      {
        title: "Global Expertise",
        description: "Learn international practices from India's perspective",
        icon: "Globe"
      },
      {
        title: "Certified Learning",
        description: "Industry-recognized certificates for Indian CAs",
        icon: "Award"
      },
      {
        title: "AI-Powered Support",
        description: "24/7 intelligent tutoring in multiple Indian languages",
        icon: "Bot"
      },
      {
        title: "Career Growth",
        description: "Advance your CA career globally from India",
        icon: "TrendingUp"
      }
    ],
    testimonials: [
      {
        name: "Priya Sharma",
        role: "Senior CA, Mumbai",
        content: "Finedge transformed my understanding of international taxation. The practical approach and expert guidance made complex concepts crystal clear.",
        rating: 5
      },
      {
        name: "Rajesh Kumar",
        role: "CA Partner, Delhi",
        content: "The cross-border certification program opened up new opportunities for my practice. Highly recommend for any CA looking to expand globally.",
        rating: 5
      }
    ],
    stats: [
      { label: "Indian CAs Trained", value: "15,000", suffix: "+" },
      { label: "Expert Courses", value: "250", suffix: "+" },
      { label: "Countries Covered", value: "25", suffix: "" },
      { label: "Success Rate", value: "95", suffix: "%" }
    ]
  },
  social: {
    youtube: "https://youtube.com/@finedge",
    linkedin: "https://linkedin.com/company/finedge",
    twitter: "https://twitter.com/finedge",
    facebook: "https://facebook.com/finedge",
    instagram: "https://instagram.com/finedge"
  },
  contact: {
    email: "contact@finedge.com",
    phone: "+91-11-4567-8900",
    address: "New Delhi, India"
  }
};
