import { createContext, useEffect, useState } from "react";
import { tokenKey, userKey } from "../../constants/keys";
import { authService } from "../../services/auth";
import { IAuthContext } from "../types/auth";
import { IUser } from "../types/user";

export const AuthContext = createContext({} as IAuthContext);

type props = {
  children: React.ReactNode;
};

type storage = {
  user: IUser;
  token: string;
  remember: boolean;
};

type IRemember = {
  remember: boolean;
};

export function AuthProvider({ children }: props) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const { token, user } = getStorage();
    if (token && user) {
      setToken(token);
      setUser(JSON.parse(user));
    }
  }, []);

  async function handleAuth<T extends IRemember>(data: T, url: string) {
    try {
      const response = await authService(data, url);
      setToken(response.token);
      setUser(response.user);
      makeStorage({ ...response, remember: data.remember });
    } catch (err) {
      const reponseError = err as { response: { data: string } };
      setError(reponseError.response.data);
    }
  }

  function logout() {
    setToken(() => null);
    setUser(() => null);
    removeStorage();
  }

  return (
    <AuthContext.Provider value={{ token, user, error, handleAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function makeStorage(data: storage) {
  console.log(data);
  if (data.remember) {
    localStorage.setItem(userKey, JSON.stringify(data.user));
    localStorage.setItem(tokenKey, data.token);
    return;
  }
  sessionStorage.setItem(userKey, JSON.stringify(data.user));
  sessionStorage.setItem(tokenKey, data.token);
}

function removeStorage() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(userKey);
  sessionStorage.removeItem(tokenKey);
  sessionStorage.removeItem(userKey);
}

function getStorage() {
  const token =
    localStorage.getItem(tokenKey) ?? sessionStorage.getItem(tokenKey);
  const user = localStorage.getItem(userKey) ?? sessionStorage.getItem(userKey);
  return { token, user };
}
