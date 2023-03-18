export function makeOptions() {
    const token = localStorage.getItem("@App:token");
    return {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
  }