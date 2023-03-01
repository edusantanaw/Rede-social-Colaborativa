import { Invite } from "../../domain/entities/invite";
import { Project } from "../../domain/entities/project";
import { IAcceptOrDeclineInviteUsecase } from "../../domain/usecases/acceptOrDeclineInvite";
import { invites } from "../../types/invites";
import { IProject } from "../../types/project";

interface IAcceptOrDeclineInviteRepository {
  loadById: (id: string) => Promise<invites | null>;
  updateStatus: (inviteId: string, status: string) => Promise<void>;
}

interface IUpdateProjectCollaborators {
  loadById: (id: string) => Promise<IProject | null>;
}

interface INewCollaboratorRepository {
    create: (projectId: string, userId: string) => Promise<void>;
}

export class AcceptOrDeclineInviteUsecase
  implements IAcceptOrDeclineInviteUsecase
{
  constructor(
    private readonly inviteRepository: IAcceptOrDeclineInviteRepository,
    private readonly projectRepository: IUpdateProjectCollaborators,
    private readonly collaboratorRepository: INewCollaboratorRepository
  ) {}

  public async update(inviteId: string, status: string): Promise<void> {
    const invite = await this.getInvite(inviteId);
    invite.setStatus(status);
    if (status === "accepted") {
      this.accept(invite);
    } else {
      this.updateStatus(invite);
    }
  }

  private async accept(invite: Invite) {
    const maybeProject = await this.projectRepository.loadById(
      invite.getProjectId()
    );
    if (!maybeProject) throw new Error("Project not exists!");
    const project = new Project(maybeProject);
    await this.updateStatus(invite);
    await this.collaboratorRepository.create(project.getId(), invite.getId());
  }

  private async updateStatus(invite: Invite) {
    await this.inviteRepository.updateStatus(
      invite.getId(),
      invite.getStatus()
    );
  }

  private async getInvite(inviteId: string): Promise<Invite> {
    const inviteExits = await this.inviteRepository.loadById(inviteId);
    if (!inviteExits) throw new Error("Invite not exists!");
    const invite = new Invite(inviteExits);
    return invite;
  }
}
