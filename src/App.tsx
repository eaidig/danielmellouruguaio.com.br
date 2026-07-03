import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import History from "./components/History";
import Projects from "./components/Projects";
import PodcastSection from "./components/PodcastSection";
import MusicSection from "./components/MusicSection";
import ContactFooter from "./components/ContactFooter";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sections = ["inicio", "trajetoria", "projetos", "podcast", "musica", "contato"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better triggering in advance

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="landing-page-root" className="min-h-screen bg-[#0A0B09] overflow-x-hidden antialiased">
      {/* Premium responsive navigation header with active indicator */}
      <Header activeSection={activeSection} />

      {/* Main Sections flow */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* Biography & Metrics Section */}
        <History />

        {/* Projects, Social Work & 'O Emigrante' Spotlight */}
        <Projects />

        {/* Podcast 'Estación Fronteira' & Portal 'Eu Amo Esteio' */}
        <PodcastSection />

        {/* Discography, Spotify, YouTube & Clipping */}
        <MusicSection />
      </main>

      {/* Footer and Contacts */}
      <ContactFooter />
    </div>
  );
}
