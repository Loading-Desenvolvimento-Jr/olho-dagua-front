import { useState, useEffect } from 'react';
import { WaterFountainAPI } from '@/types/schema';

const CACHE_KEY = 'olho-dagua-fountains-cache';
const CACHE_EXPIRATION_MS = 1000;

export function useFountains() {
  const [fountains, setFountains] = useState<WaterFountainAPI[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFountains() {
      try {
        // Verificação
        const cachedDataString = sessionStorage.getItem(CACHE_KEY);
        
        if (cachedDataString) {
          const cachedData = JSON.parse(cachedDataString);
          const now = Date.now();

          // Comparativo do tempo
          if (now - cachedData.timestamp < CACHE_EXPIRATION_MS) {
            setFountains(cachedData.data);
            setIsLoading(false);
            return; // O 'return' encerra a função aqui, impedindo o fetch na API
          }
        }

        // Caso seja seja a 1 vez ou expirou o tempo
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/water-fountains/`);
        
        if (!response.ok) {
          throw new Error('Aplicação não está se comunicando com o servidor! 😭');
        }

        const data: WaterFountainAPI[] = await response.json();
        
        // Salva os dados
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({
          data: data,
          timestamp: Date.now()
        }));

        setFountains(data);
      } catch (err: unknown) {
        console.error("API Fetch Error:", err);
        
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Ocorreu um erro desconhecido ao buscar os dados.');
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchFountains();
  }, []);

  return { fountains, isLoading, error };
}