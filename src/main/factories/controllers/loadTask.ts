import { LoadController } from "../../../presentational/controllers/load";
import { makeLoadTaskUsecase } from "../usecases/loadTask";


export function makeLoadTaskControlle() {
    return new LoadController(makeLoadTaskUsecase())
}