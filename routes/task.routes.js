import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { createTask, listTasks, listOneTask, updateTask, deleteTask } from "../controllers/task.controller.js";

const router = Router();

router.post("/", auth, createTask);
router.get("/", auth, listTasks);
router.get("/:id", auth, listOneTask);
router.put("/:id", auth, updateTask);
router.delete("/:id", auth, deleteTask);

export default router;