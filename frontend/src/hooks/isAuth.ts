import { useLayoutEffect, useState } from "react";
import { useAuth } from "./auth";

export function useIsAuth() {
  const { auth } = useAuth();
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useLayoutEffect(() => {
    setIsAuth(auth);
  }, [auth]);

  return { isAuth };
}
