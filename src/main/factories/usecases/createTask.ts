import { CreateTaskUsecase } from "../../../data/usecases/createTask";
import { ProjectRepository } from "../../../infra/repositories/projectRepository";
import { TaskRepository } from "../../../infra/repositories/task";


export function makeCreateTaskUsecase(){
    const taskRepository = new TaskRepository()
    const projectRepository = new ProjectRepository()
    return new CreateTaskUsecase(taskRepository , projectRepository)
}