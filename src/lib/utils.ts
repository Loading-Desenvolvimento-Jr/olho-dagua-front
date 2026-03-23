import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge Tailwind classes (Standard in Next.js projects)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a raw temperature value
 * Example: 10.5 -> "10.5°C"
 */
export function formatTemperature(temp: number): string {
  return `${temp.toFixed(1)}°C`;
}

/**
 * Calculates filter status based on the last change date
 * Rule: Filter is good for 6 months (example logic)
 */
export function getFilterStatus(lastChangeDate: string): 'Good' | 'Warning' | 'Bad' {
  const lastChange = new Date(lastChangeDate);
  const now = new Date();
  
  // Difference in months (approximate)
  const diffTime = Math.abs(now.getTime() - lastChange.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

  if (diffDays < 150) return 'Good';    // Less than 5 months
  if (diffDays < 180) return 'Warning'; // Between 5 and 6 months
  return 'Bad';                         // More than 6 months
}