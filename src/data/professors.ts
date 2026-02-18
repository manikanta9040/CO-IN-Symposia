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
  },
  {
    id: 5,
    name: 'Prof. Debasish Kuila',
    title: 'Professor of Materials Science',
    affiliation: 'North Carolina A&T State University, CA',
    role: 'Member',
    bio: 'Prof. Debasish Kuila is a leading researcher in bioenergy and materials science at North Carolina A&T State University. His research interests include biomaterials, cell biology, drug toxicity screening, and catalysis. He is a recipient of the ChemCon Distinguished Speaker Award.'
  },
  {
    id: 6,
    name: 'Prof. Nikolaos Dimakis',
    title: 'Professor of Physics',
    affiliation: 'University of Texas Rio Grande Valley, Edinburg, TX',
    role: 'Member',
    bio: 'Prof. Nikolaos Dimakis earned his MS in Applied Optics and PhD in Physics from the University of Salford and IIT, respectively. He has held research positions at Argonne National Laboratory and IIT before joining the University of Texas-Pan American in 2004.'
  },
  {
    id: 7,
    name: 'Prof. V.S.R. Rajasekhar Pullabhotla',
    title: 'Professor of Chemistry',
    affiliation: 'University of Zululand, South Africa',
    role: 'Member',
    bio: 'Prof. Pullabhotla is Full Professor in the Department of Chemistry and principal investigator of the Catalysis Research Group at University of Zululand. He has 2 registered Patents and co-authored 66 publications. He has emerged as a C2 rated Scientist by National Research Foundation (NRF), South Africa.'
  },
  {
    id: 8,
    name: 'Prof. Nataša Novak Tušar',
    title: 'Head of Laboratory for Catalysts',
    affiliation: 'National Institute of Chemistry, Slovenia',
    role: 'Member',
    bio: 'Prof. Nataša Novak Tušar is Head of the Laboratory for catalysts, Department of Inorganic Chemistry and Technology, National Institute of Chemistry, Ljubljana, Slovenia. She has Twenty five years of experience in research working on a world-wide basis.'
  },
  {
    id: 9,
    name: 'Bhaskar Peddeti',
    title: 'Tech Lead - Manufacturing & IT Systems',
    affiliation: 'Sweden',
    role: 'Member',
    bio: 'Bhaskar Peddeti combines a strong background in manufacturing with a passion for system innovation. He has led major initiatives in PLM, PIM, and digital transformation. His work in product design and field service has helped streamline processes across global teams.'
  }
];