import { User } from "../../../domain/entities/user"
import { IUser } from "../../../types/user"

export interface ICreateUserRepository {
    save: (data: User) => Promise<IUser>
    loadByEmail: (email: string) => Promise< IUser| null> 
}