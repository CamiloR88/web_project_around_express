import User from "../models/users.model.js";

export const createUser = async (req, res, next) => {
  try {
    const { name, about, avatar } = req.body;
    const newUser = await User.create([{ name, about, avatar }]);

    res.status(201).json({
      message: "Usuario creado con exito",
      data: newUser[0],
    });
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().orFail(() => {
      const error = new Error("No se encontraron usuarios");
      error.statusCode = 404;
      throw error;
    });
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params._id).orFail(() => {
      const error = new Error("No se encontró el usuario");
      error.statusCode = 404;
      throw error;
    });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
