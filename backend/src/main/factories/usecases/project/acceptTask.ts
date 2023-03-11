import { AcceptTaskUsecase } from "../../../../data/usecases/project/acceptTask";
import { TaskRepository } from "../../../../infra/repositories/task";

export function makeAcceptTaskUsecase(){
    const taskRepository = new TaskRepository()
    return new AcceptTaskUsecase(taskRepository);
}