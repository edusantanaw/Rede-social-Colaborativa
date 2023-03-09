import {
  IRecoveryPassword,
  recoveryPassword,
} from "../../domain/usecases/recoveryPassword";
import { IUser } from "../../types/user";
import { IGenHash } from "../protocols/helpers/encrypter";
import { IGenerateToken } from "../protocols/helpers/generateToken";

interface IUserRepository {
  findByEmail: (email: string) => Promise<IUser | null>;
  updatePassword: (id: string, password: string) => Promise<void>;
}

export class RecoveryPassword implements IRecoveryPassword {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly encrypter: IGenHash,
    private readonly generateToken: IGenerateToken
  ) {}

  public async execute(data: recoveryPassword): Promise<string> {
    const user = await this.userRepository.findByEmail(data.email);
    if (!user) throw new Error("User not exists!");
    const hashPassword = await this.encrypter.genHash(data.password);
    await this.userRepository.updatePassword(user.id, hashPassword);
    const token = await this.generateToken.generate(user);
    return token;
  }
}
