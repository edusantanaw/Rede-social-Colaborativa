import { IGenerateToken } from "../data/protocols/helpers/generateToken";
import jwt from "jsonwebtoken";
import { promisify } from "node:util";
import { IUser } from "../types/user";

export class JwtToken implements IGenerateToken {
  private secret: string = "any_secret";
  public async generate(user: IUser): Promise<string> {
    const token = await promisify(jwt.sign)(user, this.secret);
    return token as string;
  }

  public decodeUser(token: string) {
    try {
      const userId = jwt.decode(token) as IUser;
      return userId;
    } catch (error) {
      return null;
    }
  }

  public tokenIsValid(token: string) {
    try {
      jwt.verify(token, this.secret);
      return true;
    } catch (error) {
      return false;
    }
  }
}
