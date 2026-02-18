import React from 'react';
import { professorsData } from '../../data/professors';

const Team: React.FC = () => {
  return (
    <section className="home-section home-section-muted">
      <div className="home-container">
        <h2 className="home-section-title">Board Members</h2>
        <p className="home-section-subtitle">
          Internationally recognized scientific leaders guiding quality, direction, and long-term impact.
        </p>

        <div className="home-card-grid">
          {professorsData.map((professor) => (
            <article key={professor.id} className="home-card">
              <span className="role-badge">{professor.role}</span>
              <h3>{professor.name}</h3>
              <p className="board-title">{professor.title}</p>
              <p className="board-affiliation">{professor.affiliation}</p>
              <p>{professor.bio}</p>
              {professor.email && (
                <a href={`mailto:${professor.email}`} className="board-email-link">
                  Get In Touch →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
