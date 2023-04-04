import { ITask } from "../../../types/task";

export interface IFinishTaskRepository {
  loadById: (id: string) => Promise<ITask | null>;
  finish: (task: ITask) => Promise<ITask>;
}
