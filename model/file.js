const mongoose = require('mongoose')
const fileScema = new mongoose.Schema({
    file_id: String,
    file_name: String,
    booktype: String,
})

module.exports = mongoose.model('File', fileScema)