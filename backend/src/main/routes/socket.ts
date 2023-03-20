import { Server } from "socket.io";import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { makeSendMessageUsecase } from "../factories/usecases/project/sendMessage";

const sendMessage = makeSendMessageUsecase();

export default (
  io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) => {
  io.on("connect", (socket) => {
    console.log(socket.id);
    socket.on("join_room", (data) => {
      console.log(data, "room")
      socket.join(data);
    });

    socket.on("send_message", async (data) => {
      const newMessage = await sendMessage.send(data);
      console.log("emit_message")
      socket.to(newMessage.room).emit("receive_message", newMessage);
    });
  });
};
