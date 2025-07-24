const mongoose = require('mongoose');

const TaskSchema  = new mongoose.Schema({
    label:{
        type:String,
    },
    description:{
        type:String
    },
    status:{
        type:String,
        enum:["TO-DO" , "IN-PROGRESS" , "REVIEW" , "DONE"],
        default:"TO-DO"
    },
    tags:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tags'
    }],
    dueDate:{
        type: Date
    },
    priority:{
        type: String,
        enum:["LOW" , "MEDIUM" , "HIGH"],
        default:"LOW"
    },
    // createdBy:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Users'
    // },
    // assignedTo:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Users'
    // }],
} , {timestamps:true})

const TaskEntity = mongoose.model('Tasks' , TaskSchema)
module.exports = TaskEntity;