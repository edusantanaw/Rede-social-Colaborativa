import { Api } from "../utils/api";
import { makeOptions } from "../utils/makeOptions";
import io from "socket.io-client";
import { baseUrl } from "../constants/baseUrl";

const socket = io(baseUrl);
socket.connect();

type ISend_message = {
  message: string;
  senderId: string;
  room: string;
};

export async function joinRoom(userId: string, followerId: string) {
  const response = await Api.get<string>(
    `/chat/room/${userId}?followingId=${followerId}`,
    makeOptions()
  );
  const room = response.data;
  socket.emit("join_room", room);
  return room;
}

export async function sendMessage(data: ISend_message) {
  socket.emit("send_message", data);
}

  export default socket;