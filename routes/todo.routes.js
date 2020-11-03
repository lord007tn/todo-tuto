const router = require('express').Router()
const todoControllers = require('../controllers/todo.controllers')

router.get("/", todoControllers.getTodos)
router.get('/:todoID', todoControllers.getTodoByID)
router.post("/create", todoControllers.createTodo)

module.exports = router