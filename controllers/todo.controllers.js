const Todo = require("../models/todo.models")

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find()
        return res.status(200).json(todos)
    } catch (err) {
        return res.status(500).json(err)
    }
}

module.exports.getTodos = getTodos