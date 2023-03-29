import { IUser } from "./user";

export type signinData = {
    email: string;
    password: string;
  };

  export interface IAuthContext {
    token: string | null;
    user: IUser | null;
    error: string | null;
    handleAuth: <T>(data: T, url: string) => Promise<void>;
    logout: () => void;
  }