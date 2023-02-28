import { Router } from "express";
import { UserAdapter } from "../adapter/auth-adapter";
import { makeLoadProjectByIdController } from "../factories/controllers/loadProjectById";
import { makeNewProjectController } from "../factories/controllers/newProject";

const userAdapter = new UserAdapter();

export default function (router: Router) {
  router.post("/project", userAdapter.make(makeNewProjectController()));
  router.get("/project/:id", userAdapter.make(makeLoadProjectByIdController()));
}
