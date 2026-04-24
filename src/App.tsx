import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function BackgroundEffects() {
  return (
    <>
      {/* Fixed grid overlay */}
      <div className="grid-overlay fixed inset-0 pointer-events-none z-0" />
      {/* Noise overlay */}
      <div className="noise-overlay" />
    </>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#020408] text-white overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
