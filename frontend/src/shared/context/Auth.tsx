import { createContext, useEffect, useState } from "react";
import { tokenKey, userKey } from "../../constants/keys";
import { authService } from "../../services/auth";
import { IAuthContext } from "../types/auth";
import { IUser } from "../types/user";


export const AuthContext = createContext({} as IAuthContext);

type props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: props) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem(tokenKey);
    const user = localStorage.getItem(userKey);
    if (token && user) {
      setToken(token);
      setUser(JSON.parse(user));
    }
  }, []);

  function makeStorage(user: any, token: string) {
    localStorage.setItem(tokenKey, token);
    localStorage.setItem(userKey, JSON.stringify(user));
  }

  async function handleAuth<T>(data: T, url: string) {
    try {
      const response = await authService(data, url);
      makeStorage(response.data.user, response.data.token);
      setToken(response.data.token);
      setUser(response.data.user);
    } catch (err) {
      const reponseError = err as { response: { data: string } };
      setError(reponseError.response.data);
    }
  }

  function logout() {
    setToken(()=> null);
    setUser(()=> null);
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(userKey);
  }

  return (
    <AuthContext.Provider value={{ token, user, error, handleAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
