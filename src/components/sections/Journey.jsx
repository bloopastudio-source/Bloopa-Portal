import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const JourneyStep = ({ number, title, description, isLast }) => {
  const stepRef = useRef();
  const planeRef = useRef();

  useEffect(() => {
    // Animate step
    gsap.from(stepRef.current, {
      x: -60,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: stepRef.current,
        start: 'top 85%',
      }
    });

    // Animate plane along the step
    gsap.to(planeRef.current, {
      x: 100,
      duration: 1.5,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: stepRef.current,
        start: 'top 70%',
        end: 'bottom 70%',
        scrub: 1,
      }
    });
  }, []);

  return (
    <div ref={stepRef} className="relative flex items-center gap-8 mb-12">
      {/* Step Number & Icon */}
      <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-primary-gold to-champagne-gold flex items-center justify-center shadow-xl">
        <span className="font-marcellus text-2xl font-bold text-soft-ivory">{number}</span>
      </div>

      {/* Content */}
      <div className="flex-grow bg-soft-ivory/60 backdrop-blur-sm p-6 rounded-xl border-2 border-primary-gold/30">
        <h3 className="font-marcellus text-2xl font-bold mb-2 text-deep-grey">{title}</h3>
        <p className="text-deep-grey/80">{description}</p>
      </div>

      {/* Runway line */}
      {!isLast && (
        <div className="absolute left-10 top-20 w-0.5 h-12 bg-primary-gold/30"></div>
      )}

      {/* Animated plane */}
      <div 
        ref={planeRef}
        className="absolute left-10 text-3xl opacity-70"
        style={{ top: '50%', transform: 'translateY(-50%) rotate(-45deg)' }}
      >
        ✈️
      </div>
    </div>
  );
};

export default function Journey() {
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

  const steps = [
    {
      title: 'Enrollment',
      description: 'Begin your aviation journey with our comprehensive enrollment process and documentation.'
    },
    {
      title: 'Ground School',
      description: 'Master the theoretical foundations with DGCA-approved curriculum and experienced instructors.'
    },
    {
      title: 'Simulator Training',
      description: 'Practice procedures and emergency scenarios in our state-of-the-art flight simulators.'
    },
    {
      title: 'Flight Training',
      description: 'Take to the skies with dual and solo flights, building your skills and confidence.'
    },
    {
      title: 'Solo Flight',
      description: 'Experience the thrill of flying solo, a major milestone in your pilot training.'
    },
    {
      title: 'Checkride',
      description: 'Complete your DGCA examination and practical test to earn your license.'
    },
    {
      title: 'Airline Career',
      description: 'Launch your professional airline career with our placement assistance and support.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="journey" 
      className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-soft-ivory to-white"
    >
      {/* Runway background texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, #5D5B58 50px, #5D5B58 52px)',
        }}
      ></div>

      <div className="max-w-4xl mx-auto relative">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="font-marcellus text-4xl md:text-6xl font-bold mb-4 text-deep-grey">
            Training Journey
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p className="text-xl text-deep-grey/80 max-w-3xl mx-auto">
            Your path from aspiring pilot to airline professional
          </p>
        </div>

        {/* Journey Steps */}
        <div className="relative">
          {steps.map((step, index) => (
            <JourneyStep
              key={index}
              number={index + 1}
              {...step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
