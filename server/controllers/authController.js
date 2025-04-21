const register = async (ctx) => {
  const { username, password } = ctx.request.body;
  console.log(`username:${username}, password: ${password}`);
};

export default {
  register,
};
