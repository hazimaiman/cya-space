import React from 'react';
import '../index.css'; // Ensure this imports your CSS file

const Modal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? 'active' : ''}`}>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-content">
        <h2>Contact Me</h2>
        <div className="icon-links">
          <a href="mailto:hazimaiman.azman@gmail.com" className="footer-icon">📧</a>
          <a href="https://www.linkedin.com/in/muhammad-hazim-aiman-50086b226/" className="footer-icon">🔗</a>
          <a href="tel:+1234567890" className="footer-icon">📞</a>
        </div>
        <button className="close-modal" onClick={onClose}>CLOSE</button>
      </div>
    </div>
  );
};

export default Modal;
