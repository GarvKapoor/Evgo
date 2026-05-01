import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

const Navbar = () => (
  <nav style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: '1.5rem 0',
    zIndex: 1000,
    background: 'rgba(10, 10, 10, 0.8)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid var(--glass-border)'
  }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ color: 'var(--primary)', fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-1px' }}>Evgo</div>
      <div style={{ display: 'none' }} className="nav-links">
        <a href="#problem" style={{ marginLeft: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>The Problem</a>
        <a href="#features" style={{ marginLeft: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>Features</a>
        <a href="#pricing" style={{ marginLeft: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>Pricing</a>
      </div>
      <button className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
        Join Now
      </button>
    </div>
    <style dangerouslySetInnerHTML={{ __html: `
      @media (min-width: 768px) {
        .nav-links { display: block !important; }
      }
    `}} />
  </nav>
);

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div id="problem"><Problem /></div>
      <div id="features"><Features /></div>
      <Pricing />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
