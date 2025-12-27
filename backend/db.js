require("dotenv").config();
const mongoose = require("mongoose");
const { boolean } = require("zod");
const connect = process.env.MONGO_URI;

mongoose.connect(connect);

const todoSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  completed: { type: Boolean },
});

const todo = mongoose.model("Todo", todoSchema);

module.exports = {
  todo,
};
