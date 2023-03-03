
export type ITask = {
    id: string;
    projectId: string;
    title: string;
    description: string;
    done: boolean;
    assignedTo?: string;
}