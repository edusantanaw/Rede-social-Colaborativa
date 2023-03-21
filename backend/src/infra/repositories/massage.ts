import { IMessage, IRecentMessages } from "../../types/message";import { message, prisma } from "../prisma";

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
        room: room,
      },
    });
    return messages as IMessage[];
  }

  public async loadReceivedMessages(userId: string) {
    const recentMessages = await prisma.$queryRaw`
      select distinct(users.id) as "userId", "perfilPhoto", message.message 
      from  users inner join message on message."senderId" = users.id
      where "senderId" in (
        select "userId" from users inner join room
        on room."followingId" = users.id
        where "followingId" = ${userId}
      )
    `;
    return recentMessages as IRecentMessages[];
  }
}
