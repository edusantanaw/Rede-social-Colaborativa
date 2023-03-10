import { IPost } from "../../types/post";
import { post } from "../prisma";

export class PostRepository {
  public async create(data: IPost) {
    const newPost = await post.create({
      data: data,
    });
    return newPost as IPost;
  }
}
