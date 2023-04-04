import { IAcceptTaskUsecase } from "../../domain/usecases/acceptTask";
import { Controller } from "../../main/adapter/adapter";
import { badRequest, error, ok } from "../helpers/http-response";
import { httpResponse } from "../protocols/httpResponse";

export class AcceptTaskController implements Controller {
  constructor(private readonly acceptTaskUsecase: IAcceptTaskUsecase) {}

  public async handle(data: {
    userId: string;
    taskId: string;
  }): Promise<httpResponse> {
    const { taskId, userId } = data;
    try {
      if (!taskId) return badRequest("O id da task é necessario!");
      if (!userId) return badRequest("O id do usuario é necessario!");
      await this.acceptTaskUsecase.execute(userId, taskId);
      return ok(true);
    } catch (err) {
      return error(err as Error);
    }
  }
}
