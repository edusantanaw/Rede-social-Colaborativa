import { IUser } from "./user"

export type IProject = {
    name: string
    description: string
    owner: IUser
    collaborators?: IUser[]
}