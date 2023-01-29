const mongoose = require('mongoose');
const userSchema =  new mongoose.Schema({
    id: {type: Number, required: true},
    username: String, 
    name: String, 
    fam: String, 
    phone: String
})

module.exports = mongoose.model('User', userSchema);