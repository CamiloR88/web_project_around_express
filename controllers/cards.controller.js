import fs from "node:fs";

export const getCards = async (req, res, next) => {
  try {
    fs.readFile("./data/cards.json", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        res.status(500).send({ message: "Internal Server Error" });
      } else {
        res.send(JSON.parse(data));
      }
    });
  } catch (error) {
    next(error);
  }
};
