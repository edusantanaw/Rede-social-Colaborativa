import { IUser } from "../../../types/user";

export interface ILoadUserByIdRepository {
    findById: (userId: string) => Promise<IUser | null>
}