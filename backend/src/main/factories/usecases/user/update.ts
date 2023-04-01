import { UpdateUserUsecase } from "../../../../data/usecases/user/update";
import { UserRepository } from "../../../../infra/repositories/userRepository";

export function makeUpdateUserUsecase(){
    const userRepository = new UserRepository()
    return new  UpdateUserUsecase(userRepository);
}