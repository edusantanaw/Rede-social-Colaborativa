import { createContext, useEffect, useState } from "react";
import { signinService } from "../services/auth";
import { signinData } from "../types/auth";
import { IUser } from "../types/user";

interface IAuthContext {
  auth: boolean;
  token: string | null;
  user: IUser | null;
  error: string | null;
  signin: (data: signinData) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext({} as IAuthContext);

type props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: props) {
  const [auth, setAuth] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("@App:token");
    const user = localStorage.getItem("@App:user");
    if (token && user) {
      setToken(token);
      setUser(JSON.parse(user));
      setAuth(true);
    }
  }, []);

  function makeStorage(user: any, token: string) {
    localStorage.setItem("@App:token", token);
    localStorage.setItem("@App:user", JSON.stringify(user));
  }

  async function signin(data: signinData) {
    try {
      const response = await signinService(data);
      makeStorage(response.data.user, response.data.token);
      setAuth(true);
      setToken(response.data.token);
      setUser(response.data.user);
    } catch (err) {
      const reponseError = err as { response: { data: string } };
      setError(reponseError.response.data);
    }
  }

  function logout(){
    setToken(null);
    setUser(null);
    localStorage.removeItem("@App:token")
    localStorage.removeItem("@App:user")
  }

  return (
    <AuthContext.Provider value={{ auth, token, user, error, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
