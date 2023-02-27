import { ICompareHash, IGenHash } from "../data/protocols/helpers/encrypter";
import bcrypt from 'bcrypt'

export class Encrypter implements ICompareHash, IGenHash {
    private rounds = 10;
    public async genHash(password: string): Promise<string>{
        const salt = await bcrypt.genSalt(this.rounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }

    public async compare(password: string, hashedPassword: string): Promise<boolean>{
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch
    };
}