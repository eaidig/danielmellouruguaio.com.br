import { Image, Music, Radio, Globe, User } from "lucide-react";

interface ImagePlaceholderProps {
  type: "profile" | "logo" | "album" | "event" | "podcast" | "general";
  label: string;
  description: string;
  dimensions: string;
  className?: string;
}

export default function ImagePlaceholder({
  type,
  label,
  description,
  dimensions,
  className = "",
}: ImagePlaceholderProps) {
  const getIcon = () => {
    switch (type) {
      case "profile":
        return <User className="w-8 h-8 text-brand-terracotta" />;
      case "album":
        return <Music className="w-8 h-8 text-brand-yellow" />;
      case "podcast":
        return <Radio className="w-8 h-8 text-brand-blue" />;
      case "logo":
        return <Globe className="w-8 h-8 text-brand-yellow" />;
      default:
        return <Image className="w-8 h-8 text-neutral-400" />;
    }
  };

  return (
    <div
      id={`placeholder-${label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
      className={`relative group overflow-hidden flex flex-col items-center justify-center border-2 border-dashed border-[#D4CEB8] bg-[#F5F2EA] rounded-2xl p-6 text-center transition-all duration-300 hover:border-brand-yellow hover:bg-[#FAF8F5] ${className}`}
    >
      <div className="absolute top-0 right-0 bg-[#EFECE3] px-3 py-1 rounded-bl-xl text-[10px] font-mono uppercase tracking-wider text-neutral-600">
        Placeholder
      </div>

      <div className="p-4 bg-[#FAF8F5] rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
        {getIcon()}
      </div>

      <h4 className="font-sans font-semibold text-sm text-brand-charcoal mb-1">
        {label}
      </h4>
      <p className="font-sans text-xs text-neutral-500 max-w-[240px] mb-3">
        {description}
      </p>

      <span className="inline-block font-mono text-[10px] bg-brand-charcoal/5 px-2 py-1 rounded text-neutral-600">
        Dimensão Recomendada: {dimensions}
      </span>
    </div>
  );
}
