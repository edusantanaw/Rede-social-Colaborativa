import { User } from "../../domain/entities/user";
import { IUser } from "../../types/user";
import { user } from "../prisma";

export class UserRepository {
  public async save(data: User): Promise<IUser> {
    const newUser = await user.create({
      data: {
        ...data.getUser(),
      },
    });
    return newUser;
  }

  public async loadByEmail(email: string): Promise<IUser | null> {
    const users = await user.findFirst({
      where: {
        email: email,
      },
    });
    return users;
  }
  
  public async findById(id: string) {
    const findUser = await user.findFirst({ where: { id } });
    return findUser;
  }
}
