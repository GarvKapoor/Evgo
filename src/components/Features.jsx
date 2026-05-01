import React from 'react';
import { motion } from 'framer-motion';
import { Zap, RefreshCcw, ShieldCheck, Headphones } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    style={{ 
      display: 'flex', 
      gap: '1.5rem', 
      padding: '1.5rem',
      alignItems: 'flex-start'
    }}
  >
    <div style={{ 
      color: 'var(--primary)', 
      background: 'rgba(57, 255, 20, 0.1)',
      padding: '0.8rem',
      borderRadius: '1rem',
      flexShrink: 0
    }}>
      <Icon size={24} />
    </div>
    <div>
      <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{title}</h4>
      <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem' }}>{description}</p>
    </div>
  </motion.div>
);

const Features = () => {
  return (
    <section className="section-padding" style={{ background: 'var(--bg-darker)' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '4rem',
          alignItems: 'center'
        }} className="features-grid">
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
              Built for the <br />
              <span className="gradient-text">Modern Rider.</span>
            </h2>
            <p style={{ color: 'var(--text-gray)', marginBottom: '2rem' }}>
              We've engineered every detail of our service to maximize your uptime and profit.
            </p>
            <button className="btn-primary">View Fleet Details</button>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '1rem' 
          }}>
            <FeatureItem 
              icon={Zap}
              title="100% Fuel Cost Eliminated"
              description="Maximize your daily margins and keep the profit you actually earn."
              delay={0.1}
            />
            <FeatureItem 
              icon={RefreshCcw}
              title="Zero-Downtime Guarantee"
              description="If your EV stops, we instantly swap it out roadside. No waiting at mechanic shops."
              delay={0.2}
            />
            <FeatureItem 
              icon={ShieldCheck}
              title="Zero Maintenance Liability"
              description="We cover all insurance, consumable parts, and repairs."
              delay={0.3}
            />
            <FeatureItem 
              icon={Headphones}
              title="24/7 SOS Support"
              description="Dedicated roadside assistance and in-app AI troubleshooting."
              delay={0.4}
            />
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}} />
    </section>
  );
};

export default Features;
