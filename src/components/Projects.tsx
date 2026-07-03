import { motion } from "motion/react";
import { Users, HeartHandshake, BookOpen, Globe2, Music } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Projects() {
  const socialActions = [
    {
      id: "action-inclusao",
      icon: <Users className="w-5 h-5 text-brand-yellow" />,
      title: "Inclusão Social",
      description:
        "Utilizando a arte e a cultura como ferramentas de transformação, Daniel atua ativamente para gerar oportunidades e dar voz a comunidades periféricas, promovendo cidadania de base e pertencimento através da expressão musical.",
    },
    {
      id: "action-economia",
      icon: <HeartHandshake className="w-5 h-5 text-brand-terracotta" />,
      title: "Economia Solidária",
      description:
        "Atuação direta e estratégica na organização de feiras de bairro, cooperativas e empreendimentos solidários. Um forte apoiador do fortalecimento de renda para pequenos produtores e artesãos locais, estruturando redes de apoio mútuo.",
    },
    {
      id: "action-educacao",
      icon: <BookOpen className="w-5 h-5 text-brand-blue" />,
      title: "Educação Musical",
      description:
        "Aulas de violão e iniciação musical voltadas para jovens de comunidades. O objetivo é transmitir não apenas a técnica de dedilhar as cordas, mas o riquíssimo legado da música de fronteira e a sensibilidade como linguagem universal.",
    },
  ];

  return (
    <section
      id="projetos"
      className="py-20 sm:py-28 bg-[#0A0B09] relative overflow-hidden"
    >
      {/* Decorative vector background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0A0B09] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="font-mono text-xs text-brand-blue font-bold uppercase tracking-widest block mb-2">
            Transformação pela Arte
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#FAF8F5] mb-4 uppercase">
            Projetos & Ativismo
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full mb-6" />
          <p className="font-sans text-neutral-300 text-sm sm:text-base leading-relaxed">
            Muito além dos palcos: uma carreira moldada na luta comunitária, no cooperativismo e no fortalecimento das identidades locais por meio de ações de impacto social e educação.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {socialActions.map((action, index) => (
            <motion.div
              key={action.id}
              id={action.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#121311] border border-[#232521] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-brand-blue/50 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#181A17] flex items-center justify-center mb-4 border border-[#232521]">
                {action.icon}
              </div>
              <h3 className="font-display font-bold text-base text-[#FAF8F5] mb-2 uppercase tracking-wide">
                {action.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {action.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action Gallery Placeholder Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          <div className="bg-[#121311] p-3 rounded-2xl border border-[#232521] shadow-sm">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#181A17]">
              <ImagePlaceholder
                type="event"
                label="Show no Mezcla Latina"
                description="Foto do Daniel Mello se apresentando ao vivo no memorável concerto Mezcla Latina, com banda."
                dimensions="640 x 480 px"
                className="w-full h-full bg-[#181A17]"
              />
            </div>
            <p className="font-mono text-[10px] uppercase font-bold text-neutral-500 mt-2.5 text-center">
              Apresentação Mezcla Latina
            </p>
          </div>

          <div className="bg-[#121311] p-3 rounded-2xl border border-[#232521] shadow-sm">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#181A17]">
              <ImagePlaceholder
                type="event"
                label="Daniel Mello em Sessão de Estúdio"
                description="Daniel Mello compondo e gravando novas faixas em estúdio profissional de gravação."
                dimensions="640 x 480 px"
                className="w-full h-full bg-[#181A17]"
              />
            </div>
            <p className="font-mono text-[10px] uppercase font-bold text-neutral-500 mt-2.5 text-center">
              Bastidores de Gravação / Estúdio
            </p>
          </div>

          <div className="bg-[#121311] p-3 rounded-2xl border border-[#232521] shadow-sm">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#181A17]">
              <ImagePlaceholder
                type="event"
                label="Apresentação com as Filhas"
                description="Registro emocionante de Daniel Mello dividindo o microfone no palco ao lado de suas filhas."
                dimensions="640 x 480 px"
                className="w-full h-full bg-[#181A17]"
              />
            </div>
            <p className="font-mono text-[10px] uppercase font-bold text-neutral-500 mt-2.5 text-center">
              Palco em Família
            </p>
          </div>
        </div>

        {/* Spotlight Card: O Emigrante with Rafa Rafuagi */}
        <div id="projeto-emigrante" className="bg-[#121311] border border-[#232521] rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          {/* Decorative corner stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-yellow via-brand-terracotta to-brand-blue" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Project Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-terracotta/10 rounded-full border border-brand-terracotta/20 text-brand-terracotta text-xs font-semibold uppercase tracking-wider">
                <Globe2 className="w-3.5 h-3.5" />
                Destaque Internacional
              </div>
              
              <h3 className="font-display font-black text-2xl sm:text-4xl text-[#FAF8F5] uppercase leading-none">
                Projeto &ldquo;O Emigrante&rdquo;
              </h3>
              
              <p className="font-mono text-xs font-bold text-brand-blue uppercase tracking-widest flex items-center gap-1">
                <Music className="w-3.5 h-3.5" />
                Participação Especial de Rafa Rafuagi
              </p>
              
              <p className="font-sans text-neutral-300 text-sm sm:text-base leading-relaxed">
                Uma fusão poderosa e inovadora entre a cadência do <span className="font-semibold text-white">rap urbano gaúcho</span> e a essência da <span className="font-semibold text-white">música latino-americana e andina</span>. 
              </p>
              <p className="font-sans text-neutral-300 text-sm sm:text-base leading-relaxed">
                Este projeto de vanguarda aborda a dura e sensível realidade enfrentada pelos imigrantes pelo mundo, denunciando a xenofobia, o preconceito e a intolerância cultural. Através de poesia forte e acordes autênticos, &ldquo;O Emigrante&rdquo; nos recorda que, na constante busca de um lugar ao sol, todos somos emigrantes em essência.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <span className="font-mono text-[10px] bg-neutral-850 border border-[#232521] text-neutral-350 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                  Música Andina
                </span>
                <span className="font-mono text-[10px] bg-neutral-850 border border-[#232521] text-neutral-350 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                  Rap Gaúcho
                </span>
                <span className="font-mono text-[10px] bg-neutral-850 border border-[#232521] text-neutral-350 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                  Consciência Social
                </span>
              </div>
            </div>

            {/* Photo Session Continuum Placeholder */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#181A17] p-3 rounded-2xl border border-[#232521]">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#121311]">
                  <ImagePlaceholder
                    type="profile"
                    label="Gravação de O Emigrante (Estúdio Continuum)"
                    description="Carregue aqui a foto de Daniel Mello com Rafa Rafuagi na gravação no Estúdio Continuum (como na página 4 do portfólio)."
                    dimensions="600 x 450 px"
                    className="w-full h-full min-h-[190px] bg-[#121311]"
                  />
                </div>
                <p className="text-[10px] font-mono text-center text-neutral-500 uppercase tracking-wider mt-3">
                  Sessão no Estúdio Continuum — Daniel Mello & Rafa Rafuagi
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
