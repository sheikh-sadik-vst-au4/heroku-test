export default class Tests {
    constructor(arrayOfTests) {
      this.tests = [];
      if (arrayOfTests) {
        for (let index = 0; index < arrayOfTests.length; index += 1) {
          this.tests.push(arrayOfTests[index]);
        }
      }
    }
  
    getTests() {
      return this.tests;
    }

    updateTestStatusOf(index){
      this.tests[index].publish = !this.tests[index].publish;
      return this.tests;
    }

  }