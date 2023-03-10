import { Router } from "express";
import { UserAdapter } from "../adapter/auth-adapter";
import { makeCreatePostController } from "../factories/controllers/post/createPost";
import { makeLoadFeedController } from "../factories/controllers/post/feed";

const authAdapter = new UserAdapter();

export default function (router: Router) {
  router.post("post", authAdapter.make(makeCreatePostController()));
  router.get("feed", authAdapter.make(makeLoadFeedController()));
}
