export interface ContentData {
  hero: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    description: string;
    mission: string;
    whatWeDo: string[];
    commitment: string;
  };
  homeAbout: {
    title: string;
    introPrimary: string;
    introSecondary: string;
    highlights: string[];
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
  features: {
    title: string;
    subtitle: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
  contact: {
    heroTitle: string;
    heroDescription: string;
    businessHours: string[];
    mapEmbedUrl: string;
    mapNote: string;
    faq: Array<{
      question: string;
      answer: string;
    }>;
  };
  footer: {
    address: {
      company: string;
      street: string;
      city: string;
    };
    contact: {
      email: string;
      phone: string;
    };
    copyright: string;
  };
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceDetail {
  id: number;
  title: string;
  description: string;
  details?: string[];
}

export interface Professor {
  id: number;
  name: string;
  title: string;
  affiliation: string;
  role: string;
  bio: string;
  email?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  content?: string;
  category: 'announcement' | 'event' | 'achievement' | 'partnership';
  featured: boolean;
  image?: string;
  tags?: string[];
}

export interface Conference {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  attendees?: number;
  speakers?: number;
  topics?: string[];
}

export interface Report {
  id: number;
  title: string;
  description: string;
  downloadLink: string;
  date: string;
  category: string;
}

export interface SiteData {
  content: ContentData;
  services: Service[];
  detailedServices: ServiceDetail[];
  professors: Professor[];
  news: NewsItem[];
  conferences: Conference[];
  reports: Report[];
}
