import { CreatePostUsecase } from "../../../data/usecases/createPost";
import { PostRepository } from "../../../infra/repositories/post";
import { UserRepository } from "../../../infra/repositories/userRepository";

export function makeCreatePostUsecase() {
  const userRepository = new UserRepository();
  const postRepository = new PostRepository();
  return new CreatePostUsecase(userRepository, postRepository);
}
