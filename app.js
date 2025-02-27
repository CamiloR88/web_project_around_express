import express from "express";

import { PORT } from "./config/env.js";

import connectToMongoDB from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";
import usersRouter from "./routes/users.routes.js";
import cardsRouter from "./routes/cards.routes.js";

const app = express();

app.use(errorMiddleware);

app.get("/users", usersRouter);
app.get("/cards", cardsRouter);
app.get("/users/:_id", usersRouter);

app.listen(PORT, async () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  await connectToMongoDB();
});

export default app;
