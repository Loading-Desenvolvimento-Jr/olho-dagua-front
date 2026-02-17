"use client";

import { useState } from "react";
import { SearchBar } from "@/components/ui/SearchBar";
import { WaterFountainCard } from "@/components/ui/WaterFountainCard";

// Dados Fakes simulando a resposta da API
const MOCK_FOUNTAINS = [
  // Mucambinho
  { id: 1, name: "Principal", location: "Mucambinho", current_temperature: 4.5, last_updated_time: "10:30", created_at: "", updated_at: "" },
  { id: 2, name: "Pátio", location: "Mucambinho", current_temperature: 12.0, last_updated_time: "10:35", created_at: "", updated_at: "" },
  { id: 3, name: "Merendeiro", location: "Mucambinho", current_temperature: 27.0, last_updated_time: "10:40", created_at: "", updated_at: "" },
  
  // Odontologia
  { id: 4, name: "Clínica A", location: "Odontologia", current_temperature: 3.2, last_updated_time: "11:00", created_at: "", updated_at: "" },
  { id: 5, name: "Recepção", location: "Odontologia", current_temperature: 9.0, last_updated_time: "11:15", created_at: "", updated_at: "" },

  // Biblioteca
  { id: 6, name: "Entrada", location: "Biblioteca", current_temperature: 18.5, last_updated_time: "09:00", created_at: "", updated_at: "" },
];

export default function TemperaturePage() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Filtra os bebedouros baseado nos filtros ativos (chips)
  const filteredFountains = activeFilters.length === 0 
    ? []
    : MOCK_FOUNTAINS.filter(fountain => activeFilters.includes(fountain.location));

  return (
    <main className="min-h-screen p-6 flex flex-col gap-6 pt-8 pb-32">
      
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

      {/* Barra de Pesquisa */}
      <section>
        <SearchBar onFilterChange={setActiveFilters} />
      </section>

      {/* Resultados */}
      <section className="mt-4">
        {activeFilters.length === 0 ? (
          // Estado Vazio
          <div className="flex flex-col items-center justify-center py-20 opacity-50">
             {/* Você pode colocar um ícone de mapa aqui se quiser */}
             <p className="text-paragrafo text-center">
               Selecione um local acima para ver os bebedouros.
             </p>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-subtitulo ml-1">
              Encontramos <strong>{filteredFountains.length}</strong> bebedouros:
            </p>
            
            {/* Grid de Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {filteredFountains.map((fountain) => (
                <WaterFountainCard key={fountain.id} data={fountain} />
              ))}
            </div>
            
            {filteredFountains.length === 0 && (
              <p className="text-center text-orange-dark">
                Nenhum bebedouro encontrado nestes locais.
              </p>
            )}
          </div>
        )}
      </section>

    </main>
  );
}