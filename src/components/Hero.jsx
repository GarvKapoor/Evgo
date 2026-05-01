import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone } from 'lucide-react';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero-section container" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      paddingTop: '6rem'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }} className="hero-grid">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ 
              color: 'var(--primary)', 
              fontWeight: 600, 
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontSize: '0.9rem',
              marginBottom: '1rem',
              display: 'block'
            }}
          >
            Empowering the Gig Economy
          </motion.span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            Stop Paying for Petrol. <br />
            <span className="gradient-text">Never Lose a Day's Pay.</span>
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--text-gray)', 
            marginBottom: '2.5rem',
            maxWidth: '500px'
          }}>
            Affordable EV leasing for gig workers with a Zero-Downtime Guarantee through instant roadside vehicle swaps.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn-primary">
              Book Your EV <ArrowRight size={20} />
            </button>
            <button style={{
              background: 'transparent',
              color: 'white',
              border: '1px solid var(--glass-border)',
              padding: '1rem 2rem',
              borderRadius: '3rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: 600
            }}>
              <Smartphone size={20} /> Download App
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: '120%',
            background: 'radial-gradient(circle, rgba(57, 255, 20, 0.1) 0%, transparent 70%)',
            zIndex: -1
          }} />
          <img 
            src={heroImg} 
            alt="Evgo Electric Scooter" 
            style={{ 
              width: '100%', 
              borderRadius: '2rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              border: '1px solid var(--glass-border)'
            }} 
          />
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 3rem !important;
          }
          .hero-grid div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          p { margin-left: auto; margin-right: auto; }
        }
      `}} />
    </section>
  );
};

export default Hero;
