import { Controller } from "./express-adapter";
import { Request, Response } from "express";

export class Adapter {
  public make(controller: Controller) {
    try {
      return async (req: Request, res: Response) => {
        this.authorized(req);
        const { body, statusCode } = await controller.handle({
          ...req.body,
          ...req.params,
          ...req.query,
        });
        return res.status(statusCode).json(body);
      };
    } catch (error) {}
  }

  public authorized(req: Request) {
    return ;
  }
}
