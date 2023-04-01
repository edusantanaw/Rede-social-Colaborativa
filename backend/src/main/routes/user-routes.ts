import { Router } from "express";
import { Adapter } from "../adapter/adapter";
import { UserAdapter } from "../adapter/auth-adapter";
import { makeAddFollowController } from "../factories/controllers/user/addFollow";
import { makeAuthController } from "../factories/controllers/user/auth-controller";
import { makeCreateUserController } from "../factories/controllers/user/createUser";
import { makeForgetPasswordController } from "../factories/controllers/user/forgetPassword";
import { makeLoadUserByIdController } from "../factories/controllers/user/loadById";
import { makeLoadUserByNameController } from "../factories/controllers/user/loadByName";
import { makeLoadFollowController } from "../factories/controllers/user/loadFollow";
import { makeRecoveryPasswordController } from "../factories/controllers/user/recoveryPassword";
import { makeUpdateUserController } from "../factories/controllers/user/update";
import { fileUpload } from "../middlewares/upload-file";

const adapter = new Adapter();
const authAdapter = new UserAdapter();

export default function (router: Router) {
  router.post("/signup", adapter.make(makeCreateUserController()));
  router.post("/signin", adapter.make(makeAuthController()));
  router.get(
    "/user/password/forget",
    adapter.make(makeForgetPasswordController())
  );
  router.put("/user/:id", fileUpload, adapter.make(makeUpdateUserController()));
  router.patch(
    "/user/recovery/:id",
    adapter.make(makeRecoveryPasswordController())
  );
  router.post(
    "/follow/add/:userId",
    authAdapter.make(makeAddFollowController())
  );
  router.get(
    "/user/search/:name",
    authAdapter.make(makeLoadUserByNameController())
  );
  router.get("/user/:id", authAdapter.make(makeLoadUserByIdController()));
  router.get(
    "/follow/following/:id",
    authAdapter.make(makeLoadFollowController())
  );
}
