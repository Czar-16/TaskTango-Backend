import { Router } from "express";
import {
  addTasks,
  getAllTask,
  deleteTask,
  updateTask,
} from "../controllers/task.controller.js";

const router = Router();

router.route("/").get(getAllTask);
router.route("/").post(addTasks);
router.route("/:id").put(updateTask);
router.route("/:id").delete(deleteTask);

export default router;
