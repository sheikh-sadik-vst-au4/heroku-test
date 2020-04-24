const Question = require('../model/questionSchema');
const Test = require('../model/testSchema');
const question = {};

question.create = async (request, response) => {
    try {
        const { question, options, answer, marks, testId } = request.body
        let questions = {
            question,
            options,
            answer,
            marks
        }
        let testObjCopy;
        let questionModel = new Question(questions);
        Test.findById(testId).then((data) => {
            testObjCopy = JSON.stringify(data);
            questionModel.save()
                .then((data) => {
                    let data2 = JSON.parse(testObjCopy);
                    let intialValue = data2.totalmarks;
                    let data3 = JSON.stringify(data)
                    let data4 = JSON.parse(data3);
                    let currentMark = data4.marks;
                    let total = intialValue + currentMark;
                    return Test.findOneAndUpdate(
                        { _id: testId },
                        { $push: { questions: data._id }, $set: { totalmarks: total } },
                        { new: true }

                    );
                }).then(data => response.json(data)).catch(error => response.json(error));
        })

    }
    catch (error) {
        response.json(error.message);
    }
}


question.updateById = async (request, response) => {
    try {
        await Question.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
            .then(data => response.json(data))
            .catch(error => response.json(error));
    } catch (error) {
        response.json(error.message);
    }
}


question.deleteById = async (request, response) => {
    try {
        await Question.findOneAndDelete({ _id: request.params.id })
            .then(data => response.json(data))
            .catch(error => response.json(error))
    } catch (error) {
        response.json(error.message);
    }
}


module.exports = question;