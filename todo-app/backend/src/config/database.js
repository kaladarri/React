const mongoose = require('mongoose')
mongoose.Promise = global.Promise // utilizando api do Node ao invés do Mongoose

module.exports = mongoose.connect('mongodb://localhost/todo')