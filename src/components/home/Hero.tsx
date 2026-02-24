import React from 'react';
import { useSiteData } from '../../hooks/useSiteData';

const Hero: React.FC = () => {
  const { data: hero, loading, error } = useSiteData((siteData) => siteData.content.hero);

  if (loading) {
    return (
      <section className="hero">
        <h1>Loading...</h1>
      </section>
    );
  }

  if (error || !hero) {
    return (
      <section className="hero">
        <h1>Content unavailable</h1>
      </section>
    );
  }

  return (
    <section className="hero">
      <h1>{hero.title}</h1>
      <p>{hero.subtitle}</p>
    </section>
  );
};

export default Hero;
