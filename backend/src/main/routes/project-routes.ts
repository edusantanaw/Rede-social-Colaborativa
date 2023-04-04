import { Router } from "express";
import { UserAdapter } from "../adapter/auth-adapter";
import { makeAcceptOrDeclieInviteController } from "../factories/controllers/project/acceptOrDeclineInvite";
import { makeInviteCollaboratorController } from "../factories/controllers/project/inviteController";
import { makeLoadCollabsController } from "../factories/controllers/project/loadCollabs";
import { makeLoadAllInvitesController } from "../factories/controllers/user/loadIAllInvites";
import { makeLoadProjectByIdController } from "../factories/controllers/project/loadProjectById";
import { makeNewProjectController } from "../factories/controllers/project/createProject";
import { makeCreateTaskController } from "../factories/controllers/project/createTask";
import { makeLoadTaskControlle } from "../factories/controllers/project/loadTask";
import { makeLoadAllMessagesController } from "../factories/controllers/project/loadAllMessages";
import { makeLoadProjectByName } from "../factories/controllers/project/loadByName";
import { makeLoadUserProjectController } from "../factories/controllers/project/loadUserProject";
import { makeFinishTaskController } from "../factories/controllers/project/finishTask";

const authAdapter = new UserAdapter();

export default function (router: Router) {
  router.post("/project", authAdapter.make(makeNewProjectController()));
  router.post(
    "/project/invite/:projectId",
    authAdapter.make(makeInviteCollaboratorController())
  );
  router.post("/project/task", authAdapter.make(makeCreateTaskController()));
  router.get(
    "/project/user/:id",
    authAdapter.make(makeLoadUserProjectController())
  );
  router.get(
    "/projects/invites/:id",
    authAdapter.make(makeLoadAllInvitesController())
  );
  router.patch(
    "/project/invite/:inviteId",
    authAdapter.make(makeAcceptOrDeclieInviteController())
  );
  router.get(
    "/project/collabs/:id",
    authAdapter.make(makeLoadCollabsController())
  );
  router.get(
    "/project/tasks/:projectId",
    authAdapter.make(makeLoadTaskControlle())
  );
  router.get(
    "/project/messages",
    authAdapter.make(makeLoadAllMessagesController())
  );
  router.get(
    "/project/search/:name",
    authAdapter.make(makeLoadProjectByName())
  );
  router.get("/project/:id", authAdapter.make(makeLoadProjectByIdController()));
  router.patch(
    "/project/task/finish/:id",
    authAdapter.make(makeFinishTaskController())
  );
}
