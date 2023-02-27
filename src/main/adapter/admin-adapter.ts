import { Controller } from "./express-adapter";
import { Request, Response } from "express";
import { JwtToken } from "../../utils/generateToken";
import { getToken } from "../../utils/getToken";

const jwtToken = new JwtToken();

export default function (controller: Controller) {
  return async (req: Request, res: Response) => {
    try {
      const token = getToken(req);
      const isValid = jwtToken.tokenIsValid(token);
      if(!isValid) throw "Token is invalid!";
      const user = jwtToken.decodeUser(token);
      if(!user) throw "Token is invalid!"
      if(!user.roles.includes("ADMIN")){
        return res.status(403).json("Unauthorized!")
      }
      const { body, statusCode } = await controller.handle({
        ...req.body,
        ...req.params,
        ...req.query,
      });
      return res.status(statusCode).json(body);
    } catch (error) {
      return res.status(401).json(error);
    }
  };
}
