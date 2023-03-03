import { ILoadByIdUsecase } from "../../domain/usecases/loadProjectById";
import { Controller } from "../../main/adapter/adapter";
import { IProject } from "../../types/project";
import {
  badRequest,
  noContent,
  ok,
  serverError,
} from "../helpers/http-response";

type data = { id: string };

export class LoadProjectByIdContoller implements Controller {
  constructor(private readonly loadProjectUsecase: ILoadByIdUsecase<IProject>) {}

  public async handle({ id }: data) {
    try {
      if (!id) return badRequest("Project id is required!");
      const project = await this.loadProjectUsecase.load(id);
      if (!project) return noContent();
      return ok(project);
    } catch (error) {
      return serverError(error);
    }
  }
}
