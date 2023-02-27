import { INewProjectUsecase } from "../../domain/usecases/newProject";
import { IProjectSchema } from "../../validation/schema/newProjectSchema";
import { IValidSchema } from "../../validation/validSchema";
import { badRequest, error, ok } from "../helpers/http-response";

export class NewProjectController {
  constructor(
    private readonly validSchema: IValidSchema,
    private readonly newProjectUsecase: INewProjectUsecase
  ) {}

  public async handle(data: IProjectSchema) {
    try {
      const isSchemaValid = this.validSchema.valid(data);
      if (isSchemaValid.error) return badRequest(isSchemaValid.error.message);
      const project = await this.newProjectUsecase.create(data);
      return ok(project);
    } catch (err) {
      return error(err as Error);
    }
  }
}
