"use client";

import { useState } from "react";
import { SearchBar } from "@/components/ui/SearchBar";

/**
 * Main page for monitoring water temperature
 */
export default function TemperaturePage() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Function called whenever the user updates the search bar
  const handleFilterUpdate = (filters: string[]) => {
    console.log("Filters active:", filters);
    setActiveFilters(filters);
  };

  return (
    <main className="min-h-screen p-6 flex flex-col gap-6 pt-8 pb-32">
      
      {/* Header Text */}
      <header>
        <h1 className="text-titulo text-justify text-blue-dark mb-2">
          Cheque se a água tá na{' '}
          <span className="font-sans font-bold text-blue-light">
            TEMPERATURA
          </span>{' '}
          certa!
        </h1>
      </header>

      {/* Search Bar Component */}
      <section>
        <SearchBar onFilterChange={handleFilterUpdate} />
      </section>

      {/* Results Area (Placeholder for Cards) */}
      <section className="flex flex-col gap-4 mt-4">
        {activeFilters.length === 0 ? (
          <p className="text-center text-gray-400 mt-10 font-sans">
            Selecione um local acima para ver os bebedouros.
          </p>
        ) : (
          <div className="p-4 bg-gray-50 rounded-xl border border-dashed border-gray-300">
            <p className="text-subtitulo text-center mb-2">
              Mostrando resultados para:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {activeFilters.map(f => (
                <span key={f} className="font-bold text-blue-dark">{f}</span>
              ))}
            </div>
            {/* Here we will map the Cards later */}
          </div>
        )}
      </section>

    </main>
  );
}