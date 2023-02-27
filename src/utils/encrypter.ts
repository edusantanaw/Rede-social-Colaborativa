import { IEncrypter } from "../data/protocols/helpers/encrypter";
import bcrypt from 'bcrypt'

export class Encrypter implements IEncrypter {
    private rounds = 10;
    public async genHash(password: string): Promise<string>{
        const salt = await bcrypt.genSalt(this.rounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }
}