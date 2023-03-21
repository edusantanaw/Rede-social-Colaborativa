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
    select m."room", m."message" AS latestMessage, m."createdAt"
    from (
      select distinct on ("room") "room", "message", "createdAt"
      from "message"
      where "room" in (
      select "id" from "room"
      where "userId" = ${userId} OR "followingId" = ${userId}
      )
      order by "room", "createdAt" desc
    ) as m
    order by m."createdAt" desc;`;
    return recentMessages as IRecentMessages[];
  }
}
