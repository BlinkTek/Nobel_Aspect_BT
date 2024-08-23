const User = require('../models/user.model');

const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const getAllUsers = async () => {
  return await User.find();
};

const findUserById = async (id) => {
  return await User.findById(id);
};

const updateUserById = async (id, userData) => {
  return await User.findByIdAndUpdate(id, userData, { new: true });
};

module.exports = {
  createUser,
  findUserByEmail,
  getAllUsers,
  findUserById,
  updateUserById
};
