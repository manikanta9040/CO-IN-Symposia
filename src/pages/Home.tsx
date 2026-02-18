import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Features from '../components/Features';
import LatestUpdates from '../components/LatestUpdates';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import '../styles/globals.css';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'CO-IN Symposia | Collaborate & Innovate';
  }, []);

  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <About />
      <Features />
      <LatestUpdates />
      <CTA />
      <Footer />
      <button className="scroll-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>↑</button>
    </div>
  );
};

export default Home;
