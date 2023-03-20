import { IComment } from "../../types/comment";
import { comments, prisma } from "../prisma";

export class CommentRepository {
  public async create(data: IComment) {
    const newComment = await comments.create({
      data: data
    });
    return newComment as IComment;
  }

  public async loadAll(postId: string){
    const data = await prisma.$queryRaw`
      select perfilPhoto, name, users.id  as "userId", content, "postId"
      from comments inner join users on users.id = comments."userId"
      where "postId" = ${postId};
    ` as IComment[]
    return data;
  }
}
