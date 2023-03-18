import { IUser } from "./user";

export type signinData = {
    email: string;
    password: string;
  };

  export interface IAuthContext {
    auth: boolean;
    token: string | null;
    user: IUser | null;
    error: string | null;
    signin: (data: signinData) => Promise<void>;
    logout: () => void;
  }