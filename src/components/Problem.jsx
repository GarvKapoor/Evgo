import React from 'react';
import { motion } from 'framer-motion';
import { Fuel, Wrench, TrendingDown, AlertCircle } from 'lucide-react';

const ProblemCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass-card" 
    style={{ padding: '2rem' }}
  >
    <div style={{ 
      width: '50px', 
      height: '50px', 
      background: 'rgba(57, 255, 20, 0.1)', 
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem',
      color: 'var(--primary)'
    }}>
      <Icon size={28} />
    </div>
    <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>{title}</h3>
    <p style={{ color: 'var(--text-gray)' }}>{description}</p>
  </motion.div>
);

const Problem = () => {
  return (
    <section className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Stop Struggling, <span className="gradient-text">Start Earning.</span>
        </h2>
        <p style={{ color: 'var(--text-gray)', maxWidth: '600px', margin: '0 auto' }}>
          Delivery is hard enough. Your vehicle shouldn't make it harder.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '2rem' 
      }}>
        <ProblemCard 
          icon={Fuel}
          title="Skyrocketing Fuel Costs"
          description="Spending 40-50% of your daily earnings just on petrol? It's time to keep that profit."
        />
        <ProblemCard 
          icon={Wrench}
          title="Expensive Maintenance"
          description="Surprise repair bills eat into your savings. With Evgo, you never pay for a mechanic again."
        />
        <ProblemCard 
          icon={TrendingDown}
          title="Zero Income Days"
          description="When your bike breaks, you don't earn. Our swap guarantee ensures you never miss a shift."
        />
      </div>
    </section>
  );
};

export default Problem;
