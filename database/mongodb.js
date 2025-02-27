import mongoose from "mongoose";
import { MONGO_URI } from "../config/env.js";

if (!MONGO_URI) {
  throw new Error("MongoDB URI is not defined");
}
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
export default connectToMongoDB;
