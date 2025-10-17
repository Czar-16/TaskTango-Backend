import express from "express";

import cors from "cors";
import taskRouter from "./routes/task.routes.js";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credentials: true,
  })
);

app.use(express.json({ limit: "60kb" }));

// routes
app.use("/api/tasks", taskRouter);
export { app };

// http://localhost:5000/api/tasks/
