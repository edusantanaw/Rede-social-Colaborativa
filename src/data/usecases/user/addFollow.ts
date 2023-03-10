import { IAddFollow } from "../../../domain/usecases/addFollow";
import { IUser } from "../../../types/user";
import { ILoadByIdRepository } from "../../protocols/repositories/loadProjectById";

interface AddFollowRepository {
  create: (data: { userId: string; followingId: string }) => Promise<void>;
  isFollowing: (userId: string, followingId: string) => Promise<boolean>;
}

export class AddFollow implements IAddFollow {
  constructor(
    private readonly userRepository: ILoadByIdRepository<IUser>,
    private followRepository: AddFollowRepository
  ) {}

  public async add(userId: string, followingId: string): Promise<void> {
    const userExists = !!(await this.userRepository.loadById(followingId));
    const alreadyFollowing = await this.followRepository.isFollowing(userId, followingId);
    if(alreadyFollowing) throw new Error("User already followings this person!")
    if (!userExists) throw "User not exists!";
    await this.followRepository.create({ userId, followingId });
  }
}
