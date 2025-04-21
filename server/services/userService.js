import userMapper from "../mappers/userMapper.js";

const getUserByName = async (name) => {
  return await userMapper.getUserByName(name);
};

export default {
  getUserByName,
};
