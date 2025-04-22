import User from "../models/userModel.js";

const findUserByUsername = async (username) => {
  return await User.findOne({ username });
};

const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

const updateUserToken = async (userId, token) => {
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { token },
    { new: true }
  );
  return updatedUser;
};

export default {
  findUserByUsername,
  createUser,
  updateUserToken,
};
