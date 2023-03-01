import { AcceptOrDeclineInviteUsecase } from "../../../data/usecases/acceptOrDeclineInvite";
import { CollaboratorRepository } from "../../../infra/repositories/collaborators";
import { InviteRepository } from "../../../infra/repositories/inviteRepository";
import { ProjectRepository } from "../../../infra/repositories/projectRepository";

export function makeAcceptOrDeclineInviteUsecase() {
  const inviteRepository = new InviteRepository();
  const projectRepository = new ProjectRepository();
  const collaboratorRepository = new CollaboratorRepository();
  return new AcceptOrDeclineInviteUsecase(
    inviteRepository,
    projectRepository,
    collaboratorRepository
  );
}
