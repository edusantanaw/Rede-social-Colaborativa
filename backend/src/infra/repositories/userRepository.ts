import { User } from "../../domain/entities/user";import { IUser } from "../../types/user";
import { prisma, user } from "../prisma";

export class UserRepository {
  public async save(data: User): Promise<IUser> {
    const newUser = await user.create({
      data: {
        ...data.getUser(),
      },
    });
    return newUser as IUser;
  }

  public async loadByEmail(email: string): Promise<IUser | null> {
    const users = await user.findFirst({
      where: {
        email: email,
      },
    });
    return users as IUser;
  }

  public async loadById(id: string) {
    const findUser = await user.findFirst({ where: { id } });
    return findUser as IUser;
  }

  public async update(data: IUser) {
    const updatedUser = await user.update({
      where: {
        id: data.id,
      },
      data: data,
    });
    return updatedUser as IUser;
  }

  public async updatePassword(id: string, pass: string) {
    await user.update({
      where: {
        id: id,
      },
      data: {
        password: pass,
      },
    });
  }

  public async loadByName(name: string) {
    const users = (await prisma.$queryRaw`
      select id, name, email, "perfilPhoto" 
      from users
      where lower(name) like ${"%" + name.toLowerCase() + "%"}
    `) as IUser[];

    return users;
  }
}
