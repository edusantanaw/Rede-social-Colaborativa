import { IAddOrRemovePostLike } from "../../domain/usecases/addLike";
import { Controller } from "../../main/adapter/adapter";
import { badRequest, error, ok } from "../helpers/http-response";
import { httpResponse } from "../protocols/httpResponse";

type data = {
  userId: string;
  postId: string;
};

export class AddOrRemovePostLikeController implements Controller {
  constructor(
    private readonly addOrRemovePostLikeUsecase: IAddOrRemovePostLike
  ) {}

  public async handle({ postId, userId }: data): Promise<httpResponse> {
    try {
      if (!postId) return badRequest("O id do post é necessario!");
      if (!userId) return badRequest("O id do usuario é necessario!");
      await this.addOrRemovePostLikeUsecase.execute({ postId, userId });
      return ok(true);
    } catch (err) {
      return error(err as Error);
    }
  }
}
