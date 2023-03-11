import { IAddFollow } from "../../domain/usecases/addFollow";
import { Controller } from "../../main/adapter/adapter";
import { badRequest, error, ok } from "../helpers/http-response";
import { httpResponse } from "../protocols/httpResponse";

type data = {
  userId: string;
  followingId: string;
};

export class AddFollowController implements Controller {
  constructor(private readonly addFollowUsecase: IAddFollow) {}
  public async handle(data: data): Promise<httpResponse> {
    try {
      const { followingId, userId } = data;
      if (!userId) return badRequest("User id is required!");
      if (!followingId) return badRequest("Following id is required!");
      await this.addFollowUsecase.add(data.userId, data.followingId);
      return ok(true);
    } catch (err) {
      return error(err as Error);
    }
  }
}
