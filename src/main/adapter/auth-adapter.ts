import { Request } from "express";
import { JwtToken } from "../../utils/generateToken";
import { getToken } from "../../utils/getToken";
import { Adapter } from "./adapter";

const jwtToken = new JwtToken();

export class UserAdapter extends Adapter {
  override authorized(req: Request) {
    const token = getToken(req);
    console.log(token)
    const isValid = jwtToken.tokenIsValid(token);
    console.log("test", isValid)
    return isValid;
  }
}
