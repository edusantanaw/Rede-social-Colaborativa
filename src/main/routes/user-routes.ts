import { Router } from "express";
import { Adapter } from "../adapter/adapter";
import { makeAuthController } from "../factories/controllers/auth-controller";
import { makeCreateUserController } from "../factories/controllers/createUser";

const adapter = new Adapter();

export default function (router: Router) {
  router.post("/signup", adapter.make(makeCreateUserController()));
  router.post("/signin", adapter.make(makeAuthController()));
}
