import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
} from "../controllers/users.controller.js";

const usersRouter = Router();

usersRouter.get("/users", getUsers);

usersRouter.get("/users/:id", getUserById);

usersRouter.post("/users", createUser);

export default usersRouter;
