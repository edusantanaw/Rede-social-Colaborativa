import { Request, Response } from "express";
import { httpResponse } from "../../presentational/protocols/httpResponse";

export interface Controller {
  handle: (data: any) => Promise<httpResponse>;
}

export class Adapter {
  public make(controller: Controller) {
    return async (req: Request, res: Response) => {
      try {
        this.authorized(req);
        const { body, statusCode } = await controller.handle({
          ...req.body,
          ...req.params,
          ...req.query,
        });
        return res.status(statusCode).json(body);
      } catch (error) {
        return res.status(403).json(error);
      }
    };
  }

  public authorized(req: Request) {
    return;
  }
}
