import userService from "../services/userService.js";

const register = async (ctx) => {
  const { username, password } = ctx.request.body;

  try {
    const newUser = await userService.registerUser(username, password);
    ctx.status = 200;
    ctx.body = {
      success: true,
      code: 1000,
      message: "注册成功",
      data: newUser,
    };
  } catch (error) {
    ctx.status = 200;
    ctx.body = {
      success: false,
      code: 2001,
      message: error.message,
    };
  }
};

const login = async (ctx) => {
  const { username, password } = ctx.request.body;

  try {
    const user = await userService.login(username, password);
    ctx.status = 200;
    ctx.body = {
      success: true,
      code: 1000,
      message: "登录成功",
      data: user,
    };
  } catch (error) {
    ctx.status = 200;
    ctx.body = {
      success: false,
      code: 2001,
      message: error.message,
    };
  }
};

export default {
  register,
  login,
};
