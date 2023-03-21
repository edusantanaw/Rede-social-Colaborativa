import { LoadAll } from "../../../../presentational/controllers/loadAll";
import { makeLoadMessages } from "../../usecases/project/loadMessages";

export function makeLoadAllMessagesController() {
  return new LoadAll(makeLoadMessages());
}
