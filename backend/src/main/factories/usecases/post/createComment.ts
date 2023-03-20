import { CreateCommentUsecase } from "../../../../data/usecases/post/createComment";
import { CommentRepository } from "../../../../infra/repositories/commentRepository";
import { PostRepository } from "../../../../infra/repositories/post";

export function makeCreateCommentUsecase() {
  const postRepository = new PostRepository();
  const commentRepository = new CommentRepository();
  return new CreateCommentUsecase(postRepository, commentRepository);
}
