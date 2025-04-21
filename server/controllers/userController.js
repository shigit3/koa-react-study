import userService from "../services/userService.js";

const getUserByName = async (ctx) => {
  const name = ctx.params.name;
  const user = await userService.getUserByName(name);
  if (user) {
    ctx.body = user;
  } else {
    ctx.status = 404;
  }
};

export default {
  getUserByName,
};
