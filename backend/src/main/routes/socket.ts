import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { makeSendMessageUsecase } from "../factories/usecases/project/sendMessage";

export default (
  io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) => {
  io.on("connect", (socket) => {
    console.log(socket.id);
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
