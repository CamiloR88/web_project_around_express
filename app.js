import express from "express";

import { PORT } from "./config/env.js";

import connectToMongoDB from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";
import usersRouter from "./routes/users.routes.js";
import cardsRouter from "./routes/cards.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.user = {
    _id: "67c4c6b31407204901c29009", // pega el _id del usuario de prueba que creamos en el paso anterior
  };

  next();
});

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);

app.listen(PORT, async () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  await connectToMongoDB();
});
app.use(errorMiddleware);

export default app;
