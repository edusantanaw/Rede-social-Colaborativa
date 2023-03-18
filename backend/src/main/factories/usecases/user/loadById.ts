import { LoadById } from "../../../../data/usecases/generics/loadById";
import { UserRepository } from "../../../../infra/repositories/userRepository";

export function makeLoadUserByIdUsecase(){
    const userRepository = new UserRepository()
    return new LoadById(userRepository);
}