export const TaskStatus = {
    TODO : 'TODO',
    IN_PROGRESS : 'IN_PROGRESS',
    DONE : 'DONE',
} as const;
export type TaskStatus = typeof TaskStatus[keyof typeof TaskStatus];

export const TaskPriority = {
    LOW : 'LOW',
    MEDIUM : 'MEDIUM',
    HIGH : 'HIGH',
} as const;
export type TaskPriority = typeof TaskPriority[keyof typeof TaskPriority];

export const Tab = {
    Inbox: 'Inbox',
    Today: 'Today',
    Priority: 'Priority',
    Completed: 'Completed'
} as const;
export type Tab = typeof Tab[keyof typeof Tab];

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    tags: string[];
    dueDate: string;
}