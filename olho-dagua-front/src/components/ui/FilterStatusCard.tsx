"use client";

import { Filter, Heart, Check, AlertCircle, Ban, X, RotateCw, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the possible statuses exactly as shown in your design
export type FilterStatus = 'excellent' | 'good' | 'attention' | 'maintenance' | 'substitute';

interface FilterStatusCardProps {
  status: FilterStatus;
  name: string;
  location: string;
  lastUpdated: string;
}

export function FilterStatusCard({ status, name, lastUpdated }: FilterStatusCardProps) {

  // Configuration for each status (Colors, Icons, Texts)
  const theme = {
    excellent: {
      bg: "bg-green-dark", // Green
      title: "Excelente",
      subtitle: "Filtro Limpo",
      MainIcon: Heart, // The small icon overlay
    },
    good: {
      bg: "bg-[#02af5d]", // A slightly lighter green or reuse green-light
      title: "Bom",
      subtitle: "Filtro em uso Regular",
      MainIcon: Check,
    },
    attention: {
      bg: "bg-orange-dark", // Orange
      title: "Atenção",
      subtitle: "Filtro em saturação Parcial",
      MainIcon: AlertCircle, // ! symbol
    },
    maintenance: {
      bg: "bg-yellow-light", // Yellow
      title: "Em Manutenção",
      subtitle: "Filtro em Manutenção",
      MainIcon: Ban, // Blocked symbol
    },
    substitute: {
      bg: "bg-[#dc2626]", // Red (Fixed color since we didn't add it to globals yet)
      title: "Substituir",
      subtitle: "Filtro Vencido - Substituição Necessária",
      MainIcon: X,
    }
  }[status];

  const StatusIcon = theme.MainIcon;

  return (
    <div className={cn(
      "w-full rounded-4xl p-5 flex items-center gap-5 shadow-lg relative overflow-hidden transition-transform hover:scale-[1.02]",
      theme.bg
    )}>
      
      {/* Top Right: Time */}
      <div className="absolute top-4 right-6 flex items-center gap-1 text-white-custom/60 font-subtitulo ">
        <RotateCw size={12} />
        <span>{lastUpdated}</span>
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