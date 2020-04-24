const Result = require('../model/resultSchema');
const resultModel = require('../model/ResultModel');
const result = {}

result.create = async (request, response) => {

    try {
        let userResponseForTest = [];
        let testFullResponse = { ...request.body }
        let testID = testFullResponse.testId;
        let studentID = testFullResponse.userId;
        let studentName = testFullResponse.username;
        testFullResponse.testResponse.map(item => {
            userResponseForTest.push(item)
        });

        const { getTestFromDB, totalPoints } = await resultModel.getTestData(testID);
        const { totalQuestionNumber,
            totalNoCorrectAnswer,
            obtainedPoints,
            obtainPercentage,
            resultStatus } = resultModel.calculateResult(getTestFromDB, userResponseForTest, totalPoints);

        const userResult = {
            testId: testID,
            studentId: studentID,
            studentName: studentName,
            totalNumberOfQuestion: totalQuestionNumber,
            totalNumberOfCorrectAnswer: totalNoCorrectAnswer,
            totalPoints: totalPoints,
            obtainedPoints: obtainedPoints,
            obtainedPercentage: obtainPercentage,
            resultStatus: resultStatus
        }
        const result = new Result(userResult);
        result.save()
            .then(data => {
                response.json({ "response": data });

            })
            .catch(error => {
                response.json({ "error": error.message });
            })

    } catch (error) {
        response.json({ "error": error.message })
    }
}

result.read = async (request, response) => {
    Result.find({ testId: request.params.id }).populate("tests").then(data => {
        response.json(data)
    }).catch(error => {
        response.json({ error: error.message })
    })
}

module.exports = result;