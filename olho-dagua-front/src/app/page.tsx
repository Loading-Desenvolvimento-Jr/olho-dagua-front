"use client";

import { useEffect, useState } from "react";
import { SearchBar } from "@/components/ui/SearchBar";
import { WaterFountainCard } from "@/components/ui/WaterFountainCard";
import { useFountains } from "@/hooks/useFountains";

import Image from 'next/image';

export default function TemperaturePage() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const { fountains, isLoading, error } = useFountains();

  useEffect(() => {
    const saved = sessionStorage.getItem('olho-dagua-filters');
    if (saved) {
      setTimeout(() => {
        setActiveFilters(JSON.parse(saved));
      }, 0);
    }
  }, []);

  const handleFilterChange = (filters: string[]) => {
    setActiveFilters(filters);                                             
    sessionStorage.setItem('olho-dagua-filters', JSON.stringify(filters)); 
  };

  
  const filteredFountains = activeFilters.length === 0 
    ? [] 
    : fountains.filter(fountain => activeFilters.includes(fountain.location));

  /**
   * Helper to extract "HH:MM" from the ISO string "2026-02-18T14:00:00.000Z"
   */
  const extractTime = (isoString: string) => {
      if (!isoString) return "--:--";
      const date = new Date(isoString);
      if (isNaN(date.getTime())) return "--:--"; 
      return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    };
  
  return (
    <main className=" p-6 flex flex-col gap-6 pt-8 pb-32">
      
      {/* Header */}
      <header>
        <h1 className="text-titulo text-blue-dark mb-2">
          Cheque se a água tá na{' '}
          <span className="font-sans font-bold text-blue-light">
            TEMPERATURA
          </span>{' '}
          certa!
        </h1>
      </header>

      {/* Search Bar */}
      <section>
        <SearchBar 
        onFilterChange={handleFilterChange}
        selectedFilters={activeFilters} />
      </section>

      {/* Output */}
      <section className="mt-4">
        {/* Handle Loading State */}
        {isLoading? (
          <div className="flex justify-center py-20">
             <div className="w-10 h-10 border-4 border-blue-light border-t-blue-dark rounded-full animate-spin" />
          </div>
        ): error? (
          <div className="flex flex-col items-center justify-center py-20 opacity-80 gap-8">
              <p className="text-center text-orange-dark">
                Erro ao carregar dados: {error}
              </p>
               <Image 
                  src="/assets/logo_nervous.svg" 
                  alt="Olho D'água Logo" 
                  width={160} 
                  height={80} 
                  className="object-contain relative z-20"
                  priority 
                />
            </div>
        ) : activeFilters.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 opacity-80 gap-8">   
             <p className="text-paragrafo text-center">
               Selecione um local acima para ver os bebedouros.
             </p>

            <Image 
                src="/assets/logo_question.svg" 
                alt="Olho D'água Logo" 
                width={160} 
                height={80} 
                className="object-contain relative z-20"
                priority 
              />
            
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-subtitulo ml-1">
              Encontramos <strong>{filteredFountains.length}</strong> bebedouros:
            </p>
            
            {/* Card's Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {filteredFountains.map((fountain) => (
                  <WaterFountainCard 
                    key={fountain.id} 
                    data={{
                      ...fountain, // Passa TODOS os dados da API automaticamente (id, name, temperature, filterStatus, etc)
                      current_temperature: fountain.temperature, // Mantemos esse porque o Card usa esse nome na lógica de cor
                      last_updated_time: extractTime(fountain.updatedAt),
                    }} 
                  />
                ))}
            </div>
            
            {filteredFountains.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 opacity-80 gap-8">
              <p className="text-center text-orange-dark">
                Nenhum bebedouro encontrado nestes locais.
              </p>
               <Image 
                  src="/assets/logo_nervous.svg" 
                  alt="Olho D'água Logo" 
                  width={160} 
                  height={80} 
                  className="object-contain relative z-20"
                  priority 
                />
              </div>
            )}
          </div>
        )}
      </section>

    </main>
  );
}