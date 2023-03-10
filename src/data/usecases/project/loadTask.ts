import { ILoadUsecase } from "../../../domain/usecases/load";
import { IProject } from "../../../types/project";
import { ITask, taskLoad } from "../../../types/task";
import { ILoadRepository } from "../../protocols/repositories/load";
import { ILoadByIdRepository } from "../../protocols/repositories/loadProjectById";

export class LoadTaskUsecase implements ILoadUsecase<taskLoad, ITask[]> {
  constructor(
    private readonly projectRepository: ILoadByIdRepository<IProject>,
    private readonly taskRepository: ILoadRepository<taskLoad, ITask[]>
  ) {}

  public async load(data: taskLoad): Promise<ITask[] | null> {
    const mappedData = this.map(data);
    const projetExists = !!(await this.projectRepository.loadById(
      mappedData.projectId
    ));
    if (!projetExists) throw new Error("Project not exists!");
    const tasks = await this.taskRepository.load(mappedData);
    if (tasks.length === 0) return null;
    return tasks;
  }

  private map(data: taskLoad) {
    let {
      projectId,
      afterDate,
      beforeDate,
      done = false,
      skip = 0,
      take = 50,
    } = data;
    return {
      projectId,
      afterDate,
      beforeDate,
      done,
      skip,
      take,
    };
  }
}
