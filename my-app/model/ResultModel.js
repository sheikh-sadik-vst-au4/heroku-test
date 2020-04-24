const Test = require('../model/testSchema');
const resultModel = {};


resultModel.getTestData = async (testID) => {
    try {
        let totalPoints;
        let getTestFromDB = [];
        await Test.findById(testID).populate("questions")
            .then(response => {
                totalPoints = response.totalmarks;
                response.questions.map((item) => {
                    getTestFromDB.push({ _id: item._id, answer: item.answer, marks: item.marks })
                })
            })
            .catch(error => console.log(error))

        return {
            totalPoints,
            getTestFromDB
        }
    } catch (error) {
        console.log(error);
    }
}

resultModel.calculateResult = (getTestFromDB, userResponseForTest, totalPoints) => {
    let dbData = getTestFromDB.map(item => JSON.stringify(item));
    let userData = userResponseForTest.map(item => JSON.stringify(item));
    let totalQuestionNumber = dbData.length;
    let totalNoCorrectAnswer = null;
    let answer = [];
    let total = [];
    let data, resultStatus, obtainedPoints, obtainPercentage;

    for (let i = 0; i < dbData.length; i++) {
        if (dbData.indexOf(userData[i]) !== -1) {
            data = JSON.parse(dbData[i])
            answer.push(data);
        }
    }

    answer.map(item => {
        return total.push(item.marks);
    })

    obtainedPoints = total.reduce((acc, curr) => {
        return acc = acc + curr;
    }, 0)

    obtainPercentage = parseInt(obtainedPoints) * 100 / parseInt(totalPoints);

    if (obtainPercentage >= 40) {
        resultStatus = true;
    }
    else {
        resultStatus = false;
    }

    return {
        totalQuestionNumber,
        totalNoCorrectAnswer: answer.length,
        obtainedPoints,
        obtainPercentage,
        resultStatus
    };
}

module.exports = resultModel