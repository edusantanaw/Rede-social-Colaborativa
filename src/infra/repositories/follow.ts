import { follows } from "../prisma";

export class FollowRepository {
  public async create(data: { userId: string; followingId: string }) {
    await follows.create({
      data: {
        followerId: data.userId,
        followingId: data.followingId,
      },
    });
  }
}
