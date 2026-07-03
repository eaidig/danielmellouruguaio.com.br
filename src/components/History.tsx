import { motion } from "motion/react";
import { Award, Disc, Landmark, Sparkles } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function History() {
  const metrics = [
    {
      id: "metric-carreira",
      icon: <Award className="w-6 h-6 text-brand-terracotta" />,
      value: "+40 Anos",
      label: "De Carreira",
      description: "De dedicação total à música latino-americana e à integração de culturas na fronteira.",
    },
    {
      id: "metric-discos",
      icon: <Disc className="w-6 h-6 text-brand-yellow" />,
      value: "10 Discos",
      label: "Gravados",
      description: "Trabalhos aclamados como 'Sentir', 'Tiempo de Luna' e 'Volviendo al Sur'.",
    },
    {
      id: "metric-gestao",
      icon: <Landmark className="w-6 h-6 text-brand-blue" />,
      value: "Gestão",
      label: "Pública & Ativismo",
      description: "Atuação destacada como ativista cultural, gestor público e radialista no RS.",
    },
  ];

  return (
    <section
      id="trajetoria"
      className="py-20 sm:py-28 bg-[#0E0F0D] border-t border-b border-[#1F201E]/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="font-mono text-xs text-brand-terracotta font-bold uppercase tracking-widest block mb-2">
            A Voz das Fronteiras
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#FAF8F5] mb-4 uppercase">
            Quem é Daniel Mello?
          </h2>
          <div className="w-16 h-1 bg-brand-yellow mx-auto rounded-full mb-6" />
          <p className="font-sans text-neutral-300 leading-relaxed text-sm sm:text-base">
            Uma jornada de resistência, herança cultural e amor à música que conecta o Uruguai ao Rio Grande do Sul, consolidando um intercâmbio artístico sem precedentes.
          </p>
        </div>

        {/* Narrative & History Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Main Story Text */}
          <div className="lg:col-span-7 space-y-6 text-neutral-300 font-sans text-sm sm:text-base leading-relaxed">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#FAF8F5] uppercase tracking-wider mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-yellow" />
              Minha História & Identidade
            </h3>
            
            <p>
              Nascido na histórica fronteira entre <span className="font-semibold text-[#FAF8F5]">Artigas (Uruguai) e Quaraí (Brasil)</span>, Daniel cresceu em um território onde as barreiras geográficas se dissolvem, dando lugar a uma fusão cultural única. Influenciado pelo talento musical da sua família, iniciou sua jornada com apenas <span className="font-semibold text-[#FAF8F5]">7 anos de idade</span> de forma totalmente intuitiva, aprendendo a tocar violão “de ouvido”.
            </p>
            
            <p>
              Aos 18 anos, deu um passo decisivo ao fundar o <span className="font-semibold text-[#FAF8F5]">Duo Daniel</span>, conquistando espaço na televisão e nas rádios de Montevidéu. Nos anos seguintes, consolidou sua expressiva carreira solo no Uruguai, lançando álbuns que tocaram o coração do público, como o icônico disco <span className="italic font-semibold text-[#FAF8F5]">Sentir</span>.
            </p>
            
            <p>
              Guiado por sua paixão pelo cooperativismo e pelas tradições gaúchas, fixou residência no Brasil, na acolhedora cidade de <span className="font-semibold text-[#FAF8F5]">Esteio (Rio Grande do Sul)</span>. Em solo gaúcho, Daniel integrou com maestria sua atuação artística a projetos sociais inovadores, atuando como um forte elo da economia criativa e do cooperativismo local.
            </p>

            <p className="border-l-2 border-brand-yellow pl-4 italic text-neutral-400 text-sm">
              Sua obra e dedicação conectam unicamente as fronteiras culturais entre Brasil e Uruguai, promovendo a integração, a identidade e, principalmente, a valorização das raízes populares através do cantar.
            </p>
          </div>

          {/* Artigas/Uruguai Childhood Placeholder */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#121311] p-3 rounded-2xl border border-[#232521] shadow-sm">
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#181A17] border border-[#232521]">
                <ImagePlaceholder
                  type="profile"
                  label="Daniel Mello na Infância em Artigas"
                  description="Carregue aqui uma foto do Daniel de infância em Artigas (como no folheto de portfólio físico)."
                  dimensions="600 x 450 px (Paisagem 4:3)"
                  className="w-full h-full min-h-[220px] bg-[#181A17]"
                />
              </div>
              <p className="text-[11px] font-mono text-center text-neutral-500 uppercase tracking-wider mt-3">
                Origens em Artigas / Uruguai — O início da jornada musical
              </p>
            </div>
          </div>

        </div>

        {/* Bento/Grid Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              id={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#121311] border border-[#232521] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-brand-yellow/50 transition-all duration-300 group"
            >
              <div className="p-3 bg-[#181A17] rounded-xl border border-[#232521] w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-brand-terracotta font-bold mb-1">
                {metric.label}
              </h4>
              <span className="block font-display font-black text-3xl text-[#FAF8F5] mb-2">
                {metric.value}
              </span>
              <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Historic Gallery / Discography Releases Placeholders */}
        <div className="border-t border-[#232521] pt-16">
          <h3 className="font-display font-bold text-lg text-[#FAF8F5] text-center uppercase tracking-widest mb-10">
            Registro Histórico de Lançamentos & Mídia
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Box 1: Volviendo al Sur / Clipping */}
            <div className="bg-[#121311] p-3 rounded-2xl border border-[#232521]">
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-[#181A17] border border-[#232521]">
                <ImagePlaceholder
                  type="album"
                  label="Recorte de Imprensa: Volviendo al Sur"
                  description="Foto do recorte do jornal histórico anunciando o lançamento do disco 'Volviendo al Sur' em Montevidéu."
                  dimensions="500 x 500 px"
                  className="w-full h-full bg-[#181A17]"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="font-sans font-bold text-xs text-[#FAF8F5] block">
                  Volviendo al Sur
                </span>
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
                  Lançamento de Imprensa
                </span>
              </div>
            </div>

            {/* Box 2: CDs Lançados */}
            <div className="bg-[#121311] p-3 rounded-2xl border border-[#232521]">
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-[#181A17] border border-[#232521]">
                <ImagePlaceholder
                  type="album"
                  label="Coleção de CDs Lançados"
                  description="Imagem que reúne os encartes e discos lançados de Daniel Mello (como Mezcla Latina, Sentir, etc)."
                  dimensions="500 x 500 px"
                  className="w-full h-full bg-[#181A17]"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="font-sans font-bold text-xs text-[#FAF8F5] block">
                  Cosiendo Fronteras
                </span>
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
                  Mezcla Latina & Gravados
                </span>
              </div>
            </div>

            {/* Box 3: CD Tiempo de Luna */}
            <div className="bg-[#121311] p-3 rounded-2xl border border-[#232521]">
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-[#181A17] border border-[#232521]">
                <ImagePlaceholder
                  type="album"
                  label="CD 'Tiempo de Luna'"
                  description="Encarte frontal do disco solo 'Tiempo de Luna' lançado por Daniel Mello Uruguaio."
                  dimensions="500 x 500 px"
                  className="w-full h-full bg-[#181A17]"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="font-sans font-bold text-xs text-[#FAF8F5] block">
                  Tiempo de Luna
                </span>
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
                  Álbum Autoral
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
