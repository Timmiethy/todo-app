# Backend Development Plan

## Phase 1: The Foundation (Configuration & Database)
**Goal:** Connect our NestJS "Chef" to the MongoDB "Pantry".

1.  **Configuration Setup**
    - [x] Install `@nestjs/config` to manage secrets (DB passwords, etc.).
    - [x] Create a `.env` file to store environment variables safely.
    - [x] Update `app.module.ts` to load the configuration.

2.  **Database Connection**
    - [x] Ensure `@nestjs/mongoose` and `mongoose` are installed (Done).
    - [x] Update `app.module.ts` to connect to MongoDB using the configuration.

## Phase 2: The "Task" Feature (Resource)
**Goal:** Teach the backend how to handle "Tasks".

1.  **Define the Shape (Schema)**
    - [x] Create a `Task` schema (Mongoose). This tells MongoDB that a task has a `title`, `status`, `priority`, etc.

2.  **Business Logic (Service)**
    - [x] Create `TasksService`. This will have functions like `createTask`, `findAll`, `deleteTask`.

3.  **API Endpoints (Controller)**
    - [ ] Create `TasksController`. This defines the URLs (e.g., `GET /tasks`, `POST /tasks`) that the Frontend will call.

## Phase 3: Testing & Integration
**Goal:** Verify it works and connect the Frontend.

1.  **API Testing**
    - [ ] Use a tool (like the browser or curl) to verify we can save and retrieve tasks.

2.  **Frontend Connection**
    - [ ] Update React to fetch data from the NestJS backend instead of using the hardcoded `mockData`.
