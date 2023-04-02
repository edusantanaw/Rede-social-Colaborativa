import { Task } from "../../../domain/entities/task";
import { ICreateUsecase } from "../../../domain/usecases/create";
import { IProject } from "../../../types/project";
import { ITask } from "../../../types/task";
import { ITaskSchema } from "../../../validation/schema/taskSchema";
import { ICreateRepository } from "../../protocols/repositories/createRepository";
import { ILoadByIdRepository } from "../../protocols/repositories/loadProjectById";


export class CreateTaskUsecase implements ICreateUsecase<ITaskSchema, ITask> {
  constructor(
    private readonly repository: ICreateRepository<ITask, ITask>,
    private readonly projectRepository: ILoadByIdRepository<IProject>
  ) {}

  public async execute(data: ITaskSchema): Promise<ITask> {
    console.log(data);
    const projectExists = !!(await this.projectRepository.loadById(
      data.projectId
    ));
    if (!projectExists) throw new Error("Project not exists!");
    const task = new Task(data);
    const newTask = await this.repository.create(task.getTask());
    return newTask;
}
}
