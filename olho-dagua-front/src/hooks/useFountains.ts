import { useState, useEffect } from 'react';
import { WaterFountain } from '@/types/schema';

/**
 * Custom hook to fetch water fountains data
 * Currently using mock data until backend API is ready
 */
export function useFountains() {
  const [fountains, setFountains] = useState<WaterFountain[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with real API call
    // fetch('/api/fountains')...
    
    // Simulating API delay
    const mockData: WaterFountain[] = [
      {
        id: 1,
        name: "Library Hall",
        location: "Block C - Ground Floor",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }
    ];

    setTimeout(() => {
      setFountains(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  return { fountains, loading };
}