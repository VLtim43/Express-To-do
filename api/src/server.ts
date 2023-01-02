//imports;
require('dotenv').config();
const express = require("express");
const cors = require("cors");

//express
const app = express();
app.use(express.json());
app.use(cors());

//mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch(console.error);


//app setup
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT} - http://localhost:${process.env.PORT}`))

//get todos from DB
const Todo = require("./models/Todo");
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();

  res.json(todos);
})

//create a new Todo
app.post("/todo/new", (req, res) => {
  const todo = new Todo({
    text: req.body.text
  })

  todo.save();
  res.json(todo);
})

//delete Todo
app.delete("/todo/delete/:id",async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id);
  res.json(result);
})

//















export {};

