import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle, Instagram, Youtube, Music, ArrowUp } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import ArtistLogo from "./ArtistLogo";

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    interesse: "shows",
    mensagem: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate sending email safely
    setTimeout(() => {
      setStatus("success");
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        interesse: "shows",
        mensagem: "",
      });
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contato"
      className="bg-brand-charcoal text-[#FAF8F5] pt-20 pb-8 relative overflow-hidden"
    >
      {/* Background graphic stripes/lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-yellow via-brand-terracotta to-brand-blue" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-yellow/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Grid: Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 border-b border-neutral-800">
          
          {/* Column 1: Info and Philosophy */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs text-brand-yellow font-bold uppercase tracking-widest block">
                Agendamento & Parcerias
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
                Vamos Construir Juntos!
              </h2>
              <div className="w-16 h-1 bg-brand-yellow" />
              <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Disponível para shows, festivais, eventos corporativos ou comunitários, palestras sobre ativismo e economia solidária, oficinas de violão e gravações de podcast. Entre em contato para construirmos uma experiência memorável.
              </p>
            </div>

            {/* Quick Contact Info cards */}
            <div className="space-y-4">
              {/* Phone / WhatsApp */}
              <a
                href="https://wa.me/555193282401?text=Vim%20do%20teu%20site%20e%20queria%20conversar%20contigo."
                target="_blank"
                rel="noreferrer"
                id="contact-whatsapp"
                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-brand-yellow transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-brand-yellow text-brand-charcoal group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-neutral-500">
                    Telefone & WhatsApp
                  </span>
                  <span className="block font-sans font-bold text-sm sm:text-base text-white">
                    +55 51 93282-401
                  </span>
                </div>
              </a>

              {/* Email Contact */}
              <a
                href="mailto:contato@danielmellouruguaio.com.br"
                id="contact-email"
                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-brand-blue transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-brand-blue text-white group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-neutral-500">
                    E-mail Oficial
                  </span>
                  <span className="block font-sans font-bold text-xs sm:text-sm text-white break-all">
                    contato@danielmellouruguaio.com.br
                  </span>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                <div className="p-3 rounded-lg bg-brand-terracotta text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-neutral-500">
                    Residência Atual
                  </span>
                  <span className="block font-sans font-bold text-xs sm:text-sm text-white">
                    Esteio, Rio Grande do Sul — Brasil
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Elegant Form */}
          <div className="lg:col-span-7 bg-neutral-900/50 border border-neutral-800 p-6 sm:p-8 rounded-3xl shadow-xl">
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider mb-6">
              Envie uma Mensagem Direta
            </h3>

            <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nome */}
                <div className="space-y-1.5">
                  <label htmlFor="form-nome" className="block font-sans text-xs font-semibold text-neutral-400">
                    Seu Nome
                  </label>
                  <input
                    id="form-nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white font-sans text-sm focus:outline-none focus:border-brand-yellow transition-colors placeholder:text-neutral-600"
                    placeholder="Ex: João da Silva"
                  />
                </div>

                {/* Telefone */}
                <div className="space-y-1.5">
                  <label htmlFor="form-telefone" className="block font-sans text-xs font-semibold text-neutral-400">
                    Telefone para Contato
                  </label>
                  <input
                    id="form-telefone"
                    type="tel"
                    required
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white font-sans text-sm focus:outline-none focus:border-brand-yellow transition-colors placeholder:text-neutral-600"
                    placeholder="Ex: (51) 99999-9999"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="form-email" className="block font-sans text-xs font-semibold text-neutral-400">
                  E-mail
                </label>
                <input
                  id="form-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white font-sans text-sm focus:outline-none focus:border-brand-yellow transition-colors placeholder:text-neutral-600"
                  placeholder="Ex: joao@email.com"
                />
              </div>

              {/* Interesse */}
              <div className="space-y-1.5">
                <label htmlFor="form-interesse" className="block font-sans text-xs font-semibold text-neutral-400">
                  Qual é o seu Interesse?
                </label>
                <select
                  id="form-interesse"
                  value={formData.interesse}
                  onChange={(e) => setFormData({ ...formData, interesse: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white font-sans text-sm focus:outline-none focus:border-brand-yellow transition-colors cursor-pointer"
                >
                  <option value="shows">Contratar Shows / Eventos Culturais</option>
                  <option value="podcast">Participação em Podcasts / Rádio</option>
                  <option value="solidaria">Projetos de Economia Solidária</option>
                  <option value="educacao">Aulas de Violão / Oficinas</option>
                  <option value="outros">Outros Assuntos / Imprensa</option>
                </select>
              </div>

              {/* Mensagem */}
              <div className="space-y-1.5">
                <label htmlFor="form-mensagem" className="block font-sans text-xs font-semibold text-neutral-400">
                  Sua Mensagem
                </label>
                <textarea
                  id="form-mensagem"
                  rows={4}
                  required
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white font-sans text-sm focus:outline-none focus:border-brand-yellow transition-colors placeholder:text-neutral-600 resize-none"
                  placeholder="Escreva sua proposta ou mensagem detalhadamente..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success-msg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-brand-yellow/20 border border-brand-yellow/40 rounded-xl flex items-center gap-3 text-brand-yellow"
                    >
                      <CheckCircle className="w-5 h-5 shrink-0" />
                      <span className="font-sans text-xs font-bold uppercase tracking-wider">
                        Mensagem enviada com sucesso! Retornaremos o quanto antes.
                      </span>
                    </motion.div>
                  ) : (
                    <motion.button
                      key="submit-btn"
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3.5 bg-brand-yellow text-brand-charcoal rounded-xl font-sans text-sm font-semibold tracking-wider uppercase hover:bg-white hover:text-brand-charcoal transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {status === "loading" ? (
                        <span className="w-5 h-5 border-2 border-brand-charcoal border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Enviar Mensagem</span>
                          <Send className="w-4 h-4 rotate-45" />
                        </>
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </div>

        {/* Brand Logos and Footnotes */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Brand Signature and Logo Placeholder */}
          <div className="space-y-4 max-w-sm">
            <h4 className="font-display font-black text-lg tracking-widest text-white uppercase leading-none">
              Daniel Mello Uruguaio
            </h4>
            <p className="font-sans text-xs text-neutral-500 leading-relaxed">
              Valorizando as heranças tradicionais do Pampa, integrando fronteiras, e semeando cidadania por meio do violão e do cooperativismo.
            </p>
            {/* Logo space */}
            <div className="bg-neutral-900 border border-neutral-800 p-3.5 rounded-2xl flex items-center justify-center">
              <ArtistLogo variant="horizontal" inverse={true} />
            </div>
          </div>

          {/* Social connections */}
          <div className="space-y-4">
            <span className="block font-mono text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
              Conecte-se nas Redes
            </span>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/danielmellouruguaio"
                target="_blank"
                rel="noreferrer"
                id="footer-instagram"
                className="p-3 bg-neutral-900 hover:bg-brand-yellow hover:text-brand-charcoal border border-neutral-800 rounded-full transition-colors text-white"
                title="Siga no Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@euamoesteio"
                target="_blank"
                rel="noreferrer"
                id="footer-youtube"
                className="p-3 bg-neutral-900 hover:bg-brand-yellow hover:text-brand-charcoal border border-neutral-800 rounded-full transition-colors text-white"
                title="Inscreva-se no YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://open.spotify.com/intl-pt/artist/4yEgD7326BzaptH3mATsp0"
                target="_blank"
                rel="noreferrer"
                id="footer-spotify"
                className="p-3 bg-neutral-900 hover:bg-brand-yellow hover:text-brand-charcoal border border-neutral-800 rounded-full transition-colors text-white"
                title="Ouça no Spotify"
              >
                <Music className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Scroll to top button */}
          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            className="p-4 bg-neutral-900 hover:bg-brand-yellow hover:text-brand-charcoal border border-neutral-800 rounded-2xl transition-colors text-neutral-400 group cursor-pointer"
            title="Voltar ao Topo"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Footer Base Info */}
        <div className="pt-8 mt-12 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-600 gap-4">
          <span>&copy; {new Date().getFullYear()} Daniel Mello Uruguaio. Todos os direitos reservados.</span>
          <span>Desenvolvido com carinho • Esteio - RS & Artigas</span>
        </div>

      </div>
    </footer>
  );
}
