import { LoadController } from "../../../../presentational/controllers/load";
import { makeLoadPostByUserUsecase } from "../../usecases/post/loadPostByUser";

export function makeLoadFeedController() {
  return new LoadController(makeLoadPostByUserUsecase());
}
