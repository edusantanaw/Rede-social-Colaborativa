import { User } from "../../domain/entities/user";
import { IUser } from "../../types/user";
import {user} from '../prisma'

export class UserRepository {
    
    public async save(data: User): Promise<void>{
        await user.create({
            data: {
                id: data.getId(),
                name: data.getName(),
                email: data.getEmail(),
                password: data.getPassword()
            }
        })
    }

    public async loadByEmail(email: string): Promise<IUser | null> {
        const users = await user.findFirst({
            where: {
                email: email
            }
        })
       return users;
    }
}