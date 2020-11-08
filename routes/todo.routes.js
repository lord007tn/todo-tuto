const router = require('express').Router()
const todoControllers = require('../controllers/todo.controllers')
const verifyToken = require('../utils/verifyToken')
//router.get('/:todoTitle',todoControllers.getTodoByTitle)
router.get("/",  todoControllers.getTodos);
router.get('/:todoID', todoControllers.getTodoByID)
router.post("/create", verifyToken, todoControllers.createTodo);
router.delete("/:todoID/delete", verifyToken, todoControllers.deleteTodo);
router.put("/:todoID/update", verifyToken, todoControllers.updateTodo);
module.exports = router