import { Router } from "express";
import { UserAdapter } from "../adapter/auth-adapter";
import { makeLoadRoomController } from "../factories/controllers/chat/loadRoom";

const authAdapter = new UserAdapter();

export default function (router: Router) {
  router.get("/chat/room/:userId", authAdapter.make(makeLoadRoomController()));
}
