import Router from "koa-router";
import userController from "../controllers/userController.js";
import authGuard from "../middlewares/authGuard.js";

const router = new Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

router.get("/auth/verify", authGuard, async (ctx) => {
  ctx.status = 200;
  ctx.body = {
    success: true,
    message: "通过",
  };
});

export default router;
