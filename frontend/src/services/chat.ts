import { Api } from "../utils/api";
import { makeOptions } from "../utils/makeOptions";
import io from "socket.io-client";
import { baseUrl } from "../constants/baseUrl";
import { IMessage } from "../types/message";

const socket = io(baseUrl);
socket.connect();

export async function getRoom(userId: string, followerId: string) {
  const response = await Api.get<string>(
    `/chat/room/${userId}?followingId=${followerId}`,
    makeOptions()
  );
  const room = response.data;
  return room;
}

export async function joinRoom(room: string) {
  socket.emit("join_room", room);
  return room;
}

export async function leaveRoom(room: string) {
  socket.emit("leave_room", room);
}

export async function sendMessage(data: IMessage) {
  socket.emit("send_message", data);
}

export async function loadMessages(room: string) {
  const response = await Api.get<IMessage[]>(
    "/messages/" + room,
    makeOptions()
  );
  return response.data;
}

export default socket;
