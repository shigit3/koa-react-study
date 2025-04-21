import Koa from "koa";
import router from "./routes/index.js";
import connectDB from "./config/db.js";

connectDB();

const app = new Koa();
app.use(router.routes());
app.use(router.allowedMethods());

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
