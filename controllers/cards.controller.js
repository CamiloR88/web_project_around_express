import Card from "../models/cards.model.js";

export const getCards = async (req, res, next) => {
  try {
    const cards = await Card.find();
    res.status(200).send(cards);
  } catch (error) {
    next(error);
  }
};
