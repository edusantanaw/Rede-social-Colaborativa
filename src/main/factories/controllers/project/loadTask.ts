import { LoadController } from "../../../../presentational/controllers/load";
import { makeLoadTaskUsecase } from "../../usecases/project/loadTask";


export function makeLoadTaskControlle() {
    return new LoadController(makeLoadTaskUsecase())
}