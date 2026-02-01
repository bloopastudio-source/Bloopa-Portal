import { useEffect, useRef } from 'react';

const Cloud = ({ delay, duration, top }) => {
  return (
    <div 
      className="absolute opacity-30"
      style={{
        top: `${top}%`,
        animation: `cloud-drift ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="30" rx="40" ry="25" fill="white" opacity="0.6"/>
        <ellipse cx="90" cy="25" rx="50" ry="30" fill="white" opacity="0.6"/>
        <ellipse cx="130" cy="30" rx="45" ry="28" fill="white" opacity="0.6"/>
        <ellipse cx="165" cy="35" rx="35" ry="22" fill="white" opacity="0.6"/>
      </svg>
    </div>
  );
};

export default function Clouds() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Cloud delay={0} duration={60} top={10} />
      <Cloud delay={10} duration={70} top={20} />
      <Cloud delay={20} duration={55} top={40} />
      <Cloud delay={30} duration={65} top={60} />
      <Cloud delay={15} duration={75} top={80} />
    </div>
  );
}
