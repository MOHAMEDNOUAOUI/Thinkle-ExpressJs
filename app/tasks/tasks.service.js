const Task = require('./tasks.model');

exports.createTask = async (taskDto) => {
    const task = new Task(taskDto)
    return await task.save();
}
exports.getAllTasks = async () => {
    return await Task.find().populate('tags')
}
exports.getTaskById = async(taskId) => {
    return await Task.findById(id).populate('tags')
}
exports.updateTask = async (newData) => {
    return await Task.findByIdAndUpdate(newData.id, newData, { new: true });
}
exports.deleteTask = async (id) => {
    return await Task.findByIdAndDelete(id);
}