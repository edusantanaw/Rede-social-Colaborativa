import { Server } from "http";
import socket from "socket.io";
export default (server: Server) => {
  return new socket.Server(server, {
    cors: {
      origin: "*",
      methods: "*",
    },
  });
};
