import mongoose from "mongoose";
import { MONGO_URI } from "../config/env.js";

if (!MONGO_URI) {
  throw new Error("MongoDB URI no esta definida");
}
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
export default connectToMongoDB;
