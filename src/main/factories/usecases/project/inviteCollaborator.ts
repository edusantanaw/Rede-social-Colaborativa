import { InviteCollaboratorUsecase } from "../../../data/usecases/inviteCollaborator";
import { InviteRepository } from "../../../infra/repositories/inviteRepository";
import { ProjectRepository } from "../../../infra/repositories/projectRepository";


export function makeInviteCollaboratorUsecase(){
    const projectRepository = new ProjectRepository()
    const inviteRepository = new InviteRepository()
    return new InviteCollaboratorUsecase(projectRepository, inviteRepository)
}