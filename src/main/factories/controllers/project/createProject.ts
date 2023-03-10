import { ValidSchema } from "../../../../validation/validSchema";
import { projectSchema } from "../../../../validation/schema/newProjectSchema";
import { CreateController } from "../../../../presentational/controllers/create";
import { makeNewProjectUsecase } from "../../usecases/project/newProject";

export function makeNewProjectController() {
  const validSchema = new ValidSchema(projectSchema);
  const newProjectUsecase = makeNewProjectUsecase();
  return new CreateController( newProjectUsecase, validSchema);
}
