import { IPost } from "../../types/post";import { post, prisma } from "../prisma";

type dataRepository = {
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

  public async loadFeed(data: dataRepository) {
    const posts = (await prisma.$queryRaw`
      select post.content, post.image, post.id, users.name, users.id as "userId"
      from post inner join users on users.id = post."userId"
      left join follows on follows."followingId" = post."userId"
      where users.id = ${data.userId} or follows."followerId" = ${data.userId}
      order by post."createdAt" desc
      limit ${data.take} offset ${data.skip};
      `) as IPost[];
  console.log(posts)
return posts;
  }
}
