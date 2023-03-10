import { Server } from "http";
import socket from "socket.io";
import { makeSendMessageUsecase } from "../factories/usecases/project/sendMessage";

export default (server: Server) => {
  const io = new socket.Server(server, {
    cors: {
      origin: "*",
      methods: "*",
    },
  });
  io.on("connect", (socket) => {
    socket.on("join_room", (data) => {
      socket.join(data.room);
    });

    socket.on("send_message", async (data) => {
      const message = data.message;
      const room = data.room;
      const sendMessage = makeSendMessageUsecase();
      const newMessage = await sendMessage.send(message);
      socket.to(room).emit("receive_message", newMessage);
    });
  });
};
