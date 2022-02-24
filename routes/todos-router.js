const router = require('express').Router();
const TodosController = require('./../controllers/todos-controller');
const pemilikTodoAuthorizationMiddleware = require('./../middlewares/pemiliktodo-authorization');

// GET /todos
router.get('/', TodosController.findAll);

// GET /todos/:id
router.get('/:id', TodosController.findById);

// POST /todos
router.post('/', TodosController.addTodo);

// DELETE /todos/:id
router.delete('/:id', pemilikTodoAuthorizationMiddleware, TodosController.deleteTodo);

// PUT /todos/:id
router.put('/:id', pemilikTodoAuthorizationMiddleware, TodosController.updateTodo);

// PATCH /todos/:id
router.patch('/:id', pemilikTodoAuthorizationMiddleware, TodosController.setStatus);

module.exports = router;
