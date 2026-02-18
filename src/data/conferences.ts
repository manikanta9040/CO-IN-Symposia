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
    title: "CO-IN Global Science & Technology Summit 2026",
    date: "August 18-20, 2026",
    location: "Austin, TX",
    description: "Flagship summit connecting research leaders, board members, and emerging innovators across core science and engineering disciplines.",
    status: 'upcoming',
    attendees: 900,
    speakers: 80,
    topics: ["Applied AI in Science", "Sustainable Engineering", "Research Integrity", "Global Collaboration"]
  },
  {
    id: 2,
    title: "International Symposium on Future Education & Technology",
    date: "October 9-10, 2026",
    location: "Virtual + Austin, TX",
    description: "A focused symposium on the future of global education, digital pedagogy, and technology transfer between academia and industry.",
    status: 'upcoming',
    attendees: 650,
    speakers: 45,
    topics: ["Learning Technology", "Industry-Academia Partnerships", "Digital Curriculum", "EdTech Evaluation"]
  },
  {
    id: 3,
    title: "Advanced Materials & Molecular Systems Conference",
    date: "November 27-29, 2026",
    location: "Singapore",
    description: "Three-day conference dedicated to molecular systems, materials chemistry, and translational engineering applications.",
    status: 'upcoming',
    attendees: 500,
    speakers: 55,
    topics: ["Molecular Systems", "Catalysis", "Materials Design", "Industrial Applications"]
  },
  {
    id: 4,
    title: "Annual Board & Advisors Strategy Colloquium",
    date: "December 12, 2025",
    location: "Austin, TX",
    description: "Internal strategic colloquium where board members review outcomes, publication quality, and roadmap priorities.",
    status: 'completed',
    attendees: 120,
    speakers: 22,
    topics: ["Program Quality", "Peer Review Standards", "Operational Scale", "2026 Roadmap"]
  }
];
