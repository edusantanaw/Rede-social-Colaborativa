import { IRoom } from "../../types/room";
import { room } from "../prisma";

export class RoomRepository {
  public async create(data: IRoom): Promise<IRoom> {
    const newRoom = await room.create({
      data: data,
    });
    return newRoom;
  }

  public async loadRoom(userId: string, followingId: string) {
    const mayberRoom = await room.findFirst({
      where: {
        AND: [
          {
            userId: userId,
            followingId: followingId,
          },
          {
            userId: followingId,
            followingId: userId,
          },
        ],
      },
    });
    if (mayberRoom) return mayberRoom.id;
    return null;
  }
}
