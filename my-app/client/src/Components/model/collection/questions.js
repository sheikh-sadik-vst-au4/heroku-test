export default class Questions {
  constructor(arrayOfQuestions) {
    this.result = {};
    this.totalmarks = [];
    this.questions = arrayOfQuestions.map((question) => {
      this.totalmarks.push(question.marks);
      const questionId = question._id;
      this.result[questionId] = "";
      return { question: question };
    });
  }

  setResult(questionId, result) {
    this.result[questionId] = result;
  }

  getQuestions() {
    return this.questions;
  }

  getResult() {
    return this.result;
  }

  updateAnswerOf(index, answer) {
    this.result[index].answer = answer;
    return this.result;
  }

  getTotalMarks() {
    return this.totalmarks.reduce((acc, cur) => {
      acc = acc + cur;
      return acc;
    }, 0)
  }
}