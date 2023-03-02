import { LoadCollabs } from "../../../data/usecases/loadCollabs";
import { CollaboratorRepository } from "../../../infra/repositories/collaborators";
import { ProjectRepository } from "../../../infra/repositories/projectRepository";

export function makeLoadCollabsUsecase(){
    const collaboratorRepository = new CollaboratorRepository()
    const projectRepository = new ProjectRepository()
    return new LoadCollabs(collaboratorRepository, projectRepository);
}