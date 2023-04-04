import { FinishTaskUsecase } from "../../../../data/usecases/project/updatetask";
import { TaskRepository } from "../../../../infra/repositories/task";

export function makeFinishTaskUsecase() {
  const taskRepository = new TaskRepository();
  return new FinishTaskUsecase(taskRepository);
}
