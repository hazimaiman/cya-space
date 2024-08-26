import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Link as ScrollLink } from 'react-scroll';

const Nav = ({ isDarkMode, toggleTheme }) => {
  const [hovered, setHovered] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  // React Spring animation props
  const nameProps = useSpring({
    opacity: hovered ? 1 : 0.8,
    transform: hovered ? 'scale(1.1)' : 'scale(1)',
    config: { tension: 300, friction: 10 }, // control animation smoothness
  });

  return (
    <header className={`p-3 w-100 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <animated.h3
            className="mb-0"
            style={nameProps}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {hovered ? '{Hazim Aiman}' : '{CyA}'}
          </animated.h3>

          <nav className="nav nav-masthead">
            <ScrollLink
              className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
              to="hero-section"
              smooth={true}
              duration={800}
              spy={true}
              onMouseEnter={() => setActiveLink('home')}
              onMouseLeave={() => setActiveLink('')}
              aria-current="page"
            >
              Home
            </ScrollLink>
            <ScrollLink
              className={`nav-link ${activeLink === 'review' ? 'active' : ''}`}
              to="company-section"
              smooth={true}
              duration={800}
              spy={true}
              onMouseEnter={() => setActiveLink('review')}
              onMouseLeave={() => setActiveLink('')}
            >
              Collaborations
            </ScrollLink>
            <button 
              className="theme-toggle-button ms-3" 
              onClick={toggleTheme}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              {isDarkMode ? '🌞' : '🌙'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;
