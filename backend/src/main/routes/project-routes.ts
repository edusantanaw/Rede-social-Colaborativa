import { Router } from "express";import { UserAdapter } from "../adapter/auth-adapter";
import { makeAcceptOrDeclieInviteController } from "../factories/controllers/project/acceptOrDeclineInvite";
import { makeInviteCollaboratorController } from "../factories/controllers/project/inviteController";
import { makeLoadCollabsController } from "../factories/controllers/project/loadCollabs";
import { makeLoadAllInvitesController } from "../factories/controllers/user/loadIAllInvites";
import { makeLoadProjectByIdController } from "../factories/controllers/project/loadProjectById";
import { makeNewProjectController } from "../factories/controllers/project/createProject";
import { makeCreateTaskController } from "../factories/controllers/project/createTask";
import { makeLoadTaskControlle } from "../factories/controllers/project/loadTask";
import { makeAcceptTaskController } from "../factories/controllers/project/acceptTask";
import { makeLoadAllMessagesController } from "../factories/controllers/project/loadAllMessages";
import { makeLoadProjectByName } from "../factories/controllers/project/loadByName";
import { makeLoadUserProjectController } from "../factories/controllers/project/loadUserProject";

const userAdapter = new UserAdapter();

export default function (router: Router) {
  router.post("/project", userAdapter.make(makeNewProjectController()));
  router.post(
    "/project/invite/:projectId",
    userAdapter.make(makeInviteCollaboratorController())
  );
  router.post("/project/task", userAdapter.make(makeCreateTaskController()));
  router.patch(
    "/project/task/:taskId",
    userAdapter.make(makeAcceptTaskController())
  );
  router.get(
    "/project/user/:id",
    userAdapter.make(makeLoadUserProjectController())
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
    "/project/collabs/:id",
    userAdapter.make(makeLoadCollabsController())
  );
  router.get("/project/tasks/:projectId", userAdapter.make(makeLoadTaskControlle()));
  router.get(
    "/project/messages",
    userAdapter.make(makeLoadAllMessagesController())
  );
  router.get(
    "/project/search/:name",
    userAdapter.make(makeLoadProjectByName())
  );
  router.get("/project/:id", userAdapter.make(makeLoadProjectByIdController()));
}
