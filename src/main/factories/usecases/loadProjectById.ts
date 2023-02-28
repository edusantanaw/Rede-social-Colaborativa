import { LoadProjectById } from "../../../data/usecases/loadProjectById";
import { ProjectRepository } from "../../../infra/repositories/projectRepository";

export function makeLoadProjectByIdUsecase(){
    return new LoadProjectById(new ProjectRepository())
}