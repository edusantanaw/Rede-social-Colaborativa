import { ICreateUsecase } from "../../../domain/usecases/create";
import { ILoadRoomUsecase } from "../../../domain/usecases/loadRoom";
import { IRoom } from "../../../types/room";

interface ILoadRoomRepository {
  loadRoom: (userId: string, followingId: string) => Promise<string | null>;
}

type params = {
  userId: string;
  followingId: string;
};

export class LoadRoomUsecase implements ILoadRoomUsecase {
  constructor(
    private readonly chatRepository: ILoadRoomRepository,
    private readonly createRoomUsecase: ICreateUsecase<params, IRoom>
  ) {}
  public async load({ followingId, userId }: params): Promise<string> {
    const maybeRoom = await this.chatRepository.loadRoom(userId, followingId);
    if (!maybeRoom) {
      const newRoom = await this.createRoomUsecase.execute({
        followingId,
        userId,
      });
      return newRoom.id;
    }
    return maybeRoom;
  }
}
