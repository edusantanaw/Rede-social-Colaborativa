import { Room } from "../../../domain/entities/room";
import { ICreateUsecase } from "../../../domain/usecases/create";
import { IRoom } from "../../../types/room";
import { ICreateRepository } from "../../protocols/repositories/createRepository";

type params = {
  userId: string;
  followingId: string;
};

export class CreateRoomUsecase implements ICreateUsecase<params, IRoom> {
  constructor(
    private readonly chatRepository: ICreateRepository<IRoom, IRoom>
  ) {}

  public async execute(data: params): Promise<IRoom> {
    const newRoom = new Room(data);
    const room = await this.chatRepository.create(newRoom.getRoom());
    return room;
  }
}
