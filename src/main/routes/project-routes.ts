import { Router } from "express";
import { UserAdapter } from "../adapter/auth-adapter";
import { makeInviteCollaboratorController } from "../factories/controllers/inviteController";
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
}
