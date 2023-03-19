import { Request } from "express";import { JwtToken } from "../../utils/generateToken";
import { getToken } from "../../utils/getToken";
import { Adapter } from "./adapter";

const jwtToken = new JwtToken();

export class UserAdapter extends Adapter {
  override authorized(req: Request) {
    try {
      const token = getToken(req);
      const isValid = jwtToken.tokenIsValid(token);
      return isValid;
    } catch (error) {
      return false;
    }
  }
}
