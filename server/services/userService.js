import jwt from "jsonwebtoken";
import userMapper from "../mappers/userMapper.js";

const SECRET_KEY = "y8$3kL@9zQ!mX#1pW&vT^5rB*7nJ";

const isUsernameTaken = async (username) => {
  const existingUser = await userMapper.findUserByUsername(username);
  return !!existingUser;
};

const registerUser = async (username, password) => {
  const usernameTaken = await isUsernameTaken(username);
  if (usernameTaken) {
    throw new Error("用户名已存在");
  }

  const newUser = await userMapper.createUser({ username, password });
  return newUser;
};

const validateUser = async (username, password) => {
  const user = await userMapper.findUserByUsername(username);
  if (!user || user.password !== password) {
    return null;
  }
  return user;
};

const login = async (username, password) => {
  const user = await validateUser(username, password);
  if (!user) {
    throw new Error("用户名或密码错误");
  }

  if (!user.token) {
    const token = jwt.sign(
      { id: user.id, username: user.username },
      SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    return await userMapper.updateUserToken(user.id, token);
  }

  return user;
};

export default {
  isUsernameTaken,
  registerUser,
  validateUser,
  login,
};
