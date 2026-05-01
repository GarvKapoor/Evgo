import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Simple, <span className="gradient-text">Transparent Pricing.</span>
        </h2>
        <p style={{ color: 'var(--text-gray)' }}>No hidden fees. No surprises. Just one flat rate.</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="glass-card" 
          style={{ 
            padding: '3rem', 
            maxWidth: '500px', 
            width: '100%',
            border: '2px solid var(--primary)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '2rem',
            right: '-3rem',
            background: 'var(--primary)',
            color: 'var(--bg-dark)',
            padding: '0.5rem 4rem',
            transform: 'rotate(45deg)',
            fontWeight: 700,
            fontSize: '0.9rem'
          }}>
            POPULAR
          </div>

          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>All-Inclusive Fleet</h3>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ fontSize: '3rem', fontWeight: 800 }}>Rs. 4,500</span>
            <span style={{ color: 'var(--text-gray)', fontSize: '1.2rem' }}> / Month</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
            {[
              'Premium Electric Vehicle',
              'Unlimited Battery Swapping',
              'Full Maintenance & Repairs',
              'Comprehensive Insurance',
              '24/7 Roadside Assistance',
              'Evgo Mobile App Access'
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Check size={20} color="var(--primary)" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Get Started Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
