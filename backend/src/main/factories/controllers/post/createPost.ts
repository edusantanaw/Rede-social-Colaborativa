import { CreateController } from "../../../../presentational/controllers/create";
import { postSchema } from "../../../../validation/schema/postSchema";
import { ValidSchema } from "../../../../validation/validSchema";
import { makeCreatePostUsecase } from "../../usecases/post/cratePost";

export function makeCreatePostController() {
  const validSchema = new ValidSchema(postSchema);
  return new CreateController(makeCreatePostUsecase(), validSchema);
}
