const express = require("express");
const { createTodo, updateTodo } = require("./zod");
const { todo } = require("./db");
const app = express();

app.use(express.json());

app.post("/todo", async (req, res) => {
  const parsed = createTodo.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      msg: "invalid input schema!",
    });
  }

  const data = parsed.data;

  const Todo = await todo.create({
    title: data.title,
    description: data.description,
    completed: data.completed
  })

  res.status(200).json({
    success: true,
    msg: "todo added!"
  })
});

app.get("/todos", async(req, res) => {
    const todos = await todo.find({});
    if(!todos){
        return res.status(400).json({
            success: false,
            msg: "todos not found!"
        })
    }

    res.status(201).json({
        success: true,
        todos: todos
    })
});

app.put("/completed", (req, res) => {
  const parsed = updateTodo.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      success: "false",
      msg: "invalid input schema!",
    });
  }

  const data = parsed.data;

  //add in mongo
});
