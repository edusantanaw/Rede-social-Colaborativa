import { LoadTaskUsecase } from "../../../../data/usecases/project/loadTask";
import { ProjectRepository } from "../../../../infra/repositories/projectRepository";
import { TaskRepository } from "../../../../infra/repositories/task";

export function makeLoadTaskUsecase(){
    const projectRepository = new ProjectRepository();
    const taskRepository = new TaskRepository()
    return new LoadTaskUsecase(projectRepository, taskRepository)
}