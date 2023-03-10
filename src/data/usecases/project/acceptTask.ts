import { Task } from "../../../domain/entities/task";
import { IAcceptTaskUsecase } from "../../../domain/usecases/acceptTask";
import { ITask } from "../../../types/task";

interface IAcceptTaskRepository {
  loadById: (id: string) => Promise<ITask | null>;
  acceptTask: (task: Task) => Promise<void>;
}

export class AcceptTaskUsecase implements IAcceptTaskUsecase {
  constructor(private readonly taskRepository: IAcceptTaskRepository) {}

  public async execute(userId: string, taskId: string) {
    const maybeTask = await this.taskRepository.loadById(taskId);
    if (!maybeTask) throw new Error("Task not found!");
    const task = new Task(maybeTask);
    task.setAssignedTo(userId);
    await this.taskRepository.acceptTask(task);
  }
}
