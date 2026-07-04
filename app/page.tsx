import dynamic from "next/dynamic";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Writeups from "./sections/Writeups";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

/* Dynamic imports for heavy client components to avoid SSR issues */
const VideoIntro = dynamic(
  () => import("./components/VideoIntro/VideoIntro"),
  { ssr: false }
);
const CinematicLayer = dynamic(
  () => import("./components/CinematicLayer/CinematicLayer"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Navbar />
      <CinematicLayer />
      <main>
        <VideoIntro />
        <About />
        <Skills />
        <Writeups />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
