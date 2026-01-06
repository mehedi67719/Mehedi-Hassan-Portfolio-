import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Function to handle navigation and scrolling
  const handleNavigation = (sectionId) => {
    setIsMenuOpen(false);
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = '/';
      return;
    }
    
    // If we are on the home page, scroll to the section
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header className="fixed w-full top-0 bg-black/80 backdrop-blur z-50" data-aos="fade-down">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-yellow-500">Mehedi Hassan</h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          <li><a href="/" onClick={(e) => {
                      e.preventDefault();
                      handleNavigation('home');
                    }} className="hover:text-yellow-500 transition">Home</a></li>
          <li><a href="/#about" onClick={(e) => {
                      e.preventDefault();
                      handleNavigation('about');
                    }} className="hover:text-yellow-500 transition">About</a></li>
          <li><a href="/#skills" onClick={(e) => {
                      e.preventDefault();
                      handleNavigation('skills');
                    }} className="hover:text-yellow-500 transition">Skills</a></li>
          <li><a href="/#projects" onClick={(e) => {
                      e.preventDefault();
                      handleNavigation('projects');
                    }} className="hover:text-yellow-500 transition">Projects</a></li>
          <li><a href="/#education" onClick={(e) => {
                      e.preventDefault();
                      handleNavigation('education');
                    }} className="hover:text-yellow-500 transition">Education</a></li>
          <li><a href="/#contact" onClick={(e) => {
                      e.preventDefault();
                      handleNavigation('contact');
                    }} className="hover:text-yellow-500 transition">Contact</a></li>
        </ul>
        
        {/* Resume Button */}
        <a 
          href="Mehedi Hassan resume.pdf" 
          className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition hidden md:block" 
          target="_blank"
          rel="noopener noreferrer"
          download="Mehedi Hassan Resume.pdf"
        >
          Resume
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 px-6 py-4 absolute w-full top-16 left-0 z-50">
          <ul className="flex flex-col gap-4">
            <li><a href="/" className="block hover:text-yellow-500 transition py-2 border-b border-gray-700" onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('home');
                      }}>Home</a></li>
            <li><a href="/#about" className="block hover:text-yellow-500 transition py-2 border-b border-gray-700" onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('about');
                      }}>About</a></li>
            <li><a href="/#skills" className="block hover:text-yellow-500 transition py-2 border-b border-gray-700" onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('skills');
                      }}>Skills</a></li>
            <li><a href="/#projects" className="block hover:text-yellow-500 transition py-2 border-b border-gray-700" onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('projects');
                      }}>Projects</a></li>
            <li><a href="/#education" className="block hover:text-yellow-500 transition py-2 border-b border-gray-700" onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('education');
                      }}>Education</a></li>
            <li><a href="/#contact" className="block hover:text-yellow-500 transition py-2 border-b border-gray-700" onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('contact');
                      }}>Contact</a></li>
            <li>
              <a 
                href="Mehedi Hassan resume.pdf" 
                className="block border border-yellow-500 text-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition text-center mt-2" 
                target="_blank"
                rel="noopener noreferrer"
                download="Mehedi Hassan Resume.pdf"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;