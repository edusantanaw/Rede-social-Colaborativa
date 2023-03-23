import { Message } from "../../../domain/entities/message";import { ISendMessage, message } from "../../../domain/usecases/sendMessage";
import { IMessage } from "../../../types/message";
import { ICreateRepository } from "../../protocols/repositories/createRepository";

export class SendMessage implements ISendMessage {
  constructor(
    private readonly messageRepository: ICreateRepository<message, IMessage>,
  ) {}

  public async send(data: message): Promise<message> {
    const message = new Message(data);
    const newMessage = await this.messageRepository.create(
      message.getMessageContent()
    );
    return newMessage;
  }
}
