import { CreateUserController } from "../../../presentational/controllers/createUser";
import { userSchema } from "../../../validation/schema/createUserSchema";
import { ValidSchema } from "../../../validation/validSchema";
import { makeCreateUserUsecase } from "../usecases/createUserUsecase";

export function makeCreateUserController(){
    const createUserUsecase = makeCreateUserUsecase()
    const validSchema  = new ValidSchema(userSchema);
    return new CreateUserController(validSchema, createUserUsecase);
}