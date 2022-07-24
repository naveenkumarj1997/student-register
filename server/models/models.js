const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    firstname : String,
    isComplete : Boolean,
    name: String,
    mail: String,
    birth: String,
    edu: String,
    loc: String,
    ab: String
})

const Task = mongoose.model('task',TaskSchema)

module.exports =Task