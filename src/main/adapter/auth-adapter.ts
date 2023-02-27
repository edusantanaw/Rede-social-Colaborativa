import { Controller } from "./express-adapter";
import { Request, Response } from "express";
import { JwtToken } from "../../utils/generateToken";
import { getToken } from "../../utils/getToken";

const jwtToken = new JwtToken();

export default function (controller: Controller) {
  return async (req: Request, res: Response) => {
    try {
      const token = getToken(req);
      jwtToken.tokenIsValid(token);
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
