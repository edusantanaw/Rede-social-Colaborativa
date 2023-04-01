import { UpdateController } from "../../../../presentational/controllers/update";
import { userSchema } from "../../../../validation/schema/user";
import { ValidSchema } from "../../../../validation/validSchema";
import { makeUpdateUserUsecase } from "../../usecases/user/update";

export function makeUpdateUserController() {
  const schemaValidator = new ValidSchema(userSchema);
  return new UpdateController(schemaValidator, makeUpdateUserUsecase());
}
