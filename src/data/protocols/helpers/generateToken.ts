import { IUser } from "../../../types/user";

export interface IGenerateToken {
    generate: (user: IUser) => Promise<string>;
}