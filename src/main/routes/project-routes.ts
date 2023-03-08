import { Router } from "express";
import { UserAdapter } from "../adapter/auth-adapter";
import { makeAcceptOrDeclieInviteController } from "../factories/controllers/acceptOrDeclineInvite";
import { makeInviteCollaboratorController } from "../factories/controllers/inviteController";
import { makeLoadCollabsController } from "../factories/controllers/loadCollabs";
import { makeLoadAllInvitesController } from "../factories/controllers/loadIAllInvites";
import { makeLoadProjectByIdController } from "../factories/controllers/loadProjectById";
import { makeNewProjectController } from "../factories/controllers/createProject";
import { makeCreateTaskController } from "../factories/controllers/createTask";
import { makeLoadTaskControlle } from "../factories/controllers/loadTask";
import { makeAcceptTaskController } from "../factories/controllers/acceptTask";
import { makeLoadAllMessagesController } from "../factories/controllers/loadAllMessages";
import { makeLoadProjectByName } from "../factories/controllers/loadByName";

const userAdapter = new UserAdapter();

export default function (router: Router) {
  router.post("/project", userAdapter.make(makeNewProjectController()));
  router.post(
    "/project/invite",
    userAdapter.make(makeInviteCollaboratorController())
  );
  router.post("/project/task", userAdapter.make(makeCreateTaskController()));
  router.patch(
    "/project/task/:taskId",
    userAdapter.make(makeAcceptTaskController())
  );
  router.get(
    "/projects/invites/:userId",
    userAdapter.make(makeLoadAllInvitesController())
  );
  router.patch(
    "/project/invite/:inviteId",
    userAdapter.make(makeAcceptOrDeclieInviteController())
  );
  router.get(
    "/project/collabs/:projectId",
    userAdapter.make(makeLoadCollabsController())
  );
  router.get("/project/tasks", userAdapter.make(makeLoadTaskControlle()));
  router.get(
    "/project/messages",
    userAdapter.make(makeLoadAllMessagesController())
  );
  router.get("/project/name/:name", userAdapter.make(makeLoadProjectByName()));
  router.get("/project/:id", userAdapter.make(makeLoadProjectByIdController()));
}
