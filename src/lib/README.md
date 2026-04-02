# 📚 Lib & Utilities

This directory holds utility functions, helpers, and business logic that are not directly tied to React rendering. These functions should be **pure** (deterministic) whenever possible.

## Key Files

* `utils.ts`: Contains the `cn` helper for Tailwind class merging.
* *(Future)* `validators.ts`: Functions to check filter quality dates (e.g., `calculateFilterStatus(date)`).
* *(Future)* `formatters.ts`: Data formatting helpers (e.g., formatting temperature to "10.5°C").

## Usage

Import these functions anywhere in the app to maintain consistent logic.

```typescript
import { formatTemperature } from "@/lib/utils";

const displayTemp = formatTemperature(data.temperature);