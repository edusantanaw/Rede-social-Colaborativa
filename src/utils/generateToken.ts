import { IGenerateToken } from "../data/protocols/helpers/generateToken";
import jwt from "jsonwebtoken";
import { promisify } from "node:util";

export class JwtToken implements IGenerateToken {
  private secret: string = "any_secret";
  public async generate(userId: string): Promise<string> {
    const token = await promisify(jwt.sign)(userId, this.secret);
    return token as string;
  }

  public decodeUser(token: string) {
    try {
      const userId = jwt.decode(token);
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
