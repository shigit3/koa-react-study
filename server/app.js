import Koa from "koa";
import router from "./routes/index.js";
import connectDB from "./config/db.js";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import responseHandler from "./middlewares/responseHandler.js";
import authGuard from "./middlewares/authGuard.js";

connectDB();

const app = new Koa();
app.use(cors());
app.use(bodyParser());
app.use(responseHandler);
app.use(authGuard);
app.use(router.routes());
app.use(router.allowedMethods());

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
