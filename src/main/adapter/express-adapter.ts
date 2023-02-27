import { httpResponse } from "../../presentational/protocols/httpResponse";
import {Request, Response} from 'express';

export interface Controller {
    handle: (data: any) => Promise<httpResponse>
}

export default function (constroller: Controller){
    return async (req: Request, res: Response) => {
        const { body, statusCode} = await constroller.handle({
            ...req.body,
            ...req.params,
            ...req.query
        })
        return res.status(statusCode).json(body);
    }
}