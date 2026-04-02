import { extractTime } from "@/lib/utils";

describe('Function: extractTime', () => {
  
  it('should return formatted time "HH:MM" when a valid ISO date is provided', () => {
    const isoDate = "2026-02-25T13:42:53.857Z";
    const result = extractTime(isoDate);
    expect(result).toMatch(/\d{2}:\d{2}/); 
  });

  it('should return "--:--" when the date string is empty', () => {
    const result = extractTime("");
    expect(result).toBe("--:--");
  });

  it('should return "--:--" when the date string is invalid', () => {
    const result = extractTime("data-maluca-que-nao-existe");
    expect(result).toBe("--:--");
  });

  it('should return "--:--" when the date string is null or undefined', () => {
    // @ts-expect-error Testing runtime safety for null
    expect(extractTime(null)).toBe("--:--");
    // @ts-expect-error Testing runtime safety for undefined
    expect(extractTime(undefined)).toBe("--:--");
  });
});