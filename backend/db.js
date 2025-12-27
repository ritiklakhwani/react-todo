require("dotenv").config();
const mongoose = require('mongoose')
const connect = process.env.MONGO_URI;

mongoose.connect(connect)

const todoSchema = new mongoose.Schema({

})

const todo = mongoose.model("Todo", todoSchema)

module.exports = {
    todo
}