const mongoose= require('mongoose')
const videoschema = new mongoose.Schema({
    videotype:String,
    description: String,
    url: String, 
})

module.exports = mongoose.model('Video', videoschema);