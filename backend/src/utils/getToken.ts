import {Request} from 'express';

export function getToken(req: Request) {
    const auth = req.headers.authorization;
    if (!auth) throw "Access denied!";
    const token = auth.split(" ")[1];
    return token;
  }