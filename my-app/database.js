const mongoose = require("mongoose");
const uri = `mongodb+srv://admin:admin@test-generator-bgj8j.mongodb.net/test-generator?retryWrites=true&w=majority`;

const connect = async () => {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(() => console.log(`database connected...!`))
        .catch(err => console.error("Connection error", err));;
};

module.exports = connect;
