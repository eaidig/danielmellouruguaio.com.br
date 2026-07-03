import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Music, Play, ExternalLink, Youtube, Radio, Newspaper, ArrowUpRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function MusicSection() {
  const [loadSpotify, setLoadSpotify] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto load Spotify embed after a short timeout or when in view to prioritize initial rendering
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadSpotify(true);
    }, 2500); // Wait 2.5s to let the main page load first

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadSpotify(true);
        }
      },
      { rootMargin: "200px" } // trigger slightly before it comes into view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearTimeout(timer);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const clippingNews = [
    {
      id: "news-1",
      tag: "Solidariedade",
      title: "Feira de Solidariedade e Reconstrução no Novo Esteio",
      source: "Portal Eu Amo Esteio",
      desc: "Liderada por Daniel Mello e Digor, iniciativa promove a economia criativa local e une a música gaúcha e uruguaia para apoiar famílias.",
    },
    {
      id: "news-2",
      tag: "Resiliência",
      title: "Reconstruindo Vidas: Protagonismo Comunitário",
      source: "Clipping Cultural",
      desc: "Como a arte e o ativismo cultural de Daniel Mello se tornaram ferramentas de diagnóstico e cura coletiva para as comunidades atingidas pelas enchentes.",
    },
    {
      id: "news-3",
      tag: "Gestão",
      title: "Novo Esteio: Da Tragédia à Vanguarda da Economia Solidária",
      source: "Notícias Locais",
      desc: "Sob a liderança de comissões de moradores e fomento cultural, a música e a autogestão se transformam em laboratórios de inovação produtiva.",
    },
  ];

  return (
    <section
      id="musica"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#0A0B09] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="font-mono text-xs text-brand-yellow font-bold uppercase tracking-widest block mb-2">
            Universo Sonoro
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#FAF8F5] mb-4 uppercase">
            Música & Clipping
          </h2>
          <div className="w-16 h-1 bg-brand-yellow mx-auto rounded-full mb-6" />
          <p className="font-sans text-neutral-300 text-sm sm:text-base leading-relaxed">
            Sintonize com as melodias de fronteira e acompanhe o impacto real do trabalho artístico de Daniel Mello nas ruas e na imprensa.
          </p>
        </div>

        {/* Music Display Grid (Spotify & YouTube) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-24">
          
          {/* Column 1: Spotify Embed Area (Lazy loaded for high performance) */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
            <div className="bg-[#121311] border border-[#232521] p-6 rounded-3xl shadow-sm flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-brand-yellow mb-4">
                  <Music className="w-5 h-5" />
                  <span className="font-mono text-xs uppercase tracking-widest font-bold">
                    Spotify Oficial
                  </span>
                </div>
                
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#FAF8F5] uppercase mb-3">
                  Discografia Completa
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  Navegue pelas principais faixas, álbuns e lançamentos do artista diretamente pelo tocador do Spotify. Design otimizado e fluido para celulares.
                </p>
              </div>

              {/* Spotify Player Container */}
              <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 min-h-[380px] sm:min-h-[400px] flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                  {!loadSpotify ? (
                    <motion.div
                      key="spotify-skeleton"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-neutral-900 to-neutral-950 text-white"
                    >
                      {/* Beautiful Casette Tape Mockup */}
                      <div className="w-24 h-14 border-2 border-brand-yellow/30 rounded-lg flex items-center justify-between p-2 relative mb-6">
                        <div className="w-5 h-5 rounded-full border border-brand-yellow/40 flex items-center justify-center animate-spin-slow">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                        </div>
                        <div className="h-1 bg-brand-yellow/20 flex-1 mx-2 rounded" />
                        <div className="w-5 h-5 rounded-full border border-brand-yellow/40 flex items-center justify-center animate-spin-slow">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                        </div>
                      </div>

                      <span className="block font-mono text-[10px] text-brand-yellow uppercase tracking-widest mb-2">
                        Carregando Player Seguro
                      </span>
                      <h4 className="font-sans font-semibold text-sm mb-2 text-white">
                        Daniel Mello Uruguaio no Spotify
                      </h4>
                      <p className="font-sans text-xs text-neutral-400 max-w-xs mb-4">
                        Para garantir o carregamento ultra-rápido no seu celular, o player será inicializado em um instante.
                      </p>
                      
                      <button
                        id="load-spotify-btn"
                        onClick={() => setLoadSpotify(true)}
                        className="px-4 py-2 bg-brand-yellow text-[#0E0F0D] text-xs font-bold rounded-full uppercase tracking-wider hover:bg-white hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-1.5"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        Ouvir Agora
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="spotify-embed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <iframe
                        id="spotify-iframe"
                        src="https://open.spotify.com/embed/artist/4yEgD7326BzaptH3mATsp0?utm_source=generator"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="w-full h-full border-none"
                      ></iframe>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Column 2: YouTube Promo Card */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
            <div className="bg-[#121311] border border-[#232521] p-6 rounded-3xl shadow-sm flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-red-600 mb-4">
                  <Youtube className="w-5 h-5" />
                  <span className="font-mono text-xs uppercase tracking-widest font-bold">
                    YouTube Oficial
                  </span>
                </div>
                
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#FAF8F5] uppercase mb-3">
                  Vídeos, Lives & Documentários
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  Inscreva-se no canal oficial para assistir a apresentações ao vivo, entrevistas exclusivas, mini-documentários de sua carreira e conteúdos comunitários em Esteio.
                </p>
              </div>

              {/* YouTube Mockup Card */}
              <div className="relative rounded-2xl overflow-hidden border border-[#232521] bg-[#181A17] p-2 flex-1 flex flex-col justify-center">
                <div className="aspect-video w-full rounded-xl overflow-hidden relative group bg-neutral-900 flex items-center justify-center">
                  {/* Image Placeholder */}
                  <ImagePlaceholder
                    type="event"
                    label="Mini Documentário de Carreira"
                    description="Preview ou capa do mini documentário de Daniel Mello no YouTube."
                    dimensions="640 x 360 px"
                    className="w-full h-full border-none bg-neutral-900"
                  />
                  
                  {/* Decorative Play Button */}
                  <a
                    href="https://www.youtube.com/@euamoesteio"
                    target="_blank"
                    rel="noreferrer"
                    id="youtube-mockup-play-btn"
                    className="absolute p-4 rounded-full bg-red-600 text-white shadow-lg group-hover:scale-110 group-hover:bg-red-700 transition-all duration-300 z-10 flex items-center justify-center"
                    title="Assistir no YouTube"
                  >
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </a>
                </div>

                <div className="mt-4 text-center">
                  <span className="block font-sans font-semibold text-xs text-[#FAF8F5] mb-3">
                    Canal: @euamoesteio
                  </span>
                  
                  <a
                    href="https://www.youtube.com/@euamoesteio"
                    target="_blank"
                    rel="noreferrer"
                    id="youtube-channel-btn"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl uppercase tracking-wider transition-colors cursor-pointer w-full"
                  >
                    <span>Acessar YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Press Clipping and Reconstruction Section */}
        <div id="clipping-section" className="border-t border-[#232521] pt-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-brand-terracotta mb-2">
                <Newspaper className="w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-widest font-bold">
                  Imprensa & Cidade
                </span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-3xl text-[#FAF8F5] uppercase">
                Clipping de Imprensa
              </h3>
            </div>
            
            <span className="font-sans text-xs text-neutral-400 max-w-xs sm:text-right">
              Notícias, conquistas e relatos que validam a herança e o impacto de Daniel Mello no cenário de Esteio - RS.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clippingNews.map((news) => (
              <div
                key={news.id}
                id={`clipping-${news.id}`}
                className="bg-[#121311] border border-[#232521] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-yellow/30 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block font-mono text-[9px] font-bold text-brand-terracotta bg-brand-terracotta/5 px-2 py-0.5 rounded uppercase tracking-wider mb-3">
                    {news.tag}
                  </span>
                  <h4 className="font-display font-bold text-sm sm:text-base text-[#FAF8F5] mb-2 hover:text-brand-yellow transition-colors leading-snug">
                    <a
                      href="https://euamoesteio.com.br"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 group"
                    >
                      {news.title}
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </h4>
                  <p className="font-sans text-xs text-neutral-400 leading-relaxed mb-4">
                    {news.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#232521] flex items-center justify-between text-[10px] font-mono text-neutral-500">
                  <span>FONTE: {news.source}</span>
                  <span className="text-brand-blue font-semibold">LEIA MAIS</span>
                </div>
              </div>
            ))}
          </div>

          {/* Press/Photo Gallery Placeholders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 bg-[#121311] p-4 rounded-3xl border border-[#232521]">
            <div className="p-2">
              <div className="aspect-[16/9] rounded-xl overflow-hidden bg-[#181A17]">
                <ImagePlaceholder
                  type="general"
                  label="Galeria: Mutirões de Reconstrução"
                  description="Carregue aqui fotos de Daniel Mello coordenando doações, shows comunitários ou atividades pós-cheias no Bairro Novo Esteio."
                  dimensions="800 x 450 px (16:9)"
                  className="w-full h-full min-h-[160px] bg-[#181A17]"
                />
              </div>
              <p className="font-sans text-xs text-neutral-400 italic mt-2.5 text-center">
                Ações solidárias de impacto direto no Bairro Novo Esteio — Novembro de 2025
              </p>
            </div>

            <div className="p-2">
              <div className="aspect-[16/9] rounded-xl overflow-hidden bg-[#181A17]">
                <ImagePlaceholder
                  type="general"
                  label="Galeria: Rádio & Podcasts"
                  description="Carregue aqui fotos de Daniel atuando como radialista em sua cabine de som ou estúdio de rádio."
                  dimensions="800 x 450 px (16:9)"
                  className="w-full h-full min-h-[160px] bg-[#181A17]"
                />
              </div>
              <p className="font-sans text-xs text-neutral-400 italic mt-2.5 text-center">
                Daniel Mello comunicando as vozes e causos de nossa terra
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
