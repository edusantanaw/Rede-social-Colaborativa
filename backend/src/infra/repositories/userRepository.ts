import { User } from "../../domain/entities/user";
import { IUser } from "../../types/user";
import { prisma, user } from "../prisma";

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

  public async loadById(id: string) {
    const findUser = await user.findFirst({ where: { id } });
    return findUser;
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
    const users = await prisma.$queryRaw`
      select id, name, email, "perfilPhoto" 
      from users
      where name like ${"%"+name+"%"}
    ` as IUser[]
    
    return users;
  }
}
