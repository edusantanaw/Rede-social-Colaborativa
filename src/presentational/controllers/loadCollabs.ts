import { ILoadCollabs } from "../../domain/usecases/loadCollabs";
import { badRequest, error, noContent, ok } from "../helpers/http-response";

type data = { projectId: string };

export class LoadCollabsController {
  constructor(private readonly loadCollabsUsecase: ILoadCollabs) {}
  public async handle({ projectId }: data) {
    try {
      if (!projectId) return badRequest("Project id is required!");
      const collabs = await this.loadCollabsUsecase.load(projectId);
      if (!collabs) return noContent();
      return ok(collabs);
    } catch (err) {
      return error(err as Error);
    }
  }
}
