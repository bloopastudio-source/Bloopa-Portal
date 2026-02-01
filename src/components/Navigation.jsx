import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'fleet', label: 'Fleet' },
    { id: 'journey', label: 'Journey' },
    { id: 'campus', label: 'Campus' },
    { id: 'instructors', label: 'Instructors' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-deep-grey/95 backdrop-blur-lg shadow-xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group"
          >
            <img 
              src="/cnjaa-logo.svg" 
              alt="CNJAA" 
              className="w-12 h-12 transition-transform group-hover:scale-110"
            />
            <div className="hidden md:block">
              <div className="font-marcellus text-xl font-bold text-soft-ivory">CNJAA</div>
              <div className="text-xs text-champagne-gold">Aviation Academy</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-marcellus text-soft-ivory hover:text-champagne-gold transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-gold group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('admissions')}
            className="hidden md:block px-6 py-2 bg-primary-gold text-soft-ivory font-marcellus rounded-lg hover:bg-champagne-gold transition-all duration-300 hover:scale-105"
          >
            Apply Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-soft-ivory text-2xl"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 bg-deep-grey/98 backdrop-blur-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 font-marcellus text-soft-ivory hover:text-champagne-gold hover:bg-primary-gold/10 transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
