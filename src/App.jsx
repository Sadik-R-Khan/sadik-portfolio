import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import FeaturedProjects from './components/FeaturedProjects';
import FreelanceProjects from './components/FreelanceProjects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import LeetCodeSection from './components/LeetCodeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Ensure browser does not restore previous scroll on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // On initial mount / reload, if a hash exists (like #contact), remove it and stay at top
    if (window.location.hash && window.location.hash !== '#home') {
      window.history.replaceState(null, document.title, window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Clean up hash before page reload to prevent native browser re-jump
    const handleBeforeUnload = () => {
      if (window.location.hash && window.location.hash !== '#home') {
        window.history.replaceState(null, document.title, window.location.pathname + window.location.search);
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#090D16] text-slate-800 dark:text-slate-100 antialiased selection:bg-blue-600 selection:text-white transition-colors duration-200">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <FeaturedProjects />
          <FreelanceProjects />
          <Education />
          <Certifications />
          <LeetCodeSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
