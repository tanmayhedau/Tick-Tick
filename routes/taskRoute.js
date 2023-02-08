const express = require("express");
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");
const cors = require("cors");

const router = express.Router();

// router.route("/").get(getTasks).post(createTask);
// router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);

router.post("/", cors(), createTask);
router.get("/", cors(), getTasks);
router.get("/:id", cors(), getTask);
router.delete("/:id", cors(), deleteTask);
router.put("/:id", cors(), updateTask);

module.exports = router;
