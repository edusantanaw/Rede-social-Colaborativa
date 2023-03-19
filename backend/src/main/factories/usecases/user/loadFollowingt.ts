import { LoadFollowingUsecase } from "../../../../data/usecases/user/loadFollowing";
import { FollowRepository } from "../../../../infra/repositories/follow";
import { UserRepository } from "../../../../infra/repositories/userRepository";

export function makeLoadFollowingUsecase() {
  const followRepository = new FollowRepository();
  const userRepository = new UserRepository();
  return new LoadFollowingUsecase(followRepository, userRepository);
}
