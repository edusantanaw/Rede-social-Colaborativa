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

export async function loadFeed(page: number) {
  const user = JSON.parse(localStorage.getItem(userKey) || "{}");
  const response = await Api.get(
    `/feed/${user.id}?skip=${page}`,
    makeOptions()
  );
  console.log("feed:", response.data);
  return response.data as IPost[];
}

export async function loadPostByUser(page: number, userId?: string) {
  const response = await Api.get(
    `/post/perfil/${userId}?skip=${page}`,
    makeOptions()
  );
  console.log(response);
  return response.data as IPost[];
}

export async function addOrRemoveLike(postId: string, userId: string) {
  const response = await Api.post(
    "/post/like/" + userId,
    { postId },
    makeOptions()
  );
  console.log(response);
  return response.data;
}
