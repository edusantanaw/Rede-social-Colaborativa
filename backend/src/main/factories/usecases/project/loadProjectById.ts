import { LoadById } from "../../../../data/usecases/generics/loadById";
import { ProjectRepository } from "../../../../infra/repositories/projectRepository";

export function makeLoadProjectByIdUsecase(){
    return new LoadById(new ProjectRepository())
}