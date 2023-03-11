import { createContext, useEffect, useState } from "react";
import { signinService } from "../services/auth";
import { signinData } from "../types/auth";

interface IAuthContext {
  auth: boolean;
  token: string | null;
  user: null;
  error: string | null;
  signin: (data: signinData) => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);

type props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: props) {
  const [auth, setAuth] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("@App:token");
    console.log(token)
    if (token) {
      setToken(token);
      setAuth(true);
    }
  }, []);
  console.log(auth)
  function makeStorage(user: any, token: string) {
    localStorage.setItem("@App:token", token);
    localStorage.setItem("@App:user", JSON.stringify(user));
  }

  async function signin(data: signinData) {
    try {
      const response = await signinService(data);
      console.log(response.data)
      makeStorage(response.data.user, response.data.token);
      setAuth(true);
      setToken(response.data.token);
      setUser(response.data.user);
    } catch (err) {
      const reponseError = err as { response: { data: string } };
      setError(reponseError.response.data);
    }
  }
  return (
    <AuthContext.Provider value={{ auth, token, user, error, signin }}>
      {children}
    </AuthContext.Provider>
  );
}
