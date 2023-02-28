import { INewProjectUsecase } from "../../domain/usecases/newProject";
import { Controller } from "../../main/adapter/adapter";
import { IProjectSchema } from "../../validation/schema/newProjectSchema";
import { IValidSchema } from "../../validation/validSchema";
import { badRequest, error, ok } from "../helpers/http-response";

export class NewProjectController implements Controller {
  constructor(
    private readonly validSchema: IValidSchema,
    private readonly newProjectUsecase: INewProjectUsecase
  ) {}

  public async handle(data: IProjectSchema) {
    try {
      const { error } = this.validSchema.valid(data);
      if (error) return badRequest(error.message);
      const project = await this.newProjectUsecase.create(data);
      return ok(project);
    } catch (err) {
      return error(err as Error);
    }
  }
}
