import { ILoadInvites } from "../../domain/usecases/ILoadInvites";
import { invites } from "../../types/invites";
import { ILoadUserByIdRepository } from "../protocols/repositories/loadUserById";

interface ILoadInvitesRepository {
  loadAll: (userId: string) => Promise<invites[] | null>;
}

export class LoadInvitesUsecase implements ILoadInvites {
  constructor(
    private readonly invitesRepository: ILoadInvitesRepository,
    private readonly userRepository: ILoadUserByIdRepository
  ) {}

  public async loadAll(userId: string): Promise<invites[] | null> {
    const userExits = await this.userRepository.loadById(userId);
    if (!userExits) throw new Error("User not exists!");
    const invites = await this.invitesRepository.loadAll(userId);
    return invites;
  }
}
