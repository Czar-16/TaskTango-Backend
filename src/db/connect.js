import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Connection Failed ", error.message);
    process.exit(1); // Stop everything — DB connection failed, don’t continue running the server
  }
};

export default connectDB;
