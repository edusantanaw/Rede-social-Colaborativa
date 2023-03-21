import { LoadByIdController } from "../../../../presentational/controllers/loadById";
import { makeLoadRecentMessagesUsecase } from "../../usecases/chat/loadRecentsMessages";

export function makeLoadRecentMessagesController() {
  return new LoadByIdController(makeLoadRecentMessagesUsecase());
}
