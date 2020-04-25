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
        questionModel.save()
            .then((data) => {
                return Test.findOneAndUpdate(
                    { _id: testId },
                    { $push: { questions: data._id } },
                    { new: true }

                );
            })
            .then(data => response.json(data))
            .catch(error => response.json({ "error": error.message }));
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

question.readById = async (request, response) => {
    try {
        await Question.findById(request.params.id)
            .then(data => response.json(data))
            .catch(error => response.json(error))
    } catch (error) {
        response.json(error.message);
    }
}

module.exports = question;