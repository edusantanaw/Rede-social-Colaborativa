import { tokenKey } from "../../constants/keys";

export function makeOptions() {
    const tokenLocal = localStorage.getItem(tokenKey);
    const tokenSession = sessionStorage.getItem(tokenKey);
    return {
      headers: {
        authorization: `Bearer ${tokenLocal ?? tokenSession}`,
      },
    };
  }