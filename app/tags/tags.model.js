const mongoose = require('mongoose');

const TagsSchema = new mongoose.Schema({
    label:{
        type: String,
    },
    description:{
        type: String
    },
} , {timestamps:true})

const TagsEntity = mongoose.model('Tags' , TagsSchema)
module.exports = TagsEntity;