import { Router } from "express";
import { getCards } from "../controllers/cards.controller.js";

const cardsRouter = Router();

cardsRouter.get("/cards", getCards);

export default cardsRouter;
