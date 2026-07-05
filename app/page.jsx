'use client';

import { useRef } from 'react';
import Navbar from '../components/Navbar/Navbar';
import VideoIntro from '../components/VideoIntro/VideoIntro';
import EntryGate from '../components/EntryGate/EntryGate';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Certifications from '../components/Certifications/Certifications';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  const heroRef = useRef(null);

  return (
    <main id="top">
      <EntryGate onEnter={() => heroRef.current?.enter()} />
      <Navbar />
      <VideoIntro ref={heroRef} />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
