import { Router } from "express";
import { Adapter } from "../adapter/adapter";
import { makeCreateUserController } from "../factories/controllers/createUser";

const adapter = new Adapter()

export default function(router: Router){
    router.post("/api/user", adapter.make(makeCreateUserController()) )
}