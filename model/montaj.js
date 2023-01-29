const mongoose= require('mongoose')
const montajschema = new mongoose.Schema({
    videotype:String,
    description: String,
    url: String, 
})

module.exports = mongoose.model('Montaj', montajschema);