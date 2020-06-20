const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    studName:  String,
    studFamily: String
},{
    collection: 'emil'
});

module.exports = mongoose.model('Student', studentSchema);