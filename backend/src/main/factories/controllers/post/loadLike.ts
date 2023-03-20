import { LoadByIdController } from "../../../../presentational/controllers/loadById";
import { makeLoadLikesUsecase } from "../../usecases/post/loadLikes";

export function makeLoadLikeController() {
  return new LoadByIdController<string[]>(makeLoadLikesUsecase());
}
