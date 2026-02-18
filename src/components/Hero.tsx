import React from 'react';
import { contentData } from '../data/content';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h1>{contentData.hero.title}</h1>
      <p>{contentData.hero.subtitle}</p>
    </section>
  );
};

export default Hero;