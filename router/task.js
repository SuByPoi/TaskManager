const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');


router.get('/api/v1/tasks',taskController.getAllTasks);
router.get('/api/v1/tasks/:id',taskController.getTask);
router.post('/api/v1/tasks',taskController.CreateTask);
router.patch('/api/v1/tasks/:id',taskController.UpdateTask);
router.delete('/api/v1/tasks/:id',taskController.DeleteTask);

module.exports = router;