export type IUser = {
    id: string,
    name: string,
    email: string,
    password: string,
    perfilPhoto?: string;
    roles: string[]
}