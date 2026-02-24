import React from 'react';
import { useSiteData } from '../../hooks/useSiteData';

const About: React.FC = () => {
  const { data: homeAbout, loading, error } = useSiteData((siteData) => siteData.content.homeAbout);

  if (loading || error || !homeAbout) {
    return null;
  }

  return (
    <section className="home-section home-section-light">
      <div className="home-container">
        <h2 className="home-section-title">{homeAbout.title}</h2>

        <div className="about-layout">
          <div>
            <p className="home-paragraph">
              {homeAbout.introPrimary}
            </p>
            <p className="home-paragraph">
              {homeAbout.introSecondary}
            </p>

            <ul className="about-highlight-list">
              {homeAbout.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="home-panel">
            <h3 className="home-panel-title">Current Snapshot</h3>
            <div className="about-stats-grid">
              {homeAbout.stats.map((stat) => (
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
