import { IUser } from "../../../types/user";

export interface IAuthRepository {
    loadByEmail: (email: string) => Promise< IUser| null> 

}