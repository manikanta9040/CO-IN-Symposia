import React from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../../data/news';

const LatestUpdates: React.FC = () => {
  const recentNews = newsData.slice(0, 3);

  return (
    <section className="home-section home-section-light">
      <div className="home-container">
        <h2 className="home-section-title">Latest Updates & News</h2>
        <p className="home-section-subtitle">
          Stay informed about upcoming events, announcements, and developments from CO-IN Symposia.
        </p>

        <div className="home-card-grid">
          {recentNews.map((item) => (
            <article key={item.id} className="home-card news-card">
              <span className="news-category">{item.category}</span>
              <h3>{item.title}</h3>
              <p className="news-date">{item.date}</p>
              <p>{item.summary}</p>
              <Link to="/news" className="board-email-link">
                Read More →
              </Link>
            </article>
          ))}
        </div>

        <div className="section-cta-row">
          <Link to="/news" className="primary-button">
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
