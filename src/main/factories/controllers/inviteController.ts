import { InviteCollaboratorController } from "../../../presentational/controllers/inviteCollaborator";
import { makeInviteCollaboratorUsecase } from "../usecases/inviteCollaborator";

export function makeInviteCollaboratorController() {
  return new InviteCollaboratorController(makeInviteCollaboratorUsecase());
}
