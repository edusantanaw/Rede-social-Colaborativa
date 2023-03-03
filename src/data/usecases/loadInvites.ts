import { ILoadAllInvites } from "../../domain/usecases/ILoadInvites";
import { invites } from "../../types/invites";
import { IUser } from "../../types/user";
import { ILoadAllRepository } from "../protocols/repositories/loadAll";
import { ILoadByIdRepository } from "../protocols/repositories/loadProjectById";


export class LoadAllInvitesUsecase implements ILoadAllInvites {
  constructor(
    private readonly invitesRepository: ILoadAllRepository<invites>,
    private readonly userRepository: ILoadByIdRepository<IUser>
  ) {}

  public async loadAll(userId: string): Promise<invites[] | null> {
    const userExits = await this.userRepository.loadById(userId);
    if (!userExits) throw new Error("User not exists!");
    const invites = await this.invitesRepository.loadAll(userId);
    return invites;
  }
}
