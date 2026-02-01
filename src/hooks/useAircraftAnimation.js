import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAircraft } from '../context/AircraftContext';

gsap.registerPlugin(ScrollTrigger);

export const useAircraftAnimation = () => {
  const { aircraftRef, setCurrentSection } = useAircraft();

  useEffect(() => {
    if (!aircraftRef.current) return;

    const aircraft = aircraftRef.current;

    // Define aircraft positions and rotations for each section
    const sections = [
      {
        trigger: '#hero',
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        section: 'hero'
      },
      {
        trigger: '#about',
        position: { x: 2, y: 1, z: -2 },
        rotation: { x: 0, y: 0.3, z: 0 },
        section: 'about'
      },
      {
        trigger: '#programs',
        position: { x: -2, y: 2, z: -1 },
        rotation: { x: 0.2, y: -0.3, z: 0.2 },
        section: 'programs'
      },
      {
        trigger: '#fleet',
        position: { x: 3, y: 1.5, z: 1 },
        rotation: { x: 0, y: 1.5, z: 0 },
        section: 'fleet'
      },
      {
        trigger: '#journey',
        position: { x: 0, y: 3, z: -2 },
        rotation: { x: 0.3, y: 0, z: 0 },
        section: 'journey'
      },
      {
        trigger: '#campus',
        position: { x: -3, y: 4, z: 0 },
        rotation: { x: 0.4, y: -0.5, z: 0.1 },
        section: 'campus'
      },
      {
        trigger: '#admissions',
        position: { x: 1, y: 1, z: 2 },
        rotation: { x: -0.1, y: 0.2, z: 0 },
        section: 'admissions'
      },
      {
        trigger: '#contact',
        position: { x: 0, y: 0, z: 3 },
        rotation: { x: 0, y: 0, z: 0 },
        section: 'contact'
      },
    ];

    // Create scroll-triggered animations for each section
    sections.forEach((sectionData, index) => {
      ScrollTrigger.create({
        trigger: sectionData.trigger,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          setCurrentSection(sectionData.section);
          
          gsap.to(aircraft.position, {
            x: sectionData.position.x,
            y: sectionData.position.y,
            z: sectionData.position.z,
            duration: 2,
            ease: 'power2.inOut',
          });

          gsap.to(aircraft.rotation, {
            x: sectionData.rotation.x,
            y: sectionData.rotation.y,
            z: sectionData.rotation.z,
            duration: 2,
            ease: 'power2.inOut',
          });
        },
        onEnterBack: () => {
          setCurrentSection(sectionData.section);
          
          gsap.to(aircraft.position, {
            x: sectionData.position.x,
            y: sectionData.position.y,
            z: sectionData.position.z,
            duration: 2,
            ease: 'power2.inOut',
          });

          gsap.to(aircraft.rotation, {
            x: sectionData.rotation.x,
            y: sectionData.rotation.y,
            z: sectionData.rotation.z,
            duration: 2,
            ease: 'power2.inOut',
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [aircraftRef, setCurrentSection]);
};
