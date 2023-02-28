import { Project } from "../../domain/entities/project";
import {
  IInviteCollaboratorUsecase,
  inviteData,
} from "../../domain/usecases/inviteCollaborator";
import { ILoadProjectByIdUsecase } from "../../domain/usecases/loadProjectById";

interface IInviteRepository {
  invite: (invitedId: string, projectId: string) => Promise<void>;
}

export class InviteCollaboratorUsecase implements IInviteCollaboratorUsecase {
  constructor(
    private readonly loadProject: ILoadProjectByIdUsecase,
    private readonly inviteRepository: IInviteRepository
  ) {}

  public async invite(data: inviteData): Promise<void> {
    const projectExits = await this.loadProject.load(data.projectId);
    if (!projectExits) throw new Error("Project not exists!");
    const project = new Project(projectExits);
    const collaborators = project.getCollaborator();
    if (collaborators.includes(data.invitedUser))
      throw new Error("User already is a collaborator!");
    await this.inviteRepository.invite(data.userId, project.getId());
  }
}
