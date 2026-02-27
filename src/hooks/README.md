### 3. Hooks (`src/hooks/README.md`)
Explica como o frontend busca dados, essencial para o time entender que não devem fazer `fetch` direto nos componentes.

```markdown
# 🎣 Custom Hooks

This folder contains custom React Hooks designed to abstract data fetching and complex state logic from the UI components.

## Guidelines

1.  **Avoid direct `fetch` in components:** Always create a hook for API interaction.
2.  **Naming Convention:** All files must start with `use` (e.g., `useFountains.ts`).
3.  **Return Values:** Hooks should typically return `{ data, loading, error }`.

## Available Hooks

* `useFountains`: Fetches the list of water fountains and their current status.
* *(Add future hooks here, e.g., `useReport.ts` for the Ombudsman)*