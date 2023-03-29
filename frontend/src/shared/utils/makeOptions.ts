import { tokenKey } from "../../constants/keys";

export function makeOptions() {
    const token = localStorage.getItem(tokenKey);
    return {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
  }