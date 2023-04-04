import { ITask } from "../../types/task";

export interface IFinishTaskUsecase {
  execute: (id: string) => Promise<ITask>;
}
