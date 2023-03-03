import { Invite } from "../../domain/entities/invite";
import { Project } from "../../domain/entities/project";
import {
  IInviteCollaboratorUsecase,
  inviteData,
} from "../../domain/usecases/inviteCollaborator";
import { IProject } from "../../types/project";
import { ILoadByIdRepository } from "../protocols/repositories/loadProjectById";

interface IInviteRepository {
  invite: (data: Invite) => Promise<void>;
}

export class InviteCollaboratorUsecase implements IInviteCollaboratorUsecase {
  constructor(
    private readonly loadProject: ILoadByIdRepository<IProject>,
    private readonly inviteRepository: IInviteRepository
  ) {}

  public async invite(data: inviteData): Promise<void> {
    const projectExits = await this.loadProject.loadById(data.projectId);
    if (!projectExits) throw new Error("Project not exists!");
    const project = new Project(projectExits);
    const collaborators = project.getCollaborator();
    if (collaborators.includes(data.invitedId))
      throw new Error("User already is a collaborator!");
    const invite = new Invite({ ...data });
    await this.inviteRepository.invite(invite);
  }
}
