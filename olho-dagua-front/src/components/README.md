# 🧩 Components

This directory contains all the reusable React components used in the application. We follow a separation of concerns between **Layout** (structural) and **UI** (visual) components.

## Directory Structure

### `/layout`
Components that define the structure of the page or navigation.
* `Sidebar.tsx`: Desktop navigation menu.
* `TabBar.tsx`: Mobile bottom navigation bar.

### `/ui`
Atomic, reusable UI elements. These should be "dumb" components that receive data via props.
* *Examples:* Buttons, Cards, Status Indicators, Badges.

### `/constants`
Static data used across components, such as navigation links or configuration arrays.

## 💅 Styling Guide

We use **Tailwind CSS** with a utility helper `cn()` for class merging.

**Example Usage:**
```tsx
import { cn } from "@/lib/utils";

export function Button({ className, ...props }) {
  return (
    <button 
      className={cn("bg-blue-dark text-white p-4 rounded-xl", className)} 
      {...props} 
    />
  );
}