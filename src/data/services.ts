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
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Engineering Summits",
    description: "Unleash innovation and connect with industry leaders at our Engineering Summit.",
    icon: "🎓"
  },
  {
    id: 2,
    title: "Science Symposia",
    description: "Uncover groundbreaking research and collaborate with scientific pioneers. Ignite scientific discovery!",
    icon: "🔬"
  },
  {
    id: 3,
    title: "Technology Conferences",
    description: "Experience the future of technology. Network, learn, and innovate at our conference.",
    icon: "💻"
  },
  {
    id: 4,
    title: "Innovation Forums",
    description: "Fuel your innovation. Transform your future. Join the ultimate platform for groundbreaking ideas.",
    icon: "💡"
  }
];

export const detailedServicesData: ServiceDetail[] = [
  {
    id: 1,
    title: "Abstract Management",
    description: "Online Submission Platforms: A user-friendly system for researchers to submit abstracts, papers, or posters for peer review. Peer Review Process: Coordination of the review process, where submissions are evaluated by a panel of experts for quality and relevance. Notifications and Revisions: Communicating acceptance or rejection of abstracts and managing revisions or edits as needed."
  },
  {
    id: 2,
    title: "Program Development and Scheduling",
    description: "Detailed program development and scheduling services for conferences."
  },
  {
    id: 3,
    title: "Proceedings and Publications",
    description: "Professional proceedings and publication management services."
  },
  {
    id: 4,
    title: "Technical and Logistical Support",
    description: "Comprehensive technical and logistical support for events."
  },
  {
    id: 5,
    title: "Virtual and Hybrid Conference Support",
    description: "Full support for virtual and hybrid conference formats."
  },
  {
    id: 6,
    title: "Networking and Collaboration Opportunities",
    description: "Facilitating networking and collaboration among participants."
  },
  {
    id: 7,
    title: "Sponsorship and Exhibition Management",
    description: "Managing sponsorships and exhibitions for conferences."
  },
  {
    id: 8,
    title: "Registration and Participant Management",
    description: "Streamlined registration and participant management systems."
  },
  {
    id: 9,
    title: "Accreditation and Certifications",
    description: "Accreditation and certification services for conferences."
  },
  {
    id: 10,
    title: "Marketing and Promotion",
    description: "Marketing and promotional services to attract attendees."
  },
  {
    id: 11,
    title: "Post-Conference Services",
    description: "Post-conference support and follow-up services."
  }
];