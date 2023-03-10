import { Invite } from "../../../domain/entities/invite";
import { IAcceptOrDeclineInviteUsecase } from "../../../domain/usecases/acceptOrDeclineInvite";
import { IProject } from "../../../types/project";
import { IAcceptOrDeclineInviteRepository } from "../../protocols/repositories/acceptOrDecline";
import { ILoadByIdRepository } from "../../protocols/repositories/loadProjectById";
import { INewCollaboratorRepository } from "../../protocols/repositories/newCollaborator";

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
      Boolean(invite.gettAccepted())
    );
  }

  private async getInvite(inviteId: string): Promise<Invite> {
    const inviteExits = await this.inviteRepository.loadById(inviteId);
    if (!inviteExits) throw new Error("Invite not exists!");
    const invite = new Invite(inviteExits);
    return invite;
  }
}
