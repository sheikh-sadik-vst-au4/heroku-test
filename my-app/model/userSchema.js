const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Firstname is required']
    },
    lastname: {
        type: String,
        required: [true, 'Lastname is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique:[true,`Email must be unique`]
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    tests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tests'
    }]
}, { collection: 'users' });


module.exports = User = mongoose.model('users', userSchema);