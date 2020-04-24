const User = require('../model/userSchema');

const user = {};

user.readById = async (request, response) => {

    try {
        await User.findOne({ _id: request.params.id })
            .populate("tests")
            .then((data) => {
                response.json(data);
            })
            .catch((err) => {
                response.json(err);
            });

    } catch (error) {
        response.json(error.message)
    }
}

user.updateById = async (request, response) => {
    try {
        await User.findOneAndUpdate({ _id: request.params.id }, request.body.user, { new: true })
            .then(data => response.json(data))
            .catch(error => response.json(error));
    } catch (error) {
        response.json(error.message);
    }
}


module.exports = user;