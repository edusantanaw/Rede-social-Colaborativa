import { loadPostByUserId } from "../../data/protocols/repositories/loadPostByUser";import { ILike } from "../../types/like";
import { IPost } from "../../types/post";
import { likes, post, prisma } from "../prisma";

type dataFeed = {
  skip: number;
  take: number;
  userId: string;
};

export class PostRepository {
  public async create(data: IPost) {
    const newPost = await post.create({
      data: data,
    });
    return newPost as IPost;
  }

  public async loadById(id: string) {
    const loadedPost = await post.findFirst({ where: { id } });
    return loadedPost as IPost | null;
  }

  public async loadFeed(data: dataFeed) {
    const posts = (await prisma.$queryRaw`
      select post.content, post.image, post.id, users."perfilPhoto", users.name, users.id as "userId"
      from post inner join users on users.id = post."userId"
      left join follows on follows."followingId" = post."userId"
      where users.id = ${data.userId} or follows."followerId" = ${data.userId}
      order by post."createdAt" desc
      limit ${data.take} offset ${data.skip * data.take};
      `) as IPost[];
    return posts;
  }

  public async loadPostByUserId({ id, take, skip }: loadPostByUserId) {
    const posts = (await prisma.$queryRaw`
    select post.content, post.image, post.id, users.name, users."perfilPhoto",users.id as "userId"
    from post inner join users on users.id = post."userId"
    where users.id = ${id}
    order by post."createdAt" desc
    limit ${take} offset ${skip * take};
    `) as IPost[];
    console.log(posts);
    return posts;
  }

  public async loadLike(postId: string, userId: string) {
    const like = await likes.findFirst({
      where: {
        postId,
        userId,
      },
    });
    return like as ILike;
  }

  public async addLike(data: ILike) {
    await likes.create({
      data: data,
    });
  }

  public async removeLike(id: string) {
    try {
      await likes.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      // Already deleted
      // Capture a possible error if then user spams the like button
    }
  }

  public async loadLikes(id: string) {
    const userLikes = await likes.findMany({
      where: {
        postId: id,
      },
    });
    return userLikes.map((like) => like.userId);
  }
}
