const Student = require('../model/studentSchema');
const student = {};

student.create = async (request, response) => {
    try {
        let studentModel = new Student(request.body);
        studentModel.save()
            .then(data => {
                response.json(data)
            })
            .catch(error => response.json(error))
    }
    catch (error) {
        response.json(error.message);
    }
}

student.readById = async (request, response) => {
    try {
        await Student.findOne({ _id: request.params.id })
        .then((data) => {
            response.json(data);
        })
        .catch((err) => {
            response.json(err);
        });

    }
    catch (error) {
        response.json(error.message);
    }
}

student.updateById = async (request, response) => {
    try {
    } catch (error) {
        response.json(error.message);
    }
}

student.deleteById = async (request, response) => {
    try {
    } catch (error) {
        response.json(error.message);
    }
}

module.exports = student;