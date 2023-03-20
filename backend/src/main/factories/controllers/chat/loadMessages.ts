import { LoadByIdController } from "../../../../presentational/controllers/loadById";
import { IMessage } from "../../../../types/message";
import { makeLoadMessagensByRoomUsecase } from "../../usecases/chat/loadMessages";

export function makeLoadMessagesByRoomController() {
  return new LoadByIdController<IMessage[]>(makeLoadMessagensByRoomUsecase());
}
