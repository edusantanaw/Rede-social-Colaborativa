import { LoadByIdController } from "../../../../presentational/controllers/loadById";
import { makeLoadCommentsUsecase } from "../../usecases/post/loadComments";

export function makeLoadCommentsController() {
  return new LoadByIdController(makeLoadCommentsUsecase());
}
