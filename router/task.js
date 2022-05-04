const express = require('express');
const router = express.Router();
// const taskController = require('../controller/taskController');
const {getAllTasks,getTask,UpdateTask,DeleteTask,CreateTask} = require('../controller/taskController');


router.get('/api/v1/tasks',getAllTasks);
router.get('/api/v1/tasks/:id',getTask);
router.post('/api/v1/tasks',CreateTask);
router.patch('/api/v1/tasks/:id',UpdateTask);
router.delete('/api/v1/tasks/:id',DeleteTask);
// router.get('/api/v1/tasks',taskController.getAllTasks);
// router.get('/api/v1/tasks/:id',taskController.getTask);
// router.post('/api/v1/tasks',taskController.CreateTask);
// router.patch('/api/v1/tasks/:id',taskController.UpdateTask);
// router.delete('/api/v1/tasks/:id',taskController.DeleteTask);

module.exports = router;