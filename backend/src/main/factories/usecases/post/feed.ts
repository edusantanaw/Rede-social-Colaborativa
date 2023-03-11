import { LoadFeedUsecase } from "../../../../data/usecases/post/loadFeed";
import { PostRepository } from "../../../../infra/repositories/post";

export function makeLoadFeedUsecase() {
  const postRepository = new PostRepository();
  return new LoadFeedUsecase(postRepository);
}
