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

export const contentData: ContentData = {
  hero: {
    title: "Collaborate & Innovate",
    subtitle: "CO-IN Symposia establishes dynamic platforms across various engineering and science disciplines, bringing together like-minded individuals and experts for knowledge exchange, partnership building, and mutual support."
  },
  about: {
    title: "About CO-IN Symposia",
    description: "CO-IN Symposia establishes dynamic platforms across various engineering and science disciplines, bringing together like-minded individuals and experts for knowledge exchange, partnership building, and mutual support.",
    mission: "To foster innovation and collaboration in engineering and science through professional symposiums, conferences, and networking events that advance knowledge and drive technological progress.",
    whatWeDo: [
      "Organize Engineering Summits for industry leaders and innovators",
      "Host Science Symposia for researchers and scientific pioneers",
      "Provide comprehensive conference management services",
      "Facilitate networking and collaboration opportunities",
      "Support both in-person and virtual event formats"
    ],
    commitment: "We are committed to creating professional, engaging, and customized experiences that meet the specific needs of the scientific and engineering communities. Our services ensure smooth, seamless experiences for all participants."
  },
  footer: {
    address: {
      company: "CO-IN Symposia LLC",
      street: "5900 Balcones Dr Suit 100",
      city: "Austin, TX 78731"
    },
    contact: {
      email: "info@coinsymposia.com",
      phone: "+1 512 270 2990"
    },
    copyright: "2024 © COIN SYMPOSIA LLC, All right reserved."
  }
};