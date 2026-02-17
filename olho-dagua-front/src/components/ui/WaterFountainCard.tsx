"use client";

import { MapPin, RotateCw, Snowflake } from "lucide-react";
import { cn, formatTemperature } from "@/lib/utils";
import { WaterFountain, WaterTemperature } from "@/types/schema";

interface FountainData extends WaterFountain {
  current_temperature: number;
  last_updated_time: string;
}

interface WaterFountainCardProps {
  data: FountainData;
}

export function WaterFountainCard({ data }: WaterFountainCardProps) {
  const { name, current_temperature, last_updated_time } = data;

  // Logic behind temperature color
  const getTheme = (temp: number) => {
    if (temp < 10) {
      return {
        bg: "bg-blue-500",
        iconColor: "text-blue-200",
        label: "Gelada"
      };
    } else if (temp <= 20) {
      return {
        bg: "bg-yellow-dark",
        iconColor: "text-yellow-200",
        label: "Natural"
      };
    } else {
      return {
        bg: "bg-orange-dark",
        iconColor: "text-orange-200",
        label: "Quente"
      };
    }
  };

  const theme = getTheme(current_temperature);

  return (
    <div className={cn(
      "relative w-full w-max-8 aspect-square rounded-3xl py-3 px-2 md:py-4 md:px-4 flex flex-col justify-between overflow-hidden shadow-lg transition-transform hover:scale-[1.02]",
      theme.bg
    )}>

    {/* Snow Flake */}
    <Snowflake 
        className={cn("absolute md:-top-8 md:-left-8 md:w-40 md:h-40 -top-4 -left-4 w-24 h-24 opacity-20 pointer-events-none", theme.iconColor)} 
    />

    {/* Header: Last update time */}
    <div className="relative z-10 flex justify-end items-center gap-1 text-white-custom/50 font-subtitulo">
        <RotateCw size={14} className="animate-spin-slow" /> {/* Animação lenta opcional */}
        <span>{last_updated_time}</span>
    </div>

    {/* Middle: Temperature */}
    <div className="relative z-10 flex flex-col items-center">
      <span className="font-title text-6xl text-white-custom drop-shadow-md">
          {data.current_temperature.toFixed(1)}
          <span className="text-4xl align-top ml-1">ºC</span>
      </span>
    </div>

    {/* Footer: Location/Name */}
    <div className="relative z-10 flex items-center justify-center gap-1 text-white-custom font-paragrafo">
      <MapPin size={20} className="text-white-custom/80" />
      <span className="truncate">{name}</span>
    </div>

    </div>
  );
}