import { createContext, useContext, useState, useRef } from 'react';

const AircraftContext = createContext();

export const useAircraft = () => {
  const context = useContext(AircraftContext);
  if (!context) {
    throw new Error('useAircraft must be used within AircraftProvider');
  }
  return context;
};

export const AircraftProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState('hero');
  const aircraftRef = useRef();

  const value = {
    currentSection,
    setCurrentSection,
    aircraftRef,
  };

  return (
    <AircraftContext.Provider value={value}>
      {children}
    </AircraftContext.Provider>
  );
};
