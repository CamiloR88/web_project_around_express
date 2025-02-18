import { Router } from "express";
import { getUsers, getUserById } from "../controllers/users.controller.js";

const usersRouter = Router();

usersRouter.get("/users", getUsers);

usersRouter.get("/users/8340d0ec33270a25f2413b69", getUserById);

export default usersRouter;
