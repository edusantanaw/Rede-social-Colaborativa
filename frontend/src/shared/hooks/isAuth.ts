import { useLayoutEffect, useState } from "react";
import { useAuth } from "./auth";

export function useIsAuth() {
  const { token, user } = useAuth();
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (user && token) setIsAuth(() => true);
    else setIsAuth(() => false);
  }, [user, token]);

  return { isAuth };
}
