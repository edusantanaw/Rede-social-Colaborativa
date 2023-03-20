import { LoadRoomUsecase } from "../../../../data/usecases/chat/loadRoom";
import { RoomRepository } from "../../../../infra/repositories/room";
import { makeCreateRoomUsecase } from "./createRoom";

export function makeLoadRoomUsecase() {
  const chatRepository = new RoomRepository();
  return new LoadRoomUsecase(chatRepository, makeCreateRoomUsecase());
}
