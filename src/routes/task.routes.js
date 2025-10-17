import { Router } from "express";
import {
  addTasks,
  getAllTask,
  deleteTask,
} from "../controllers/task.controller.js";

const router = Router();

router.route("/").get(getAllTask);
router.route("/").post(addTasks);
router.route("/:id").delete(deleteTask);

export default router;
