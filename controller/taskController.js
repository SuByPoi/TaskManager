const Task = require('../model/task')
class taskController{
    getAllTasks(req, res, next){
         Task.find({})
         .then((tasks) => {
            res.status(200).json({ tasks })
         })
         .catch((err) => {
             res.status(err.status || 500).json({
                 msg: "error"
             })
         })
    }
    getTask(req, res, next){
        Task.findOne({_id : req.params.id})
         .then((task) => {
            res.status(200).json({ task })
         })
         .catch((err) => {
            res.status(404).json({
                msg: `no task with id ${req.params.id}`
            });
         })
    }
    CreateTask(req, res, next){
        const name = req.body.name;
        const completed = req.body.completed;
        Task.create({
            name : name,
            completed : completed
        })
        .then((task) => {
            res.status(200).json({ task })
        })
        .catch(err => {
            res.status(err.status || 500).json({
                msg: "error"
            })
        })
    }
    DeleteTask(req, res,next) {
        Task.findOneAndDelete({_id:req.params.id})
        .then((task)=>{
            res.status(200).json({
                task : null,
                status : 'success'
            })
        })
        .catch(err=>{
            res.status(err.status || 500).json({
                msg: "error"
            })
        })
    }
    UpdateTask(req, res, next){
        Task.findOneAndUpdate({_id:req.params.id},req.body,{
            new: true,
            runValidators: true
        })
            .then((task) => {
                res.status(200).json({ task })
            })
            .catch((err) => {
                res.status(err.status || 500).json({
                    msg: "error"
                })
            })
    }
}

module.exports = new taskController();