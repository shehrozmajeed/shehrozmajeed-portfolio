import Navbar from "./components/Navbar";
import StatsBar from "./components/StatsBar";
import MatrixRain from "./components/MatrixRain";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Global animated matrix background — fixed, behind everything */}
      <MatrixRain />

      <main className="relative min-h-screen">
        <Navbar />
        <Hero />
        <StatsBar />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  );
}