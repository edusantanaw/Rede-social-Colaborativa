import { ITask } from "../../types/task"

export type taskLoad =  {
    projectId: string;
    skip?: number;
    take?: number;
    done?: boolean;
    afterDate?: string;
    beforeDate?: string;
}

export interface ILoadTaskUsecase {
    load: (data: taskLoad) => Promise<ITask[] | null>
}