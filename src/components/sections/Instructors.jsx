import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InstructorCard = ({ name, title, hours, experience, delay }) => {
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
      className="group relative overflow-hidden rounded-2xl"
    >
      {/* Gold Frame */}
      <div className="absolute inset-0 p-1 bg-gradient-to-br from-primary-gold via-champagne-gold to-primary-gold">
        <div className="h-full w-full bg-deep-grey rounded-xl"></div>
      </div>

      {/* Content */}
      <div className="relative p-8 text-soft-ivory">
        {/* Avatar */}
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-champagne-gold to-primary-gold flex items-center justify-center text-6xl">
          👨‍✈️
        </div>

        {/* Info */}
        <h3 className="font-marcellus text-2xl font-bold mb-2 text-center">{name}</h3>
        <p className="text-champagne-gold text-center mb-4">{title}</p>

        {/* Stats */}
        <div className="space-y-3 border-t border-soft-ivory/20 pt-4">
          <div className="flex justify-between">
            <span className="text-soft-ivory/80">Flight Hours:</span>
            <span className="font-semibold text-champagne-gold">{hours}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-soft-ivory/80">Experience:</span>
            <span className="font-semibold text-champagne-gold">{experience}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Instructors() {
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

  const instructors = [
    {
      name: 'Capt. Nikkhiel Jadhav',
      title: 'Chief Flight Instructor',
      hours: '15,000+ Hours',
      experience: '20+ Years'
    },
    {
      name: 'Capt. Rajesh Kumar',
      title: 'Senior Flight Instructor',
      hours: '12,000+ Hours',
      experience: '18+ Years'
    },
    {
      name: 'Capt. Priya Sharma',
      title: 'Flight Instructor',
      hours: '8,000+ Hours',
      experience: '12+ Years'
    },
    {
      name: 'Capt. Arjun Singh',
      title: 'Ground School Instructor',
      hours: '10,000+ Hours',
      experience: '15+ Years'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="instructors" 
      className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-soft-ivory to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="font-marcellus text-4xl md:text-6xl font-bold mb-4 text-deep-grey">
            Our Instructors
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p className="text-xl text-deep-grey/80 max-w-3xl mx-auto">
            Learn from experienced airline captains and aviation professionals
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <InstructorCard
              key={index}
              {...instructor}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
