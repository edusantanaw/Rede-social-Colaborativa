import { Server } from "http";
import socket from "socket.io";


export default (server: Server) => {
  const io = new socket.Server(server, {
    cors: {
      origin: "*",
      methods: "*",
    },
  });
  io.on("connect", (socket) => {});
};
