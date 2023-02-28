import { NewProjectController } from "../../../presentational/controllers/newProject";
import { ValidSchema } from "../../../validation/validSchema";
import { projectSchema } from "../../../validation/schema/newProjectSchema";
import { makeNewProjectUsecase } from "../usecases/newProject";

export function makeNewProjectController() {
  const validSchema = new ValidSchema(projectSchema);
  const newProjectUsecase = makeNewProjectUsecase();
  return new NewProjectController(validSchema, newProjectUsecase);
}
