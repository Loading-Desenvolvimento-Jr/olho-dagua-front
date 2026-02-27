/**
 * Database definitions matching the backend Schema
 * Based on the PostgreSQL structure provided by the team
 */


// Table: water_fountains
export interface WaterFountainAPI {
  id: string;
  name: string;
  location: string;
  temperature: number;
  filterStatus: string;
  createdAt: string; 
  updatedAt: string;
}

// Table: water_temperatures
export interface WaterTemperature {
  id: number;
  temperature: number;
  water_fountain_id: number;
  created_at: string;
  updated_at: string;
}

// Table: water_consumptions
export interface WaterConsumption {
  id: number;
  volume: number;
  water_fountain_id: number;
  created_at: string;
  updated_at: string;
}

// Table: filter_changes
export interface FilterChange {
  id: number;
  water_fountain_id: number;
  created_at: string;
  updated_at: string;
}

/**
 * Combined type for the UI
 * Sometimes the API might return the fountain with its latest status attached
 */
export interface FountainWithStatus extends WaterFountainAPI {
  current_temperature?: number;
  last_filter_change?: string;
  total_consumption?: number;
}