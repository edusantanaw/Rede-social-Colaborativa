import { IAuthUsecase } from "../../../domain/usecases/authUsecase";
import { ICompareHash } from "../../protocols/helpers/encrypter";
import { IGenerateToken } from "../../protocols/helpers/generateToken";
import { ILoadUserByEmailRepository } from "../../protocols/repositories/authRepository";

export class AuthUsecase implements IAuthUsecase {
    constructor(
        private readonly repository: ILoadUserByEmailRepository,
        private readonly encrypter: ICompareHash,
        private readonly generateToken: IGenerateToken
    ){}
    public async auth(email: string, password: string){
        const user = await this.repository.loadByEmail(email);
        console.log(user);
        if(!user) throw new Error("User not found!");
        const passMatch = await this.encrypter.compare(password, user.password);
        if(!passMatch) throw new Error("Password is invalid!")
        const token = await this.generateToken.generate(user);
        return {token, user};
    }
}