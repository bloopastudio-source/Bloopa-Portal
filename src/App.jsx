import { AircraftProvider } from './context/AircraftContext';
import { useAircraftAnimation } from './hooks/useAircraftAnimation';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Programs from './components/sections/Programs';
import Fleet from './components/sections/Fleet';
import Journey from './components/sections/Journey';
import Campus from './components/sections/Campus';
import Instructors from './components/sections/Instructors';
import Admissions from './components/sections/Admissions';
import Contact from './components/sections/Contact';

function AppContent() {
  // Initialize aircraft animations
  useAircraftAnimation();

  return (
    <div className="relative">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Programs />
        <Fleet />
        <Journey />
        <Campus />
        <Instructors />
        <Admissions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AircraftProvider>
      <AppContent />
    </AircraftProvider>
  );
}

export default App;

