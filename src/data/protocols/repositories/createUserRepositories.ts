import { User } from "../../../domain/entities/user"
import { IUser } from "../../../types/user"

export interface ICreateUserRepository {
    save: (data: User) => Promise<void>
    loadByEmail: (email: string) => Promise< IUser| null> 
}