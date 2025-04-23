import userService from "../services/userService.js";

const register = async (ctx) => {
  const { username, password } = ctx.request.body;

  try {
    const newUser = await userService.registerUser(username, password);
    ctx.responseHandler(200, 1000, "注册成功", true, newUser);
  } catch (error) {
    ctx.responseHandler(200, 2001, error.message, false);
  }
};

const login = async (ctx) => {
  const { username, password } = ctx.request.body;

  try {
    const user = await userService.login(username, password);
    ctx.responseHandler(200, 1000, "登录成功", true, user);
  } catch (error) {
    ctx.responseHandler(200, 2001, error.message, false);
  }
};

export default {
  register,
  login,
};
