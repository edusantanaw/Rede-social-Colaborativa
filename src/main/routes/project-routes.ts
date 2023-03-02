import { Router } from "express";
import { UserAdapter } from "../adapter/auth-adapter";
import { makeAcceptOrDeclieInviteController } from "../factories/controllers/acceptOrDeclineInvite";
import { makeInviteCollaboratorController } from "../factories/controllers/inviteController";
import { makeLoadCollabsController } from "../factories/controllers/loadCollabs";
import { makeLoadAllInvitesController } from "../factories/controllers/loadIAllInvites";
import { makeLoadProjectByIdController } from "../factories/controllers/loadProjectById";
import { makeNewProjectController } from "../factories/controllers/newProject";

const userAdapter = new UserAdapter();

export default function (router: Router) {
  router.post("/project", userAdapter.make(makeNewProjectController()));
  router.post(
    "/project/invite",
    userAdapter.make(makeInviteCollaboratorController())
  );
  router.get(
    "/projects/invites/:userId",
    userAdapter.make(makeLoadAllInvitesController())
  );
  router.get("/project/:id", userAdapter.make(makeLoadProjectByIdController()));
  router.patch(
    "/project/invite/:inviteId",
    userAdapter.make(makeAcceptOrDeclieInviteController())
  );
  router.get(
    "/project/collabs/:projectId",
    userAdapter.make(makeLoadCollabsController())
  );
}
