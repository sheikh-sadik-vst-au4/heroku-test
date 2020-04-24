const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, 'question is required']
    },
    options: {
        type: Object,
        required: [true, 'option is required']
    },
    answer: {
        type: String,
        required: [true, 'Answer is required']
    },
    marks: {
        type: Number,
        required: [true, 'Marks required']
    }
}, { collection: 'questions' });


module.exports = User = mongoose.model('questions',questionSchema);