import { Server } from "http";
import socket from "socket.io";

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
      })

      socket.on("send_message", async (data)=> {
          const message = data.message;
          const room = data.room;
      })
  });
};
