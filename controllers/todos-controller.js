const { Todo, Status } = require('./../models/index');

const include = [
    {
        model: Status,
        attributes: ['name']
    }
]

class TodosController {

    static async findAll(req, res, next) {
        try {
            const todos = await Todo.findAll({ include, where: { user_id: req.user.id } });
            res.status(200).json(todos);
        } catch (error) {
            next(error)
        }
    }

    static async findById(req, res, next) {
        const { id } = req.params;
        try {
            // const todo = await Todo.findByPk(id, { include });
            const todo = await Todo.findOne({ include, where: { id, user_id: req.user.id } });
            if (!todo) throw { name: 'NotFound' };
            res.status(200).json(todo);
        } catch (error) {
            next(error);
        }
    }

    static async addTodo(req, res, next) {
        const { title, description } = req.body;
        try {
            const result = await Todo.create({ title, description, user_id: req.user.id, status_id: 3 });
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }
    
    static async deleteTodo(req, res, next) {
        const { id } = req.params;
        try {
            const result = await Todo.destroy({ where: { id } });
            if (!result) throw { name: 'NotFound' };
            res.status(200).json({ message: 'todo has been successfully deleted' });
        } catch (error) {
            next(error);
        }
    }

    static async updateTodo(req, res, next) {
        const { id } = req.params;
        const { title, description } = req.body;
        try {
            const result = await Todo.update({ title, description }, { where: { id }, returning: true });
            if (!result[0]) throw { name: 'NotFound' };
            res.status(200).json(result[1][0]);
        } catch (error) {
            next(error);
        }
    }
    
    static async setStatus(req, res, next) {
        const { id } = req.params;
        const { status_id } = req.body;
        try {
            const result = await Todo.update({ status_id }, { where: { id }, returning: true });
            if (!result[0]) throw { name: 'NotFound' };
            res.status(200).json(result[1][0]);
        } catch (error) {
            next(error);
        }
    }

}

module.exports = TodosController