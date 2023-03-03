import { ITask } from "../../types/task";
import { ITaskSchema } from "../../validation/schema/taskSchema";

export interface ICreateTaskUsecase {
    execute:  (task: ITaskSchema) => Promise<ITask>;
}