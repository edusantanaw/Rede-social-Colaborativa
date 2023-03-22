import { IMessage, IRecentMessages } from "../../types/message";
import { message, prisma } from "../prisma";

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
    const recentMessages = (await prisma.$queryRaw`
    select m."room", m.message , m."createdAt"
    from (
      select distinct on ("room") "room", "message", "createdAt"
      from "message"
      where "room" in (
      select "id" from "room"
      where "userId" = ${userId} OR "followingId" = ${userId}
      )
      order by "room", "createdAt" desc
    ) as m
    order by m."createdAt" desc;`) as { room: string; message: string }[];

    const data: IRecentMessages[] = [];
    for (let i = 0; i < recentMessages.length; i++) {
      const user = (await prisma.$queryRaw`
      select users.id, "perfilPhoto", name, email
      from users inner join room 
      on room."userId" = users.id or room."followingId" = users.id
      where room.id = ${recentMessages[i].room} and  users.id != ${userId};  
    `) as { id: string; perfilPhoto: string; name: string, email: string }[];

      data.push({
        userId: user[0].id,
        message: recentMessages[i].message,
        room: recentMessages[i].room,
        perfilPhoto: user[0].perfilPhoto,
        name: user[0].name,
        email: user[0].email
      } as IRecentMessages);
    }

    return data;
  }
}
