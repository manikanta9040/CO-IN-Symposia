import React from 'react';

const aboutHighlights = [
  'End-to-end services from abstracts to proceedings',
  'Experienced board-guided scientific curation',
  'Strong global reviewer and speaker network',
  'In-person, hybrid, and virtual delivery expertise'
];

const impactStats = [
  { value: '25+', label: 'Programs Delivered' },
  { value: '40+', label: 'Countries In Network' },
  { value: '1,500+', label: 'Researchers Engaged' },
  { value: '100%', label: 'Program Accountability' }
];

const About: React.FC = () => {
  return (
    <section className="home-section home-section-light">
      <div className="home-container">
        <h2 className="home-section-title">Why CO-IN Symposia</h2>

        <div className="about-layout">
          <div>
            <p className="home-paragraph">
              CO-IN Symposia is an international conference platform focused on science and technology.
              We connect researchers, educators, and industry contributors through programs designed for
              practical outcomes and credible academic exchange.
            </p>
            <p className="home-paragraph">
              Our model is built around conference services, structured delivery experience, and
              forward-looking global education and technology initiatives.
            </p>

            <ul className="about-highlight-list">
              {aboutHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="home-panel">
            <h3 className="home-panel-title">Current Snapshot</h3>
            <div className="about-stats-grid">
              {impactStats.map((stat) => (
                <div key={stat.label} className="about-stat-card">
                  <p className="about-stat-value">{stat.value}</p>
                  <p className="about-stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
