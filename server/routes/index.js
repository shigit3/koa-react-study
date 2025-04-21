import Router from "koa-router";
import userController from "../controllers/userController.js";

const router = new Router();

router.get("/users/:name", userController.getUserByName);

export default router;
