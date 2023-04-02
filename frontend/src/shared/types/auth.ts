import { IUser } from "./user";

type IRemember = {
  remember: boolean;
};

export type signinData = {
  email: string;
  password: string;
};

export interface IAuthContext {
  token: string | null;
  user: IUser | null;
  error: string | null;
  handleAuth: <T extends IRemember>(data: T, url: string) => Promise<void>;
  logout: () => void;
}
