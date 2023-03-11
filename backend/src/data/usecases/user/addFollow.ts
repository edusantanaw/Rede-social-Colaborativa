import { IAddFollow } from "../../../domain/usecases/addFollow";
import { IUser } from "../../../types/user";
import { ICreateRepository } from "../../protocols/repositories/createRepository";
import { ILoadByIdRepository } from "../../protocols/repositories/loadProjectById";

export class AddFollow implements IAddFollow {
  constructor(
    private readonly userRepository: ILoadByIdRepository<IUser>,
    private followRepository: ICreateRepository<
      void,
      { userId: string; followingId: string }
    >
  ) {}

  public async add(userId: string, followingId: string): Promise<void> {
    const userExists = !!(await this.userRepository.loadById(followingId));
    if (!userExists) throw "User not exists!";
    await this.followRepository.create({ userId, followingId });
  }
}
