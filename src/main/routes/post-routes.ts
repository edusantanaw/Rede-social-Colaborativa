import { Router } from "express";
import { UserAdapter } from "../adapter/auth-adapter";
import { makeCreatePostController } from "../factories/controllers/createPost";

const authAdapter = new UserAdapter();

export default function (router: Router) {
  router.post("post", authAdapter.make(makeCreatePostController()));
}
