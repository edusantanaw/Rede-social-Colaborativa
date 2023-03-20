import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { makeSendMessageUsecase } from "../factories/usecases/project/sendMessage";

const sendMessage = makeSendMessageUsecase();

export default (
  io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) => {
  io.on("connect", (socket) => {
    socket.on("join_room", (data) => {
      socket.join(data);
    });

    socket.on("send_message", async (data) => {
      const newMessage = await sendMessage.send(data);
      socket.to(newMessage.room).emit("receive_message", newMessage);
    });

    socket.on("leave_room", (room) => {
      socket.leave(room);
    });

    socket.on("disconnect", (data) => {
      console.log("disconnect:", socket.id);
    });
  });
};
