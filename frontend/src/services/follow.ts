import { Api } from "../utils/api";
import { makeOptions } from "../utils/makeOptions";

export async function addFollow(followingId: string, userId: string){
    const url = `follow/add/${userId}?followingId=${followingId}`;
    const response = await Api.post(url, {}, makeOptions())
    console.log(response)
    return response.data;
}