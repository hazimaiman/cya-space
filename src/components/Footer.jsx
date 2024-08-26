import React from 'react';
import { FaGithub, FaLinkedinIn, FaGoogle } from 'react-icons/fa'; // Corrected imports
import logo from '../assets/logo.png';

function Footer({ isDarkMode }) {
  return (
<footer id="footer" className={`p-3 w-100 ${isDarkMode ? 'dark-mode text-white-50' : 'text-dark-50'}`}>
  <div className="container d-flex justify-content-between align-items-center">
    <div className="d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <img 
          src={logo} 
          alt="Logo" 
          width="30" 
          height="24" 
          style={{ backgroundColor: 'transparent' }} 
        />
      </a>
      <p className="mb-0">© 2024 CyA, Inc</p> 
    </div>
    <div className="footer-icons d-flex gap-2"> 
      <a href="mailto:hazimaiman.azman@gmail.com" className="footer-icon" aria-label="Email">
        <FaGoogle />
      </a>
      <a href="https://www.linkedin.com/in/muhammad-hazim-aiman-50086b226/" className="footer-icon" aria-label="LinkedIn">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/hazimaiman" className="footer-icon" aria-label="GitHub">
        <FaGithub />
      </a>
    </div>
  </div>
</footer>


  );
}

export default Footer;
