import { IUser } from "../../../types/user";

export interface ILoadUserByEmailRepository {
    loadByEmail: (email: string) => Promise< IUser| null> 
}