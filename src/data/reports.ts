export interface Report {
  id: number;
  title: string;
  description: string;
  downloadLink: string;
  date: string;
  category: string;
}

export const reportsData: Report[] = [
  {
    id: 1,
    title: "Engineering Summit 2024 - Final Report",
    description: "Comprehensive report covering key presentations, networking outcomes, and future directions from our flagship engineering event.",
    downloadLink: "#",
    date: "March 2024",
    category: "Conference Reports"
  },
  {
    id: 2,
    title: "Science Symposia Impact Assessment",
    description: "Analysis of research collaborations and scientific advancements resulting from our science symposia series.",
    downloadLink: "#",
    date: "February 2024",
    category: "Impact Studies"
  },
  {
    id: 3,
    title: "Annual Conference Statistics 2023",
    description: "Detailed statistics and metrics from all conferences organized by CO-IN Symposia in 2023.",
    downloadLink: "#",
    date: "January 2024",
    category: "Statistics"
  },
  {
    id: 4,
    title: "Virtual Conference Technology Report",
    description: "Technical analysis and recommendations for virtual conference platforms and hybrid event management.",
    downloadLink: "#",
    date: "December 2023",
    category: "Technical Reports"
  },
  {
    id: 5,
    title: "Participant Satisfaction Survey Results",
    description: "Comprehensive survey results from conference participants, including feedback and improvement recommendations.",
    downloadLink: "#",
    date: "November 2023",
    category: "Survey Reports"
  },
  {
    id: 6,
    title: "Sustainability in Academic Conferences",
    description: "Study on implementing sustainable practices in academic conference organization and management.",
    downloadLink: "#",
    date: "October 2023",
    category: "Research Reports"
  }
];