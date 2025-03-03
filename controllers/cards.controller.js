import e from "express";
import Card from "../models/cards.model.js";

export const getCards = async (req, res, next) => {
  try {
    const cards = await Card.find();
    res.status(200).send(cards);
  } catch (error) {
    next(error);
  }
};

export const createCard = async (req, res, next) => {
  try {
    const { name, link } = req.body;
    const owner = req.user._id;
    const card = await Card.create({ name, link, owner });
    res.status(201).send(card);
  } catch (error) {
    next(error);
  }
};
export const deleteCard = async (req, res, next) => {
  try {
    const card = await Card.findById(req.params._id);
    if (!card) {
      const error = new Error("No se encontró la tarjeta");
      error.statusCode = 404;
      throw error;
    }
    if (card.owner.toString() !== req.user._id) {
      const error = new Error("No tienes permiso para eliminar esta tarjeta");
      error.statusCode = 403;
      throw error;
    }
    await Card.findByIdAndDelete(req.params._id);
    res.status(200).send({ message: "Tarjeta se borro con exito" });
  } catch (error) {
    next(error);
  }
};

export const likeCard = async (req, res, next) => {
  try {
    const card = await Card.findByIdAndUpdate(req.params._id, {
      $addToSet: { likes: req.user._id },
    });

    if (card.likes.includes(req.user._id)) {
      const error = new Error("Ya le has dado like a esta tarjeta");
      error.statusCode = 400;
      throw error;
    }
    card.likes.push(req.user._id);
    await card.save();
    res.status(200).send(card);
  } catch (error) {
    next(error);
  }
};

export const dislikeCard = async (req, res, next) => {
  try {
    const card = await Card.findByIdAndUpdate(req.params._id, {
      $pull: { likes: req.user._id },
    });

    if (!card.likes.includes(req.user._id)) {
      const error = new Error("No le has dado like a esta tarjeta");
      error.statusCode = 400;
      throw error;
    }
    await card.save();
    res.status(200).send(card);
  } catch (error) {
    next(error);
  }
};
