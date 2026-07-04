import Navbar from "./components/Navbar";
import StatsBar from "./components/StatsBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Writeups from "./sections/Writeups";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen">
        <Navbar />
        <Hero />
        <StatsBar />
        <About />
        <Skills />
        <Writeups />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  );
}