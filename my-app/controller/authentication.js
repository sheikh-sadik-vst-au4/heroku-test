const User = require('../model/userSchema');
const jwt = require('jsonwebtoken');

const authentication = {};

authentication.signup = async (request, response) => {
    try {

        const { firstname, lastname, email, password } = request.body.user
        let user = {
            firstname, lastname, email, password
        }
        let userModel = new User(user);
        let existEmail = [];
        await User.find({}, (error, data) => { data.map((item) => { existEmail.push(item.email) }) });

        if (existEmail.indexOf(email) === -1) {

            await userModel.save();

            response.json({
                status: true,
                message: "Congratulations! You can login now",
                data: userModel
            });
        }
        else {
            response.json({
                status: false,
                message: "Email id already exist!!"
            });
        }

    } catch (error) {
        response.json(error.message);
    }
}

authentication.login = async (request, response) => {
    try {

        const { emailaddress, password } = request.body.user;
        await User.findOne({ email: emailaddress }, (error, data) => {

            if (error) {
                response.json({
                    status: 400,
                    message: error
                })
            }

            if (!data) {
                response.json({
                    status: 401,
                    message: "This email doesn't exist"
                })
            }
            else if (password === data.password) {
                response.json({
                    status: 200,
                    message: "You are logged in now",
                    token: jwt.sign({ foo: data.email }, 'shhhhh'),
                    data: data
                })
            }
            else {
                response.json({
                    status: 401,
                    message: "Incorrect Password, Try again"
                })
            }
        });

    } catch (error) {
        response.json(error.message);
    }
}


module.exports = authentication;