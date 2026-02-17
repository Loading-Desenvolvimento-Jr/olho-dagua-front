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
  onFilterChange: (filters: string[]) => void;
  variant?: 'blue' | 'green'; // Prop to control the theme
}

export function SearchBar({ onFilterChange, variant = 'blue' }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  // Theme configuration based on variant
  const theme = {
    blue: {
      border: "border-blue-light",
      text: "text-blue-dark",
      chip: "bg-blue-light",
      hover: "hover:bg-blue-light/5",
      icon: "text-blue-dark"
    },
    green: {
      border: "border-green-light",
      text: "text-green-dark",
      chip: "bg-green-light",
      hover: "hover:bg-green-light/5",
      icon: "text-green-dark"
    }
  }[variant];

  
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
    <div className="w-full flex flex-col gap-4 relative z-40">
      {/* Input Area */}
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)} 
          placeholder="Pesquisar..."
          className={cn(
            "w-full h-14 pl-6 pr-12 rounded-full border-2 outline-none transition-all font-sans text-lg",
            theme.border,
            theme.text,
            "focus:shadow-md bg-white-custom"
          )}
        />
        <Search 
          className={cn("absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none", theme.icon)} 
          size={28} strokeWidth={2.5}
        />

        {/* Dropdown Suggestions */}
        {isFocused && query.length > 0 && suggestions.length > 0 && (
          <ul className={cn("absolute top-full mt-2 w-full bg-white-custom border rounded-2xl shadow-xl overflow-hidden z-50", theme.border)}>
            {suggestions.map((location) => (
              <li 
                key={location}
                onClick={() => addFilter(location)}
                className={cn("px-6 py-3 cursor-pointer font-sans transition-colors", theme.text, theme.hover)}
              >
                {location}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Filter Chips */}
      <div className="relative w-full">
       
        
        <div className="flex gap-2 overflow-x-auto pb-2 px-2 scrollbar-hide -mx-2">
          {selectedFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => removeFilter(filter)}
              className={cn(
                "shrink-0 flex items-center gap-1 pl-4 pr-2 py-1.5 rounded-full text-white-custom whitespace-nowrap font-sans font-bold shadow-sm transition-transform active:scale-95",
                theme.chip
              )}
            >
              {filter} <X size={16} strokeWidth={3} />
            </button>
          ))}

          {unselectedOptions.map((option) => (
            <button
              key={option}
              onClick={() => addFilter(option)}
              className={cn(
                "shrink-0 px-4 py-1.5 rounded-full border bg-transparent whitespace-nowrap font-sans transition-colors",
                theme.border, theme.text, theme.hover
              )}
            >
              {option}
            </button>
          ))}
          <div className="w-4 shrink-0" />
        </div>
      </div>
    </div>
  );
}