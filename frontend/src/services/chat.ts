import io from "socket.io-client";
import { baseUrl } from "../constants/baseUrl";
import { Api } from "../utils/api";
import { makeOptions } from "../utils/makeOptions";

const socket = io(baseUrl);
socket.connect()

export async function joinRoom(userId: string, followerId: string) {
  const response = await Api.get<string>(
    `/chat/room/${userId}?followingId=${followerId}`,
    makeOptions()
  );
  console.log(response)
  const room = response.data;
  socket.emit("join_room", room);
}
