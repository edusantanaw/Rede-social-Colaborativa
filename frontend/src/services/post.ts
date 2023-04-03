import { userKey } from "../constants/keys";
import { IComment } from "../shared/types/comment";
import { IPost } from "../shared/types/post";
import { Api } from "../shared/utils/api";
import { makeOptions } from "../shared/utils/makeOptions";

export async function creaetPost(data: FormData) {
  try {
    const response = await Api.post<IPost>("/post", data, makeOptions());
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function loadFeed(page: number) {
  const user = JSON.parse(
    localStorage.getItem(userKey) || sessionStorage.getItem(userKey) || "{}"
  );
  const response = await Api.get(
    `/feed/${user.id}?skip=${page}&take=4`,
    makeOptions()
  );
  return response.data as IPost[];
}

export async function loadPostByUser(page: number, userId?: string) {
  const response = await Api.get(
    `/post/perfil/${userId}?skip=${page}`,
    makeOptions()
  );
  return response.data as IPost[];
}

export async function addOrRemoveLike(postId: string, userId: string) {
  const response = await Api.post(
    "/post/like/" + userId,
    { postId },
    makeOptions()
  );
  return response.data;
}

export async function createComment(data: IComment) {
  const response = await Api.post<IComment>(
    "/post/comment",
    data,
    makeOptions()
  );
  return response.data;
}

type comment = {
  content: string;
  userId: string;
  perfilPhoto?: string;
  name: string;
};

export async function loadComments(id: string) {
  const response = await Api.get<comment[]>(
    "/post/comment/" + id,
    makeOptions()
  );
  return response.data;
}
