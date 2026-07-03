import { motion } from "motion/react";
import { Music, ArrowRight, MessageSquare, Compass } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Hero() {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-16 sm:pb-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A0B09] via-[#0E0F0D] to-[#121311]"
    >
      {/* Decorative Traditional Pampa Background Accent Elements */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-brand-yellow/10 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/10 right-1/10 w-96 h-96 rounded-full bg-brand-blue/10 filter blur-3xl pointer-events-none" />

      {/* Decorative vertical lines representing musical staff or cultural borders */}
      <div className="absolute top-0 bottom-0 left-12 w-px bg-neutral-800/40 hidden xl:block pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-12 w-px bg-neutral-800/40 hidden xl:block pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text and Bio Introduction Content */}
          <motion.div
            id="hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Tagline / Origin */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 rounded-full border border-brand-yellow/20 w-fit mb-6">
              <Compass className="w-3.5 h-3.5 text-brand-yellow animate-spin-slow" />
              <span className="font-sans text-[11px] font-bold tracking-widest text-brand-terracotta uppercase">
                Artigas ➔ Quaraí ➔ Esteio
              </span>
            </div>

            {/* Display Heading */}
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#FAF8F5] mb-4 uppercase leading-none">
              Daniel Mello <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-terracotta via-brand-yellow to-brand-blue font-serif italic normal-case tracking-normal">
                Uruguaio
              </span>
            </h1>

            {/* Subheadline Trajectory Summary */}
            <p className="font-sans text-base sm:text-lg text-neutral-300 max-w-xl mb-6 font-medium leading-relaxed">
              Mais de <span className="text-[#FAF8F5] font-bold">40 anos de trajetória</span> na música latino-americana e na valorização da identidade de fronteira. Um artista que conecta corações entre o Uruguai e o Rio Grande do Sul.
            </p>

            {/* Signature Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative pl-6 py-3 border-l-4 border-brand-terracotta bg-[#181A17] border-y border-r border-[#232521] pr-4 rounded-r-xl max-w-lg mb-8 shadow-sm"
            >
              <p className="font-serif italic text-base sm:text-lg text-neutral-200 leading-relaxed">
                &ldquo;Uruguaio de cepa, mas gaúcho de coração.&rdquo;
              </p>
              <span className="block mt-1 font-mono text-[10px] text-brand-terracotta uppercase tracking-widest font-semibold">
                — Daniel Mello
              </span>
            </motion.div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button
                id="hero-cta-contact"
                onClick={() => handleScrollToSection("contato")}
                className="px-6 py-3.5 bg-[#FAF8F5] text-[#0A0B09] rounded-xl font-sans text-sm font-semibold tracking-wider uppercase shadow-lg hover:bg-brand-yellow hover:text-[#0A0B09] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Contratar Show</span>
                <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>

              <button
                id="hero-cta-music"
                onClick={() => handleScrollToSection("musica")}
                className="px-6 py-3.5 border-2 border-[#232521] text-white rounded-xl font-sans text-sm font-semibold tracking-wider uppercase hover:border-brand-blue hover:bg-brand-blue/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Ouvir Discografia</span>
                <Music className="w-4 h-4 text-brand-blue group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Majestic Hero Image Placeholder Area */}
          <motion.div
            id="hero-media"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="relative w-full max-w-sm sm:max-w-md bg-[#121311] p-3 rounded-3xl border border-[#232521] shadow-xl">
              {/* Decorative Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-brand-terracotta via-brand-yellow to-brand-blue opacity-30 blur-sm pointer-events-none -z-10" />
              
              {/* Image slot */}
              <div className="aspect-[4/5] w-full relative rounded-2xl overflow-hidden bg-[#181A17] border border-[#232521]">
                <ImagePlaceholder
                  type="profile"
                  label="Foto Principal de Daniel Mello"
                  description="Carregue aqui a foto de estúdio do Daniel cantando com o microfone (como na capa do seu portfólio físico)."
                  dimensions="800 x 1000 px (Retrato 4:5)"
                  className="w-full h-full min-h-[350px] sm:min-h-[420px] rounded-2xl border-none bg-[#181A17]"
                />
              </div>

              {/* Caption or small badge at bottom of photo */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#121311]/95 backdrop-blur-sm px-4 py-3 rounded-xl border border-[#232521] flex items-center justify-between shadow-md">
                <div>
                  <span className="block font-sans text-[10px] uppercase font-bold text-neutral-500 tracking-wider">
                    Origem & Raízes
                  </span>
                  <span className="block font-serif italic text-xs font-semibold text-neutral-200">
                    Nascido em Artigas, Uruguai
                  </span>
                </div>
                <div className="bg-[#181A17] px-2.5 py-1 rounded-md border border-[#232521]">
                  <span className="block font-mono text-[9px] font-bold text-brand-terracotta uppercase">
                    Esteio - RS
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
