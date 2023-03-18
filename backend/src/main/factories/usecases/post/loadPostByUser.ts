import { LoadPostByUserUsecase } from "../../../../data/usecases/post/loodPostByUser";
import { PostRepository } from "../../../../infra/repositories/post";

export function makeLoadPostByUserUsecase() {
  const postRepository = new PostRepository();
  return new LoadPostByUserUsecase(postRepository);
}
