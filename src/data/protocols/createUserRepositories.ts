import { User } from "../../domain/entities/user"


export interface ICreateUserRepository {
    save: (data: User) => Promise<User>
    loadByEmail: (email: string) => Promise<User | null> 
}