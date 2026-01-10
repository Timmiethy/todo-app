# Todo Practice App (Frontend)

This is a frontend-only React application designed as a practice project for building a Todo list application. It is built with a modern stack focusing on performance and type safety.

## Tech Stack

*   **Framework:** React 19 (via Vite 7)
*   **Language:** TypeScript 5.9
*   **Styling:** Tailwind CSS 4.0 (using `@tailwindcss/postcss`)
*   **Icons:** Lucide React
*   **Build Tool:** Vite

## Architecture & Conventions

### TypeScript Configuration
The project uses strict TypeScript settings in `tsconfig.app.json`:
*   `erasableSyntaxOnly: true`: **Do not use `enum`**. Instead, use the `const object` + `type` pattern.
    ```typescript
    // ✅ CORRECT
    export const Status = { OPEN: 'OPEN' } as const;
    export type Status = typeof Status[keyof typeof Status];

    // ❌ INCORRECT (Will error)
    export enum Status { OPEN }
    ```
*   `verbatimModuleSyntax: true`: You must use strict type imports.
    ```typescript
    import { TaskStatus, type Task } from './types'; // Split value vs type imports
    ```

### Component Structure
*   **`src/App.tsx`**: Main entry point. Currently holds the global state (`activeTab`) and mock data. Handles the main Flexbox layout (`flex min-h-screen`).
*   **`src/components/`**: Reusable UI components.
    *   `SideBar.tsx`: The left navigation sidebar. Uses `flex-shrink-0` to maintain width.
*   **`src/types.ts`**: Centralized domain models. All interfaces and "enum-like" constants live here.

### Domain Models
*   **Task**: Represents a todo item.
*   **TaskStatus**: `TODO`, `IN_PROGRESS`, `DONE`.
*   **TaskPriority**: `LOW`, `MEDIUM`, `HIGH`.
*   **Tab**: Navigation tabs (`Inbox`, `Today`, etc.).

## Development

### Key Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the development server (HMR enabled). |
| `npm run build` | Type-check (`tsc`) and build for production. |
| `npm run lint` | Run ESLint to check for code quality issues. |
| `npm run preview` | Preview the production build locally. |

### Styling
Tailwind CSS is configured via PostCSS.
*   Use standard utility classes (e.g., `flex`, `w-64`, `bg-blue-500`).
*   Icons are provided by `lucide-react`.

## Current Status (as of Jan 2026)
*   The Sidebar structure is in place but needs more UI elements (navigation items, user profile).
*   Mock data is currently hardcoded in `App.tsx`.
*   The layout uses a standard Sidebar + Main Content flex pattern.
