import { Task } from "../../../domain/entities/task";
import { IFinishTaskUsecase } from "../../../domain/usecases/finishTask";
import { IFinishTaskRepository } from "../../protocols/repositories/finishTask";

export class FinishTaskUsecase implements IFinishTaskUsecase {
  constructor(private readonly taskRepository: IFinishTaskRepository) {}

  public async execute(id: string) {
    const taskExists = await this.taskRepository.loadById(id);
    if (!taskExists) throw new Error("Tarefa não encontrada!");
    const task = new Task(taskExists);
    task.setDone(true);
    const finishedTask = await this.taskRepository.finish(task.getTask());
    return finishedTask;
  }
}
