import { CreateRoomUsecase } from "../../../../data/usecases/chat/createRoom";
import { RoomRepository } from "../../../../infra/repositories/room";

export function makeCreateRoomUsecase() {
  const roomRepository = new RoomRepository();
  return new CreateRoomUsecase(roomRepository);
}
