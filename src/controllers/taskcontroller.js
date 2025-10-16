import { Task } from "../models/task.model";

const addTasks = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title || !title.trim()) {
      res.status(400).json({ error: "Title is required" });
    }
    const newTask = new Task({ title: title.trim() });
    await newTask.save();
    res.json(200).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "server Error" });
  }
};

const getAllTask = async (req, res) => {
  try {
    const allTaks = await Task.find();
    res.status(200).json(allTaks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the tasks" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = req.params;
    const toBeRemoved = await Task.findByIdAndDelete(id);
    if (!toBeRemoved) {
      res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully", id });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export { addTasks, getAllTask, deleteTask };
