const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    testId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tests',
        required: [true, 'testid is required']
    },
    studentId: {
        type: String,
        required: [true, 'Answer is required']
    },
    studentName: {
        type: String,
        required: [true, 'Marks required']
    },
    totalNumberOfQuestion: {
        type: Number
    },
    totalNumberOfCorrectAnswer: {
        type: Number
    },
    totalPoints: {
        type: Number
    },
    obtainedPoints: {
        type: Number
    },
    obtainedPercentage: {
        type: Number
    },
    resultStatus: {
        type: Boolean
    }

}, { collection: 'results' });


module.exports = User = mongoose.model('results', resultSchema);