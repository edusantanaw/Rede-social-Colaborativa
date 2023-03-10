import { LoadController } from "../../../../presentational/controllers/load";
import { makeLoadFeedUsecase } from "../../usecases/post/feed";

export function makeLoadFeedController() {
  return new LoadController(makeLoadFeedUsecase());
}
