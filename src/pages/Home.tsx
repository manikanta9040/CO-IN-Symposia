import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Features from '../components/home/Features';
import Team from '../components/home/Team';
import LatestUpdates from '../components/home/LatestUpdates';
import CTA from '../components/home/CTA';
import Footer from '../components/layout/Footer';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'CO-IN Symposia | Science & Technology Conferences';
  }, []);

  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <About />
      <Features />
      <Team />
      <LatestUpdates />
      <CTA />
      <Footer />
      <button className="scroll-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>↑</button>
    </div>
  );
};

export default Home;
