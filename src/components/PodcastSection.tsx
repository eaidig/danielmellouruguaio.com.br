import { motion } from "motion/react";
import { Radio, ExternalLink, Calendar, Users, MapPin, Heart, Mail } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function PodcastSection() {
  return (
    <section
      id="podcast"
      className="py-20 sm:py-28 bg-[#0E0F0D] border-t border-b border-[#1F201E]/80 relative overflow-hidden"
    >
      {/* Background design accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/5 rounded-full filter blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue/5 rounded-full filter blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Podcast Visual / Cover Banner Art Placeholder */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-[#121311] p-3.5 rounded-3xl border border-[#232521] shadow-md relative group">
              {/* Decorative Audio-Wave Graphic Overlay on hover */}
              <div className="absolute top-6 left-6 z-20 flex gap-1 h-6 items-end pointer-events-none">
                <span className="w-1 bg-brand-yellow h-3 animate-pulse rounded-full" />
                <span className="w-1 bg-brand-yellow h-5 animate-pulse delay-75 rounded-full" />
                <span className="w-1 bg-brand-yellow h-2 animate-pulse delay-150 rounded-full" />
                <span className="w-1 bg-brand-yellow h-6 animate-pulse delay-200 rounded-full" />
                <span className="w-1 bg-brand-yellow h-4 animate-pulse delay-300 rounded-full" />
              </div>

              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#181A17] border border-[#232521]">
                <ImagePlaceholder
                  type="podcast"
                  label="Capa do Podcast Estación Fronteira"
                  description="Carregue aqui o banner promocional do podcast (cena ilustrada do homem no trilho de trem tomando mate, com o pôr do sol, como na página 5 do PDF)."
                  dimensions="800 x 600 px (4:3)"
                  className="w-full h-full min-h-[250px] bg-[#181A17]"
                />
              </div>

              <div className="mt-4 p-4 bg-[#181A17] rounded-xl border border-[#232521] text-center">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-terracotta bg-brand-terracotta/10 px-2.5 py-1 rounded-full mb-2 uppercase font-mono">
                  <Radio className="w-3.5 h-3.5 animate-bounce" />
                  No Ar: Estación Fronteira
                </span>
                <p className="font-serif italic text-xs text-neutral-400">
                  &ldquo;A ferrovia que conecta sons, saberes e a economia popular de Esteio ao pampa uruguaio.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Narrative & Informational Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="font-mono text-xs text-brand-terracotta font-bold uppercase tracking-widest block">
              Comunicação & Cidadania
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#FAF8F5] uppercase leading-tight">
              Podcast <br />&ldquo;Estación Fronteira&rdquo;
            </h2>
            <div className="w-16 h-1 bg-brand-terracotta rounded-full" />

            <p className="font-sans text-neutral-300 text-sm sm:text-base leading-relaxed">
              O podcast <span className="font-semibold text-white">Estación Fronteira</span> é uma extensão primorosa do compromisso artístico, social e comunitário de Daniel Mello Uruguaio. O canal funciona como um verdadeiro espaço de escuta mútua, troca de saberes e salvaguarda das riquíssimas manifestações e culturas de fronteira.
            </p>

            <p className="font-sans text-neutral-300 text-sm sm:text-base leading-relaxed">
              A proposta convida o público a embarcar em uma enriquecedora viagem sonora onde a boa música, depoimentos reais, reflexões profundas sobre o cotidiano de cidades fronteiriças e experiências da economia solidária e criativa se entrelaçam harmoniosamente.
            </p>

            {/* Layout Wagons Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex gap-3 items-start">
                <div className="p-2 bg-neutral-800/80 rounded-lg mt-1 border border-[#232521]">
                  <Calendar className="w-4 h-4 text-brand-yellow" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-[#FAF8F5] uppercase tracking-wide">
                    Estrutura de &ldquo;Vagões&rdquo;
                  </h4>
                  <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                    Cada episódio é construído como um vagão, unindo causos, vivências locais e cooperativismo.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="p-2 bg-neutral-800/80 rounded-lg mt-1 border border-[#232521]">
                  <MapPin className="w-4 h-4 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-[#FAF8F5] uppercase tracking-wide">
                    Integração Regional
                  </h4>
                  <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                    Foco total em conectar Esteio (RS) às cidades fronteiriças do Rio Grande do Sul e do Uruguai.
                  </p>
                </div>
              </div>
            </div>

            {/* Portal Highlight and Community Activism Card */}
            <div id="portal-card" className="border-t border-[#232521] pt-6 mt-6">
              <div className="bg-[#121311] border border-[#232521] rounded-2xl p-6 relative">
                <div className="flex items-center gap-2 text-brand-blue mb-3">
                  <Heart className="w-4 h-4 fill-brand-blue" />
                  <span className="font-mono text-xs uppercase tracking-widest font-bold">
                    Idealização & Ativismo
                  </span>
                </div>
                
                <h3 className="font-display font-bold text-base sm:text-lg text-[#FAF8F5] uppercase mb-2">
                  Portal Eu Amo Esteio
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                  Daniel Mello é um dos idealizadores e principais ativistas por trás do portal <span className="font-bold text-white">Eu Amo Esteio</span>. Uma plataforma comunitária voltada à defesa dos interesses sociais locais, divulgação de ações de solidariedade pós-enchentes e fomento à cultura local de Esteio - RS.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://euamoesteio.com.br"
                    target="_blank"
                    rel="noreferrer"
                    id="portal-website-link"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-brand-blue text-white rounded-xl font-sans text-xs font-semibold uppercase tracking-wider hover:bg-brand-blue/90 transition-colors cursor-pointer"
                  >
                    <span>Acessar Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://www.youtube.com/@euamoesteio"
                    target="_blank"
                    rel="noreferrer"
                    id="portal-youtube-link"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-[#232521] text-white rounded-xl font-sans text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    <span>Canal no YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
