import { IUser } from "../../types/user";
import { IUserSchema } from "../../validation/schema/createUserSchema";

export interface ICreateUserUsecase {
    execute: (data: IUserSchema) => Promise<{user: IUser, token: string}>
}