import React from "react";
import { Activity, Fingerprint, Layers } from "lucide-react";

const bionicSpecs = [
  {
    id: 1,
    num: "01",
    title: "Rémanence Somatique",
    description:
      "Conservation absolue de votre mémoire motrice subliminale. Chaque infime geste, réflexe et micro-mouvement est capté et répliqué avec une fidélité de 99.8%.",
    icon: Fingerprint,
    img: "/remanescense.webp",
    bgClass: "bg-center",
    color: "#22d3ee",
  },
  {
    id: 2,
    num: "02",
    title: "Alliage Biocompatible",
    description:
      "Châssis sculpté dans une matrice protectrice de titane spongieux de grade médical et de polymères autoregénérants simulant l'épiderme organique.",
    icon: Layers,
    img: "/alliage.webp",
    bgClass: "bg-center",
    color: "#f43f5e",
  },
  {
    id: 3,
    num: "03",
    title: "Thermorégulation Translucide",
    description:
      "Réseaux micro-fluidiques actifs distribuant une chaleur homéostatique stable, procurant un toucher chaud naturel impossible à distinguer de la vie biologique.",
    icon: Activity,
    img: "/thermoregulation.webp",
    bgClass: "bg-[80%_center] md:bg-right",
    color: "#10b981",
  },
];

export function RadiusOnScrollSection() {
  return (
    <section id="spirit-supremacy" className="relative w-full bg-[#030305] pt-24 pb-32">
      {/* Header - Scrolle naturellement pour laisser la place */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 border-b border-white/10 relative">
          <div className="lg:col-span-8">
            <h2 className="text-[26px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight leading-[0.95] text-white">
              La suprématie de l'esprit{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-700">
                dans son écrin le plus pur.
              </span>
            </h2>
          </div>
          <div className="hidden lg:block lg:col-span-4 lg:pt-2">
            <p className="text-neutral-400 text-sm leading-relaxed">
              Une pièce monumentale d'ingénierie suisse intégrant des
              architectures neuronales liquides sous une esthétique pure.
            </p>
          </div>
        </div>
      </div>

      {/* Cards - Animation Scroll-Driven 100% Native CSS façon Stacking Cards */}
      <ul
        className="cards-container max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20"
        style={{ 
          "--numcards": bionicSpecs.length
        } as React.CSSProperties}
      >
        {bionicSpecs.map((spec, i) => {
          const IconComponent = spec.icon;
          
          // Sans marge, l'empilement est naturel. La carte 3 finira son animation à 62%, soit bien avant qu'elle ne remonte (66%).
          const startPercent = i === 0 ? 0 : i === 1 ? 27 : 55;
          const endPercent = i === 0 ? 27 : i === 1 ? 55 : 62;

          return (
            <li
              key={spec.id}
              className="sticky"
              style={{
                top: `120px`,
                marginBottom: '0px',
                "--index": i + 1,
              } as React.CSSProperties}
            >
              <div 
                className="card-content-stack relative h-[65vh] w-full rounded-[1.75rem] overflow-hidden border border-white/10 bg-neutral-950 group flex flex-col justify-end shadow-[0_-20px_60px_rgba(0,0,0,0.65),_0_4px_24px_rgba(0,0,0,0.4)] origin-top"
                style={{ animationRange: `exit-crossing ${startPercent}% exit-crossing ${endPercent}%` } as React.CSSProperties}
              >
                {/* Image de fond */}
                <img
                  src={spec.img}
                  alt={spec.title}
                  loading="lazy"
                  width="1280"
                  height="720"
                  className={`absolute inset-0 w-full h-full object-cover ${spec.bgClass} transition-transform duration-700 group-hover:scale-[1.03]`}
                />
                {/* Dégradé sombre */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent z-10" />

                {/* Badge haut */}
                <div className="absolute top-5 left-6 right-6 flex justify-between items-center z-20 pointer-events-none">
                  <span className="font-mono text-[9px] font-bold text-white/35 tracking-widest uppercase">
                    Specification — {spec.num}
                  </span>
                </div>

                {/* Contenu texte */}
                <div className="relative z-20 p-6 sm:p-8 md:p-10 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0"
                      style={{ color: spec.color }}
                    >
                      <IconComponent
                        size={14}
                        className="animate-pulse"
                        style={{ animationDuration: "4s" }}
                      />
                    </div>
                    <span className="font-mono text-[9px] tracking-widest uppercase text-white/40">
                      Système Actif {spec.num}
                    </span>
                  </div>

                  <h3
                    className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-2 text-transparent bg-clip-text font-sans"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${spec.color}, #ffffff)`,
                    }}
                  >
                    {spec.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300/80 leading-relaxed max-w-2xl font-light">
                    {spec.description}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
        {/* Espaceur physique court pour déclencher le dézoom de la 3ème carte sans laisser un énorme vide */}
        <div style={{ height: '40vh', width: '100%' }} />
      </ul>
    </section>
  );
}
