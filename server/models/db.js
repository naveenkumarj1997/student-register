const mongoose = require ('mongoose')

module.exports = mongoose.connect('mongodb://localhost:27017/todolist',{
    useUnifiedTopology: true,
    useNewUrlParser : true,
    // useFindAndModify: false,

}, err => {
    if(err) console.log(`Err In Db connection ${err}`)
    console.log('MongoDb connection succeeded...')
}
)