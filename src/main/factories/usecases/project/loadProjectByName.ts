import { LoadByProjctNameUsecase } from "../../../data/usecases/loadByName";
import { ProjectRepository } from "../../../infra/repositories/projectRepository";

export function makeLoadProjectByNameUsecase(){
    const projectRepository = new ProjectRepository()
    return new LoadByProjctNameUsecase(projectRepository)
}