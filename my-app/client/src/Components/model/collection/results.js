export default class Results{
    constructor(arrayOfResult){
        this.result = arrayOfResult.map((result)=>{
            return result.tests;
        });
    }

    getResults(){
        return this.result;
    }
}