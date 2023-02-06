const taskModel = require("../models/taskModel");

//create task
const createTask = async (req, res) => {
  try {
    const task = await taskModel.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get a single task
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await taskModel.findById(id);
    if (!task) {
      return res.status(404).json(`No task with id :${id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete a task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await taskModel.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json(`No task with id :${id}`);
    }
    res.status(200).send("task deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update a task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await taskModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json(`No task with id :${id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTask, getTasks, getTask, deleteTask, updateTask };
