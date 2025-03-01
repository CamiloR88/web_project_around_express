import { Router } from "express";
import {
  getCards,
  createCard,
  deleteCard,
} from "../controllers/cards.controller.js";

const cardsRouter = Router();

cardsRouter.get("/cards", getCards);
cardsRouter.post("/cards", createCard);
cardsRouter.delete("/cards/:cardId", deleteCard);

export default cardsRouter;
