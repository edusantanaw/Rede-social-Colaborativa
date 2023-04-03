import { IUser } from "../shared/types/user";
import { Api } from "../shared/utils/api";
import { makeOptions } from "../shared/utils/makeOptions";

export async function addFollow(followingId: string, userId: string) {
  const url = `follow/add/${userId}?followingId=${followingId}`;
  const response = await Api.post(url, {}, makeOptions());
  return response.data;
}

export async function loadFollowing(userId: string) {
  const response = await Api.get<IUser[]>("/follow/following/" + userId, makeOptions());
  return response.data.length == 0 ? [] : response.data;
}
