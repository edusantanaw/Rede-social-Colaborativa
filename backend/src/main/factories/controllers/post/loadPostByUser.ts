import { LoadController } from "../../../../presentational/controllers/load";
import { makeLoadPostByUserUsecase } from "../../usecases/post/loadPostByUser";

export function makeLoadPostByUserController() {
  return new LoadController(makeLoadPostByUserUsecase());
}
