import { RotateCw, MapPin, Snowflake, Wind, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { WaterFountainAPI } from "@/types/schema";

// Interface auxiliar
interface FountainData extends WaterFountainAPI {
  last_updated_time: string;
}

export interface WaterFountainCardProps {
  data: FountainData;
  className?: string;
}

export function WaterFountainCard({ data, className }: WaterFountainCardProps) {
  const { temperature, last_updated_time, location } = data;

  // Lógica para determinar o tema baseado na temperatura
  const getTheme = (temp: number) => {
    if (temp < 10) {
      return {
        bg: "bg-[#17A1FA]", // Azul vibrante
        Icon: Snowflake,
      };
    }
    if (temp >= 10 && temp <= 19) {
      return {
        bg: "bg-[#F1C40F]", // Amarelo vibrante
        Icon: Wind, 
      };
    }
    return {
      bg: "bg-[#FA7B17]", // Laranja intenso
      Icon: Sun,
    };
  };

  const theme = getTheme(temperature);
  const StatusIcon = theme.Icon;

  return (
    <div
      className={cn(
        // Responsividade Base: Padding começa no 4 e cresce para 6. Mantive o seu max-w-84 para limitar o crescimento máximo.
        "relative w-full max-w-84 aspect-square rounded-3xl p-4 sm:p-5 md:p-6 flex flex-col justify-between shadow-md overflow-hidden transform-gpu transition-transform hover:scale-[1.02]",
        theme.bg,
        className
      )}
    >
      {/* --- CÍRCULO NO FUNDO --- */}
      <div 
        className="absolute -bottom-6 left-0 w-full h-[75%] bg-linear-to-tl from-white/50 to-transparent rounded-tr-full pointer-events-none z-0" 
      />

      {/* --- Camada de Conteúdo --- */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        
        {/* Topo: Horário e Ícone */}
        <div className="flex justify-between items-start text-white">
          {/* Fonte do horário ajustada para telas menores */}
          <div className="flex items-center gap-1.5 font-sans text-xs sm:text-sm opacity-90 font-medium mt-1">
            <RotateCw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="font-bold">{last_updated_time}</span>
          </div>
          
          {/* Ícone responsivo: Cresce de w-10 (40px) até w-16 (64px) dependendo da tela */}
          <StatusIcon strokeWidth={2} className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white drop-shadow-sm" />
        </div>

        {/* Base: Temperatura e Local */}
        <div className="flex flex-col text-white">
          {/* Temperatura */}
          <div className="flex items-start">
            <span className="font-light text-4xl sm:text-5xl md:text-6xl tracking-wide drop-shadow-sm leading-none">
              {temperature.toFixed(1)}
            </span>
            <span className="font-title text-2xl sm:text-3xl md:text-4xl mt-0.5 sm:mt-1 ml-1 opacity-90 leading-none">°</span>
          </div>
          
          {/* Localização */}
          <div className="flex items-center gap-1.5 sm:gap-2 font-sans text-base sm:text-lg opacity-90 mt-1 sm:mt-2">
            {/* O shrink-0 impede que o ícone esprema se o nome do local for muito grande */}
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className="truncate font-medium">
              {location}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}