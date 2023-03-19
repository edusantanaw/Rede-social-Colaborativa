import { IUser } from "../../types/user";import { follows, prisma } from "../prisma";

export class FollowRepository {
  public async create(data: { userId: string; followingId: string }) {
    await follows.create({
      data: {
        followerId: data.userId,
        followingId: data.followingId,
      },
    });
  }

  public async loadFollowing(id: string) {
    const users = (await prisma.$queryRaw`
      SELECT users.* FROM followers 
      JOIN users ON follows."followingId" = users.id 
      WHERE follows."followerId" = ${id};
    `) as IUser[];
    return users;
  }
}
