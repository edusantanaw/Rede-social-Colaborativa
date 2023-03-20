import { SendMessage } from "../../../../data/usecases/project/sendMessage";import { MessageRepository } from "../../../../infra/repositories/massage";
import { RoomRepository } from "../../../../infra/repositories/room";

export function makeSendMessageUsecase() {
  const messageRepository = new MessageRepository();
  const roomRepository = new RoomRepository();
  return new SendMessage(messageRepository, roomRepository);
}
