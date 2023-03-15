import { Request, Response } from "express";
import { Multer } from "multer";
import { httpResponse } from "../../presentational/protocols/httpResponse";

export interface Controller {
  handle: (data: any) => Promise<httpResponse>;
}

export class Adapter {
  public make(controller: Controller) {
    return async (req: Request, res: Response) => {
      if (!this.authorized(req)) return res.status(401).json("Unathorized!");
      try {
        const { body, statusCode } = await controller.handle({
          ...req.body,
          ...req.params,
          ...req.query,
          file: req?.file?.filename,
        });
        return res.status(statusCode).json(body);
      } catch (error) {
        return res.status(500).json("Internal server error!");
      }
    };
  }

  public authorized(req: Request) {
    return true;
  }
}
