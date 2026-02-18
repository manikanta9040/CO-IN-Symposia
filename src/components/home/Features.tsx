import React from 'react';

const features = [
  {
    icon: '📝',
    title: 'Abstract And Program Workflows',
    description:
      'Submission, review, revision, and final scheduling workflows designed for academic quality and operational clarity.'
  },
  {
    icon: '🎤',
    title: 'Speaker And Session Coordination',
    description:
      'Structured keynote and technical-session orchestration with clear communication and milestone tracking.'
  },
  {
    icon: '📚',
    title: 'Proceedings And Publications',
    description:
      'Editorial support for manuscripts and conference proceedings aligned to indexing and archival requirements.'
  },
  {
    icon: '🖥️',
    title: 'Hybrid Delivery Infrastructure',
    description:
      'Reliable tools for virtual attendance, live sessions, recordings, and post-event access.'
  },
  {
    icon: '🤝',
    title: 'Board-Led Quality Assurance',
    description:
      'Scientific board and advisory participation to keep content relevant, balanced, and globally credible.'
  },
  {
    icon: '📈',
    title: 'Post-Conference Continuity',
    description:
      'Outcome reports, archive delivery, and follow-up planning to extend impact beyond the conference dates.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="home-section home-section-muted">
      <div className="home-container">
        <h2 className="home-section-title">Approach & Experience</h2>
        <p className="home-section-subtitle">
          We combine practical conference operations with scientific oversight to deliver high-quality
          and scalable events.
        </p>

        <div className="home-card-grid">
          {features.map((feature) => (
            <article key={feature.title} className="home-card home-card-centered">
              <div className="feature-icon" aria-hidden="true">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
