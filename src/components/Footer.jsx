import React from 'react';
import { Smartphone, Mail, MessageSquare, Globe, Users, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-darker)', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container section-padding" style={{ paddingBottom: '4rem' }}>
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '6rem',
          padding: '4rem',
          borderRadius: '3rem',
          background: 'linear-gradient(135deg, rgba(57, 255, 20, 0.1) 0%, transparent 100%)',
          border: '1px solid var(--glass-border)'
        }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
            Take back your <span className="gradient-text">financial stability</span> today.
          </h2>
          <p style={{ color: 'var(--text-gray)', marginBottom: '2.5rem', fontSize: '1.2rem' }}>
            Join 2,000+ delivery riders who have switched to Evgo and increased their profit by 40%.
          </p>
          <button className="btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>
            Join the Evgo Fleet
          </button>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '2fr 1fr 1fr 1fr', 
          gap: '4rem' 
        }} className="footer-grid">
          <div>
            <h3 style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '1.5rem' }}>Evgo</h3>
            <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem' }}>
              Zero-Downtime electric vehicle leasing for the modern gig economy.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ color: 'var(--text-gray)', cursor: 'pointer' }}><Globe size={20} /></div>
              <div style={{ color: 'var(--text-gray)', cursor: 'pointer' }}><Users size={20} /></div>
              <div style={{ color: 'var(--text-gray)', cursor: 'pointer' }}><Phone size={20} /></div>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-gray)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li>About Us</li>
              <li>How it Works</li>
              <li>Pricing</li>
              <li>Fleet</li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Support</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-gray)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MessageSquare size={16} /> WhatsApp Support</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={16} /> Contact Us</li>
              <li>FAQs</li>
              <li>Service Status</li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Legal</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-gray)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Insurance Terms</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ 
        borderTop: '1px solid var(--glass-border)', 
        padding: '2rem 0', 
        textAlign: 'center',
        color: 'var(--text-gray)',
        fontSize: '0.9rem'
      }}>
        <div className="container">
          © 2026 Evgo Technologies Pvt. Ltd. All rights reserved.
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;
