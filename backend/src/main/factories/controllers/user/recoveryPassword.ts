import { RecoveryPasswordController } from "../../../../presentational/controllers/recoveryPassword";
import { recoverySchema } from "../../../../validation/schema/recoveryPassword";
import { ValidSchema } from "../../../../validation/validSchema";
import { makeRecoveryPasswordUsecase } from "../../usecases/user/recoveryPassword";

export function makeRecoveryPasswordController() {
  const recoveryPasswordUsecase = makeRecoveryPasswordUsecase();
  const validSchema = new ValidSchema(recoverySchema);
  return new RecoveryPasswordController(recoveryPasswordUsecase, validSchema);
}
