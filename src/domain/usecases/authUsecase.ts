import { IUser } from "../../types/user";

export interface IAuthUsecase {
  auth: (
    email: string,
    password: string
  ) => Promise<{ token: string; user: IUser }>;
}
