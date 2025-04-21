import User from "../models/userModel.js";

const getUserByName = async (name) => {
  try {
    const user = await User.findOne({ name });
    return user;
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
};

export default {
  getUserByName,
};
