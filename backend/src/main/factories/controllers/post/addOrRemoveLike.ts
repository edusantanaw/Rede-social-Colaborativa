import { AddOrRemovePostLikeController } from "../../../../presentational/controllers/addOrRemoveLike";
import { makeAddOrRemovePostLikeUsecase } from "../../usecases/post/addOrRemoveLike";

export function makeAddOrRemovePostLikeController(){
    return new AddOrRemovePostLikeController(
        makeAddOrRemovePostLikeUsecase()
    )
}