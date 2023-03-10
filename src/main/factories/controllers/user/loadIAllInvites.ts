import { LoadAll } from "../../../../presentational/controllers/loadInvites";
import { makeLoadAllInvitesUsecase } from "../../usecases/user/loadInvites";

export function makeLoadAllInvitesController() {
  return new LoadAll(makeLoadAllInvitesUsecase());
}
