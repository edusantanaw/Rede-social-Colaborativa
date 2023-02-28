import { IUser } from "../../../types/user";

export interface ILoadUserByIdRepository {
    loadById: (userId: string) => Promise<IUser | null>
}