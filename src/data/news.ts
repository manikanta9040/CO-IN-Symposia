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

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Engineering Summit 2024: Record Attendance",
    date: "February 15, 2024",
    summary: "Our annual Engineering Summit brought together over 500 industry leaders and innovators for three days of groundbreaking presentations and networking.",
    category: 'event',
    featured: true,
    tags: ['engineering', 'summit', 'record', 'attendance']
  },
  {
    id: 2,
    title: "New Science Symposia Series Announced",
    date: "January 20, 2024",
    summary: "CO-IN Symposia launches a new series of science symposia focused on emerging technologies and interdisciplinary research collaborations.",
    category: 'announcement',
    featured: true,
    tags: ['science', 'symposia', 'emerging', 'technologies']
  },
  {
    id: 3,
    title: "Virtual Conference Platform Enhanced",
    date: "December 10, 2023",
    summary: "We've upgraded our virtual conference platform with new interactive features and improved accessibility for global participants.",
    category: 'achievement',
    featured: false,
    tags: ['virtual', 'platform', 'enhancement', 'accessibility']
  },
  {
    id: 4,
    title: "Partnership with Leading Research Institutions",
    date: "November 28, 2023",
    summary: "CO-IN Symposia announces strategic partnerships with top research institutions to expand our conference offerings and research collaborations.",
    category: 'partnership',
    featured: true,
    tags: ['partnership', 'research', 'institutions', 'collaboration']
  },
  {
    id: 5,
    title: "Award-Winning Research Presented at Recent Conference",
    date: "October 15, 2023",
    summary: "Several groundbreaking research papers presented at our recent biotechnology conference received international recognition and awards.",
    category: 'achievement',
    featured: false,
    tags: ['awards', 'research', 'biotechnology', 'conference']
  },
  {
    id: 6,
    title: "New Online Learning Platform Launched",
    date: "September 22, 2023",
    summary: "CO-IN Symposia introduces an innovative online learning platform offering recorded sessions, webinars, and interactive workshops.",
    category: 'announcement',
    featured: false,
    tags: ['online', 'learning', 'platform', 'webinars']
  }
];