"use client";

import { Filter, Heart, Check, AlertCircle, Ban, X, RotateCw, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { WaterFountainAPI } from "@/types/schema";

// Define the possible statuses exactly as shown in your design
export type FilterStatus = 'excellent' | 'good' | 'attention' | 'maintenance' | 'substitute';

interface FountainData extends WaterFountainAPI {
  filterStatus: string;
  last_updated_time: string;
}

interface FilterStatusCardProps {
 data: FountainData;
}

export function FilterStatusCard({ data }: FilterStatusCardProps) {
  const { name, filterStatus, last_updated_time } = data;

  // Configuration for each status (Colors, Icons, Texts)
  const themeConfig = {
    excellent: {
      bg: "bg-green-dark",
      title: "Excelente",
      subtitle: "Filtro Limpo",
      MainIcon: Heart,
    },
    good: {
      bg: "bg-[#02af5d]",
      title: "Bom",
      subtitle: "Filtro em uso Regular",
      MainIcon: Check,
    },
    attention: {
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
    substitute: {
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
      "w-full rounded-4xl p-5 flex items-center gap-5 shadow-lg relative overflow-hidden transition-transform hover:scale-[1.02]",
      theme.bg
    )}>
      
      {/* Top Right: Time */}
      <div className="absolute top-4 right-6 flex items-center gap-1 text-white-custom/60 font-subtitulo ">
        <RotateCw size={12} />
        <span>{last_updated_time}</span>
      </div>

      {/* Left Icon: Composite (Funnel + Status Icon) */}
      <div className="relative shrink-0 ml-2">
        {/* Base Funnel Icon */}
        <Filter size={64} className="text-white-custom/60" strokeWidth={1.5} />
        
        {/* Overlay Status Icon (Heart, Check, etc) */}
        <div className="absolute bottom-0 -right-1 text-white-custom drop-shadow-md">
           <StatusIcon size={32} strokeWidth={3} />
        </div>
      </div>

      {/* Content Info */}
      <div className="flex flex-col flex-1 pt-4">
        <h2 className="font-title text-4xl text-white-custom leading-none mb-1 mt-2">
          {theme.title}
        </h2>
        <p className="font-paragrafo text-white-custom/90 leading-tight mb-3">
          {theme.subtitle}
        </p>
        
        {/* Location Badge */}
        <div className="flex items-center gap-1 text-white-custom font-subtitulo">
          <MapPin size={16} className="text-white-custom/70" />
          <span>{name}</span>
        </div>
      </div>

    </div>
  );
}