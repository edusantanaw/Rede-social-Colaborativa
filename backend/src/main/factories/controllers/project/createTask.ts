import { CreateController } from "../../../../presentational/controllers/create";
import { taskSchema } from "../../../../validation/schema/taskSchema";
import { ValidSchema } from "../../../../validation/validSchema";
import { makeCreateTaskUsecase } from "../../usecases/project/createTask";


export function makeCreateTaskController(){
    const createTaskUsecase = makeCreateTaskUsecase()
    const validSchema = new ValidSchema(taskSchema);
    return new CreateController(createTaskUsecase, validSchema );
}