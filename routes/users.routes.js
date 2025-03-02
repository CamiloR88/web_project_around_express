import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
} from "../controllers/users.controller.js";

const usersRouter = Router();

usersRouter.get("/", getUsers);

usersRouter.get("/:id", getUserById);

usersRouter.post("/sign-up", createUser);

export default usersRouter;
