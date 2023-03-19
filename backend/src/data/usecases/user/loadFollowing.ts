import { ILoadUsecase } from "../../../domain/usecases/load";
import { IUser } from "../../../types/user";
import { ILoadByIdRepository } from "../../protocols/repositories/loadProjectById";

interface IFollowingRepository {
  loadFollowing: (id: string) => Promise<IUser[]>;
}

export class LoadFollowingUsecase implements ILoadUsecase<string, IUser[]> {
  constructor(
    private readonly followRepository: IFollowingRepository,
    private readonly userRepository: ILoadByIdRepository<IUser>
  ) {}

  public async load(id: string) {
    const maybeUser = !!(await this.userRepository.loadById(id));
    if (!maybeUser) throw new Error("User not exists!");
    const following = await this.followRepository.loadFollowing(id);
    if (following.length === 0) return null;
    return following;
  }
}
