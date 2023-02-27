import { randomUUID } from "crypto";
import { User } from "../../domain/entities/user";
import { ICreateUserUsecase } from "../../domain/usecases/createUserUsecase";
import { IUserSchema } from "../../validation/schema/createUserSchema";
import { ICreateUserRepository } from "../protocols/createUserRepositories";
import { IEncrypter } from "../protocols/helpers/encrypter";
import { IGenerateToken } from "../protocols/helpers/generateToken";

export class CreateUserUsecase implements ICreateUserUsecase {
    
    constructor(
        private readonly userRepository: ICreateUserRepository,
        private readonly encrypter: IEncrypter,
        private readonly generateToken: IGenerateToken
        ){
        
    }

    public async execute (data: IUserSchema){
        const verifyEmailAlreadyBeingUsed = await this.userRepository.loadByEmail(data.email);
        if(verifyEmailAlreadyBeingUsed) throw new Error("Email already being used!");
        const id = randomUUID()
        const hashedPassord = await this.encrypter.genHash(data.password);
        const user = new User(data.name, data.email, hashedPassord, id);
        await this.userRepository.save(user);
        const token = this.generateToken.generate(user.getId());
        return {token, user}
    }
}