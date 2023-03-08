import { LoadByProjctNameUsecase } from "../../../data/usecases/loadByName";
import { ProjectRepository } from "../../../infra/repositories/projectRepository";

export function makeLoadProjectByName(){
    const projectRepository = new ProjectRepository()
    return new LoadByProjctNameUsecase(projectRepository)
}