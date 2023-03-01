import { Invite } from "../../domain/entities/invite";
import { IAcceptOrDeclineInviteUsecase } from "../../domain/usecases/acceptOrDeclineInvite";
import { invites } from "../../types/invites";

interface IAcceptOrDeclineInviteRepository {
  loadById: (id: string) => Promise<invites | null>;
  updateStatus: (inviteId: string) => Promise<void>;
}

export class AcceptOrDeclineInviteUsecase
  implements IAcceptOrDeclineInviteUsecase
{
  constructor(
    private readonly inviteRepository: IAcceptOrDeclineInviteRepository
  ) {}

  public async accept(inviteId: string): Promise<void> {
    const invite = await this.getInvite(inviteId);
    invite.setStatus("accepted");
    await this.updateStatus(invite.getStatus())
  }

  public async decline(inviteId: string): Promise<void> {
    const invite = await this.getInvite(inviteId);
    invite.setStatus("declined");
    await this.updateStatus(invite.getStatus())
  }

  private async getInvite(inviteId: string): Promise<Invite> {
    const inviteExits = await this.inviteRepository.loadById(inviteId);
    if (!inviteExits) throw new Error("Invite not exists!");
    const invite = new Invite(inviteExits);
    return invite;
  }

  private async updateStatus(inviteId: string): Promise<void> {
    await this.inviteRepository.updateStatus(inviteId);
  }
}
