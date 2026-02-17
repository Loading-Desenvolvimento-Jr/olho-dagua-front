"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * List of available locations for the app
 * In the future, this could come from an API
 */
const LOCATIONS = [
  "Mucambinho",
  "Restaurante Universitário",
  "Odontologia",
  "Psicologia",
  "Bloco C",
  "Biblioteca",
];

interface SearchBarProps {
  /** Callback to notify parent component about active filters */
  onFilterChange: (filters: string[]) => void;
}

export function SearchBar({ onFilterChange }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  // Filter the dropdown suggestions based on text input and exclude items that are already selected
  const suggestions = LOCATIONS.filter(
    (loc) => 
      loc.toLowerCase().includes(query.toLowerCase()) && 
      !selectedFilters.includes(loc)
  );

  // Also get the items that are NOT selected to show as outline chips
  const unselectedOptions = LOCATIONS.filter(loc => !selectedFilters.includes(loc));

  /** Adds a location to the active filter list */
  const addFilter = (location: string) => {
    const newFilters = [...selectedFilters, location];
    setSelectedFilters(newFilters);
    onFilterChange(newFilters); // Notify parent
    setQuery(""); // Clear input
    setIsFocused(false);
  };

  // Removes a location from the active filter list
  const removeFilter = (location: string) => {
    const newFilters = selectedFilters.filter((item) => item !== location);
    setSelectedFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="w-full flex flex-col gap-4 relative z-50">
      
      {/* Search Input Area */}
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          // Delay blur to allow clicking on suggestions
          onBlur={() => setTimeout(() => setIsFocused(false), 200)} 
          placeholder="Pesquisar..."
          className={cn(
            "w-full h-14 pl-6 pr-12 rounded-full border-2 border-blue-dark outline-none transition-all",
            "font-sans text-lg text-blue-dark placeholder:text-blue-dark/50",
            "focus:border-blue-light focus:shadow-md"
          )}
        />
        <Search 
          className="absolute right-5 top-1/2 -translate-y-1/2 text-blue-dark pointer-events-none" 
          size={28}
          strokeWidth={2.5}
        />

        {/* Dropdown Suggestions (Only shows when typing) */}
        {isFocused && query.length > 0 && suggestions.length > 0 && (
          <ul className="absolute top-full mt-2 w-full bg-white-custom border border-blue-light/30 rounded-2xl shadow-xl overflow-hidden z-50">
            {suggestions.map((location) => (
              <li 
                key={location}
                onClick={() => addFilter(location)}
                className="px-6 py-3 hover:bg-blue-light/10 cursor-pointer font-sans text-blue-dark transition-colors"
              >
                {location}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Filter Chips (Horizontal Scroll) */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        
        {/* 1. Active Filters  */}
        {selectedFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => removeFilter(filter)}
            className="flex items-center gap-1 pl-4 pr-2 py-1.5 rounded-full bg-blue-light text-white-custom whitespace-nowrap font-sans font-bold shadow-sm transition-transform active:scale-95"
          >
            {filter}
            <X size={16} strokeWidth={3} />
          </button>
        ))}

        {/* Shows remaining options so user can click without typing */}
        {unselectedOptions.map((option) => (
          <button
            key={option}
            onClick={() => addFilter(option)}
            className="px-4 py-1.5 rounded-full border border-blue-light text-blue-dark bg-transparent whitespace-nowrap font-sans hover:bg-blue-light/5 transition-colors"
          >
            {option}
          </button>
        ))}

      </div>
    </div>
  );
}