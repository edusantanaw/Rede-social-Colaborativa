import { IComment } from "../../types/comment";
import { comments } from "../prisma";

export class CommentRepository {
  public async create(data: IComment) {
    const newComment = await comments.create({
      data: data
    });
    return newComment as IComment;
  }
}
