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
    title: "International Conferences For Science And Technology",
    subtitle: "CO-IN Symposia creates focused platforms for conference services, approach and experience, and future-facing education and technology collaboration."
  },
  about: {
    title: "About CO-IN Symposia",
    description: "CO-IN Symposia establishes dynamic platforms across engineering and science disciplines, bringing together experts and collaborators for knowledge exchange, partnerships, and mutual support.",
    mission: "To advance international research dialogue through professionally managed conferences, strong scientific leadership, and inclusive global collaboration.",
    whatWeDo: [
      "Deliver end-to-end conference services, from abstract handling to event delivery",
      "Build high-impact scientific programs with trusted advisory experts",
      "Support in-person, virtual, and hybrid conference formats",
      "Grow global education and technology communities through recurring events",
      "Provide publication, reporting, and post-conference continuity support"
    ],
    commitment: "We are committed to creating professional and customized conference experiences that meet the needs of scientific communities while staying practical, transparent, and globally accessible."
  },
  footer: {
    address: {
      company: "CO-IN Symposia LLC",
      street: "5900 Balcones Dr STE 100",
      city: "Austin, TX 78731, USA"
    },
    contact: {
      email: "info@coinsymposia.org",
      phone: "+1 512 270 2990"
    },
    copyright: "2026 © CO-IN SYMPOSIA LLC. All rights reserved."
  }
};
