import { AuthController } from "../../../../presentational/controllers/auth";
import { authSchema } from "../../../../validation/schema/authSchema";
import { ValidSchema } from "../../../../validation/validSchema";
import { makeAuthUsecase } from "../../usecases/user/auth";


export function makeAuthController(){
    const authUsecase = makeAuthUsecase()
    const validSchema = new ValidSchema(authSchema);
    return new AuthController(validSchema, authUsecase);
}