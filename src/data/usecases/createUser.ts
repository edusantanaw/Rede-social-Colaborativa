import { randomUUID } from "crypto";
import { User } from "../../domain/entities/user";
import { ICreateUserUsecase } from "../../domain/usecases/createUserUsecase";
import { IUserSchema } from "../../validation/schema/createUserSchema";
import { ICreateUserRepository } from "../protocols/repositories/createUserRepositories";
import { IEncrypter } from "../protocols/helpers/encrypter";
import { IGenerateToken } from "../protocols/helpers/generateToken";

type executeResponse = Promise<{token: string, user: User}>

export class CreateUserUsecase implements ICreateUserUsecase {
    
    constructor(
        private readonly userRepository: ICreateUserRepository,
        private readonly encrypter: IEncrypter,
        private readonly generateToken: IGenerateToken
        ){}

    public async execute (data: IUserSchema): executeResponse {
        if(await this.userRepository.loadByEmail(data.email)) throw new Error("Email is already being used!");
        const id = randomUUID()
        const hashedPassord = await this.encrypter.genHash(data.password);
        const user = new User(data.name, data.email, hashedPassord, id);
        await this.userRepository.save(user);
        const token = await this.generateToken.generate(user.getId());
        return {token, user}
    }
}