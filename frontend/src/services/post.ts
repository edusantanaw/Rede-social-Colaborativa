import { IPost } from "../types/post";
import { Api } from "../utils/api";

function makeOptions() {
  const token = localStorage.getItem("@App:token");
  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
}

export async function creaetPost(data: FormData) {
  try {
    const response = await Api.post("/post", data, makeOptions());
    console.log(response)
    return response;
  } catch (error) {
    console.log(error)
  }
}

export async function loadFeed({ page }: { page: number }) {
  const user = JSON.parse(localStorage.getItem("@App:user") || "{}");
  const response = await Api.get(
    `/feed/${user.id}?skip=${page}`,
    makeOptions()
  );
  console.log("feed:");
  return response.data as IPost[];
}
