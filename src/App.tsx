import { Navbar } from '@/components/Navbar';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Projects } from '@/sections/Projects';
import { Timeline } from '@/sections/Timeline';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { BackgroundParticles } from '@/components/particles/BackgroundParticles';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen bg-dark text-white overflow-x-hidden">
      <div className="fixed inset-0 z-[1]">
        <BackgroundParticles />
      </div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
