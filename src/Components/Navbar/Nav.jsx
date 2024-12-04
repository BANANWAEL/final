import React, { useState } from 'react';
import styles from "./nav.module.css"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className= {`navbar-container ${styles.navbar}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container position-relative">
            {/* Brand Logo */}
            <a 
              href="/" 
              className={`navbar-brand fs-3 ${styles.navbarbrand}`}
            >
              TECH WORLD
            </a>

            {/* Mobile Hamburger Toggle */}
            <button 
            // style={{color: `rgb(${178}, ${65}, ${125})`}}
              className={`navbar-toggler ${styles.navbartoggler}`} 
              type="button" 
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span style={{color: `rgb(${178}, ${65}, ${125})`}}  className="navbar-toggler-icon"></span>
            </button>

            {/* Navigation Links */}
            <div 
              className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
            >
              <div className={`navbar-nav ms-auto ${styles.navbarnav}`}>
                <a 
                  href="/home" 
                  target="_self"
                  className={`nav-link active m-2 ${styles.navlink}`}
                >
                  Home
                </a>
                <a 
                  href="https://about-us21.netlify.app/" 
                  className={`nav-link active m-2 ${styles.navlink}`}
                  target="_self"
                  rel="noopener noreferrer"
                >
                  About
                </a>
                <a 
                  href="https://client-page-58c972.netlify.app/" 
                  className={`nav-link active m-2 ${styles.navlink}`}
                >
                  Find Developer
                </a>
                <a 
                  href="https://regist-tech.netlify.app/" 
                  className={`nav-link active m-2 ${styles.navlink}`}
                  target="_self"
                  rel="noopener noreferrer"
                >
                  Find Work
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;