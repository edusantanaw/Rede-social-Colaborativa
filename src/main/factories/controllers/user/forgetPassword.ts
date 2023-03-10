import { ForgetPasswordController } from "../../../../presentational/controllers/forgetPassword";
import { makeForgetPasswordUsecase } from "../../usecases/user/forgetPassword";

export function makeForgetPasswordController() {
  return new ForgetPasswordController(makeForgetPasswordUsecase());
}
