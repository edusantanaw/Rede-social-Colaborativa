import { LoadByNameUsecase } from "../../../../data/usecases/generics/loadByName"
import { ProjectRepository } from "../../../../infra/repositories/projectRepository"

export function makeLoadProjectByNameUsecase(){
    const projectRepository = new ProjectRepository()
    return new LoadByNameUsecase(projectRepository)
}