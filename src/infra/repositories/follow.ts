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

  public async isFollowing(userId: string, followingId: string) {
    const following = !!(await follows.findFirst({
      where: {
        AND: {
          followerId: userId,
          followingId: followingId,
        },
      },
    }));
    return following;
  }
}
