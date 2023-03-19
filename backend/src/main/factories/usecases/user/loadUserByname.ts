import { LoadByNameUsecase } from "../../../../data/usecases/generics/loadByName";
import { UserRepository } from "../../../../infra/repositories/userRepository";

export function makeLoadUserByNameUsecase(){
    const userRepository = new UserRepository()
    return new LoadByNameUsecase(userRepository)
}