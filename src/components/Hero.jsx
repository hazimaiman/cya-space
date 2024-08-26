import React from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import memoji from '../assets/memoji.png'; 
import profile from '../assets/profile.jpg';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll'; 

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h3>Welcome to my Spartial Separation</h3>
        <h2>Hi! I'm <Typewriter
          words={['Hazim Aiman', 'Programmer', 'Softball Player']}
          loop
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        /></h2>
        <p className="lead">
        I am a passionate individual looking for opportunities in software development with a flexible working hours and environment. I do freelance work occasionally and aspire to become a CTO someday.
        </p>
        <p className="lead">
          <Link to="footer" smooth={true} duration={500} className="btn btn-lg btn-secondary fw-bold">
            Let's Connect <ArrowRightCircle />
          </Link>
        </p>
      </div>
      <div className="hero-image">
        <img src={profile} alt="Hazim Aiman" />
      </div>
    </div>
  );
}

export default Hero;
