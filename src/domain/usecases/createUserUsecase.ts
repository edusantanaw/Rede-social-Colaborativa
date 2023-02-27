import { IUserSchema } from "../../validation/schema/createUserSchema";
import { User } from "../entities/user";

export interface ICreateUserUsecase {
    execute: (data: IUserSchema) => Promise<{user: User, token: string}>
}