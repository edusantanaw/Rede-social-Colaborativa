import { IUser } from "../shared/types/user";
import { Api } from "../shared/utils/api";
import { makeOptions } from "../shared/utils/makeOptions";

export async function addFollow(followingId: string, userId: string) {
  const url = `follow/add/${userId}?followingId=${followingId}`;
  const response = await Api.post(url, {}, makeOptions());
  console.log(response);
  return response.data;
}

export async function loadFollowing(userId: string) {
  const response = await Api.get<IUser[]>("/follow/following/" + userId, makeOptions());
    console.log(response)
  return response.data.length == 0 ? [] : response.data;
}
