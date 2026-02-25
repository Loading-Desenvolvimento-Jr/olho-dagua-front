import { useState, useEffect } from 'react';
import { WaterFountainAPI } from '@/types/schema';

/**
 * Custom hook to fetch water fountains data
 * Currently using mock data until backend API is ready
 */
export function useFountains() {
  const [fountains, setFountains] = useState<WaterFountainAPI[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // TODO: Replace with real API call
    // fetch('/api/fountains')...
    
    // Simulating API delay
    // const mockData: WaterFountain[] = [
    //   {
    //     id: "1",
    //     name: "Library Hall",
    //     location: "Block C - Ground Floor",
    //     temperature: 15,
    //     created_at: new Date().toISOString(),
    //     updated_at: new Date().toISOString(),
    //   }
    // ];

    async function fetchFountains() {
      try {
        // Calling your local API
        const response = await fetch('https://p3k19h7c-3000.brs.devtunnels.ms/water-fountains/');
        
        if (!response.ok) {
          throw new Error('Failed to fetch water fountains data');
        }

        const data: WaterFountainAPI[] = await response.json();
        setFountains(data);
      } catch (err: unknown) {
        console.error("API Fetch Error:", err);
        
        // Verificamos se 'err' é uma instância real de um Erro do JavaScript
        if (err instanceof Error) {
          setError(err.message);
        } else {
          // Se for outra coisa (ex: o servidor retornou apenas uma string), usamos uma mensagem genérica
          setError('Ocorreu um erro desconhecido ao buscar os dados.');
        }
      } finally {
        setIsLoading(false);
      }
    }

fetchFountains();
  }, []); // Empty dependency array means this runs once when the component mounts

  return { fountains, isLoading, error };
}