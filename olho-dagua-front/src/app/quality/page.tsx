"use client";

import { useState } from "react";
import { SearchBar } from "@/components/ui/SearchBar";
import { FilterStatusCard, FilterStatus } from "@/components/ui/FilterStatusCard";
import Image from 'next/image';

const MOCK_FILTERS = [
  { id: 1, name: "Principal", location: "Biblioteca", status: "excellent" as FilterStatus, updated: "15:00" },
  { id: 2, name: "Saguão", location: "Reitoria", status: "good" as FilterStatus, updated: "12:02" },
  { id: 3, name: "Merendeiro", location: "Restaurante Universitário", status: "attention" as FilterStatus, updated: "17:00" },
  { id: 4, name: "Principal", location: "Mucambinho", status: "maintenance" as FilterStatus, updated: "12:00" },
  { id: 5, name: "Principal", location: "Bloco C", status: "substitute" as FilterStatus, updated: "08:30" },
];

export default function QualityPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const displayedFilters = activeFilters.length === 0
    ? []
    : MOCK_FILTERS.filter(item => activeFilters.includes(item.location));

  return (
    <main className="min-h-screen p-6 flex flex-col gap-6 pt-8 pb-32">
      
      {/* Header */}
      <header>
        <h1 className="text-titulo text-green-dark mb-2 text-justify">
          Confira a{' '}
          <span className="font-title font-black text-green-dark text-4xl ">
            QUALIDADE
          </span>{' '}
          da água!
        </h1>
      </header>

      {/* Search Bar (Green Variant) */}
      <section>
        <SearchBar onFilterChange={setActiveFilters} variant="green" />
      </section>

      {/* Results */}
      <section className="mt-4">
        {activeFilters.length === 0 ? (
          // Empty state
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
              Encontramos <strong>{displayedFilters.length}</strong> bebedouros:
            </p>
            
            {/* Grid Cards */}
            
            
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {displayedFilters.map((fountain) => (
                // CORREÇÃO 2: Passando as props corretamente individualmente
                <FilterStatusCard 
                  key={fountain.id} 
                  status={fountain.status}
                  name= {fountain.name}
                  location={fountain.location}
                  lastUpdated={fountain.updated} // Note que aqui mapeamos 'updated' para 'lastUpdated'
                />
              ))}
            </div>
            
            {displayedFilters.length === 0 && (
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