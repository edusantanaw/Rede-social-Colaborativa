import { IFinishTaskUsecase } from "../../domain/usecases/finishTask";
import { Controller } from "../../main/adapter/adapter";
import { badRequest, error, ok } from "../helpers/http-response";

type data = { id: string };

export class FinishTaskController implements Controller {
  constructor(private readonly finishTaskUsecase: IFinishTaskUsecase) {}
  public async handle({ id }: data) {
    try {
      if (!id) return badRequest("O id é necessario!");
      const data = await this.finishTaskUsecase.execute(id);
      return ok(data);
    } catch (err) {
      return error(err as Error);
    }
  }
}
