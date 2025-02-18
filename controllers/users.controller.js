import fs from "node:fs";

export const getUsers = async (req, res, next) => {
  try {
    fs.readFile("./data/users.json", { encoding: "utf-8" }, (err, data) => {
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

export const getUserById = async (req, res, next) => {
  try {
    fs.readFile("./data/users.json", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        res.status(500).send({ message: "Internal Server Error" });
      } else {
        const users = JSON.parse(data);
        const user = users.find((user) => user.id === req.params.id);
        if (!user) {
          res.status(404).send({ message: "User not found" });
        } else {
          res.send(user);
        }
      }
    });
  } catch (error) {
    next(error);
  }
};
