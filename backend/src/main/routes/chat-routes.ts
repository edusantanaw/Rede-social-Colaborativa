import { Router } from "express";
import { UserAdapter } from "../adapter/auth-adapter";
import { makeLoadMessagesByRoomController } from "../factories/controllers/chat/loadMessages";
import { makeLoadRoomController } from "../factories/controllers/chat/loadRoom";

const authAdapter = new UserAdapter();

export default function (router: Router) {
  router.get("/chat/room/:userId", authAdapter.make(makeLoadRoomController()));
  router.get(
    "/messages/:id",
    authAdapter.make(makeLoadMessagesByRoomController())
  );
}
