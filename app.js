import express from "express";
import errorMiddleware from "./middleware/error.middleware.js";
import usersRouter from "./routes/users.routes.js";
import cardsRouter from "./routes/cards.routes.js";

const app = express();

app.use(errorMiddleware);

app.get("/users", usersRouter);
app.get("/cards", cardsRouter);
app.get("/users/8340d0ec33270a25f2413b69", usersRouter);

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});

export default app;
