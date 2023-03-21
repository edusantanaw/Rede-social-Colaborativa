import { Router } from "express";
import { UserAdapter } from "../adapter/auth-adapter";
import { makeLoadMessagesByRoomController } from "../factories/controllers/chat/loadMessages";
import { makeLoadRecentMessagesController } from "../factories/controllers/chat/loadRecentMessages";
import { makeLoadRoomController } from "../factories/controllers/chat/loadRoom";

const authAdapter = new UserAdapter();

export default function (router: Router) {
  router.get("/chat/room/:userId", authAdapter.make(makeLoadRoomController()));
  router.get(
    "/messages/recent/:id",
    authAdapter.make(makeLoadRecentMessagesController())
  );
  router.get(
    "/messages/:id",
    authAdapter.make(makeLoadMessagesByRoomController())
  );
}
