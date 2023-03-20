import { IMessage } from "../../types/message";
import { message } from "../prisma";

export class MessageRepository {
  public async create(data: IMessage) {
    const newMessage = await message.create({
      data: data,
    });
    return newMessage as IMessage;
  }

  public async loadAll(room: string) {
    const messages = await message.findMany({
      where: {
        room: room
      }
    });
    return messages as IMessage[];
  }
}
