import { InviteCollaboratorController } from "../../../../presentational/controllers/inviteCollaborator";
import { makeInviteCollaboratorUsecase } from "../../usecases/project/inviteCollaborator";

export function makeInviteCollaboratorController() {
  return new InviteCollaboratorController(makeInviteCollaboratorUsecase());
}
