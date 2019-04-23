const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Todo Model
const Todo = require('../../models/Todo');

//Validation
const validateTodoInput = require('../../validation/todo');

//GET Todos
router.get('/', (req, res) => {
  Todo.find()
    .sort({ dateAdded: -1 })
    .then(todos => res.json(todos))
    .catch(err => res.status(404).json({ notodosfound: 'No todos found' }))
});

//POST create todo
router.post('/', (req, res) => {
  const { errors, isValid } = validateTodoInput(req.body);

  //Check validation
  if(!isValid){
    return res.status(400).json(errors);
  }

  const newTodo = new Todo({
    title: req.body.title,
    content: req.body.content
  });

  newTodo.save().then(todo => res.json(todo));
});

//DELETE todo
router.delete('/?id=:id', (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => {
      todo.remove().then(() => res.json({ success: true }));
    })
    .catch(err => res.status(404).json({ todonotfound: 'Todo item not found' }))
});


module.exports = router;
