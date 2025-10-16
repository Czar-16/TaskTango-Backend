import connectDB from "./db/connect.js";
import dotenv from "dotenv";

import { app } from "./app.js";
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is running at ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGO DB Connection failed!!! ", error);
  });
