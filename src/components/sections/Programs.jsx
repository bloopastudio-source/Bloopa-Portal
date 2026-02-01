import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProgramCard = ({ title, duration, description, features, delay }) => {
  const cardRef = useRef();

  useEffect(() => {
    gsap.from(cardRef.current, {
      y: 80,
      opacity: 0,
      rotateX: -15,
      duration: 1,
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
      className="group relative p-8 rounded-3xl bg-gradient-to-br from-soft-ivory to-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105"
      style={{
        perspective: '1000px',
      }}
    >
      {/* Gold Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-gold to-champagne-gold opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
      
      {/* Border Glow */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary-gold transition-all duration-500"></div>
      
      <div className="relative">
        {/* Header */}
        <div className="mb-6">
          <h3 className="font-marcellus text-3xl font-bold mb-2 text-deep-grey">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-primary-gold font-semibold">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>{duration}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-deep-grey/80 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-deep-grey/80">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="w-full py-3 bg-gradient-to-r from-primary-gold to-champagne-gold text-soft-ivory font-marcellus rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default function Programs() {
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

  const programs = [
    {
      title: 'CPL',
      duration: '12-18 Months',
      description: 'Commercial Pilot License training with comprehensive flight and ground school.',
      features: [
        '200+ Hours of Flight Training',
        'Advanced Navigation & Procedures',
        'Multi-Engine Certification',
        'Instrument Rating Included',
        'Type Rating Preparation'
      ]
    },
    {
      title: 'DGCA Ground School',
      duration: '6 Months',
      description: 'Complete theoretical knowledge for DGCA examinations.',
      features: [
        'Air Navigation',
        'Aviation Meteorology',
        'Technical General & Specific',
        'Air Regulations',
        'RTR (A) License Preparation'
      ]
    },
    {
      title: 'Multi Engine Rating',
      duration: '2-3 Months',
      description: 'Advanced training for multi-engine aircraft operations.',
      features: [
        'Twin Engine Aircraft Training',
        'Engine-Out Procedures',
        'Complex Systems Management',
        'Advanced Flight Planning',
        'DGCA ME Exam Preparation'
      ]
    },
    {
      title: 'Instrument Rating',
      duration: '3-4 Months',
      description: 'Master instrument flight rules and procedures.',
      features: [
        'IFR Flight Training',
        'Instrument Approaches',
        'Radio Navigation',
        'Simulator Sessions',
        'DGCA IR Certification'
      ]
    },
    {
      title: 'Airline Preparation',
      duration: '3 Months',
      description: 'Specialized training for airline readiness and interview preparation.',
      features: [
        'Airline Interview Techniques',
        'CRM & MCC Training',
        'Boeing/Airbus Familiarization',
        'Psychometric Testing',
        'Career Guidance & Placement'
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="programs" 
      className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-white to-soft-ivory"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="font-marcellus text-4xl md:text-6xl font-bold mb-4 text-deep-grey">
            Pilot Training Programs
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p className="text-xl text-deep-grey/80 max-w-3xl mx-auto">
            Comprehensive training programs designed to take you from zero to airline-ready professional pilot
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              {...program}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
