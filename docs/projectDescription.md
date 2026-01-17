# Project Tech Stack: Todo Practice App

This document outlines the planned technology stack for the Todo Practice App, as visualized in the project roadmap.

## Architecture Overview

The application is designed as a full-stack system with a clear separation between the frontend interface, the backend API, and the data persistence layer.

---

## 1. Frontend Layer
*   **Framework:** **React 19** (via **Vite**)
    *   *Purpose:* Provides a fast, component-based UI library with Hot Module Replacement (HMR) for a smooth developer experience.
*   **Language:** **TypeScript**
    *   *Purpose:* Ensures type safety across the application, reducing runtime errors and improving code maintainability.

## 2. Styling Layer
*   **Utility-First CSS:** **Tailwind CSS 4.0**
    *   *Purpose:* Rapid UI development using atomic CSS classes directly in JSX.
*   **Component Library:** **Shadcn/UI** (Planned)
    *   *Note:* While planned for the final architecture, the current development phase focuses on building UI components from scratch to master fundamental CSS and React patterns.

## 3. State Management
*   **API State:** **TanStack Query** (React Query)
    *   *Purpose:* Handles asynchronous data fetching, caching, synchronization, and server state updates.
*   **Global App State:** **Zustand**
    *   *Purpose:* A lightweight, hook-based state management solution for client-side global state (e.g., user sessions, UI themes).

## 4. Backend Layer
*   **Framework:** **NestJS**
    *   *Architecture:* Utilizes a modular architecture with Decorators, Guards, and Dependency Injection to build a scalable and maintainable server-side application.

## 5. Database Layer
*   **Database:** **MongoDB**
    *   *Type:* NoSQL document database.
*   **ODM:** **Mongoose**
    *   *Purpose:* Provides a schema-based solution to model application data, including built-in type casting, validation, and query building.
