import User from "../models/users.model.js";

export const createUser = async (req, res, next) => {
  try {
    const { name, about, avatar } = req.body;
    const user = await User.create({ name, about, avatar });
    res.status(201).json({ data: user });
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params._id);
    if (!user) {
      const error = new Error("No se encontró el usuario");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};
