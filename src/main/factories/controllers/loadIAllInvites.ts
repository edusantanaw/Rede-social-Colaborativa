import { LoadAll } from "../../../presentational/controllers/loadInvites";
import { makeLoadAllInvitesUsecase } from "../usecases/loadInvites";

export function makeLoadAllInvitesController() {
  return new LoadAll(makeLoadAllInvitesUsecase());
}
