import { IPost } from "../../types/post";
import { post, prisma } from "../prisma";

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
      select content, image, post.id, user.id, user.photo
      from post inner join user on user.id = post.userId
      inner join follows on follows."followerId" = user.id
      where user.id = ${data.userId}
      limit ${data.take} offset ${data.skip}
      order by post"createAt" desc;
      `) as IPost[];

    return posts;
  }
}
