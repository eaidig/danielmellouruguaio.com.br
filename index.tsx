import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";

const ARTIST_DATA = {
  name: "Daniel Mello Uruguayo",
  tagline: "Uma Vida Dedicada à Cultura, Comunicação e Gestão Pública",
  location: "Esteio, RS - Brasil",
  stats: [
    { label: "Anos de Carreira", value: "30+" },
    { label: "Discos Gravados", value: "10" },
    { label: "Anos no Brasil", value: "25" }
  ],
  bio: {
    highlight: "Referência no cenário cultural e radiofônico, Daniel Mello Uruguayo une a arte da música com a ciência da Gestão Pública.",
    main: "Natural do Uruguai e radicado em Esteio há 25 anos, Daniel atua como Agente Setorial da Economia Solidária e Vice-Presidente do Diretório do PT em Esteio (RS). Sua trajetória é marcada pela defesa da integração latino-americana.",
    radio: "Diretor da Rádio 'Amo Esteio', ele lidera um hub de comunicação que conecta o portal euamoesteio.com.br a emissoras no Uruguai, Argentina, Paraguai e Europa.",
    academic: "Com formação em Gestão Pública, Daniel fortalece a conexão entre políticas públicas, economia solidária e o acesso democrático à cultura."
  },
  links: {
    instagram: "https://www.instagram.com/danielmellouruguaio",
    youtube: "https://www.youtube.com/@danielmellouruguaio",
    whatsapp: "https://api.whatsapp.com/send?phone=555193282401&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20site%20danielmellouruguaio.com.br%20"
  }
};

const App: React.FC = () => {
  const [aiQuote, setAiQuote] = useState<string>("A integração cultural é o ritmo que move a nossa Pátria Grande.");
  const [isAiLoading, setIsAiLoading] = useState(false);

  const fetchAiThought = useCallback(async () => {
    setIsAiLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "Gere uma frase curta, poderosa e inspiradora (máximo 12 palavras) sobre a união dos povos latino-americanos, o poder da música de fronteira ou a importância da economia solidária. Use um tom sábio e acolhedor.",
        config: {
          systemInstruction: "Você é Daniel Mello Uruguayo: Músico, Radialista e Gestor Público. Suas frases refletem 30 anos de experiência e um profundo amor pela América Latina."
        }
      });
      if (response.text) setAiQuote(response.text.trim());
    } catch (err) {
      console.error("Gemini Error:", err);
    } finally {
      setIsAiLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAiThought();
  }, [fetchAiThought]);

  return (
    <div className="min-h-screen selection:bg-amber-500 selection:text-slate-900 scroll-smooth">
      {/* Navegação */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-white font-black tracking-tighter text-xl leading-none uppercase">Daniel Mello</span>
            <span className="text-amber-500 font-bold text-[10px] tracking-[0.4em] uppercase">Uruguayo</span>
          </div>
          <div className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <a href="#historia" className="hover:text-white transition-colors">Trajetória</a>
            <a href="#atuacao" className="hover:text-white transition-colors">Atuação Social</a>
            <a href="#radio" className="hover:text-white transition-colors">Comunicação</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </div>
          <a 
            href={ARTIST_DATA.links.whatsapp} 
            target="_blank" 
            className="group relative bg-amber-500 text-slate-950 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest overflow-hidden hover:scale-105 transition-all"
          >
            <span className="relative z-10">Agendar / Contato</span>
            <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform"></div>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/80 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2000" 
            className="w-full h-full object-cover grayscale"
            alt="Fundo Daniel Mello"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-5xl space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500">Música • Rádio • Gestão Pública</span>
            </div>
            <h1 className="text-7xl md:text-[9rem] font-black text-white leading-[0.85] tracking-tighter">
              A VOZ DA <br/> <span className="text-gradient italic">FRONTEIRA.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed">
              {ARTIST_DATA.tagline}. Três décadas integrando a América Latina através da comunicação e da arte.
            </p>
            <div className="flex flex-wrap gap-5 pt-6">
              <a href="#historia" className="bg-white text-slate-950 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-amber-500 transition-all shadow-2xl shadow-white/5">
                Ver Trajetória
              </a>
              <div className="flex items-center gap-4 px-6">
                <a href={ARTIST_DATA.links.youtube} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
                <a href={ARTIST_DATA.links.instagram} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.267-.07-1.647-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trajetória Visual */}
      <section id="historia" className="py-32 bg-slate-900/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em]">Três décadas de arte</h2>
                <h3 className="text-5xl font-black text-white tracking-tighter uppercase leading-none">Música que rompe <br/> <span className="italic">fronteiras.</span></h3>
              </div>
              <p className="text-2xl text-white font-medium leading-tight">
                {ARTIST_DATA.bio.highlight}
              </p>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>{ARTIST_DATA.bio.main}</p>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                  {ARTIST_DATA.stats.map((s, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-4xl font-black text-white">{s.value}</div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-amber-500">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-10 bg-amber-500/5 blur-[120px] group-hover:bg-amber-500/10 transition-all duration-700"></div>
              <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/5 rotate-2 group-hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000" 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" 
                  alt="Daniel Mello no estúdio"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass p-10 rounded-3xl border border-white/10 shadow-2xl animate-float max-w-xs">
                 <p className="text-slate-400 text-sm leading-relaxed italic font-serif">
                   "A música é o único idioma que não precisa de tradução para unir dois corações latino-americanos."
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Atuação Social e Política */}
      <section id="atuacao" className="py-32 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em]">Compromisso Social</h2>
            <h3 className="text-5xl font-black text-white tracking-tighter uppercase">Gestão & Economia Solidária</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass p-10 rounded-[2.5rem] border border-white/5 space-y-6 hover:border-amber-500/30 transition-all group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h4 className="text-xl font-bold text-white">Gestão Pública</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{ARTIST_DATA.bio.academic}</p>
            </div>
            <div className="glass p-10 rounded-[2.5rem] border border-white/5 space-y-6 hover:border-amber-500/30 transition-all group lg:scale-110 bg-slate-900/40">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-white">Liderança Política</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Vice-Presidente do Diretório do PT em Esteio (RS), atuando na linha de frente das transformações sociais e culturais da região.</p>
            </div>
            <div className="glass p-10 rounded-[2.5rem] border border-white/5 space-y-6 hover:border-amber-500/30 transition-all group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </div>
              <h4 className="text-xl font-bold text-white">Economia Solidária</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Agente Setorial focado em gerar autonomia e sustentabilidade para comunidades locais através do cooperativismo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Voz da IA */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="relative glass p-16 md:p-24 rounded-[4rem] text-center border border-amber-500/10 shadow-3xl shadow-amber-500/5">
            <div className="absolute top-10 left-10 text-amber-500/5">
               <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H21.017C22.1216 3 23.017 3.89543 23.017 5V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1 21L1 18C1 16.8954 1.89543 16 3 16H6C6.55228 16 7 15.5523 7 15V9C7 8.44772 6.55228 8 6 8H3C1.89543 8 1 7.10457 1 6V5C1 3.89543 1.89543 3 3 3H8C9.10457 3 10 3.89543 10 5V15C10 18.3137 7.31371 21 4 21H1Z"/></svg>
            </div>
            <div className="relative z-10 space-y-10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-amber-500">Filosofia do Artista</h4>
              <blockquote className="text-3xl md:text-5xl font-serif italic text-white leading-tight">
                {isAiLoading ? (
                  <span className="opacity-20 animate-pulse">Tecendo palavras...</span>
                ) : `"${aiQuote}"`}
              </blockquote>
              <button 
                onClick={fetchAiThought}
                disabled={isAiLoading}
                className="inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-amber-500 transition-all disabled:opacity-30"
              >
                <svg className={`w-4 h-4 ${isAiLoading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                Novos Horizontes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rádio / Hub Digital */}
      <section id="radio" className="py-32 bg-slate-950 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-10">
              <div className="space-y-4">
                <h2 className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em]">O Ar da Liberdade</h2>
                <h3 className="text-6xl font-black text-white tracking-tighter uppercase leading-[0.85]">Rádio <br/> Amo Esteio.</h3>
              </div>
              <p className="text-xl text-slate-400 font-light leading-relaxed">
                {ARTIST_DATA.bio.radio} Conexões que atravessam o oceano e unem as culturas de língua espanhola e portuguesa.
              </p>
              <div className="pt-6">
                <a href="http://euamoesteio.com.br" target="_blank" className="inline-block bg-amber-500 text-slate-950 px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-amber-500/10">
                  Visitar Portal
                </a>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="aspect-video bg-slate-900 rounded-[3rem] border border-white/5 overflow-hidden flex items-center justify-center p-12">
                <div className="text-center space-y-6">
                   <div className="w-20 h-20 bg-amber-500 text-slate-950 rounded-full flex items-center justify-center mx-auto animate-pulse">
                      <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                   </div>
                   <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Transmissão ao Vivo em euamoesteio.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contato Final */}
      <footer id="contato" className="pt-32 pb-12 bg-slate-900/30 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-20 mb-20">
            <div className="lg:col-span-2 space-y-10">
               <div className="flex flex-col">
                  <span className="text-white font-black text-5xl tracking-tighter uppercase leading-none">Daniel Mello</span>
                  <span className="text-amber-500 font-bold text-lg tracking-[0.5em] uppercase">Uruguayo</span>
               </div>
               <p className="text-slate-500 text-lg max-w-sm leading-relaxed font-light">
                 Três décadas de história contadas através da música, rádio e gestão pública focada nas pessoas.
               </p>
               <div className="flex gap-4">
                  {[
                    { link: ARTIST_DATA.links.instagram, icon: "Instagram" },
                    { link: ARTIST_DATA.links.youtube, icon: "YouTube" },
                    { link: ARTIST_DATA.links.whatsapp, icon: "WhatsApp" }
                  ].map((s, i) => (
                    <a key={i} href={s.link} target="_blank" className="text-[10px] font-black uppercase tracking-widest text-white hover:text-amber-500 transition-colors border border-white/10 px-6 py-2 rounded-full">
                      {s.icon}
                    </a>
                  ))}
               </div>
            </div>
            
            <div className="space-y-8">
               <h5 className="text-[10px] font-black uppercase tracking-widest text-amber-500">Navegação</h5>
               <ul className="space-y-4 text-slate-400 text-sm font-bold">
                  <li><a href="#historia" className="hover:text-white transition-colors">Biografia</a></li>
                  <li><a href="#atuacao" className="hover:text-white transition-colors">Projetos Sociais</a></li>
                  <li><a href="#radio" className="hover:text-white transition-colors">Amo Esteio</a></li>
               </ul>
            </div>

            <div className="space-y-8">
               <h5 className="text-[10px] font-black uppercase tracking-widest text-amber-500">Localização</h5>
               <p className="text-slate-400 text-sm font-bold leading-relaxed">
                  Esteio, Rio Grande do Sul<br/>
                  Grande Porto Alegre<br/>
                  Sul do Brasil
               </p>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">© 2024 Daniel Mello Uruguayo. Website Oficial.</span>
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">Otimizado para o Coração da América Latina</span>
          </div>
        </div>
      </footer>
      
      {/* Botão Flutuante Desktop/Mobile */}
      <a 
        href={ARTIST_DATA.links.whatsapp} 
        target="_blank" 
        className="fixed bottom-10 right-10 z-50 p-5 bg-amber-500 text-slate-950 rounded-[2rem] shadow-3xl hover:scale-110 active:scale-95 transition-all group overflow-hidden"
      >
        <div className="relative z-10 flex items-center gap-3">
           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.301-.15-1.779-.878-2.053-.978-.275-.099-.475-.148-.675.15-.199.299-.774.978-.949 1.177-.175.199-.349.225-.651.075-.3-.15-1.265-.467-2.41-1.487-.892-.795-1.493-1.778-1.668-2.078-.175-.3-.018-.462.132-.611.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.199.05-.374-.025-.524-.075-.15-.675-1.625-.925-2.224-.243-.584-.489-.505-.675-.514-.175-.008-.375-.01-.575-.01s-.524.075-.798.374c-.275.3-.105 1.174 0 1.549s1.374 2.7 3.321 4.2c2.115 1.63 3.125 1.673 4.242 1.673.844 0 1.341-.122 1.838-.344.497-.221 1.342-.748 1.542-1.246.2-.499.2-.924.14-1.024-.06-.1-.23-.15-.53-.3z" /></svg>
           <span className="hidden md:block text-[10px] font-black uppercase tracking-widest">Contatar</span>
        </div>
      </a>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}