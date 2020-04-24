const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    success:{
        type:Boolean,
        required: [true, 'success is required']
    }
}, { collection: 'students' });


module.exports = User = mongoose.model('students',studentSchema);