const express = require("express");
const { createTodo, updateTodo } = require("./zod");
const app = express();

app.use(express.json());

app.post("/todo", async (req, res) => {
  const parsed = createTodo.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      success: "false",
      msg: "invalid input schema!",
    });
  }

  const data = parsed.data;

  //add in mongo
});

app.get("/todos", (req, res) => {});

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
