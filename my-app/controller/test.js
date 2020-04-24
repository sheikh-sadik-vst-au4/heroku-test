const Test = require('../model/testSchema');
const User = require('../model/userSchema');
const test = {};
const moment = require('moment');

test.create = async (request, response) => {
    try {

        const { id, name, publish } = request.body

        let test = {
            name,
            publish,
            time: moment().format('MMMM Do YYYY, h:mm:ss a')
        }

        let testModel = new Test(test);
        let complete = {
            test: "",
            user: ""
        }
        await testModel.save()
            .then(data => {
                complete.test = { ...data }

                return User.findOneAndUpdate(
                    { _id: id },
                    { $push: { tests: data._id } },
                    { new: true }
                );

            }).then(data => {
                complete.user = { ...data }
                response.json(complete);
            }).catch(error => response.json(error));

    }
    catch (error) {
        response.json(error.message);
    }
}

test.readById = async (request, response) => {
    try {
        await Test.findOne({ _id: request.params.id })
            .populate("questions")
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

test.updateById = async (request, response) => {
    try {
        await Test.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
            .then(data => response.status(200).json(data))
            .catch(error => response.json(error))
    } catch (error) {
        response.json(error.message);
    }
}


test.deleteById = async (request, response) => {
    try {
        await Test.findOneAndDelete({ _id: request.params.id })
            .then(data => response.json(data))
            .catch(error => response.json(error))
    } catch (error) {
        response.json(error.message);
    }
}

module.exports = test;