import { randomUUID } from "crypto";
import { User } from "../../domain/entities/user";
import { ICreateUserUsecase } from "../../domain/usecases/createUserUsecase";
import { IUserSchema } from "../../validation/schema/createUserSchema";
import { ICreateUserRepository } from "../protocols/repositories/createUserRepositories";
import { IGenHash } from "../protocols/helpers/encrypter";
import { IGenerateToken } from "../protocols/helpers/generateToken";
import { IUser } from "../../types/user";

type executeResponse = Promise<{token: string, user: IUser}>

export class CreateUserUsecase implements ICreateUserUsecase {
    
    constructor(
        private readonly userRepository: ICreateUserRepository,
        private readonly encrypter: IGenHash,
        private readonly generateToken: IGenerateToken
        ){}

    public async execute (data: IUserSchema): executeResponse {
        if(await this.userRepository.loadByEmail(data.email)) throw new Error("Email is already being used!");
        const id = randomUUID()
        const hashedPassord = await this.encrypter.genHash(data.password);
        const user = 
        await this.userRepository.save(new User(data.name, data.email, hashedPassord, id));
        const token = await this.generateToken.generate(user);
        return {token, user}
    }
}