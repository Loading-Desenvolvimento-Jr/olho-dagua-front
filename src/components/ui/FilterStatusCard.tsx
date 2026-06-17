"use client";

import { Filter, Heart, Check, AlertCircle, Ban, X, RotateCw, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { WaterFountainAPI } from "@/types/schema";

export type FilterStatus = 'EXCELLENT' | 'ATTENTION' | 'GOOD' | 'TO_REPLACE' | 'maintenance';

interface FountainData extends WaterFountainAPI {
  filterStatus: string;
  last_updated_time: string;
}

interface FilterStatusCardProps {
  data: FountainData;
  className?: string;
}

export function FilterStatusCard({ data, className }: FilterStatusCardProps) {
  const { name, filterStatus, last_updated_time } = data;

  // Configuração das cores mantida exatamente igual à sua
  const themeConfig = {
    EXCELLENT: {
      bg: "bg-green-dark",
      title: "Excelente",
      subtitle: "Filtro Limpo",
      MainIcon: Heart,
    },
    GOOD: {
      bg: "bg-[#02af5d]",
      title: "Bom",
      subtitle: "Filtro em uso Regular",
      MainIcon: Check,
    },
    ATTENTION: {
      bg: "bg-orange-dark", 
      title: "Atenção",
      subtitle: "Filtro em saturação Parcial",
      MainIcon: AlertCircle, 
    },
    maintenance: {
      bg: "bg-yellow-light", 
      title: "Em Manutenção",
      subtitle: "Filtro em Manutenção",
      MainIcon: Ban,
    },
    TO_REPLACE: {
      bg: "bg-[#dc2626]", 
      title: "Substituir",
      subtitle: "Filtro Vencido - Substituição Necessária",
      MainIcon: X,
    }
  };

  const normalizedStatus = (filterStatus?.toLowerCase() || 'maintenance') as FilterStatus;
  const theme = themeConfig[normalizedStatus] || themeConfig.maintenance;
  const StatusIcon = theme.MainIcon;

  return (
    <div className={cn(
      // Base: altura mínima, padding ajustado e overflow-hidden para o círculo
      "w-full min-h-40 rounded-4xl p-6 flex items-center gap-6 shadow-md relative overflow-hidden transform-gpu transition-transform hover:scale-[1.02]",
      theme.bg,
      className
    )}>
      
      {/* --- A MÁGICA DO CÍRCULO COM DEGRADÊ (Direita) --- */}
      {/* Fica encostado na direita e o degradê vai clareando para a esquerda */}
      <div className="absolute -right-8 top-0 bottom-0 w-[60%] h-96 bg-linear-to-b from-transparent to-white/60  rounded-l-full pointer-events-none z-0" />

      {/* Top Right: Time (Z-10 para ficar em cima do degradê) */}
      <div className="absolute top-5 right-6 flex items-center gap-1.5 text-white-custom font-subtitulo z-10 opacity-90">
        <RotateCw size={14} />
        <span className="font-bold">{last_updated_time}</span>
      </div>

      {/* Bottom Left: Location (Movido para cá!) */}
      <div className="absolute bottom-5 left-6 flex items-center gap-1.5 text-white-custom font-subtitulo z-10 opacity-90">
        <MapPin size={16} />
        <span className="font-medium truncate">{name}</span>
      </div>

      {/* Left Icon: Composite (Adicionado um leve margin-bottom para alinhar visualmente com o texto) */}
      <div className="relative shrink-0 ml-1 mb-2 z-10">
        <Filter size={68} className="text-white-custom/60" strokeWidth={1.5} />
        <div className="absolute bottom-0 -right-1 text-white-custom drop-shadow-md">
           <StatusIcon size={36} strokeWidth={3} />
        </div>
      </div>

      {/* Middle Content Info */}
      <div className="relative flex flex-col flex-1 justify-center mb-2 z-10">
        <h2 className="font-title text-4xl text-white-custom leading-none mb-1 drop-shadow-sm">
          {theme.title}
        </h2>
        <p className="font-paragrafo text-white-custom/90 leading-tight">
          {theme.subtitle}
        </p>
      </div>

    </div>
  );
}