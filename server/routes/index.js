import Router from "koa-router";
import authController from "../controllers/authController.js";

const router = new Router();

router.post("/register", authController.register);

export default router;
