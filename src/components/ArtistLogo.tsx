interface ArtistLogoProps {
  variant?: "horizontal" | "vertical" | "badge";
  inverse?: boolean;
}

export default function ArtistLogo({ variant = "horizontal", inverse = false }: ArtistLogoProps) {
  const textColor = "text-[#FAF8F5]";
  const subTextColor = "text-brand-yellow";

  if (variant === "badge" || variant === "vertical") {
    return (
      <div className="flex flex-col items-center text-center group">
        <h2 className={`font-display font-black text-lg sm:text-xl tracking-widest uppercase leading-none ${textColor}`}>
          Daniel Mello
        </h2>
        <span className="block font-serif italic text-sm sm:text-base text-brand-yellow tracking-widest mt-1">
          Uruguaio
        </span>
        <div className="w-8 h-[1px] bg-brand-terracotta my-2 opacity-50" />
        <span className="block font-sans text-[8px] sm:text-[9px] uppercase tracking-widest font-semibold text-neutral-400">
          Música de Fronteira
        </span>
      </div>
    );
  }

  // Default: Horizontal elegant typographic logo layout
  return (
    <div className="flex flex-col justify-center group cursor-pointer text-left">
      <div className="flex items-baseline gap-1.5">
        <span className={`block font-display font-black text-base sm:text-lg tracking-widest uppercase leading-none ${textColor}`}>
          Daniel Mello
        </span>
        <span className="block font-serif italic text-sm sm:text-base tracking-wide text-brand-blue">
          Uruguaio
        </span>
      </div>
      <span className={`block font-sans text-[8px] sm:text-[9px] uppercase tracking-widest font-bold mt-1.5 ${subTextColor}`}>
        Música • Cultura • Cidadania
      </span>
    </div>
  );
}

