import jwt from "jsonwebtoken";

const SECRET_KEY = "y8$3kL@9zQ!mX#1pW&vT^5rB*7nJ";

export default async (ctx, next) => {
  const publicRoutes = ["/login", "/register"];

  if (publicRoutes.includes(ctx.path)) {
    await next();
    return;
  }

  const authHeader = ctx.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    ctx.responseHandler(401, 4010, "未授权的请求", false);
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const user = jwt.verify(token, SECRET_KEY);
    ctx.state.user = user;

    await next();
  } catch (error) {
    ctx.responseHandler(401, 4011, "令牌无效或已过期", false);
  }
};
