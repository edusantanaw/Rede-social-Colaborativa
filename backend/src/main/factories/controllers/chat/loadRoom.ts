import { LoadController } from "../../../../presentational/controllers/load";
import { makeLoadRoomUsecase } from "../../usecases/chat/loadRoom";

export function makeLoadRoomController() {
  return new LoadController(makeLoadRoomUsecase());
}
