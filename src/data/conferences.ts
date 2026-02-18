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

export const conferencesData: Conference[] = [
  {
    id: 1,
    title: "Engineering Summit 2024",
    date: "March 15-17, 2024",
    location: "Austin, TX",
    description: "Annual flagship event bringing together engineering leaders and innovators for three days of presentations, workshops, and networking.",
    status: 'completed',
    attendees: 500,
    speakers: 50,
    topics: ["AI & Machine Learning", "Sustainable Engineering", "Digital Transformation", "Innovation Management"]
  },
  {
    id: 2,
    title: "Science Symposia Series - Emerging Technologies",
    date: "April 22-24, 2024",
    location: "Virtual & Austin, TX",
    description: "Exploring cutting-edge research in emerging technologies including quantum computing, biotechnology, and advanced materials.",
    status: 'upcoming',
    topics: ["Quantum Computing", "Biotechnology", "Advanced Materials", "Renewable Energy"]
  },
  {
    id: 3,
    title: "Technology Innovation Forum 2024",
    date: "June 10-12, 2024",
    location: "San Francisco, CA",
    description: "A premier forum for technology innovators to showcase breakthrough solutions and connect with potential partners.",
    status: 'upcoming',
    topics: ["FinTech", "HealthTech", "EdTech", "CleanTech"]
  },
  {
    id: 4,
    title: "Global Engineering Collaboration Summit",
    date: "September 8-10, 2024",
    location: "London, UK",
    description: "International summit focused on global engineering collaboration and cross-cultural innovation partnerships.",
    status: 'upcoming',
    topics: ["Global Innovation", "Cross-cultural Collaboration", "International Standards", "Technology Transfer"]
  }
];