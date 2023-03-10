import { LoadAll } from "../../../../presentational/controllers/loadInvites";
import { makeLoadMessages } from "../../usecases/project/loadMessages";

export function makeLoadAllMessagesController() {
  return new LoadAll(makeLoadMessages());
}
