const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const router = require("./routes/taskRoute");

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000", "https://tick-tick-app.onrender.com"],
  })
);
app.use("/api/tasks", router);

//routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
