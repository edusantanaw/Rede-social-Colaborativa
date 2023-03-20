import { Comment } from "../../../domain/entities/comment";
import { ICreateUsecase } from "../../../domain/usecases/create";
import { IComment } from "../../../types/comment";
import { IPost } from "../../../types/post";
import { ICreateRepository } from "../../protocols/repositories/createRepository";
import { ILoadByIdRepository } from "../../protocols/repositories/loadProjectById";

export class CreateCommentUsecase
  implements ICreateUsecase<IComment, IComment>
{
  constructor(
    private readonly postRepository: ILoadByIdRepository<IPost>,
    private readonly commentRepository: ICreateRepository<IComment, IComment>
  ) {}

  public async execute(data: IComment): Promise<IComment> {
    if (data.postId) {
      const maybeRepository = await this.postRepository.loadById(data.postId);
      if (!maybeRepository) throw new Error("Post not exists!");
    }
    const comment = new Comment(data);
    await this.commentRepository.create(comment.getComment());
    return comment.getComment();
  }
}
