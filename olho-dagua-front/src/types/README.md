
# 📚 Types & Schema

### Types (`src/types/README.md`)
Documenta o "contrato" com o Banco de Dados.

```markdown
# 🏷️ TypeScript Definitions

This folder contains the **Global Type Definitions** for the application. These types reflect the database schema provided by the Backend team.

## Schema Overview

The types strictly follow the PostgreSQL database structure:

* **`WaterFountain`**: Represents the physical unit (ID, location, name).
* **`WaterTemperature`**: Historical temperature records.
* **`WaterConsumption`**: Flow/Usage data.
* **`FilterChange`**: Maintenance logs for filter replacements.

## Usage

Always import types from here to ensure type safety across the application.

```typescript
import { WaterFountain } from "@/types/schema";

interface CardProps {
  fountain: WaterFountain;
}