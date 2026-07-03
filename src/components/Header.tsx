import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Instagram, Youtube, Music, Mail } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import ArtistLogo from "./ArtistLogo";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "inicio", label: "Início" },
    { id: "trajetoria", label: "Trajetória" },
    { id: "projetos", label: "Projetos & Ativismo" },
    { id: "podcast", label: "Estación Fronteira" },
    { id: "musica", label: "Músicas" },
    { id: "contato", label: "Contato" },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0A0B09]/90 border-b border-[#232521] backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand/Logo Area */}
          <div 
            onClick={() => handleScrollTo("inicio")} 
            className="cursor-pointer"
          >
            <ArtistLogo variant="horizontal" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleScrollTo(item.id)}
                className={`font-sans text-xs font-semibold tracking-wider uppercase transition-colors relative py-1 cursor-pointer ${
                  activeSection === item.id
                    ? "text-brand-yellow"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-yellow"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Social Links & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <a
                href="https://www.instagram.com/danielmellouruguaio"
                target="_blank"
                rel="noreferrer"
                id="social-instagram-header"
                className="p-2 rounded-full hover:bg-brand-yellow/10 text-neutral-400 hover:text-brand-yellow transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@euamoesteio"
                target="_blank"
                rel="noreferrer"
                id="social-youtube-header"
                className="p-2 rounded-full hover:bg-brand-yellow/10 text-neutral-400 hover:text-brand-yellow transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://open.spotify.com/intl-pt/artist/4yEgD7326BzaptH3mATsp0"
                target="_blank"
                rel="noreferrer"
                id="social-spotify-header"
                className="p-2 rounded-full hover:bg-brand-yellow/10 text-neutral-400 hover:text-brand-yellow transition-colors"
                title="Spotify"
              >
                <Music className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/555193282401?text=Vim%20do%20teu%20site%20e%20queria%20conversar%20contigo."
                target="_blank"
                rel="noreferrer"
                id="social-whatsapp-header"
                className="p-2.5 rounded-full bg-brand-yellow hover:bg-brand-yellow/90 text-[#1F201E] transition-all duration-300 flex items-center justify-center hover:scale-105"
                title="Fale Comigo no WhatsApp"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg md:hidden hover:bg-neutral-900 text-neutral-300 transition-colors cursor-pointer"
              aria-label="Abrir Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden bg-[#121311] border-b border-[#232521] shadow-lg max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleScrollTo(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-sans text-sm font-semibold tracking-wide uppercase transition-colors block ${
                    activeSection === item.id
                      ? "bg-brand-yellow/10 text-brand-yellow"
                      : "text-neutral-300 hover:bg-neutral-800 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 border-t border-[#232521] flex items-center justify-between px-4">
                <span className="font-sans text-xs text-neutral-500 font-semibold uppercase tracking-wider">
                  Redes Sociais
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/danielmellouruguaio"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-neutral-800 text-neutral-300 hover:text-brand-yellow"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.youtube.com/@euamoesteio"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-neutral-800 text-neutral-300 hover:text-brand-yellow"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href="https://open.spotify.com/intl-pt/artist/4yEgD7326BzaptH3mATsp0"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-neutral-800 text-neutral-300 hover:text-brand-yellow"
                  >
                    <Music className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/555193282401?text=Vim%20do%20teu%20site%20e%20queria%20conversar%20contigo."
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-brand-yellow text-[#1F201E]"
                    title="Fale Comigo no WhatsApp"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="p-5 bg-[#181A17] rounded-2xl text-center border border-[#232521]">
                <span className="block text-[10px] font-mono text-brand-terracotta uppercase tracking-widest font-bold mb-3">
                  Logotipo Oficial Criado
                </span>
                <div className="bg-[#121311] border border-[#232521] p-4 rounded-xl shadow-sm inline-block">
                  <ArtistLogo variant="badge" />
                </div>
                <p className="font-sans text-[10px] text-neutral-400 mt-2.5">
                  Logotipo oficial vetorizado combinando violão e microfone em sinergia com a herança uruguaia e gaúcha.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
