import { AddFollow } from "../../../../data/usecases/user/addFollow";
import { FollowRepository } from "../../../../infra/repositories/follow";
import { UserRepository } from "../../../../infra/repositories/userRepository";

export function makeAddFollowUsecase() {
  const userRepository = new UserRepository();
  const followRepository = new FollowRepository();
  return new AddFollow(userRepository, followRepository);
}
