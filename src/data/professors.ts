export interface Professor {
  id: number;
  name: string;
  title: string;
  affiliation: string;
  role: string;
  bio: string;
  email?: string;
}

export const professorsData: Professor[] = [
  {
    id: 1,
    name: 'Prof. William Andrew Goddard III',
    title: 'Charles and Mary Ferkel Professor',
    affiliation: 'Caltech, Pasadena, CA',
    role: 'President',
    bio: 'Prof. William A. Goddard III is a distinguished chemist and materials scientist at Caltech. He is a member of both the International Academy of Quantum Molecular Science and the U.S. National Academy of Sciences. Prof. Goddard\'s research has been widely recognized, as evidenced by his H index of 191.',
    email: 'wgoddard@coinsymposia.org'
  },
  {
    id: 2,
    name: 'Prof. Debbie C. Crans',
    title: 'Professor of Chemistry',
    affiliation: 'Colorado State University, Fort Collins, CO',
    role: 'Vice President',
    bio: 'Prof. Debbie C. Crans is a distinguished chemist at Colorado State University. She has received numerous awards, including the ACS Award for Distinguished Service and the Arthur P. Cope Scholar award. Her research focuses on the chemistry of transition metals and their biological applications.',
    email: 'dcrans@coinsymposia.org'
  },
  {
    id: 3,
    name: 'Prof. Mannar R Maurya',
    title: 'Professor and Dean of Faculty Affairs',
    affiliation: 'Indian Institute of Technology Roorkee, India',
    role: 'General Secretary',
    bio: 'Prof. Mannar Ram Maurya is a Professor of Inorganic Chemistry at IIT Roorkee, India. He has led the Chemistry department and served as Dean. His research focuses on vanadium enzymes, catalyst development, and reaction mechanisms. He has published over 190 papers (cited over 7,000 times).',
    email: 'mmaurya@coinsymposia.org'
  },
  {
    id: 4,
    name: 'Prof. Charles Edward Sprouse III',
    title: 'Associate Professor of Engineering',
    affiliation: 'Benedictine College, Atchison, KS',
    role: 'Member',
    bio: 'Prof. Charles Sprouse III is an Associate Professor of Engineering at Benedictine College. He specializes in power generation and emissions reduction, using computational modeling to improve environmental stewardship. His research has been published and presented widely, covering topics like diesel filters and waste heat recovery.'
  }
];