import { userKey } from "../constants/keys";
import { IComment } from "../types/comment";
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


export async function createComment(data: IComment) {
  const response =await Api.post<IComment>("/post/comment", data, makeOptions())
  return response.data;
}

type comment = {
  content: string;
  userId: string;
  perfilPhoto?: string;
}

export async function loadComments(id: string) {
    const response = await Api.get<comment[]>("/post/comment/"+id, makeOptions())
    console.log(response)
    return response.data;
}