import React, { useState, useEffect } from 'react';
import NavBar from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Company
 from './components/Company';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`d-flex flex-column min-vh-100 ${isDarkMode ? 'text-bg-dark' : 'text-bg-light'}`}>
      <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="flex-grow-1 d-flex align-items-center">
        <Hero />
      </main>
      <Company isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
