import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import IMSLogo from '../assets/IMS.png';
import TIJANLogo from '../assets/Tijan.jfif';
import HaiCrunchLogo from '../assets/HaiCrunch.jpg';
import NdecoLogo from '../assets/Ndeco.jpg';
import SneakersLab from '../assets/SNEAKERSLAB.png';
import KicksLab from '../assets/kickslab.png';

const companies = [
  { id: 1, src: IMSLogo, alt: 'IMS' },
  { id: 2, src: TIJANLogo, alt: 'TIJANAT' },
  { id: 3, src: HaiCrunchLogo, alt: 'Hai Crunch' },
  { id: 4, src: NdecoLogo, alt: 'NDeco' },
  { id: 5, src: SneakersLab , alt: 'sneakerlab' },
  { id: 6, src: KicksLab , alt: 'Amr.kicks' },
];

const Company = ({ isDarkMode }) => {
  const [speed, setSpeed] = useState(6);

  const gradientColor = isDarkMode ? 
    'rgba(13, 27, 42, 1)' : 
    'rgba(248, 249, 250, 1)';

  return (
    <Element name="company-section">
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        overflow: 'hidden',
        backgroundColor: isDarkMode ? '#0d1b2a' : '#f8f9fa',
        padding: '20px 0'
      }}>
        <h2 style={{textAlign: "center", color: isDarkMode ? '#fff' : '#212529'}}>In Collaboration With</h2>
        <br />
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '30%',
            background: `linear-gradient(to right, ${gradientColor} 60%, rgba(255, 255, 255, 0))`,
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: '30%',
            background: `linear-gradient(to left, ${gradientColor} 70%, rgba(255, 255, 255, 0))`,
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        <motion.div
          style={{ display: 'flex', justifyContent: 'space-around', width: '200%' }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: speed,
            repeat: Infinity,
          }}
          onMouseEnter={() => setSpeed(60)}
          onMouseLeave={() => setSpeed(30)}
        >
          {[...companies, ...companies].map((company, index) => (
            <motion.div 
              key={`${company.id}-${index}`} 
              style={{ 
                margin: '0 10px', // Reduced margin
                borderRadius: '50%',
                overflow: 'hidden',
                width: '100px', // Reduced size
                height: '100px', // Reduced size
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={company.src}
                alt={company.alt}
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: isDarkMode ? 'invert(1)' : 'none'
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Element>
  );
};

export default Company;