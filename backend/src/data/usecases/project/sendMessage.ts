import { Message } from "../../../domain/entities/message";import { ISendMessage, message } from "../../../domain/usecases/sendMessage";
import { IMessage } from "../../../types/message";
import { IRoom } from "../../../types/room";
import { ICreateRepository } from "../../protocols/repositories/createRepository";
import { ILoadByIdRepository } from "../../protocols/repositories/loadProjectById";

export class SendMessage implements ISendMessage {
  constructor(
    private readonly messageRepository: ICreateRepository<message, IMessage>,
    private readonly chatRepository: ILoadByIdRepository<IRoom>
  ) {}

  public async send(data: message): Promise<message> {
    const roomExists = !!(await this.chatRepository.loadById(data.room));
    if (!roomExists) throw new Error("Room not exists");
    const message = new Message(data);
    const newMessage = await this.messageRepository.create(
      message.getMessageContent()
    );
    return newMessage;
  }
}
