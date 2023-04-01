import { User } from "../../../domain/entities/user";
import { IUpdateUsecase } from "../../../domain/usecases/udate";
import { IUser } from "../../../types/user";

interface IUpdateUserRepository {
  loadById: (id: string) => Promise<IUser | null>;
  loadByEmail: (email: string) => Promise<IUser | null>;
  update: (data: IUser) => Promise<IUser>;
}

export class UpdateUserUsecase implements IUpdateUsecase<IUser> {
  constructor(private readonly userRepository: IUpdateUserRepository) {}

  public async execute(data: IUser): Promise<IUser> {
    const userExists = await this.userRepository.loadById(data.id);
    if (!userExists) throw new Error("Usuario não existe!");
    if (userExists.email !== data.email) {
      const emailAlreadyUsed = await this.userRepository.loadByEmail(
        data.email
      );
      if (emailAlreadyUsed) throw new Error("O email já está sendo usado!");
    }
    const user = new User({ ...data, password: userExists.password });
    const updatedUser = await this.userRepository.update(user.getUser());
    return updatedUser;
  }
}
