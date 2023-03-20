import { LoadLikeUsecase } from "../../../../data/usecases/post/loadLikes";
import { PostRepository } from "../../../../infra/repositories/post";

export function makeLoadLikesUsecase() {
  const postRepository = new PostRepository();
  return new LoadLikeUsecase(postRepository);
}
