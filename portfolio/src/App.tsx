import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>('');

  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.5 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.5 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (heroInView) setCurrentSection('hero');
    else if (aboutInView) setCurrentSection('about');
    else if (projectsInView) setCurrentSection('projects');
    else if (contactInView) setCurrentSection('contact');
  }, [heroInView, aboutInView, projectsInView, contactInView]);

  return (
    <div className='bg-[#183052] text-[#56d2c6] min-h-screen'>
      <Header currentSection={currentSection} />
      <div className="md:max-w-screen-2xl z-10 mx-auto">
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>      
    </div>
  );
};

export default App;