import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ icon, title, description, delay }) => {
  const cardRef = useRef();

  useEffect(() => {
    gsap.from(cardRef.current, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      delay: delay,
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 80%',
      }
    });
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="group relative p-8 rounded-2xl backdrop-blur-lg bg-soft-ivory/40 border-2 border-primary-gold/30 hover:border-primary-gold transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-champagne-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="font-marcellus text-2xl font-bold mb-3 text-deep-grey">{title}</h3>
        <p className="text-deep-grey/80 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default function About() {
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

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-soft-ivory to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="font-marcellus text-4xl md:text-6xl font-bold mb-4 text-deep-grey">
            About CNJAA
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p className="text-xl text-deep-grey/80 max-w-3xl mx-auto">
            Capt. Nikkhiel Jadhav Aviation Academy - Where dreams take flight and professionals are made
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon="✈️"
            title="DGCA Approved"
            description="Fully certified by the Directorate General of Civil Aviation, ensuring world-class training standards."
            delay={0}
          />
          <FeatureCard
            icon="👨‍✈️"
            title="Captain-Led"
            description="Learn from experienced airline captains with thousands of flight hours and real-world expertise."
            delay={0.1}
          />
          <FeatureCard
            icon="🎯"
            title="Airline Oriented"
            description="Training programs designed specifically to prepare you for a successful airline career."
            delay={0.2}
          />
          <FeatureCard
            icon="🛡️"
            title="Safety Driven"
            description="Uncompromising focus on safety protocols, procedures, and best practices in aviation."
            delay={0.3}
          />
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="font-marcellus text-5xl font-bold text-primary-gold mb-2">500+</div>
            <div className="text-deep-grey/80">Trained Pilots</div>
          </div>
          <div className="p-6">
            <div className="font-marcellus text-5xl font-bold text-primary-gold mb-2">15+</div>
            <div className="text-deep-grey/80">Years Experience</div>
          </div>
          <div className="p-6">
            <div className="font-marcellus text-5xl font-bold text-primary-gold mb-2">95%</div>
            <div className="text-deep-grey/80">Success Rate</div>
          </div>
          <div className="p-6">
            <div className="font-marcellus text-5xl font-bold text-primary-gold mb-2">100%</div>
            <div className="text-deep-grey/80">Job Placement</div>
          </div>
        </div>
      </div>
    </section>
  );
}
