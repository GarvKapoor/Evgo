import React from 'react';
import { motion } from 'framer-motion';

const Step = ({ number, title, description }) => (
  <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
    <div style={{ 
      fontSize: '3rem', 
      fontWeight: 800, 
      color: 'rgba(255, 255, 255, 0.05)',
      lineHeight: 1,
      width: '60px',
      flexShrink: 0
    }}>
      {number}
    </div>
    <div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-gray)' }}>{description}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="section-padding container">
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1.2fr', 
        gap: '6rem',
        alignItems: 'center'
      }} className="how-grid">
        <div style={{ position: 'relative' }}>
          <div className="glass-card" style={{ 
            height: '400px', 
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
             {/* Stylized mobile app mockup */}
             <div style={{
               width: '180px',
               height: '360px',
               border: '8px solid #333',
               borderRadius: '2rem',
               background: '#111',
               padding: '1rem',
               position: 'relative'
             }}>
               <div style={{ width: '40px', height: '4px', background: '#333', borderRadius: '2px', margin: '0 auto 1rem' }} />
               <div style={{ height: '100px', width: '100%', background: 'var(--primary)', opacity: 0.2, borderRadius: '1rem', marginBottom: '1rem' }} />
               <div style={{ height: '10px', width: '70%', background: '#333', borderRadius: '5px', marginBottom: '0.5rem' }} />
               <div style={{ height: '10px', width: '50%', background: '#333', borderRadius: '5px', marginBottom: '1.5rem' }} />
               <div style={{ height: '40px', width: '100%', background: 'var(--primary)', borderRadius: '1rem' }} />
             </div>
          </div>
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              position: 'absolute', 
              bottom: '-20px', 
              right: '-20px',
              padding: '1rem',
              background: 'var(--primary)',
              color: 'var(--bg-dark)',
              borderRadius: '1rem',
              fontWeight: 700,
              boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
            }}
          >
            KYC Verified ✓
          </motion.div>
        </div>

        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
            Get on the Road in <span className="gradient-text">3 Easy Steps.</span>
          </h2>
          
          <Step 
            number="01"
            title="Download the Evgo App & KYC"
            description="Register in minutes. Upload your documents and get instant approval through our AI-powered verification."
          />
          <Step 
            number="02"
            title="Pick up your EV at a localized hub"
            description="Choose your nearest Evgo hub and collect your fully charged vehicle. Ready to hit the road immediately."
          />
          <Step 
            number="03"
            title="Drive, earn, and swap"
            description="Start delivering and maximize your earnings. Swap your vehicle instantly roadside whenever needed."
          />
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          .how-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}} />
    </section>
  );
};

export default HowItWorks;
