import { userKey } from "../constants/keys";
import { IPost } from "../types/post";
import { Api } from "../utils/api";
import { makeOptions } from "../utils/makeOptions";

export async function creaetPost(data: FormData) {
  try {
    const response = await Api.post<IPost>("/post", data, makeOptions());
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function loadFeed({ page }: { page: number }) {
  const user = JSON.parse(localStorage.getItem(userKey) || "{}");
  const response = await Api.get(
    `/feed/${user.id}?skip=${page}`,
    makeOptions()
  );
  console.log("feed:", response.data);
  return response.data as IPost[];
}
