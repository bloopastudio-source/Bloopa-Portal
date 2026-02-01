import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AircraftCard = ({ name, type, specs, delay }) => {
  const cardRef = useRef();

  useEffect(() => {
    gsap.from(cardRef.current, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      delay: delay,
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 85%',
      }
    });
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="group relative p-8 rounded-2xl bg-gradient-to-br from-deep-grey to-deep-grey/80 text-soft-ivory overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      {/* Top lighting effect */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-gold to-transparent"></div>
      
      <div className="relative">
        <div className="text-6xl mb-4">✈️</div>
        <h3 className="font-marcellus text-2xl font-bold mb-2">{name}</h3>
        <p className="text-champagne-gold mb-4">{type}</p>
        
        <div className="space-y-2 text-sm text-soft-ivory/80">
          {specs.map((spec, index) => (
            <div key={index} className="flex justify-between border-b border-soft-ivory/20 pb-2">
              <span>{spec.label}:</span>
              <span className="font-semibold text-champagne-gold">{spec.value}</span>
            </div>
          ))}
        </div>

        <button className="mt-6 w-full py-2 border border-primary-gold text-primary-gold rounded hover:bg-primary-gold hover:text-deep-grey transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default function Fleet() {
  const sectionRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
      }
    });
  }, []);

  const fleet = [
    {
      name: 'Cessna 172 Skyhawk',
      type: 'Single Engine Trainer',
      specs: [
        { label: 'Engine', value: '180 HP' },
        { label: 'Cruise Speed', value: '122 kts' },
        { label: 'Range', value: '696 nm' },
        { label: 'Seats', value: '4' }
      ]
    },
    {
      name: 'Diamond DA42',
      type: 'Multi Engine Trainer',
      specs: [
        { label: 'Engine', value: 'Twin Diesel' },
        { label: 'Cruise Speed', value: '160 kts' },
        { label: 'Range', value: '1,200 nm' },
        { label: 'Seats', value: '4' }
      ]
    },
    {
      name: 'Piper Seneca',
      type: 'Multi Engine Advanced',
      specs: [
        { label: 'Engine', value: 'Twin Turbo' },
        { label: 'Cruise Speed', value: '190 kts' },
        { label: 'Range', value: '828 nm' },
        { label: 'Seats', value: '6' }
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="fleet" 
      className="relative py-24 px-4 md:px-8"
      style={{
        background: 'linear-gradient(180deg, #5D5B58 0%, #3a3937 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="font-marcellus text-4xl md:text-6xl font-bold mb-4 text-soft-ivory">
            Aircraft Fleet
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p className="text-xl text-soft-ivory/80 max-w-3xl mx-auto">
            Train on modern, well-maintained aircraft equipped with the latest avionics
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.map((aircraft, index) => (
            <AircraftCard
              key={index}
              {...aircraft}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
