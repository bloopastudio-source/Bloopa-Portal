import { useEffect, useRef } from 'react';
import Scene3D from '../3d/Scene3D';
import Clouds from '../Clouds';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    // Animate text on load
    const ctx = gsap.context(() => {
      gsap.from(textRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F4F1E8 0%, #5D5B58 100%)'
      }}
    >
      {/* Animated Clouds */}
      <Clouds />

      {/* 3D Scene */}
      <div className="absolute inset-0 z-10">
        <Scene3D />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <div ref={textRef} className="max-w-5xl">
          {/* Logo */}
          <img 
            src="/cnjaa-logo.svg" 
            alt="CNJAA Logo" 
            className="w-32 h-32 mx-auto mb-8 opacity-90"
          />

          {/* Main Headline */}
          <h1 className="font-marcellus text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-deep-grey drop-shadow-lg">
            Acing The Skies
          </h1>

          {/* Subheadline */}
          <p className="font-marcellus text-xl md:text-2xl lg:text-3xl mb-4 text-deep-grey/90">
            India's Premium Airline-Ready Pilot Training Academy
          </p>

          {/* Accent Line */}
          <div className="w-32 h-1 bg-primary-gold mx-auto mb-8"></div>

          {/* Description */}
          <p className="text-lg md:text-xl mb-12 text-deep-grey/80 max-w-2xl mx-auto">
            DGCA Approved • Captain-Led Training • Airline Oriented • Safety Driven
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-primary-gold text-soft-ivory font-marcellus text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Start Your Pilot Journey</span>
              <div className="absolute inset-0 bg-champagne-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
            
            <button className="px-8 py-4 border-2 border-primary-gold text-deep-grey font-marcellus text-lg rounded-lg transition-all duration-300 hover:bg-primary-gold hover:text-soft-ivory hover:scale-105">
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
