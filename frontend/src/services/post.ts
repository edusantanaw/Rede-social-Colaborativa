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

export async function creaetPost(data: FormData) {
  try {
    const response = await Api.post("/post", data, makeOptions());
    return response;
  } catch (error) {}
}

export async function loadFeed({ page }: { page: number }) {
  const user = JSON.parse(localStorage.getItem("@App:user") || "{}");
  const response = await Api.get(
    `/feed/${user.id}?page=${page}`,
    makeOptions()
  );
  console.log(response);
  return response.data;
}
