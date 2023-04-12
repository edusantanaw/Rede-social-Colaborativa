import { User } from "../../../domain/entities/user";
import { ICreateUsecase } from "../../../domain/usecases/create";
import { IUser } from "../../../types/user";
import { IUserSchema } from "../../../validation/schema/createUserSchema";
import { IGenHash } from "../../protocols/helpers/encrypter";
import { IGenerateToken } from "../../protocols/helpers/generateToken";
import { ICreateUserRepository } from "../../protocols/repositories/createUserRepositories";

type executeResponse = Promise<{ token: string; user: IUser }>;

export class CreateUserUsecase implements ICreateUsecase<IUserSchema, executeResponse> {
  constructor(
    private readonly userRepository: ICreateUserRepository,
    private readonly encrypter: IGenHash,
    private readonly generateToken: IGenerateToken
  ) {}

  public async execute(data: IUserSchema): Promise<executeResponse> {
    const emailAlreadyUsed = !!(await this.userRepository.loadByEmail(
      data.email
    ));
    if (emailAlreadyUsed) throw new Error("Email is already being used!");
    const hashedPassord = await this.encrypter.genHash(data.password);
    console.log(data);
    const user = new User(data);
    user.setPassword(hashedPassord);
    await this.userRepository.save(user);
    const token = await this.generateToken.generate(user.getUser());
    return { token, user: user.getUser() };
  }
}
