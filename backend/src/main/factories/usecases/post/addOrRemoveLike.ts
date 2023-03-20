import { AddOrRemovePostLikeUsecase } from "../../../../data/usecases/post/addOrRemoveLike";
import { PostRepository } from "../../../../infra/repositories/post";

export function makeAddOrRemovePostLikeUsecase() {
  const postRepository = new PostRepository();
  return new AddOrRemovePostLikeUsecase(postRepository);
}
