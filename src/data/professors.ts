export interface Professor {
  id: number;
  name: string;
  title: string;
  institution: string;
  department: string;
  expertise: string[];
  bio: string;
  image?: string;
  publications?: number;
  conferences?: number;
}

export const professorsData: Professor[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Professor of Computer Science",
    institution: "Stanford University",
    department: "Computer Science",
    expertise: ["Artificial Intelligence", "Machine Learning", "Computer Vision"],
    bio: "Dr. Chen is a leading researcher in AI and machine learning with over 15 years of experience. She has published more than 200 papers and holds several patents in computer vision technology.",
    publications: 200,
    conferences: 45
  },
  {
    id: 2,
    name: "Dr. Michael Rodriguez",
    title: "Associate Professor of Mechanical Engineering",
    institution: "MIT",
    department: "Mechanical Engineering",
    expertise: ["Sustainable Energy", "Advanced Materials", "Robotics"],
    bio: "Dr. Rodriguez specializes in sustainable energy solutions and advanced materials research. He leads multiple research projects funded by NSF and DOE.",
    publications: 150,
    conferences: 38
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    title: "Professor of Biotechnology",
    institution: "Harvard University",
    department: "Molecular Biology",
    expertise: ["Genetic Engineering", "Biomedical Research", "Drug Development"],
    bio: "Dr. Watson is a pioneer in biotechnology research with groundbreaking work in genetic engineering. Her research has led to several FDA-approved treatments.",
    publications: 180,
    conferences: 52
  },
  {
    id: 4,
    name: "Dr. James Park",
    title: "Professor of Electrical Engineering",
    institution: "UC Berkeley",
    department: "Electrical Engineering",
    expertise: ["Semiconductor Technology", "Quantum Computing", "Nanotechnology"],
    bio: "Dr. Park is an expert in semiconductor technology and quantum computing. He has been instrumental in developing next-generation computing technologies.",
    publications: 170,
    conferences: 41
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    title: "Professor of Environmental Science",
    institution: "University of Texas at Austin",
    department: "Environmental Science",
    expertise: ["Climate Change", "Sustainable Development", "Environmental Policy"],
    bio: "Dr. Thompson is a leading voice in environmental science and climate change research. She advises governments and organizations on sustainable development policies.",
    publications: 140,
    conferences: 35
  },
  {
    id: 6,
    name: "Dr. David Kim",
    title: "Professor of Physics",
    institution: "Caltech",
    department: "Physics",
    expertise: ["Quantum Physics", "Particle Physics", "Theoretical Physics"],
    bio: "Dr. Kim is a theoretical physicist working on quantum field theory and particle physics. His work has contributed to our understanding of fundamental particles.",
    publications: 160,
    conferences: 48
  }
];