import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FacilityCard = ({ icon, title, description, delay }) => {
  const cardRef = useRef();

  useEffect(() => {
    gsap.from(cardRef.current, {
      scale: 0.8,
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
      className="group relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      style={{
        background: 'linear-gradient(135deg, rgba(244, 241, 232, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%)',
      }}
    >
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="font-marcellus text-2xl font-bold mb-3 text-deep-grey">{title}</h3>
      <p className="text-deep-grey/80 leading-relaxed">{description}</p>
      
      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default function Campus() {
  const sectionRef = useRef();
  const titleRef = useRef();
  const imageRef = useRef();

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

    // Parallax effect for image
    gsap.to(imageRef.current, {
      y: -50,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      }
    });
  }, []);

  const facilities = [
    {
      icon: '🏢',
      title: 'Modern Classrooms',
      description: 'State-of-the-art classrooms equipped with the latest audio-visual technology for effective learning.'
    },
    {
      icon: '✈️',
      title: 'Flight Simulators',
      description: 'Advanced flight simulators for realistic training scenarios and emergency procedure practice.'
    },
    {
      icon: '🛫',
      title: 'Private Runways',
      description: 'Access to well-maintained runways for practical flight training in controlled environments.'
    },
    {
      icon: '📚',
      title: 'Aviation Library',
      description: 'Extensive collection of aviation books, manuals, and digital resources for comprehensive study.'
    },
    {
      icon: '🏋️',
      title: 'Fitness Center',
      description: 'Maintain peak physical fitness with our well-equipped gym and wellness facilities.'
    },
    {
      icon: '🏠',
      title: 'Student Accommodation',
      description: 'Comfortable on-campus housing options with modern amenities for outstation students.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="campus" 
      className="relative py-24 px-4 md:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #F4F1E8 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="font-marcellus text-4xl md:text-6xl font-bold mb-4 text-deep-grey">
            Campus & Facilities
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p className="text-xl text-deep-grey/80 max-w-3xl mx-auto">
            World-class infrastructure designed to provide the best learning environment
          </p>
        </div>

        {/* Hero Image with Parallax */}
        <div 
          ref={imageRef}
          className="relative h-96 rounded-3xl overflow-hidden mb-16 shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #5D5B58 0%, #B28E4A 100%)'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-soft-ivory">
              <div className="text-8xl mb-4">🏫</div>
              <p className="font-marcellus text-3xl">Premium Aviation Training Facility</p>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <FacilityCard
              key={index}
              {...facility}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
