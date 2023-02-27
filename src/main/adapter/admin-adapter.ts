import { Request } from "express";
import { JwtToken } from "../../utils/generateToken";
import { getToken } from "../../utils/getToken";
import { Adapter } from "./adapter";

const jwtToken = new JwtToken();

export class AdminAdapter extends Adapter {
  override authorized(req: Request) {
    const token = getToken(req);
    const isValid = jwtToken.tokenIsValid(token);
    if (!isValid) throw "Token is invalid!";
    const user = jwtToken.decodeUser(token);
    if (!user) throw "Token is invalid!";
    if (!user.roles.includes("ADMIN")) {
      return "Unauthorized!";
    }
  }
}
