import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
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
      <Footer />
      <button className="scroll-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>↑</button>
    </div>
  );
};

export default Home;
