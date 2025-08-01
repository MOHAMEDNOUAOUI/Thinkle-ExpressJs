const tasksService = require('./tasks.service')
const GlobalResposne = require('../../utils/GlobalResponse')
const {validateTaskInput , taskCreateDto} = require('./dtos/tasksCreateDto');
const { plainToClass, plainToInstance } = require('class-transformer');

exports.createTask = async (req , res) => {
        try{
            const Task = plainToInstance(taskCreateDto , req.body);
            const {isValid , errors} = validateTaskInput(Task)
            if(!isValid){
                return res.status(400).json({
                    success: false,
                message: "Validation failed",
                errors
                })
            }
            const createdTask = await tasksService.createTask(Task);
            return GlobalResposne.createdResponse(res, createdTask, "Task created successfully");
        }catch(err){
            return GlobalResposne.errorResponse(res, err, "Failed to create task");
        }
}

exports.getAllTasks = async (req ,res) => {
    try{
        const tasks = await tasksService.getAllTasks();
        return GlobalResposne.successResponse(res, tasks, "Tasks retrieved successfully");
    }catch(err){
        return GlobalResposne.errorResponse(res, err, "Failed to retrieve tasks");
    }
}

exports.getTaskById = async (req , res) => {
    try{
        const taskId = req.params.id;
        const task = tasksService.getTaskById(taskId)
        return GlobalResposne.successResponse(res , task , "Task retrieved successfully")
    }catch(err) {
        return GlobalResposne.errorResponse(res , err , "No Such Task Found")
    }
}

exports.deletedTask = async (req , res) => {
    try{
        const taskId = req.params.id;
        tasksService.deleteTask(taskId)
        return GlobalResposne.successResponse(res, null, "Task deleted successfully");
    }catch(err) {
        return GlobalResposne.errorResponse(res, err, "Failed to delete task");
    }
}

exports.updateTask  = async (req , res) => {
    try{
        const requestTask = req.body
        const UpdatedTask = tasksService.updateTask(requestTask)
        return GlobalResposne.successResponse(res , UpdatedTask , "Task updated successfully");
    }catch(err) {
        return GlobalResposne.errorResponse(res , err  , "Failed to update task");
    }
}