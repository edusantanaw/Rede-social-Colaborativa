import { Router } from "express";import { UserAdapter } from "../adapter/auth-adapter";
import { makeAddOrRemovePostLikeController } from "../factories/controllers/post/addOrRemoveLike";
import { makeCreateCommentController } from "../factories/controllers/post/createComment";
import { makeCreatePostController } from "../factories/controllers/post/createPost";
import { makeLoadFeedController } from "../factories/controllers/post/feed";
import { makeLoadCommentsController } from "../factories/controllers/post/loadComments";
import { makeLoadLikeController } from "../factories/controllers/post/loadLike";
import { makeLoadPostByUserController } from "../factories/controllers/post/loadPostByUser";
import { fileUpload } from "../middlewares/upload-file";

const authAdapter = new UserAdapter();

export default function (router: Router) {
  router.post(
    "/post",
    fileUpload,
    authAdapter.make(makeCreatePostController())
  );
  router.get(
    "/post/perfil/:userId",
    authAdapter.make(makeLoadPostByUserController())
  );
  router.get("/feed/:userId", authAdapter.make(makeLoadFeedController()));
  router.post(
    "/post/like/:userId",
    authAdapter.make(makeAddOrRemovePostLikeController())
  );
  router.get("/post/like/:id", authAdapter.make(makeLoadLikeController()));
  router.post("/post/comment", authAdapter.make(makeCreateCommentController()));
  router.get(
    "/post/comment/:id",
    authAdapter.make(makeLoadCommentsController())
  );
}
