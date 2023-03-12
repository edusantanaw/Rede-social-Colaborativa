import { Api } from "../utils/api";

function makeOptions() {
  const token = localStorage.getItem("@App:token");
  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
}

type data = {
  userId: string;
  content?: string;
  image?: any;
};

export async function creaetPost(data: data) {
  try {
    const response = await Api.post("/post", data, makeOptions());
    return response;
  } catch (error) {}
}
