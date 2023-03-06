import { AcceptTaskUsecase } from "../../../data/usecases/acceptTask";
import { TaskRepository } from "../../../infra/repositories/task";

export function makeAcceptTaskUsecase(){
    const taskRepository = new TaskRepository()
    return new AcceptTaskUsecase(taskRepository);
}