const Todo = require("../models/todo.models")

// get data from data base
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find()
        return res.status(200).json(todos)
    } catch (err) {
        return res.status(500).json(err)
    }
}

// get only one todo by id 

const getTodoByID = async (req, res) => {
    const id = req.params.todoID
    try {
        const todo = await Todo.findById(id)
        return res.status(200).json(todo)
    } catch (err) {
        return res.status(500).json(err);
    }
}
// get toto by title
const getTodoByTitle = async (req, res) => {
    const title = req.params.todoTitle 
    try {
        const todo = await Todo.findOne({title: title})
        return res.status(200).json(todo)
    } catch (err) {
        return res.status(500).json(err);
    }
        
    }
// create todo in the data base
const createTodo = async (req, res) => {
    
    const newTodo = new Todo({
        title: req.body.title,
        content: req.body.content
    })
    try {
        const createdTodo = await newTodo.save()
        return res.status(200).json(createdTodo)
    } catch (err) {
        return res.status(500).json(err)
    }
}
module.exports.getTodoByID = getTodoByID
module.exports.getTodos = getTodos
module.exports.createTodo = createTodo
module.exports.getTodoByTitle = getTodoByTitle