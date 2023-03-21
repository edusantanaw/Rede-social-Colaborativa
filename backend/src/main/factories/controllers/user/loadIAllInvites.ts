import { LoadAll } from "../../../../presentational/controllers/loadAll";
import { makeLoadAllInvitesUsecase } from "../../usecases/user/loadInvites";

export function makeLoadAllInvitesController() {
  return new LoadAll(makeLoadAllInvitesUsecase());
}
