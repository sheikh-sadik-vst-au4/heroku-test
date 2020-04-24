export default class  Test{
    constructor(attributes) {
        this.name=attributes.name;
        this.time=attributes.time;
        this.id=attributes._id;
        this.publish=attributes.publish;
    }

    getName(){
        return this.name;
    }
    getTime(){
        return this.time;
    }
    getId(){
        return this.id;
    }
    getPublish(){
        return this.publish;
    }
}