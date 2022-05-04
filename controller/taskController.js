const Task = require('../model/task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')
// class taskController{
//     getAllTasks(req, res, next){
//          Task.find({})
//          .then((tasks) => {
//             res.status(200).json({ tasks })
//          })
//          .catch((err) => {
//              res.status(err.status || 500).json({
//                  msg: "error"
//              })
//          })
//     }

//     getTask(req, res, next){
//         Task.findOne({_id : req.params.id})
//          .then((task) => {
//             res.status(200).json({ task })
//          })
//          .catch((err) => {
//             res.status(404).json({
//                 msg: `no task with id ${req.params.id}`
//             });
//          })
//     }

//     CreateTask(req, res, next){
//         const name = req.body.name;
//         const completed = req.body.completed;
//         Task.create({
//             name : name,
//             completed : completed
//         })
//         .then((task) => {
//             res.status(200).json({ task })
//         })
//         .catch(err => {
//             res.status(err.status || 500).json({
//                 msg: "error"
//             })
//         })
//     }

//     DeleteTask(req, res,next) {
//         Task.findOneAndDelete({_id:req.params.id})
//         .then((task)=>{
//             res.status(200).json({
//                 task : null,
//                 status : 'success'
//             })
//         })
//         .catch(err=>{
//             res.status(err.status || 500).json({
//                 msg: "error"
//             })
//         })
//     }

//     UpdateTask(req, res, next){
//         Task.findOneAndUpdate({_id:req.params.id},req.body,{
//             new: true,
//             runValidators: true
//         })
//             .then((task) => {
//                 res.status(200).json({ task })
//             })
//             .catch((err) => {
//                 res.status(err.status || 500).json({
//                     msg: "error"
//                 })
//             })
//     }
// }
const getAllTasks = asyncWrapper( async (req, res) => {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })   
})

const getTask = asyncWrapper( async (req, res, next) => {
        const task = await Task.findOne({_id : req.params.id})
        if(!task){
             return next(createCustomError(`no task with id ${req.params.id}`,404))
        }
        res.status(200).json({ task })
})

const CreateTask = asyncWrapper( async (req, res) => {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
})

const DeleteTask = asyncWrapper( async (req, res) => {
        const task = await Task.findOneAndDelete({_id : req.params.id})
        if(!task){
            return res.status(404).json({
                msg: `no task with id ${req.params.id}`
            });
        }
        res.status(200).json({ task })
})

const UpdateTask = asyncWrapper( async (req, res) => {
        const task = await Task.findOneAndUpdate({_id:req.params.id},req.body,{
            new: true,
            runValidators: true
        })
        if(!task){
            return res.status(404).json({
                msg: `no task with id ${req.params.id}`
            });
        }
        res.status(200).json({ task })
})




// module.exports = new taskController();
module.exports = {getAllTasks,getTask,UpdateTask,DeleteTask,CreateTask};