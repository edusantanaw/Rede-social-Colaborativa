import { CreateController } from "../../../../presentational/controllers/create";
import { commentSchema } from "../../../../validation/schema/comment";
import { ValidSchema } from "../../../../validation/validSchema";
import { makeCreateCommentUsecase } from "../../usecases/post/createComment";

export function makeCreateCommentController() {
    const validSchema = new ValidSchema(commentSchema);
  return new CreateController(makeCreateCommentUsecase(), validSchema);
}
