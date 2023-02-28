import { Router } from "express";
import { UserAdapter } from "../adapter/auth-adapter";
import { makeInviteCollaboratorController } from "../factories/controllers/inviteController";
import { makeLoadProjectByIdController } from "../factories/controllers/loadProjectById";
import { makeNewProjectController } from "../factories/controllers/newProject";

const userAdapter = new UserAdapter();

export default function (router: Router) {
  router.post("/project", userAdapter.make(makeNewProjectController()));
  router.get("/project/:id", userAdapter.make(makeLoadProjectByIdController()));
  router.post(
    "/project/invite",
    userAdapter.make(makeInviteCollaboratorController())
  );
}
