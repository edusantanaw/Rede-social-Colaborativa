import { Invite } from "../../domain/entities/invite";
import { IAcceptOrDeclineInviteUsecase } from "../../domain/usecases/acceptOrDeclineInvite";
import { invites } from "../../types/invites";
import { IProject } from "../../types/project";
import { ILoadByIdRepository } from "../protocols/repositories/loadProjectById";

interface IAcceptOrDeclineInviteRepository {
  loadById: (id: string) => Promise<invites | null>;
  updateStatus: (inviteId: string, accepted: boolean) => Promise<void>;
}

interface INewCollaboratorRepository {
  create: (projectId: string, userId: string) => Promise<void>;
}

export class AcceptOrDeclineInviteUsecase
  implements IAcceptOrDeclineInviteUsecase
{
  constructor(
    private readonly inviteRepository: IAcceptOrDeclineInviteRepository,
    private readonly projectRepository: ILoadByIdRepository<IProject>,
    private readonly collaboratorRepository: INewCollaboratorRepository
  ) {}

  public async update(inviteId: string, accepted: boolean): Promise<void> {
    const invite = await this.getInvite(inviteId);
    invite.setAccepted(accepted);
    accepted ? await this.accept(invite) : await this.persiste(invite);
  }

  private async accept(invite: Invite) {
    const project = await this.projectRepository.loadById(
      invite.getProjectId()
    );
    if (!project) throw new Error("Project not exists!");
    await this.persiste(invite);
    await this.collaboratorRepository.create(project.id, invite.getId());
  }

  private async persiste(invite: Invite) {
    await this.inviteRepository.updateStatus(
      invite.getId(),
      !!(invite.gettAccepted())
    );
  }

  private async getInvite(inviteId: string): Promise<Invite> {
    const inviteExits = await this.inviteRepository.loadById(inviteId);
    if (!inviteExits) throw new Error("Invite not exists!");
    const invite = new Invite(inviteExits);
    return invite;
  }
}
