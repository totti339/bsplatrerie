import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../img/2108-BS PLATRERIE-LOGO.png';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="BS Plâtrerie Logo" className="h-16 w-auto" />
            <span className={`ml-3 text-2xl font-bold ${isScrolled ? 'text-navy-700' : 'text-white'}`}>BS Plâtrerie</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`hover:text-navy-700 font-medium transition duration-300 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="btn-primary"
            >
              Demander un Devis
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-navy-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-white bg-navy-700 hover:bg-navy-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Demander un Devis
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
